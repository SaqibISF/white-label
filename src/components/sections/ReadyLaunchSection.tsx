"use client";

import React, { FC } from "react";
import Section from "../Section";
import { Button } from "@heroui/react";

const ReadyLaunchSection: FC = () => (
  <Section
    heading="Ready to Launch Your VPN Business?"
    description="Start earning passive income with your own branded VPN service. No technical skills required."
    classNames={{
      section: "bg-primary text-white",
      description: "text-gary-300",
    }}
  >
    <div className="flex items-center gap-4">
      <Button size="lg" className="bg-white text-primary font-medium">
        Get Started Today
      </Button>
      <Button
        size="lg"
        color="primary"
        className="border-2 border-white font-medium"
      >
        Schedule a Demo
      </Button>
    </div>
  </Section>
);

export default ReadyLaunchSection;
