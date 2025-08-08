import React, { useContext, useState } from "react";
import bg from "../assets/authBg.png";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import axios from "axios";


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { serverUrl } = useContext(userContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setLoading(true)
    try {
      let result = await axios.post(`${serverUrl}api/auth/login`, formData, { withCredentials: true });
      console.log(result.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(error.response?.data?.message || "An error occurred during sign up");
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className="w-full max-w-[95%] sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col gap-5"
        onSubmit={handleSignIn}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Sign In to <span className="text-blue-400">Virtual Assistant</span>
        </h1>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded border border-white/30 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-3 rounded border border-white/30 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showPassword ? (
            <IoEyeOff
              onClick={() => setShowPassword(false)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white w-5 h-5 cursor-pointer"
            />
          ) : (
            <IoEye
              onClick={() => setShowPassword(true)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white w-5 h-5 cursor-pointer"
            />
          )}
        </div>

        {error.length > 0 && (
          <p className="text-red-500 text-sm font-medium text-center">{error}</p>
        )}

        {/* Submit Button */}
        {/* <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-200"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button> */}

        <button
          type="submit"
          className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={loading}
          aria-busy={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {/* Sign In Link */}
        <p className="text-sm sm:text-base text-white text-center">
          Want to create an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 hover:underline cursor-pointer font-medium"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
