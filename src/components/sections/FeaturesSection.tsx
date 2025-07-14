import React, { FC } from "react";
import Section from "../Section";
import {
  MobileIcon,
  MusicIcon,
  RealTimeIcon,
  ServerIcon,
  ShieldIcon,
  TimerIcon,
} from "@/icons";
import { Card, CardBody } from "@heroui/react";

const FeaturesSection: FC = () => (
  <Section
    heading="Powerful Features for Your VPN Business"
    description="Everything you need to launch and grow your own VPN brand without technical hassle."
    classNames={{section: "bg-default-100/80"}}
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Fully Branded Apps",
          description:
            "Customized iOS, Android, Windows and Mac apps with your logo, colors and brand identity.",
          Icon: MobileIcon,
        },
        {
          title: "High-Speed Global VPN Servers",
          description:
            "Access to our network of 500+ high-performance servers across 80+ countries worldwide.",
          Icon: ServerIcon,
        },
        {
          title: "Easy-to-Use Admin Dashboard",
          description:
            "Manage users, monitor performance, and track revenue from a single intuitive interface.",
          Icon: TimerIcon,
        },
        {
          title: "24/7 Support",
          description:
            "Dedicated technical support team to help you and your customers with any issues.",
          Icon: MusicIcon,
        },
        {
          title: "Multi-Protocol Support",
          description:
            "WireGuard, OpenVPN, IPsec and more protocols for maximum security and performance.",
          Icon: ShieldIcon,
        },
        {
          title: "Realtime Revenue and User Stats",
          description:
            "Detailed analytics on user activity, revenue streams, and business growth.",
          Icon: RealTimeIcon,
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
);

export default FeaturesSection;
