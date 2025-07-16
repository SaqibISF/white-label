import React, { FC, SVGProps } from "react";

const EnvelopeIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 37 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.03125 0C2.16797 0 0.65625 1.51172 0.65625 3.375C0.65625 4.43672 1.15547 5.43516 2.00625 6.075L17.3062 17.55C18.1078 18.1477 19.2047 18.1477 20.0063 17.55L35.3062 6.075C36.157 5.43516 36.6562 4.43672 36.6562 3.375C36.6562 1.51172 35.1445 0 33.2812 0H4.03125ZM0.65625 7.875V22.5C0.65625 24.982 2.67422 27 5.15625 27H32.1562C34.6383 27 36.6562 24.982 36.6562 22.5V7.875L21.3562 19.35C19.7531 20.5523 17.5594 20.5523 15.9563 19.35L0.65625 7.875Z"
      fill="currentColor"
    />
  </svg>
);

export default EnvelopeIcon;
