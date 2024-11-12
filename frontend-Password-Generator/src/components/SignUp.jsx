import { useState } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <p className="text-left text-sm text-gray-300 mb-4">Sign Up with</p>
          <div className="flex flex-row space-x-4 justify-center">
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

        {/* Custom Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              What should we call you?
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="e.g. Bonnie Green"
              required
            />
          </div>

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

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-500"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              By signing up, you are creating a SecurePass account, and you agree to SecurePass{" "}
              <a href="/terms" className="text-blue-500 hover:underline">Terms of Use</a> and{" "}
              <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Email Updates */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="updates"
              className="h-4 w-4 text-blue-500"
            />
            <label htmlFor="updates" className="text-sm text-gray-300">
              Email me about product updates and resources.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Create an account
          </button>

          {/* Login Link */}
          <div className="mt-4 text-left">
            <span className="text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login here
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
          Welcome! This is a signup form built with a strong focus on security
          and ease of use. By creating an account, you’ll get access to our
          powerful password generator and management features. Here’s what makes
          our signup process unique:
        </p>

        <ul className="list-inside text-sm text-gray-300 text-left space-y-2 mb-6">
          <li>
            <span className="font-bold text-white text-lg">🔒 Secure & Protected:</span> We
            prioritize your security. Your passwords are encrypted using the
            latest industry standards, and we never store them in plain text.
          </li>
          <li>
            <span className="font-bold text-white text-lg">🔑 OAuth Integration:</span> Sign up
            with your preferred method — Google, GitHub, or Facebook — for a
            seamless and quick experience.
          </li>
          <li>
            <span className="font-bold text-white text-lg">📧 Email Notifications:</span> Stay
            informed with automatic email alerts whenever you sign up or log in
            from a new device.
          </li>
          <li>
            <span className="font-bold text-white text-lg">✅ Customizable Experience:</span>{" "}
            Choose your own password rules and start managing your credentials
            with confidence.
          </li>
        </ul>

        <p className="text-sm text-gray-300 text-left">
          Ready to get started? Create your account now, and let’s get you set
          up for a secure, hassle-free experience!
        </p>
      </div>
    </div>
  );
};

export default SignUp;
