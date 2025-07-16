"use client";

import React, { FC } from "react";
import Section from "../Section";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";

const AppsActionsSection: FC = () => (
  <Section
    heading="See WhiteLabel Apps in Action"
    description="Preview how your branded VPN apps will look across different platforms and devices."
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Mobile Interface",
          description:
            "Clean, intuitive mobile design with your brand colors and logo.",
          imageSrc: "/mobile-app.png",
        },
        {
          title: "Desktop Application",
          description:
            "Professional desktop interface with comprehensive features and branding.",
          imageSrc: "/desktop-app.png",
        },
        {
          title: "Settings & Configuration",
          description:
            "Detailed settings panel with your brand identity throughout.",
          imageSrc: "/web-dashboard.png",
        },
      ].map(({ imageSrc, title, description }, index) => (
        <Card key={index} className="p-4">
          <CardBody className="max-h-72">
            <Image
              src={imageSrc}
              alt="App Preview Image"
              width={0}
              height={0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={imageSrc}
              className="object-contain w-full h-full"
            />
          </CardBody>
          <CardFooter className="flex-col items-start text-start gap-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-default-500 text-sm">{description}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  </Section>
);

export default AppsActionsSection;
