import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const mode = isDark ? "dark" : "light";
    document.body.dataset.theme = mode;
    localStorage.setItem("theme", mode);

    const themeElement = document.getElementById("theme-id");
    if (themeElement) {
      themeElement.dataset.theme = mode;
    } else {
      console.warn('Element with id:"theme-id" not found');
    }
  }, [isDark]);

  return [isDark, setIsDark] as const;
}
