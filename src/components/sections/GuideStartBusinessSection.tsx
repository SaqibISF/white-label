"use client";
import React, { FC } from "react";
import Section from "../Section";
import { CodeIcon, RocketIcon, ServerIcon, TagIcon } from "@/icons";
import { Card, CardBody } from "@heroui/react";

const GuideStartBusinessSection: FC = () => (
  <Section
    heading="The Smartest Way to Start Your VPN Business"
    description="White label VPN lets you skip years of development and infrastructure costs. You focus on your brand and customers — we take care of the technology, security, and updates."
    classNames={{section: "bg-default-100/80"}}
  >
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "No Coding Required",
          description:
            "Launch your VPN brand without writing a single line of code.",
          Icon: CodeIcon,
        },
        {
          title: "Fast time-to-market",
          description: "Get your VPN business running in days, not months",
          Icon: RocketIcon,
        },
        {
          title: "Your logo, your name, your business",
          description: "Complete brand ownership and customer relationships",
          Icon: TagIcon,
        },
        {
          title: "Fully managed infrastructure",
          description:
            "We handle servers, maintenance, and scaling automatically",
          Icon: ServerIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <Card key={index} className="p-4">
          <CardBody className="flex-row items-start gap-2">
            <span className="size-8 bg-primary text-white rounded-full grid place-items-center mt-0.5">
              <Icon className="size-4.5" />
            </span>
            <div className="flex-1 flex flex-col gap-1.5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-default-500 text-base">{description}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default GuideStartBusinessSection;
