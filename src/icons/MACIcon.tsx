import React, { FC, SVGProps } from "react";

const MACIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 54 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 0C2.69063 0 0 2.69063 0 6V33C0 36.3094 2.69063 39 6 39H22.5L21.4969 42H15C13.3406 42 12 43.3406 12 45C12 46.6594 13.3406 48 15 48H39C40.6594 48 42 46.6594 42 45C42 43.3406 40.6594 42 39 42H32.5031L31.5 39H48C51.3094 39 54 36.3094 54 33V6C54 2.69063 51.3094 0 48 0H6ZM48 6V27H6V6H48Z"
      fill="currentColor"
    />
  </svg>
);

export default MACIcon;
