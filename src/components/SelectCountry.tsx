"use client";

import React, { FC, Key, useState } from "react";
import countries from "world-countries";
import Autocomplete from "./ui/Autocomplete";
import { AutocompleteItem, AutocompleteProps, Image } from "@heroui/react";

const SelectCountry: FC<Omit<AutocompleteProps, "children">> = ({
  ...props
}) => {
  const [countryCode, setCountryCode] = useState<Key | null>(null);
  return (
    <Autocomplete
      isRequired
      label="Country"
      placeholder="Select your country"
      onSelectionChange={(value) => setCountryCode(value)}
      startContent={
        <Image
          width="24px"
          src={`https://flagcdn.com/w40/${countryCode}.png`}
          alt="flag"
          className="size-6 rounded-xs"
        />
      }
      {...props}
    >
      {countries.map((country) => (
        <AutocompleteItem
          key={country.cca2.toLowerCase()}
          startContent={
            <Image
              width="24px"
              src={`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`}
              alt={country.name.common}
              className="rounded-xs"
            />
          }
        >
          {country.name.common}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

export default SelectCountry;
