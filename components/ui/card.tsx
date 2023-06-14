import React from "react";
import { classMerge } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={classMerge(
          "card w-[300px] h-[300px] rounded-[1.5rem] p-8",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export { Card };
