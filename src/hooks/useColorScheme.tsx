import React, { useMemo } from "react";

export function useColorScheme() {
  const themeClass = useMemo(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }, []);
  React.useEffect(() => {
    const rootNode = document.querySelector("html");
    if (rootNode && themeClass) {
      rootNode.classList.add(themeClass);
    }
  }, [themeClass]);
}
