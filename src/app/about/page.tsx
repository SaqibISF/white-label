import React, { FC } from "react";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import GuideStartBusinessSection from "@/components/sections/GuideStartBusinessSection";
import GuidePartnerSection from "@/components/sections/GuidePartnerSection";
import ReadyLaunchSection from "@/components/sections/ReadyLaunchSection";

const AboutPage: FC = () => (
  <>
    <AboutSection />
    <WhatWeDoSection />
    <GuideStartBusinessSection />
    <GuidePartnerSection />
    <ReadyLaunchSection />
  </>
);

export default AboutPage;
