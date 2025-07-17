"use client";

import React, { FC } from "react";
import NextLink from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@heroui/react";
import Input from "./ui/Input";
import { EnvelopeIcon } from "@/icons";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";

const ForgotPasswordCard: FC = () => {
  return (
    <form className="w-full max-w-lg">
      <Card className="p-6">
        <CardHeader className="flex-col gap-4">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-default-500 text-base">
            Please enter your email we will send you password reset link to your
            email.
          </p>
        </CardHeader>
        <CardBody className="gap-6">
          <Input
            isRequired
            label="Email"
            placeholder="Enter your email address"
            type="email"
            startContent={<EnvelopeIcon className="size-5 text-default-500" />}
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
          <Link as={NextLink} href={LOGIN_PAGE_PATH}>
            Back to Login
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ForgotPasswordCard;
