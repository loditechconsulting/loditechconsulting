<?php
/**
 * LoDi Tech Consulting - Email & SMTP Configuration
 *
 * Update with your GoDaddy mailbox credentials.
 */
return [
    // Recipient email where consultation requests are delivered
    'to_email' => 'pmo@loditechconsulting.com',
    'to_name'  => 'LoDi Tech Consulting Admin',

    // GoDaddy SMTP Server Settings:
    'smtp_host'       => 'smtpout.secureserver.net',
    'smtp_port'       => 465,
    'smtp_secure'     => 'ssl', // 'ssl' for port 465, 'tls' for port 587
    'smtp_auth'       => true,

    // Your GoDaddy Mailbox Login:
    'smtp_username'   => 'pmo@loditechconsulting.com',
    'smtp_password'   => 'YOUR_GODADDY_MAILBOX_PASSWORD',

    // Sender details shown in the recipient inbox
    'from_email'      => 'pmo@loditechconsulting.com',
    'from_name'       => 'LoDi Tech Consulting Website',
];
