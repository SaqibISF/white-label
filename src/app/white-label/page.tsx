import React, { FC } from "react";
import WhiteLabelSection from "@/components/sections/WhiteLabelSection";
import MultiPlatformSection from "@/components/sections/MultiPlatformSection";
import BrandGuideSection from "@/components/sections/BrandGuideSection";
import AppsActionsSection from "@/components/sections/AppsActionsSection";
import PricingSection from "@/components/sections/PricingSection";

const WhiteLabelPage: FC = () => (
  <>
    <WhiteLabelSection />
    <MultiPlatformSection />
    <BrandGuideSection />
    <AppsActionsSection />
    <PricingSection />
  </>
);

export default WhiteLabelPage;
