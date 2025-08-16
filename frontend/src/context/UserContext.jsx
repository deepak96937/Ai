import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const serverUrl = "http://localhost:8000/";
  const [userData, setUserData] = useState(null);
  const [frontendImage, setFrontendImage] = useState(null)
  const [backendImage, setBackendImage] = useState(null)
const [selectedImage, setSelectedImage] = useState(null)

console.log(selectedImage);


  const handleCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}api/user/current`, { withCredentials: true });
      setUserData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleCurrentUser();
  }, []);

  const value = {
    serverUrl,
    userData,
    setUserData,
    frontendImage,
    setFrontendImage,
    backendImage,
    setBackendImage,
    selectedImage,
    setSelectedImage
  };



  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
