import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/authStore";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const {error, isLoading, verifyEmail } = useAuthStore()

  const handleInputChange = (index, value) => {
    const newCode = [...code];
  
    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 5).split("");
      for (let i = 0; i < 5; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
  
      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 4 ? lastFilledIndex + 1 : 4;
      if (inputRefs.current[focusIndex]) {
        inputRefs.current[focusIndex].focus();
      }
    } else {
      newCode[index] = value;
      setCode(newCode);
  
      // Move focus to the next input field if value is entered
      if (value && index < 4 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode)
      navigate("/")
      toast.success(`Email Verified successfully`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Verify Email Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-[#111827]">
        <h2 className="text-4xl font-bold text-white text-left mb-8">
          Verify Your Email
        </h2>

        <p className="text-sm text-gray-300 mb-6">
          Enter the 6-digit code sent to your email address.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            {code.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                // id={`input-${index}`}
                maxLength="5"
                type="text"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-full"
              />
            ))}
          </div>

          {/* Error or Success Message */}
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Verify Email
          </button>
        </form>
      </div>

      {/* Right Section - Optional Intro or Image */}
      <div className="md:block w-full md:w-1/2 bg-blue-600 flex flex-col content-center justify-center items-center p-8 lg:p-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-left">
          SecurePass
        </h2>

        <p className="text-lg text-gray-200 mb-6 text-left">
          We’ve sent a verification code to your email. Please enter the code to
          confirm your identity.
        </p>

        <ul className="list-inside text-sm text-gray-300 text-left space-y-2 mb-6">
          <li>
            <span className="font-bold text-white text-lg">
              🔒 Secure & Protected:
            </span>{" "}
            Your email and verification code are transmitted securely.
          </li>
          <li>
            <span className="font-bold text-white text-lg">
              ✅ Quick & Easy:
            </span>{" "}
            Enter your 6-digit code to complete the process.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerifyEmail;
