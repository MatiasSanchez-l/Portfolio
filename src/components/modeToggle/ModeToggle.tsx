import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { getThemePreference, applyTheme, type Theme } from "@/lib/theme";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<Theme>("dark");

  const handleOnCheckedChange = (checked: boolean) => {
    const newTheme: Theme = checked ? "dark" : "light";
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  const isChecked: boolean = theme === "dark";

  React.useEffect(() => {
    // Initialize theme from current state
    const currentTheme = getThemePreference();
    setThemeState(currentTheme);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Switch onCheckedChange={handleOnCheckedChange} checked={isChecked} />
      <Moon className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </div>
  );
}
