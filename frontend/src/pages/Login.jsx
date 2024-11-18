import { useState } from "react";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-[#111827]">
        <h1 className="text-4xl font-bold text-white text-left mb-8">Welcome back to SecurePass</h1>

        {/* Custom Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Your password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {/* Forgot Password and Remember Me */}
          <div className="flex items-center">
            <div className="mt-2 text-right">
              <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Log in
          </button>

          {/* Sign Up Link */}
          <div className="mt-4 text-left">
            <span className="text-sm text-gray-400">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign up here
              </a>
            </span>
          </div>
        </form>
      </div>

      {/* Right Section - Intro */}
      <div className="md:block w-full md:w-1/2 bg-blue-600 flex flex-col content-center justify-center items-center p-8 lg:p-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-left">
          SecurePass
        </h2>

        <p className="text-lg text-gray-200 mb-6 text-left">
          Welcome back! Log in to your SecurePass account to access your secure password manager and other tools.
        </p>

        <ul className="list-inside text-sm text-gray-300 text-left space-y-2 mb-6">
          <li>
            <span className="font-bold text-white text-lg">🔒 Secure & Protected:</span> We
            prioritize your security. Your passwords are encrypted using the
            latest industry standards, and we never store them in plain text.
          </li>
          <li>
            <span className="font-bold text-white text-lg">🔑 OAuth Integration:</span> Log in
            quickly with your Google, GitHub, or Facebook accounts.
          </li>
          <li>
            <span className="font-bold text-white text-lg">📧 Email Notifications:</span> Stay
            informed with alerts when you log in from a new device.
          </li>
          <li>
            <span className="font-bold text-white text-lg">✅ Customizable Experience:</span>{" "}
            Set your own password policies and securely manage your credentials.
          </li>
        </ul>

        <p className="text-sm text-gray-300 text-left">
          Ready to dive back in? Log in now to continue managing your passwords securely.
        </p>
      </div>
    </div>
  );
};

export default Login;
