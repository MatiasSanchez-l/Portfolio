import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { languageList } from "@/i18n/ui.ts";

interface LanguageDropdownProps {
  currentLang: string;
}

export function LanguageDropdown({ currentLang }: LanguageDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">{currentLang.toUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageList).map(([key, label]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => {
              window.location.href = `/${key}`;
            }}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
