import React, { FC, SVGProps } from "react";

const WindowsIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 5.78437L17.2125 3.4125V20.0438H0V5.78437ZM0 36.2156L17.2125 38.5875V22.1625H0V36.2156ZM19.1063 38.8406L42 42V22.1625H19.1063V38.8406ZM19.1063 3.15937V20.0438H42V0L19.1063 3.15937Z"
      fill="currentColor"
    />
  </svg>
);

export default WindowsIcon;
