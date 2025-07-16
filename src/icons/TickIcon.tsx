import React, { FC, SVGProps } from "react";

const TickIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.7062 0.293701C14.0969 0.684326 14.0969 1.3187 13.7062 1.70933L5.70624 9.70933C5.31562 10.1 4.68124 10.1 4.29062 9.70933L0.290619 5.70933C-0.100006 5.3187 -0.100006 4.68433 0.290619 4.2937C0.681244 3.90308 1.31562 3.90308 1.70624 4.2937L4.99999 7.58433L12.2937 0.293701C12.6844 -0.0969238 13.3187 -0.0969238 13.7094 0.293701H13.7062Z"
      fill="currentColor"
    />
  </svg>
);

export default TickIcon;
