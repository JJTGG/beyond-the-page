"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.dataset.theme = "dark";
      setIsDark(true);
    } else if (savedTheme === "light") {
      document.documentElement.dataset.theme = "light";
      setIsDark(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      document.documentElement.dataset.theme = prefersDark
        ? "dark"
        : "light";

      setIsDark(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setIsDark(!isDark);
  };

  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? "Light" : "Dark"}
    </button>
  );
}