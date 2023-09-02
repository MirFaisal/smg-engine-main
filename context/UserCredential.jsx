"use client";

import axios from "axios";
import { createContext, useState } from "react";
export const authContext = createContext();

const UserCredential = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const userLogin = async (email, password) => {
    try {
      const formData = new formData();
      formData.append("email", email);
      formData.append("password", password);
      const response = await axios.post("", formData)
        .then(res => {
        const token = res.data.token
      })
    } catch (error) {}
  };

  //   to hold user state and update user sate
  // useEffect(() => {
  //   const subscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setIsLoading(false);
  //   });
  //   return () => {
  //     subscribe();
  //   };
  // }, []);
  return (
    <>
      <authContext.Provider
        value={{
          isLoading,
          user,
          setUser,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
};

export default UserCredential;
