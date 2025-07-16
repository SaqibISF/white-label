import React, { FC } from "react";
import Section from "../Section";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQsSections: FC = () => {
  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: "Can I upload my own logo and customize the app?",
      answer:
        "Yes, you can fully customize the apps with your own logo, brand name, colors, and even app store listings. Our platform makes it easy to create a completely branded experience for your customers.",
    },
    {
      question: "How many users can I sell to?",
      answer:
        "The number of users depends on your plan. Basic allows up to 100 users, Pro up to 500 users, and Premium offers unlimited users. You can always upgrade as your business grows.",
    },
    {
      question: "Do I need technical knowledge to run a VPN business?",
      answer:
        "No technical knowledge is required. We handle all the server infrastructure, security updates, and technical aspects. You focus on marketing and growing your customer base.",
    },
    {
      question: "How do I receive payments from customers?",
      answer:
        "You can integrate your own payment processor or use our built-in payment system. We support multiple payment methods including credit cards, PayPal, and cryptocurrencies.",
    },
    {
      question: "How long does it take to launch my VPN business?",
      answer:
        "Most clients are up and running within 1-3 business days. The exact timeline depends on your customization requirements and the plan you choose.",
    },
  ];

  return (
    <Section
      heading="Frequently Asked Questions"
      description="Find answers to common questions about our VPN reseller platform."
    >
      <Accordion variant="splitted" className="max-w-3xl w-full">
        {faqs.map(({ answer, question }, index) => (
          <AccordionItem key={index} aria-label={question} title={question} className="text-start text-default-500">
            {answer}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQsSections;
