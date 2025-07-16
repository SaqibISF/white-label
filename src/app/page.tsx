"use client";

import React, { FC } from "react";
import HomeSection from "@/components/sections/HomeSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkFlowSection from "@/components/sections/WorkFlowSection";
import PricingSection from "@/components/sections/PricingSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import UsersRemarksSection from "@/components/sections/UsersRemarksSection";
import FAQsSections from "@/components/sections/FAQsSections";
import ReadyLaunchSection from "@/components/sections/ReadyLaunchSection";

const Home: FC = () => (
  <>
    <HomeSection />
    <FeaturesSection />
    <WorkFlowSection />
    <PricingSection />
    <WhyChooseUsSection />
    <UsersRemarksSection />
    <FAQsSections />
    <ReadyLaunchSection />
  </>
);

export default Home;
