import React, { FC, SVGProps } from "react";

const LockIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 27 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.09375 9.1875V12H18.4688V9.1875C18.4688 6.59766 16.3711 4.5 13.7812 4.5C11.1914 4.5 9.09375 6.59766 9.09375 9.1875ZM5.34375 12V9.1875C5.34375 4.5293 9.12305 0.75 13.7812 0.75C18.4395 0.75 22.2188 4.5293 22.2188 9.1875V12H23.1562C25.2246 12 26.9062 13.6816 26.9062 15.75V27C26.9062 29.0684 25.2246 30.75 23.1562 30.75H4.40625C2.33789 30.75 0.65625 29.0684 0.65625 27V15.75C0.65625 13.6816 2.33789 12 4.40625 12H5.34375Z"
      fill="currentColor"
    />
  </svg>
);

export default LockIcon;
