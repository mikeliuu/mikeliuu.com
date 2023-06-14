import { useState } from "react";

export const useToggle = ({
  defaultValue = false,
}: {
  defaultValue?: boolean;
} = {}): [boolean, () => void] => {
  const [open, setOpen] = useState(defaultValue || false);

  const toggle = () => {
    setOpen((state) => !state);
  };

  return [open, toggle];
};
