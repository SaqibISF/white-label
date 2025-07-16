"use client";

import React, { FC } from "react";
import Section, { SectionDescription, SectionHeading } from "../Section";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_US_PAGE_PATH } from "@/lib/pathnames";
import { StarIcon } from "@/icons";

const WhiteLabelSection: FC = () => (
  <Section isHeroSection className="grid lg:grid-cols-2 gap-8">
    <div className="flex flex-col items-start order-2 lg:order-1">
      <Chip
        size="md"
        startContent={<StarIcon className="size-4" />}
        color="primary"
        variant="flat"
        className="mb-4 px-3 py-1.5"
      >
        WhiteLabel Solution
      </Chip>
      <SectionHeading className="text-4xl sm:text-5xl font-bold text-start">
        Launch Your <span className="text-primary">Custom-Branded</span> VPN
        Apps
      </SectionHeading>
      <SectionDescription className="lg:w-full text-start p-0 text-xl lg:text-2xl leading-8">
        Build your VPN brand without coding. Get ready-made apps for Android,
        iOS, Windows & macOS with your logo, name, and theme. We handle the
        backend — you focus on your business.
      </SectionDescription>
      <div className="flex gap-4">
        <Button as={Link} href={CONTACT_US_PAGE_PATH} color="primary" size="lg">
          Started Building
        </Button>
        <Button
          as={Link}
          href={CONTACT_US_PAGE_PATH}
          color="primary"
          variant="flat"
          size="lg"
        >
          View Demo
        </Button>
      </div>
    </div>

    <Image
      src="/white-label-image.png"
      alt="Home Section Image"
      width={0}
      height={0}
      sizes="100vw"
      className="w-full sm:max-w-md max-w-64 h-auto place-self-center order-1 lg:order-2"
      placeholder="blur"
      blurDataURL="/white-label-image.png"
    />
  </Section>
);

export default WhiteLabelSection;
