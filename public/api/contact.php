<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    $data = $_POST;
}

// Bot trap: reject automated bots filling hidden field
if (!empty($data['website'])) {
    echo json_encode(["success" => true, "message" => "Request processed."]);
    exit;
}

$fullName = trim($data['fullName'] ?? $data['name'] ?? '');
$email    = trim($data['email'] ?? '');
$phone    = trim($data['phone'] ?? '');
$company  = trim($data['company'] ?? '');
$service  = trim($data['service'] ?? 'General Consultation');
$message  = trim($data['message'] ?? '');
$context  = trim($data['context'] ?? '');

if (empty($fullName) || empty($email)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Full name and business email are required."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide a valid email address."]);
    exit;
}

// Load config
$config = file_exists(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];

$toEmail      = $config['to_email'] ?? 'loditechc@gmail.com';
$toName       = $config['to_name'] ?? 'LoDi Tech Consulting Admin';
$smtpHost     = $config['smtp_host'] ?? 'smtpout.secureserver.net';
$smtpPort     = $config['smtp_port'] ?? 465;
$smtpSecure   = $config['smtp_secure'] ?? 'ssl';
$smtpAuth     = $config['smtp_auth'] ?? true;
$smtpUsername = $config['smtp_username'] ?? 'loditechc@gmail.com';
$smtpPassword = $config['smtp_password'] ?? '';
$fromEmail    = $config['from_email'] ?? 'loditechc@gmail.com';
$fromName     = $config['from_name'] ?? 'LoDi Tech Consulting Website';

$subject = "LoDi Tech Consulting: New Consultation Request from " . $fullName;

// Build HTML email body
$safeName    = htmlspecialchars($fullName);
$safeEmail   = htmlspecialchars($email);
$safePhone   = htmlspecialchars($phone ?: 'Not provided');
$safeCompany = htmlspecialchars($company ?: 'Not provided');
$safeService = htmlspecialchars($service);
$safeMessage = nl2br(htmlspecialchars($message ?: 'None provided'));
$safeContext = htmlspecialchars($context ?: 'General enquiry');
$timestamp   = date('Y-m-d H:i:s T');

$bodyHtml = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>{$subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0b1a30; margin: 0; padding: 20px; background-color: #f8fafc; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #3F6EB6; color: #ffffff; padding: 24px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th { text-align: left; padding: 10px 12px; background: #f1f5f9; font-size: 12px; text-transform: uppercase; color: #475569; width: 32%; border-bottom: 1px solid #e2e8f0; }
    td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #e2e8f0; color: #0b1a30; }
    .msg-box { margin-top: 20px; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; line-height: 1.6; }
    .footer { padding: 16px 24px; background: #f8fafc; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Consultation Request</h1>
      <p>Submitted via LoDi Tech Consulting website</p>
    </div>
    <div class="content">
      <table>
        <tr><th>Full Name</th><td><strong>{$safeName}</strong></td></tr>
        <tr><th>Business Email</th><td><a href="mailto:{$safeEmail}">{$safeEmail}</a></td></tr>
        <tr><th>Phone Number</th><td>{$safePhone}</td></tr>
        <tr><th>Company / Org</th><td>{$safeCompany}</td></tr>
        <tr><th>Service of Interest</th><td>{$safeService}</td></tr>
        <tr><th>Source Context</th><td>{$safeContext}</td></tr>
        <tr><th>Received At</th><td>{$timestamp}</td></tr>
      </table>

      <h3 style="margin: 24px 0 8px; font-size: 14px; text-transform: uppercase; color: #475569;">Project Outline / Message:</h3>
      <div class="msg-box">{$safeMessage}</div>
    </div>
    <div class="footer">
      LoDi Tech Consulting Private Limited &bull; Confidential Lead Notification
    </div>
  </div>
</body>
</html>
HTML;

$bodyText = "New Consultation Request - LoDi Tech Consulting\n\n"
          . "Full Name: {$fullName}\n"
          . "Email: {$email}\n"
          . "Phone: {$phone}\n"
          . "Company: {$company}\n"
          . "Service: {$service}\n"
          . "Context: {$context}\n"
          . "Timestamp: {$timestamp}\n\n"
          . "Project Outline:\n{$message}\n";

// Load PHPMailer classes
require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    if (!empty($smtpPassword) && $smtpPassword !== 'YOUR_EMAIL_PASSWORD' && $smtpPassword !== 'YOUR_GODADDY_EMAIL_PASSWORD') {
        // GoDaddy SMTP configured
        $mail->isSMTP();
        $mail->Host       = $smtpHost;
        $mail->SMTPAuth   = $smtpAuth;
        $mail->Username   = $smtpUsername;
        $mail->Password   = $smtpPassword;
        $mail->SMTPSecure = $smtpSecure;
        $mail->Port       = $smtpPort;
    } else {
        // Fallback to local mail transport if SMTP password placeholder is not replaced yet
        $mail->isMail();
    }

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail, $toName);
    $mail->addReplyTo($email, $fullName);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyText;

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your consultation request has been sent to our team."
    ]);
} catch (Exception $e) {
    // If SMTP fails, attempt native mail() fallback
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$fullName} <{$email}>\r\n";

    if (@mail($toEmail, $subject, $bodyHtml, $headers)) {
        echo json_encode([
            "success" => true,
            "message" => "Thank you! Your consultation request has been sent to our team."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Unable to send request. Error: " . $mail->ErrorInfo
        ]);
    }
}
