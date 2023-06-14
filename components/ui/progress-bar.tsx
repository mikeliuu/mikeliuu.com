"use client";

import React, { useEffect, useMemo, useState } from "react";
import { classMerge } from "@/lib/utils";

interface ProgressBarProps extends React.InputHTMLAttributes<HTMLDivElement> {
  progress?: number;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, progress = 5, checked, onChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={classMerge(
          "progress-bar flex items-center relative w-full rounded-[32px] h-4",
          className,
        )}
      >
        <div
          style={{ width: `${progress}%` }}
          className={classMerge(
            "h-[12px] rounded-[26px] m-[1px] transition-all",
          )}
        />
      </div>
    );
  },
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
