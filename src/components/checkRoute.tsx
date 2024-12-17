"use client";

import { usePathname } from "next/navigation";

export const CheckRoute = () => {
  const pathname = usePathname();

  return pathname;
};
