"use client";

import React, { FC } from "react";
import HomeSection from "@/components/sections/HomeSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkFlowSection from "@/components/sections/WorkFlowSection";

const Home: FC = () => (
  <>
    <HomeSection />
    <FeaturesSection />
    <WorkFlowSection />
  </>
);

export default Home;
