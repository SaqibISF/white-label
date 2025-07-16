import React, { FC } from "react";
import Section from "../Section";
import { Card, CardBody, CardHeader, User } from "@heroui/react";

const UsersRemarksSection: FC = () => (
  <Section
    heading="What Our Users Say"
    description="Join thousands of satisfied customers who trust SafePro VPN"
    classNames={{ section: "bg-default-100/80" }}
  >
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "Michael Roberts",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026701d",
          description: "TechShield VPN",
          remarks:
            "I launched my VPN business in just 2 days with zero technical knowledge. The platform is incredibly easy to use and the support team is always there when I need them.",
        },
        {
          name: "Sarah Johnson",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          description: "PrivacyGuard VPN",
          remarks:
            "The revenue reports are transparent and the profit margins are excellent. My VPN business is now generating consistent monthly income with minimal effort.",
        },
        {
          name: "David Chen",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026703d",
          description: "FastConnect VPN",
          remarks:
            "The white-label solution is perfect. My customers love the sleek interface and reliable connection. It's been a game changer for my online business portfolio.",
        },
      ].map(({ name, avatar, description, remarks }, index) => (
        <Card key={avatar + index} className="p-6">
          <CardHeader>
            <User
              avatarProps={{
                src: avatar,
              }}
              description={description}
              name={name}
            />
          </CardHeader>
          <CardBody>
            <div className="text-[#FFD700] text-2xl">★★★★★</div>
            <p className="text-default-500 text-justify">
              &quot;{remarks}&quot;
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default UsersRemarksSection;
