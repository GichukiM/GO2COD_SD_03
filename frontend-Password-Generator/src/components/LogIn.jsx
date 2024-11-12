import { useState } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-[#111827]">
        <h1 className="text-4xl font-bold text-white text-left mb-8">SecurePass</h1>

        {/* OAuth Buttons */}
        <div className="mb-6">
          <p className="text-left text-sm text-gray-300 mb-4">Login with</p>
          <div className="flex flex-row flex-wrap space-y-4 md:space-x-4 justify-center items-center content-center">
            <button className="flex items-center justify-center px-4 py-2 bg-transparent border-blue-50 border-2 text-white rounded-md hover:bg-slate-800 w-full max-w-xs">
              <FcGoogle className="mr-2" /> Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-transparent border-blue-50 border-2 text-white rounded-md hover:bg-slate-800 w-full max-w-xs">
              <FaGithub className="mr-2" /> GitHub
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-transparent border-blue-50 border-2 text-white rounded-md hover:bg-slate-800 w-full max-w-xs">
              <FaFacebook className="mr-2" /> Facebook
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="h-0.5 w-full bg-gray-300"></div>
          <span className="text-gray-400">or</span>
          <div className="h-0.5 w-full bg-gray-300"></div>
        </div>

        {/* Custom Login Form */}
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Your password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Forgot Password and Remember Me */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-300 ml-2">
                Remember me
              </label>
            </div>
            <div className="mt-2 text-right">
              <a href="/reset-password" className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

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
              Don’t have an account?{" "}
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
