import React, { FC } from "react";
import Section from "../Section";
import { Card, CardBody } from "@heroui/react";
import {
  CircleChartIcon,
  ClockIcon,
  CodeIcon,
  DollarsBagIcon,
  LockIcon,
  RocketIcon,
} from "@/icons";

const WhyChooseUsSection: FC = () => (
  <Section
    heading="Why Choose Us"
    description="We make running your own VPN business simple, profitable, and hassle-free."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "More Profit, Less Hassle",
          description:
            "Keep up to 70% of revenue while we handle all the technical infrastructure.",
          Icon: DollarsBagIcon,
        },
        {
          title: "99.9% Uptime",
          description:
            "Our robust infrastructure ensures your service is always available to your customers.",
          Icon: ClockIcon,
        },
        {
          title: "No Technical Skills Needed",
          description:
            "Our intuitive platform requires zero coding or server management knowledge.",
          Icon: CodeIcon,
        },
        {
          title: "Transparent Reporting",
          description:
            "Real-time analytics and reports on users, revenue, and service performance.",
          Icon: CircleChartIcon,
        },
        {
          title: "Fast Deployment",
          description:
            "Get your branded VPN business up and running in just 1-3 days.",
          Icon: RocketIcon,
        },
        {
          title: "Enterprise-Grade Security",
          description:
            "State-of-the-art encryption and security protocols to protect your users.",
          Icon: LockIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <Card key={index} className="p-4 bg-default-100">
          <CardBody className="gap-3">
            <Icon className="text-primary size-10" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-default-500 text-base">{description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default WhyChooseUsSection;
