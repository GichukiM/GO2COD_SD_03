import { useState } from "react";
import Input from "../components/Input";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {signup, error, isLoading} = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await signup(email, password, name);
      navigate("/verify-email")
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-[#111827]">
        <h1 className="text-4xl font-bold text-white text-left mb-8">
          SecurePass
        </h1>

        {/* Custom Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              What should we call you?
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Bonnie Green"
              required
            />
          </div>

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

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
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
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <PasswordStrengthMeter password={password}/>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Create Account"}
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
            <span className="font-bold text-white text-lg">
              🔒 Secure & Protected:
            </span>{" "}
            We prioritize your security. Your passwords are encrypted using the
            latest industry standards, and we never store them in plain text.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              🔑 OAuth Integration:
            </span>{" "}
            Sign up with your preferred method — Google, GitHub, or Facebook —
            for a seamless and quick experience.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              📧 Email Notifications:
            </span>{" "}
            Stay informed with automatic email alerts whenever you sign up or
            log in from a new device.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              ✅ Customizable Experience:
            </span>{" "}
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

export default Signup;
