"use client";

import React, { FC } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import SelectCountry from "./SelectCountry";

const BecomePartnerCard: FC = () => {
  return (
    <form className="w-full max-w-lg">
      <Card className="p-6">
        <CardHeader className="flex-col gap-4">
          <h1 className="text-3xl font-bold">Become a partner</h1>
        </CardHeader>
        <CardBody className="gap-6">
          <Input
            isRequired
            label="Name"
            placeholder="What is your name?"
            type="text"
          />

          <Input
            isRequired
            label="Email"
            placeholder="Enter your email address"
            type="email"
          />

          <Input
            isRequired
            label="Company"
            placeholder="Write here your company"
            type="text"
          />

          <Input
            isRequired
            label="Address"
            placeholder="Enter your address"
            type="text"
          />

          <SelectCountry />

          <Input
            label="Website"
            placeholder="Enter your Website (optional)"
            type="text"
          />

          <Textarea
            label="Any other thing"
            placeholder="Type here your message"
          />
        </CardBody>
        <CardFooter className="flex-col gap-4">
          <Button
            type="submit"
            size="lg"
            color="primary"
            variant="solid"
            fullWidth
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default BecomePartnerCard;
