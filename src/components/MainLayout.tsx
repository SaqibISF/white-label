"use client";

import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
