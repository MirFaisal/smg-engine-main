"use client";

import { createContext, useState } from "react";
export const authContext = createContext();

const UserCredential = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

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
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
};

export default UserCredential;
