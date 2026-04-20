import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../ScrollToTop";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
