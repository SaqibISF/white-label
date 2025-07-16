"use client";

import React, { FC } from "react";
import Section from "../Section";
import { Card, CardBody } from "@heroui/react";
import { AndroidIcon, AppleIcon, MACIcon, WindowsIcon } from "@/icons";

const MultiPlatformSection: FC = () => (
  <Section
    heading="Multi-Platform WhiteLabel Apps"
    description="Get fully customized VPN applications for all major platforms, ready to publish under your brand."
    classNames={{ section: "bg-default-100/80" }}
  >
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        {
          title: "Android App",
          description:
            "Native Android application with material design and your custom branding.",
          Icon: AndroidIcon,
        },
        {
          title: "iOS App",
          description:
            "Beautiful iOS app following Apple's design guidelines with your brand identity.",
          Icon: AppleIcon,
        },
        {
          title: "Windows App",
          description:
            "Desktop application for Windows with modern UI and seamless integration.",
          Icon: WindowsIcon,
        },
        {
          title: "macOS App",
          description:
            "Native macOS application with elegant design and your custom branding.",
          Icon: MACIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <Card key={index} className="p-6">
          <CardBody className="items-center text-center gap-y-3">
            <Icon className="size-12 text-primary" />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-default-500 text-base">{description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default MultiPlatformSection;
