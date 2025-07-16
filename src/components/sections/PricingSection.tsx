"use client";

import React, { FC, useMemo } from "react";
import Section from "../Section";
import { usePlans } from "@/hooks/use-plans";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
  Tab,
  Tabs,
} from "@heroui/react";
import { TickIcon } from "@/icons";
import { Plan } from "@/types/plan";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

type FilterKey = "all" | "week" | "month" | "year";

const Plans: FC<{
  filterKey: FilterKey;
  isPlansLoading: boolean;
  plans: Plan[];
}> = ({ filterKey, isPlansLoading, plans = [] }) => {
  const router = useRouter();
  const { status: authStatus } = useSession();

  const filterPlans = useMemo(() => {
    if (filterKey === "all") return plans;
    return plans.filter((plan) => plan.duration_unit === filterKey);
  }, [filterKey, plans]);

  const handleSelectPlan = (planId: number) =>
    router.push(
      authStatus === "authenticated"
        ? `/checkout?planId=${planId}`
        : `/login?redirect=/checkout?planId=${planId}`
    );
  return (
    <>
      {!isPlansLoading && filterPlans.length === 0 && (
        <div className="col-span-full text-center text-lg text-default-500 py-8">
          No plans found
        </div>
      )}

      {!isPlansLoading &&
        filterPlans.map((plan) => (
          <Card
            key={plan.id}
            className={cn(
              "p-4",
              plan.is_best_deal ? "border-primary border-2 relative" : ""
            )}
          >
            {plan.is_best_deal && (
              <span className="text-sm font-medium text-background bg-primary px-2 py-1 absolute top-0 right-0 rounded-bl-2xl">
                MOST POPULAR
              </span>
            )}
            <CardHeader className="flex-col items-stretch text-start gap-y-2">
              <h1 className="text-2xl font-bold">{plan.name}</h1>
              {/* <p className="text-default-500 text-base">{plan.subTitle}</p> */}
              <p className="text-default-500 text-base">
                <span className="text-foreground text-4xl font-bold">
                  $
                  {(
                    parseFloat(plan.original_price) -
                    parseFloat(plan.discount_price)
                  ).toFixed(2)}
                </span>{" "}
                /{plan.duration > 1 ? plan.duration : ""} {plan.duration_unit}
              </p>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="flex flex-col gap-y-2">
                {plan.description.split(",").map((feature, index) => (
                  <li key={feature + index} className="flex items-center gap-2">
                    <span className="w-5">
                      <TickIcon className="size-5 text-primary" />
                    </span>
                    <p className="flex-1 text-default-700 text-lg">
                      {feature.trim()}
                    </p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                size="lg"
                color="primary"
                variant={plan.is_best_deal ? "solid" : "flat"}
                fullWidth
                onClick={() => handleSelectPlan(plan.id)}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
    </>
  );
};

const PricingSection: FC = () => {
  const { isPlansLoading, plans } = usePlans();
  return (
    <Section
      heading="Simple, Transparent Pricing"
      description="Choose the plan that works best for your business needs."
      classNames={{ section: "bg-default-100/80" }}
    >
      <Tabs
        aria-label="Pricing Plans"
        color="primary"
        size="lg"
        classNames={{ base: "", tabList: "shadow-md", tab: "capitalize" }}
      >
        {["month", "year"].map((key) => (
          <Tab key={key} title={key + "ly"} className="w-full">
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Plans
                filterKey={key as FilterKey}
                isPlansLoading={isPlansLoading}
                plans={plans}
              />
            </div>
          </Tab>
        ))}
      </Tabs>

      {isPlansLoading && (
        <div className="w-full mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card key={idx} className="w-full p-6">
              <CardHeader className="flex-col items-start gap-y-3">
                <div className="w-full flex items-center justify-between">
                  <Skeleton className="h-6 w-24 rounded" />
                  <Skeleton className="h-5 w-20 rounded" />
                </div>
                <div className="flex items-end gap-2">
                  <Skeleton className="h-8 w-16 rounded" />
                  <Skeleton className="h-4 w-20 rounded" />
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="flex flex-col gap-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-4 w-32 rounded" />
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Skeleton className="h-10 w-full rounded" />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
};

export default PricingSection;
