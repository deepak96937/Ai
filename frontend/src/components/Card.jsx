
import React, { useContext } from "react";
import { userContext } from "../context/UserContext";

const Card = ({ image }) => {
  const { frontendImage, setFrontendImage, backendImage, setBackendImage,selectedImage, setSelectedImage } = useContext(userContext);

  return (
    <div className={`flex-shrink-0 w-[45%] cursor-pointer sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%] aspect-[3/4] overflow-hidden bg-[#030326] border border-blue-700/30 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-900 transition-transform duration-300 hover:scale-105 hover:border-white hover:border-2  ${selectedImage === image ? "border-4 border-white shadow-2xl shadow-blue-500/60" : ""}`}
      onClick={()=>setSelectedImage(image)}
    >
      <img
        src={image}
        alt="Card"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default Card;

