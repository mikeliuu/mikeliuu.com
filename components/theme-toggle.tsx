"use client";

import React from "react";
import { Icons } from "./icon";
import { Toggle } from "./ui/toggle";
import { useDarkMode } from "@/lib/hooks/useDarkMode";
import { classMerge } from "@/lib/utils";

interface ThemeToggleProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const iconClass =
    "text-primary opacity-30 dark:opacity-100 dark:text-info text-sm font-medium";

  return (
    <div className={classMerge("flex flex-row items-center", className)}>
      <p className={iconClass}>
        <Icons.sun />
      </p>

      <Toggle
        inputClass="theme-toggle"
        className="mx-2 dark:border-gray-100"
        checked={darkMode}
        onChange={toggleDarkMode}
      />

      <p className={iconClass}>
        <Icons.moon />
      </p>
    </div>
  );
}
