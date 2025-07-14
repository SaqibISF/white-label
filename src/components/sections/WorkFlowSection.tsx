import React, { FC } from "react";
import Section from "../Section";
import { ArrowRightIcon } from "@/icons";

const WorkFlowSection: FC = () => (
  <Section
    heading="How It Works"
    description="Get your VPN business up and running in just three simple steps."
  >
    <div className="max-w-5xl grid md:grid-cols-8 place-items-center gap-4">
      {[
        {
          id: 1,
          title: "Choose a Plan",
          description:
            "Select the package that fits your business needs and budget.",
        },
        null,
        {
          id: 2,
          title: "Add Your Logo & Name",
          description:
            "Customize the apps and dashboard with your brand identity.",
        },
        null,
        {
          id: 3,
          title: "Start Selling",
          description:
            "Launch your branded VPN and start earning revenue immediately.",
        },
      ].map((item, index) =>
        item ? (
          <div
            key={index}
            className="md:col-span-2 flex flex-col items-center gap-y-4"
          >
            <span className="bg-default-100 size-20 rounded-full flex items-center justify-center">
              <h1 className="text-primary text-3xl font-bold">{item.id}</h1>
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-default-500 text-base">{item.description}</p>
          </div>
        ) : (
          <ArrowRightIcon
            key={index}
            className="text-primary size-10 rotate-90 md:rotate-0"
          />
        )
      )}
    </div>
  </Section>
);

export default WorkFlowSection;
