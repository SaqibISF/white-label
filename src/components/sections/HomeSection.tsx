"use client";

import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
} from "../Section";
import { Button } from "@heroui/react";
import Link from "next/link";
import { PRICING_PAGE_PATH, WHITE_LABEL_PAGE_PATH } from "@/lib/pathnames";
import Image from "next/image";

const HomeSection: FC = () => (
  <Section isHeroSection className="grid lg:grid-cols-2 gap-8">
    <div className="flex flex-col items-start order-2 lg:order-1">
      <SectionHeading className="text-4xl sm:text-5xl font-bold text-start">
        Launch Your <span className="text-primary">Own VPN Brand</span> in
        Minutes
      </SectionHeading>
      <SectionDescription className="lg:w-full text-start p-0 text-xl lg:text-2xl leading-8">
        No servers. No coding. Just your brand, your profit. Start your VPN
        business today with our white-label solution.
      </SectionDescription>
      <div className="flex gap-4">
        <Button
          as={Link}
          href={WHITE_LABEL_PAGE_PATH}
          color="primary"
          size="lg"
        >
          Get Started
        </Button>
        <Button
          as={Link}
          href={PRICING_PAGE_PATH}
          color="primary"
          variant="flat"
          size="lg"
        >
          See Pricing
        </Button>
      </div>
    </div>

    <Image
      src="/home-section-image.png"
      alt="Home Section Image"
      width={0}
      height={0}
      sizes="100vw"
      className="w-full sm:max-w-96 max-w-64 h-auto place-self-center order-1 lg:order-2"
      placeholder="blur"
      blurDataURL="/home-section-image.png"
    />
  </Section>
);

export default HomeSection;
