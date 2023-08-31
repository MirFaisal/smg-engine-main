"use client";

import { authContext } from "@/context/UserCredential";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useContext(authContext);
  const router = useRouter();
  const { asPath } = router;

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  // if (user && user?.uid) {
  //   return <>{children}</>;
  // }
  // return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
  // return router.push("/singin");
  return <>{children}</>;
};

export default PrivateRoutes;
