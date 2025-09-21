import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import { useTranslations } from "@/i18n/utils";
import { languageList } from "@/i18n/ui.ts";
import { LanguageDropdown } from "@/components/languageDropdown/LanguageDropdown.tsx";

interface NavMenuProps {
  currentLang: string;
}

export function NavMenu({ currentLang }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const translateLabels = useTranslations(
    currentLang as keyof typeof languageList,
  );

  return (
    <>
      <nav className="flex items-center justify-between relative w-full">
        {/* Left: Logo + Menu */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo/logo.png"
              alt="Logo"
              className="h-8 w-auto rounded bg-white p-1"
            />
          </a>
          <ul className="hidden md:flex flex-row gap-6 items-center ml-8">
            <li>
              <a href="/" className="block py-2">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right: ModeToggle */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <LanguageDropdown currentLang={currentLang} />
        </div>
        {/* Hamburger button (small screens only) */}
        <Button
          className="md:hidden p-2 ml-auto"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          variant="ghost"
          size="icon"
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Hamburger menu</span>
        </Button>
      </nav>
      {/* Mobile menu: collapsible below nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 shadow z-10">
          <li>
            <a href="/" className="block py-2" onClick={() => setOpen(false)}>
              {translateLabels("nav.home")}
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              {translateLabels("nav.about")}
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              {translateLabels("nav.contact")}
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li>
            <LanguageDropdown currentLang={currentLang} />
          </li>
        </ul>
        <Separator />
      </div>
    </>
  );
}
