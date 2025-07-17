"use client";

import React, { FC } from "react";
import Section from "../Section";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@heroui/react";
import { LocationPinIcon, PhoneIcon, EnvelopeIcon } from "@/icons";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const SendMessageSection: FC = () => {
  return (
    <Section
      heading="Send Us a Message"
      description="Fill out the form below and we'll get back to you as soon as possible"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row items-start justify-between gap-6">
        <form className="w-full lg:max-w-2xl">
          <Card className="p-6">
            <CardBody className="gap-6">
              <Input
                label={
                  <>
                    Name <span className="text-default-500">(Optional)</span>
                  </>
                }
                placeholder="What is your name?"
                type="text"
              />

              <Input
                label="Email"
                placeholder="Enter your email address"
                type="email"
                isRequired
              />

              <Input
                label="Subject"
                placeholder="Enter Subject here"
                type="text"
                isRequired
              />

              <Textarea
                isRequired
                label="Message"
                placeholder="Type here your message"
              />
            </CardBody>
            <CardFooter>
              <Button size="lg" color="primary" variant="solid" fullWidth>
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </form>

        <div className="w-full lg:max-w-md flex flex-col gap-4">
          <Card className="p-4">
            <CardHeader className="text-xl font-bold">
              Contact Information
            </CardHeader>
            <CardBody className="gap-4">
              {[
                {
                  key: "Address",
                  value:
                    "123 Privacy Street Secure City, SC 12345 United States",
                  subValue: "",
                  Icon: LocationPinIcon,
                },
                {
                  key: "Phone",
                  value: "+1 (555) 123-4567",
                  subValue: "24/7 Support Available",
                  Icon: PhoneIcon,
                },
                {
                  key: "Email",
                  value: "support@whitelabel.com",
                  subValue: "Response within 2 hours",
                  Icon: EnvelopeIcon,
                },
              ].map(({ key, value, subValue, Icon }) => (
                <div key={key} className="flex items-center gap-2">
                  <Chip
                    color="primary"
                    variant="flat"
                    className="size-16 rounded-md"
                  >
                    <Icon />
                  </Chip>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold">{key}</h4>
                    <p className="text-default-500 text-base">{value}</p>
                    <p className="text-default-500 text-sm">{subValue}</p>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card className="p-4">
            <CardHeader className="text-xl font-bold">
              Business Hours
            </CardHeader>
            <CardBody className="gap-4">
              <div className="text-base flex items-center justify-between gap-2">
                <span className="text-default-500">Monday - Friday</span>
                <span className="font-medium">24/7</span>
              </div>

              <div className="text-base flex items-center justify-between gap-2">
                <span className="text-default-500">Saturday</span>
                <span className="font-medium">24/7</span>
              </div>

              <div className="text-base flex items-center justify-between gap-2">
                <span className="text-default-500">Sunday</span>
                <span className="font-medium">24/7</span>
              </div>
            </CardBody>
            <CardFooter>
              <Alert
                color="primary"
                variant="flat"
                title="Our support team is available 24/7 to assist you"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default SendMessageSection;
