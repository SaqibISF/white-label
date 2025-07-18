import React, { FC } from "react";
import AppLogo from "./AppLogo";
import NextLink from "next/link";
import { Link } from "@heroui/react";
import {
  ABOUT_PAGE_PATH,
  CONTACT_US_PAGE_PATH,
  PRIVACY_POLICY_PAGE_PATH,
  TERMS_OF_SERVICES_PAGE_PATH,
} from "@/lib/pathnames";

const Footer: FC = () => {
  return (
    <footer className="text-white bg-gray-900 w-full">
      <div className="w-full max-w-7xl px-4 py-8 mx-auto flex flex-col items-center text-center gap-4">
          <AppLogo />
          <p className="text-gray-300 text-base">
            Launch your own VPN brand with our white-label reseller platform.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {[
              { name: "About Us", href: ABOUT_PAGE_PATH },
              { name: "Contact Us", href: CONTACT_US_PAGE_PATH },
              { name: "Privacy Policy", href: PRIVACY_POLICY_PAGE_PATH },
              { name: "Terms of Services", href: TERMS_OF_SERVICES_PAGE_PATH },
            ].map(({ name, href }) => (
              <Link key={href} as={NextLink} href={href}>
                {name}
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
