import React, { FC, SVGProps } from "react";

const PlayIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 27 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.13281 1.24221C4.09219 0.60237 2.78437 0.581277 1.72266 1.17893C0.660937 1.77659 0 2.90159 0 4.12503V28.875C0 30.0985 0.660937 31.2235 1.72266 31.8211C2.78437 32.4188 4.09219 32.3907 5.13281 31.7578L25.3828 19.3828C26.3883 18.7711 27 17.6813 27 16.5C27 15.3188 26.3883 14.236 25.3828 13.6172L5.13281 1.24221Z"
      fill="currentColor"
    />
  </svg>
);

export default PlayIcon;
