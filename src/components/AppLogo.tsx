import React, { FC } from "react";
import { cn } from "@/lib/utils";

const AppLogo: FC<{ className?: string }> = ({ className }) => (
  <h2 className={cn("text-primary font-bold text-2xl", className)}>WhiteLabel</h2>
);

export default AppLogo;
