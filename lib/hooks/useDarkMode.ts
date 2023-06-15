import { useEffect, useState } from "react";
import { event } from "../gtm";

const LOCAL_STORAGE_THEME_KEY = "theme";

export const useDarkMode = (): [
  darkMode: boolean,
  toggleDarkMode: () => void,
] => {
  const isClient = typeof window !== "undefined";

  const [theme, setTheme] = useState(
    isClient && window.localStorage.theme
      ? window.localStorage.theme
      : isClient && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  const darkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (isClient) {
      event({
        event: "click_theme",
        value: theme,
      });

      window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }
  }, [theme]);

  return [darkMode, toggleDarkMode];
};
