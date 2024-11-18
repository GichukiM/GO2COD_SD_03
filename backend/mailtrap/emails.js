import { mailTrapClient, sender } from "./mailtrap.config.js"
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplate.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]

    try {
        const response =  await mailTrapClient.send({
           from: sender,
           to: recipient,
           subject: "Verify your email",
           html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
           category: "Email verification",
        });

        console.log("Email sent successfully", response);
        
    } catch (e) {
        console.error(`Error sending email`, e);
        throw new Error(`Error sending verification email: ${e}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }]

    try {
        const response =  await mailTrapClient.send({
           from: sender,
           to: recipient,
           template_uuid: "2a030c5f-aea2-4fe0-a78b-991e973ad097",
           template_variables: {
            name: name,
            company_info_name: "SecurePass",
          },
        });

        console.log("Welcome email sent successfully", response);
        
    } catch (e) {
        console.error(`Error sending email`, e);
        throw new Error(`Error sending welcome email: ${e}`);
    }
}

export const sendResetPasswordEmail = async (email, resetURL) => {
    const recipient = [{ email }]

    try {
        const response =  await mailTrapClient.send({
           from: sender,
           to: recipient,
           subject: "Reset your password",
           html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
           category: "Password reset",
        });

        console.log("Reset password email sent successfully", response);
        
    } catch (e) {
        console.error(`Error sending email`, e);
        throw new Error(`Error sending reset password email: ${e}`);
    }
};

export const sendResetPasswordSuccessEmail = async (email) => {
    const recipient = [{ email }]

    try {
        const response =  await mailTrapClient.send({
           from: sender,
           to: recipient,
           subject: "Password reset successful",
           html: PASSWORD_RESET_SUCCESS_TEMPLATE,
           category: "Password reset",
        });

        console.log("Reset password success email sent successfully", response);
        
    } catch (e) {
        console.error(`Error sending email`, e);
        throw new Error(`Error sending reset password success email: ${e}`);
    }
};