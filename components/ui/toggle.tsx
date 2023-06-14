import React from "react";
import { classMerge } from "@/lib/utils";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  toggleClass?: string;
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, toggleClass, checked, onChange, ...props }, ref) => {
    return (
      <label
        className={classMerge(
          "relative inline-flex items-center cursor-pointer",
          className,
        )}
      >
        <input
          ref={ref}
          {...props}
          className="sr-only peer"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />

        <div
          className={classMerge(
            "toggle peer h-8 w-[60px] rounded-[35px]",
            "after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:rounded-[35px] after:h-[28px] after:w-[28px] after:transition-all after:bg-secondary dark:after:bg-dark-light  dark:peer-checked:bg-dark",
            "peer-checked:after:translate-x-full peer-checked:bg-secondary-light",
            // "bg-secondary-light dark:bg-dark",
            toggleClass,
          )}
        />
      </label>
    );
  },
);

Toggle.displayName = "Toggle";

export { Toggle };
