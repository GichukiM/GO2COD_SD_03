export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Poppins, Arial, sans-serif; line-height: 1.6; color: #E5E7EB; background-color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">
  <!-- Header Section -->
  <div style="background-color: #2563EB; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="color: #FFFFFF; margin: 0; font-size: 24px;">Verify Your Email</h1>
  </div>

  <!-- Content Section -->
  <div style="background-color: #1F2937; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p style="color: #D1D5DB;">Hello,</p>
    <p style="color: #D1D5DB;">Thank you for signing up with SecurePass! Your verification code is:</p>

    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #60A5FA;">{verificationCode}</span>
    </div>

    <p style="color: #D1D5DB;">Enter this code on the verification page to complete your registration.</p>
    <p style="color: #D1D5DB;">This code will expire in 15 minutes for security reasons.</p>

    <p style="color: #D1D5DB;">If you didn't create an account with us, please ignore this email.</p>

    <p style="color: #D1D5DB; margin-top: 20px;">Best regards,<br>SecurePass Team</p>
  </div>

  <!-- Footer Section -->
  <div style="text-align: center; margin-top: 20px; color: #6B7280; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
    <p>SecurePass © 2024. All rights reserved.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Poppins, Arial, sans-serif; line-height: 1.6; color: #E5E7EB; background-color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">
  <!-- Header Section -->
  <div style="background-color: #2563EB; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="color: #FFFFFF; margin: 0; font-size: 24px;">Password Reset Successful</h1>
  </div>

  <!-- Content Section -->
  <div style="background-color: #1F2937; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p style="color: #D1D5DB;">Hello,</p>
    <p style="color: #D1D5DB;">We're writing to confirm that your password has been successfully reset.</p>

    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #60A5FA; color: #FFFFFF; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>

    <p style="color: #D1D5DB;">If you did not initiate this password reset, please contact our support team immediately.</p>

    <p style="color: #D1D5DB;">For security reasons, we recommend that you:</p>
    <ul style="color: #D1D5DB; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Use a strong, unique password</li>
      <li style="margin-bottom: 8px;">Enable two-factor authentication if available</li>
      <li style="margin-bottom: 8px;">Avoid using the same password across multiple sites</li>
    </ul>

    <p style="color: #D1D5DB;">Thank you for helping us keep your account secure.</p>
    <p style="color: #D1D5DB; margin-top: 20px;">Best regards,<br>SecurePass Team</p>
  </div>

  <!-- Footer Section -->
  <div style="text-align: center; margin-top: 20px; color: #6B7280; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
    <p>SecurePass © 2024. All rights reserved.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Poppins, Arial, sans-serif; line-height: 1.6; color: #E5E7EB; background-color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">
  <!-- Header Section -->
  <div style="background-color: #2563EB; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="color: #FFFFFF; margin: 0; font-size: 24px;">Password Reset</h1>
  </div>

  <!-- Content Section -->
  <div style="background-color: #1F2937; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p style="color: #D1D5DB;">Hello,</p>
    <p style="color: #D1D5DB;">We received a request to reset your password. If you didn't make this request, please ignore this email.</p>

    <p style="color: #D1D5DB;">To reset your password, click the button below:</p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #60A5FA; color: #FFFFFF; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>

    <p style="color: #D1D5DB;">This link will expire in 1 hour for security reasons.</p>
    <p style="color: #D1D5DB; margin-top: 20px;">Best regards,<br>SecurePass Team</p>
  </div>

  <!-- Footer Section -->
  <div style="text-align: center; margin-top: 20px; color: #6B7280; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
    <p>SecurePass © 2024. All rights reserved.</p>
  </div>
</body>
</html>

`;
