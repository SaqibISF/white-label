"use client";

import React, { FC } from "react";
import Section, { SectionDescription, SectionHeading } from "../Section";
import { Chip } from "@heroui/react";
import { ShieldIcon } from "@/icons";

const AboutSection: FC = () => (
  <Section classNames={{ section: "bg-default-100/80" }}>
    <Chip
      size="md"
      startContent={<ShieldIcon className="size-4" />}
      color="primary"
      variant="flat"
      className="mb-4 px-3 py-1.5"
    >
      About WhiteLabel
    </Chip>
    <SectionHeading className="lg:w-2/3 text-5xl sm:text-6xl leading-12 sm:leading-16 lg:leading-18">
      Empowering Your <span className="text-primary">Brand with VPN</span>{" "}
      Technology
    </SectionHeading>
    <SectionDescription className="text-2xl sm:text-3xl lg:w-2/3">
      SellShield helps you build your own VPN business in just a few clicks — no
      coding, no servers, just your brand and your profit.
    </SectionDescription>
  </Section>
);

export default AboutSection;
