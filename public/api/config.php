<?php
/**
 * LoDi Tech Consulting - Email & SMTP Configuration
 *
 * Update your GoDaddy mailbox credentials below.
 */
return [
    // Recipient where consultation requests are delivered
    'to_email' => 'loditechc@gmail.com',
    'to_name'  => 'LoDi Tech Consulting Admin',

    // SMTP Server Settings (e.g. GoDaddy Workspace / Professional Email):
    'smtp_host'       => 'smtpout.secureserver.net',
    'smtp_port'       => 465,
    'smtp_secure'     => 'ssl', // 'ssl' for 465, 'tls' for 587
    'smtp_auth'       => true,

    // Your Mailbox Login
    'smtp_username'   => 'loditechc@gmail.com',
    'smtp_password'   => 'YOUR_EMAIL_PASSWORD',

    // Sender details shown in the recipient inbox
    'from_email'      => 'loditechc@gmail.com',
    'from_name'       => 'LoDi Tech Consulting Website',
];
