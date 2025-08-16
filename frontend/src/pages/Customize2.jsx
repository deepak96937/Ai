import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext';

const Customize2 = () => {
  const { userData } = useContext(userContext);
  const [assistantName, setAssistantName] = useState("");

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-[#0a0a3a] to-[#09096e] flex flex-col items-center justify-center py-10 px-4">
      
      {/* Heading */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 leading-snug">
        Enter your{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Assistant Image
        </span>
      </h1>

      {/* Responsive Input */}
      <input
        type="text"
        required
        placeholder="Enter your Assistant Name"
        value={assistantName}
        onChange={(e) => setAssistantName(e.target.value)}
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4 py-3 sm:py-4 md:py-5 rounded-full border border-white/30 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {/* Button - shows only when input has value */}
      {assistantName && (
        <button
          className="w-full sm:w-auto mt-6 flex items-center justify-center gap-2
            bg-blue-600 hover:bg-blue-700 text-white font-medium sm:font-semibold
            py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 
            rounded-md sm:rounded-lg md:rounded-xl 
            text-sm sm:text-base md:text-lg lg:text-xl
            shadow-md hover:shadow-xl transition duration-300
            disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Finally Create your Assistant
        </button>
      )}
    </div>
  );
};

export default Customize2;
