<?php
/**
 * LoDi Tech Consulting - Email & SMTP Configuration
 *
 * Update your GoDaddy mailbox credentials below.
 */
return [
    // Recipient where consultation requests are delivered
    // Set to loditechc@gmail.com for testing; switch to pmo@loditechconsulting.com after testing
    'to_email' => 'loditechc@gmail.com',
    'to_name'  => 'LoDi Tech Consulting Admin',

    // SMTP Server Settings:
    // - For GoDaddy Workspace / Professional Email:
    //     smtp_host: 'smtpout.secureserver.net'
    //     smtp_port: 465 (ssl) or 587 (tls)
    // - For GoDaddy Microsoft 365 Email:
    //     smtp_host: 'smtp.office365.com'
    //     smtp_port: 587
    //     smtp_secure: 'tls'
    'smtp_host'       => 'smtpout.secureserver.net',
    'smtp_port'       => 465,
    'smtp_secure'     => 'ssl', // 'ssl' for 465, 'tls' for 587
    'smtp_auth'       => true,

    // Your GoDaddy Mailbox Login
    'smtp_username'   => 'pmo@loditechconsulting.com',
    'smtp_password'   => 'YOUR_GODADDY_EMAIL_PASSWORD', // Replace with your mailbox password

    // Sender details shown in the recipient inbox
    'from_email'      => 'pmo@loditechconsulting.com',
    'from_name'       => 'LoDi Tech Consulting Website',
];
