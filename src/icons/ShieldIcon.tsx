import React, { FC, SVGProps } from "react";

const ShieldIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 35 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.3281 0.5C17.6515 0.5 17.975 0.570313 18.2703 0.703906L31.5101 6.32188C33.057 6.97578 34.2101 8.50156 34.2031 10.3438C34.1679 17.3188 31.2992 30.0805 19.1843 35.8813C18.0101 36.4438 16.6461 36.4438 15.4718 35.8813C3.357 30.0805 0.488252 17.3188 0.453096 10.3438C0.446065 8.50156 1.59919 6.97578 3.14606 6.32188L16.3929 0.703906C16.6812 0.570313 17.0047 0.5 17.3281 0.5ZM17.3281 5.19688V31.775C27.0312 27.0781 29.6398 16.6789 29.7031 10.4422L17.3281 5.19688Z"
      fill="currentColor"
    />
  </svg>
);

export default ShieldIcon;
