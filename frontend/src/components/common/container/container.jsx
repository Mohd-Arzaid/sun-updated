import React from "react";
import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn("max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12", className)}
    >
      {children}
    </div>
  );
};

export default Container;
