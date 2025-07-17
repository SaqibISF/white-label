"use client";

import React, { FC } from "react";
import Section from "../Section";
import { Card, CardBody } from "@heroui/react";
import {
  ClockIcon,
  EarthIcon,
  LockIcon,
  QuestionMarkIcon,
  RealTimeIcon,
  Settings2Icon,
} from "@/icons";

const GuidePartnerSection: FC = () => (
  <Section
    heading="More Than a Platform — A True Partner"
    description="We don't just give you software — we stand behind your success. From branding to app delivery to post-launch support, SellShield is your silent engine, helping you scale and profit without limits."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "1–3 day app delivery",
          description: "Quick turnaround from setup to launch",
          Icon: ClockIcon,
        },
        {
          title: "Global high-speed network",
          description: "Servers worldwide for optimal performance",
          Icon: EarthIcon,
        },
        {
          title: "Real-time analytics",
          description: "Track users, revenue, and performance",
          Icon: RealTimeIcon,
        },
        {
          title: "Fast support & updates",
          description: "Always up-to-date and supported",
          Icon: Settings2Icon,
        },
        {
          title: "Reliable, secure infrastructure",
          description: "Enterprise-grade security and uptime",
          Icon: LockIcon,
        },
        {
          title: "Multi-platform support",
          description: "Android, iOS, Windows, macOS",
          Icon: QuestionMarkIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <Card key={index} className="p-4">
          <CardBody className="items-center text-center gap-3">
            <Icon className="text-primary size-10" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-default-500 text-base">{description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default GuidePartnerSection;
