import React from 'react';
import { ModeToggle } from '@/components/modeToggle/ModeToggle';
import { LanguageDropdown } from '@/components/languageDropdown/LanguageDropdown';

interface DesktopControlsProps {
  currentLang: string;
}

export function DesktopControls({ currentLang }: DesktopControlsProps) {
  return (
    <div className="hidden md:flex items-center gap-4">
      <ModeToggle />
      <LanguageDropdown currentLang={currentLang} />
    </div>
  );
}
