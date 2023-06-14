import { useEffect, useState } from "react";

const LOCALSTORAGE_THEME_KEY = "theme";

export const useDarkMode = (): [
  darkMode: boolean,
  toggleDarkMode: () => void,
] => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChangeTheme = (themeType: "light" | "dark") => {
    const isDarkMode = themeType === "dark";

    const root = document.documentElement;

    isDarkMode ? root.classList.add("dark") : root.classList.remove("dark");

    setDarkMode(isDarkMode);

    window.localStorage.setItem(LOCALSTORAGE_THEME_KEY, themeType);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);

    handleChangeTheme(darkMode ? "light" : "dark");
  };

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem(LOCALSTORAGE_THEME_KEY);
  };

  const initTheme = () => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    if (isLocalStorageEmpty()) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      localStorage.setItem(LOCALSTORAGE_THEME_KEY, systemTheme);

      root.classList.add(systemTheme);
      handleChangeTheme(systemTheme);
    } else {
      const isDarkTheme: boolean =
        localStorage.getItem(LOCALSTORAGE_THEME_KEY) === "dark";

      handleChangeTheme(isDarkTheme ? "dark" : "light");
    }
  };

  useEffect(() => initTheme());

  return [darkMode, toggleDarkMode];
};
