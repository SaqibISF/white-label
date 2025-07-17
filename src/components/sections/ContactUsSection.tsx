"use client";

import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
} from "@/components/Section";
import { Chip } from "@heroui/react";
import { ShieldIcon } from "@/icons";

const ContactUsSection: FC = () => (
  <Section classNames={{ section: "bg-default-100/80" }}>
    <Chip
      size="md"
      startContent={<ShieldIcon className="size-4" />}
      color="primary"
      variant="flat"
      className="mb-4 px-3 py-1.5"
    >
      Contact Us WhiteLabel
    </Chip>
    <SectionHeading className="lg:w-2/3 text-5xl sm:text-6xl leading-12 sm:leading-16 lg:leading-18">
      Get in <span className="text-primary">Touch</span>
    </SectionHeading>
    <SectionDescription className="text-2xl sm:text-3xl lg:w-2/3">
      Have questions about Shell Shield? Need technical support? Want to share
      feedback? We&apos;re here to help you 24/7.
    </SectionDescription>
  </Section>
);

export default ContactUsSection;
