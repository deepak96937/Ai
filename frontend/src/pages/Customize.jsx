import React, { useContext, useRef, useState } from "react";
import Card from "../components/Card";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../assets";
import { RiImageAddFill } from "react-icons/ri";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Customize = () => {

  const images = [image1, image2, image3, image4, image5, image6, image7];
  const { frontendImage, setFrontendImage, backendImage, setBackendImage, selectedImage, setSelectedImage } = useContext(userContext);
  const inputImage = useRef()
  const navigate = useNavigate()

  const handleImage = (e) => {
    const file = e.target.files[0];
    setBackendImage(file)

    if (file) {
      setFrontendImage(URL.createObjectURL(file))
    }
  }


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-[#0a0a3a] to-[#09096e] flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
        Select your{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Assistant Image
        </span>
      </h1>

      {/* Cards */}
      <div className="w-full max-w-7xl flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <Card key={index} image={image} />
        ))}

        {/* Add Image Card */}
        <div
          className={`
            flex-shrink-0 
            w-[46%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%] 
            aspect-[3/4] 
            cursor-pointer 
            flex justify-center items-center
            bg-gradient-to-br from-[#0d0d26] to-[#1a1a40] 
            border-2 border-white-500/40 
            rounded-2xl 
            shadow-md 
            hover:border-blue-400 hover:shadow-blue-900 hover:shadow-xl
            transition-all duration-300 
            hover:scale-105
            ${selectedImage == 'input' ? "border-4 border-white shadow-2xl shadow-blue-500/60" : ""}
            `}
          onClick={() => {
            inputImage.current.click()
            setSelectedImage("input")
          }}
        >
          {
            !frontendImage ? (<RiImageAddFill className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-80 group-hover:opacity-100 transition duration-300" />)
              :
              (<img
                src={frontendImage}
                alt="Card"
                className="w-full h-full object-cover rounded-2xl"
              />)
          }
        </div>
        <input type="file" ref={inputImage} accept="image/*" hidden onChange={handleImage} />
      </div>

      {selectedImage && <button
        className="
                     w-full sm:w-auto
                     flex items-center justify-center gap-2
                     bg-blue-600 hover:bg-blue-700 
                     text-white font-medium sm:font-semibold
                     py-2 sm:py-3 md:py-4
                     px-4 sm:px-6 md:px-8
                     rounded-md sm:rounded-lg md:rounded-xl
                     text-sm sm:text-base md:text-lg
                     mt-6
                     transition duration-300 
                     disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
                    "
           onClick={()=>navigate("/customize2")}         
      >
        Next
      </button>}
    </div>
  );
};

export default Customize;

