import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
