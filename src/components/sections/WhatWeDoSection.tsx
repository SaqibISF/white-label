"use client";

import React, { FC } from "react";
import Section from "../Section";
import { Card, CardBody } from "@heroui/react";
import { ColorPlateIcon, GlobeIcon, MobileIcon, MusicIcon, RealTimeIcon, ShieldIcon } from "@/icons";

const WhatWeDoSection: FC = () => (
  <Section
    heading="What We Do"
    description="We provide everything you need to launch and scale your VPN brand"
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "White-label VPN Apps",
          description:
            "Custom-branded apps for Android, iOS, Windows, and macOS with your logo and design.",
          Icon: MobileIcon,
        },
        {
          title: "Branding Setup",
          description: "Complete customization with your logo, brand name, colors, and theme preferences.",
          Icon: ColorPlateIcon,
        },
        {
          title: "Global Server Network",
          description: "High-speed servers across multiple countries for optimal performance and reliability.",
          Icon: GlobeIcon,
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time insights into user activity, revenue tracking, and performance metrics.",
          Icon: RealTimeIcon,
        },
        {
          title: "24/7 Support",
          description: "Dedicated support team to help you and your customers whenever needed.",
          Icon: MusicIcon,
        },
        {
          title: "Security & Updates",
          description: "Automatic security updates and infrastructure maintenance handled for you.",
          Icon: ShieldIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <Card key={index} className="p-4">
          <CardBody className="gap-3">
            <span className="size-12 bg-primary text-white rounded-full grid place-items-center">
              <Icon className="size-6" />
            </span>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-default-500 text-base">{description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default WhatWeDoSection;
