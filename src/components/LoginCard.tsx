"use client";

import React, { FC } from "react";
import NextLink from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Link,
} from "@heroui/react";
import Input from "./ui/Input";
import { EnvelopeIcon, QuestionMarkIcon } from "@/icons";
import { FORGOT_PASSWORD_PAGE_PATH, SIGNUP_PAGE_PATH } from "@/lib/pathnames";

const LoginCard: FC = () => {
  return (
    <form className="w-full max-w-lg">
      <Card className="p-6">
        <CardHeader className="flex-col gap-4">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-default-500 text-base">
            Sign in to your WhiteLabel account
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

          <Input
            isRequired
            label="Password"
            placeholder="Enter your password"
            type="password"
            startContent={
              <QuestionMarkIcon className="size-5 text-default-500" />
            }
          />

          <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-2">
            <Checkbox classNames={{ label: "text-default-600 text-base" }}>
              Remember me for 30 days
            </Checkbox>

            <Link
              as={NextLink}
              href={FORGOT_PASSWORD_PAGE_PATH}
              className="self-end"
            >
              Forgot Password?
            </Link>
          </div>
        </CardBody>
        <CardFooter className="flex-col gap-4">
          <Button
            type="submit"
            size="lg"
            color="primary"
            variant="solid"
            fullWidth
          >
            Login
          </Button>
          <p className="text-default-600">
            Don&apos;t have an account?{" "}
            <Link as={NextLink} href={SIGNUP_PAGE_PATH}>
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginCard;
