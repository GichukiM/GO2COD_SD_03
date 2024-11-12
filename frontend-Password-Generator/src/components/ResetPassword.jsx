import { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for password reset here, e.g. making an API call to reset the password
    if (newPassword === confirmPassword) {
      setSuccessMessage("Your password has been successfully reset. Please check your email for further instructions.");
    } else {
      setSuccessMessage("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Reset Password Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-[#111827]">
        <h1 className="text-4xl font-bold text-white text-left mb-4">Reset Your Password</h1>
        <p className="text-sm text-white text-left mb-8">Your new password must be different from previous used passwords.</p>

        {/* Custom Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300">
              New password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
              className="h-4 w-4 text-blue-500"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I agree to <a href="/terms" className="text-blue-500 hover:underline">companyName</a> Terms of Use and <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Reset Password
          </button>

          {/* Success or Error Message */}
          {successMessage && (
            <div className="mt-4 text-sm text-green-500">
              {successMessage}
            </div>
          )}
        </form>
      </div>

      {/* Right Section - Intro (Same as the other components) */}
      <div className="md:block w-full md:w-1/2 bg-blue-600 flex flex-col content-center justify-center items-center p-8 lg:p-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-left">
          SecurePass
        </h2>

        <p className="text-lg text-gray-200 mb-6 text-left">
          Welcome! This is a password reset form built with a strong focus on security
          and ease of use. By resetting your password, you’ll get access to our
          powerful password generator and management features. Here’s what makes
          our password reset process unique:
        </p>

        <ul className="list-inside list-disc text-sm text-gray-300 text-left space-y-2 mb-6">
          <li>
            <span className="font-bold">🔒 Secure & Protected:</span> We
            prioritize your security. Your new passwords will be encrypted using the
            latest industry standards.
          </li>
          <li>
            <span className="font-bold">🔑 Password Protection:</span> Make sure your new password is strong and different from the previous one.
          </li>
          <li>
            <span className="font-bold">📧 Email Notifications:</span> Stay
            informed with automatic email alerts whenever you reset your password or log in
            from a new device.
          </li>
          <li>
            <span className="font-bold">✅ Easy Reset:</span> Follow the simple steps to reset your password and regain access to your account.
          </li>
        </ul>

        <p className="text-sm text-gray-300 text-left">
          Ready to get back into your account? Simply reset your password, and you’re all set for a secure experience!
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
