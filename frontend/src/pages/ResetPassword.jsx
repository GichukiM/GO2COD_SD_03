import { useState } from "react";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, isLoading, error, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password and confirm password match
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
        await resetPassword(token, newPassword);

        toast.success("Password reset successfully, redirecting to login page...");
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    } catch (error) {
        console.error(error);
        toast.error(error.message || "Error resetting password");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-[#111827]">
        <h1 className="text-4xl font-bold text-white text-left mb-8">
          Reset Password
        </h1>

        {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-300"
            >
              New Password
            </label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm New Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            {isLoading ? "Setting Password..." : "Set New Password"}
          </button>
        </form>
      </div>

      {/* Right Section - Intro */}
      <div className="md:block w-full md:w-1/2 bg-blue-600 flex flex-col content-center justify-center items-center p-8 lg:p-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-left">
          SecurePass
        </h2>

        <p className="text-lg text-gray-200 mb-6 text-left">
          Enter your new password below to reset it securely.
        </p>

        <ul className="list-inside text-sm text-gray-300 text-left space-y-2 mb-6">
          <li>
            <span className="font-bold text-white text-lg">
              🔒 Secure Reset:
            </span>{" "}
            Your new password will be encrypted and stored securely.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              ✅ Password Requirements:
            </span>{" "}
            Make sure your password is at least 8 characters long.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              🔑 Quick Process:
            </span>{" "}
            Reset your password in just a few clicks.
          </li>
        </ul>

        <p className="text-sm text-gray-300 text-left">
          If you encounter any issues, please contact our support team for
          assistance.
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
