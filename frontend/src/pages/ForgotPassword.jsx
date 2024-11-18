import { useState } from "react";
import { FiMail } from "react-icons/fi";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import { Loader } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-[#111827]">
        <h1 className="text-4xl font-bold text-white text-left mb-8">
          Forgot Password
        </h1>

        {!isSubmitted ? (
          // Forgot Password Form
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-gray-300 mb-4">
              Please enter your email address below. We will send you a link to
              reset your password.
            </p>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              {isLoading ? (
                <Loader className="size-6 animate-spin mx-auto" />
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center space-y-4">
            <FiMail className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-white">
              Check Your Email
            </h2>
            <p className="text-sm text-gray-300">
              If an account with{" "}
              <span className="font-semibold text-white">{email}</span> exists,
              you will receive a password reset link in your inbox shortly.
            </p>
          </div>
        )}
        {/* Back to Login Link */}
        <div className="mt-4 text-left">
          <span className="text-sm text-gray-400">
            Remember your password?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Back to Login
            </a>
          </span>
        </div>
      </div>

      {/* Right Section - Intro */}
      <div className="md:block w-full md:w-1/2 bg-blue-600 flex flex-col content-center justify-center items-center p-8 lg:p-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-left">
          SecurePass
        </h2>

        <p className="text-lg text-gray-200 mb-6 text-left">
          Forgot your password? No worries! Enter your email, and we'll send you
          a link to reset it securely.
        </p>

        <ul className="list-inside text-sm text-gray-300 text-left space-y-2 mb-6">
          <li>
            <span className="font-bold text-white text-lg">
              🔒 Secure Reset:
            </span>{" "}
            Your password reset link is encrypted and secure.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              📧 Email Notifications:
            </span>{" "}
            You'll receive an email with further instructions.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              🔑 Quick Process:
            </span>{" "}
            Reset your password in just a few clicks.
          </li>
        </ul>

        <p className="text-sm text-gray-300 text-left">
          Need help? Contact our support team if you're having trouble resetting
          your password.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
