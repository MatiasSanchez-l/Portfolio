import React from 'react';
import { ModeToggle } from '@/components/features/theme/ModeToggle';
import { LanguageDropdown } from '@/components/features/i18n/LanguageDropdown';
import type { DesktopControlsProps } from '@/types';

export function DesktopControls({ currentLang }: DesktopControlsProps) {
  return (
    <div className="hidden md:flex items-center gap-4">
      <ModeToggle />
      <LanguageDropdown currentLang={currentLang} />
    </div>
  );
}
