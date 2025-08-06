// import React, { useState } from "react";
// import bg from "../assets/authBg.png";
// import { IoEye } from "react-icons/io5";
// import { IoEyeOff } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   return (
//     <div
//       className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-cover bg-center"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <form className="w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col gap-5">
//         <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
//           Register to <span className="text-blue-400">Virtual Assistant</span>
//         </h1>

//         {/* Name Input */}
//         <input
//           type="text"
//           name="name"
//           required
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full px-4 py-3 rounded border border-white/30 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Email Input */}
//         <input
//           type="email"
//           name="email"
//           required
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="w-full px-4 py-3 rounded border border-white/30 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Password Input */}
//         <div className=" w-full relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             required
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             className="w-full px-4 py-3 rounded border border-white/30 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {!showPassword ? (
//             <IoEye
//               onClick={() => setShowPassword(true)}
//               className=" absolute top-[15px] cursor-pointer right-[20px] text-white w-5 h-5"
//             />
//           ) : (
//             <IoEyeOff
//               onClick={() => setShowPassword(false)}
//               className=" absolute top-[15px] cursor-pointer right-[20px] text-white w-5 h-5"
//             />
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-200"
//         >
//           Sign Up
//         </button>

//         <p className="text-sm text-white mt-4 text-center md:text-2xl">
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/signin")}
//             className="text-blue-400 hover:underline cursor-pointer font-medium"
//           >
//             Sign in
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import bg from "../assets/authBg.png";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className="w-full max-w-[95%] sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          // handle submission here
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded border border-white/30 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />

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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-200"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-sm sm:text-base text-white text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-blue-400 hover:underline cursor-pointer font-medium"
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
