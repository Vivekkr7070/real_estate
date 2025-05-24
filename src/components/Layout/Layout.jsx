import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {

  // useFavourites()
  // useBookings()

  const { isAuthenticated, user, getAccessTokenWithPopup, getAccessTokenSilently } = useAuth0();
  // console.log("🚀 ~ Layout ~ user:", user?.email)
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegsiter = async () => {
      const token = await getAccessTokenSilently();
      // console.log("🚀 ~ getTokenAndRegsiter ~ token:", token)

      // const res = await getAccessTokenWithPopup({
      //   authorizationParams: {
      //     audience: "http://localhost:8000",
      //     scope: "openid profile email",
      //   },
      // });
      localStorage.setItem("access_token", token);
      setUserDetails((prev) => ({
        ...prev,
        token: token,
        email: user?.email,
      }));
    };


    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
