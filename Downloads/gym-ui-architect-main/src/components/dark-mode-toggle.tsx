import React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(() =>
    document.documentElement.classList.contains("dark")
  );

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle dark mode">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}; 