import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

export default function RootTemplate() {
  // useCheckToken()
  return (
    <>
      <Header />
      <main
        style={{
          margin: "0 0 100px",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
