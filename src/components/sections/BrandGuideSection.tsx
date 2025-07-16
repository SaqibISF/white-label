"use client";

import React, { FC } from "react";
import Section from "../Section";
import { Card, CardBody } from "@heroui/react";
import {
  ColorPlateIcon,
  EnvelopeIcon,
  GlobeIcon,
  ImageIcon,
  PlayIcon,
  TagIcon,
} from "@/icons";

const BrandGuideSection: FC = () => (
  <>
    <Section
      heading="Complete Brand Customization"
      description="Make the apps truly yours with comprehensive branding options and customization features."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Custom Logo & Icons",
            description:
              "Upload your logo, app icons, and brand assets to create a unique visual identity.",
            Icon: ImageIcon,
          },
          {
            title: "Color Themes",
            description:
              "Customize app colors, themes, and UI elements to match your brand guidelines.",
            Icon: ColorPlateIcon,
          },
          {
            title: "App Name & Branding",
            description:
              "Set your app name, company branding, and all text elements throughout the interface.",
            Icon: TagIcon,
          },
          {
            title: "Splash Screen",
            description:
              "Custom splash screen with your logo and branding for professional app launch experience.",
            Icon: PlayIcon,
          },
          {
            title: "Custom Domain",
            description:
              "Use your own domain for customer portal and app communications.",
            Icon: GlobeIcon,
          },
          {
            title: "Support Integration",
            description:
              "Integrate your support system and contact information directly into the apps.",
            Icon: EnvelopeIcon,
          },
        ].map(({ title, description, Icon }, index) => (
          <Card key={index} className="p-4">
            <CardBody className="gap-3">
              <Icon className="text-primary size-10" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-default-500 text-base">{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>

    <Section
      heading="From Concept to Launch in Days"
      description="Our streamlined process gets your branded VPN apps ready for market in record time."
      classNames={{ section: "bg-default-100/80" }}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            id: 1,
            title: "Submit Your Brand Assets",
            description:
              "Upload your logo, choose colors, set app name, and provide branding guidelines.",
          },
          {
            id: 2,
            title: "We Build Your Apps",
            description:
              "Our team customizes all platform apps with your branding and prepares them for deployment.",
          },
          {
            id: 3,
            title: "Launch & Publish",
            description:
              "Receive your branded apps and publish them to app stores under your developer account.",
          },
        ].map(({ id, title, description }) => (
          <Card key={id} className="p-4">
            <CardBody className="gap-3">
              <span className="size-12 text-xl font-bold rounded-full bg-primary text-white grid place-items-center">
                {id}
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-default-500 text-base">{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  </>
);

export default BrandGuideSection;
