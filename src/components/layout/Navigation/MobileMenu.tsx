import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/features/theme/ModeToggle';
import { LanguageDropdown } from '@/components/features/i18n/LanguageDropdown';
import { NavLinks } from './NavLinks';
import type { MobileMenuProps } from '@/types';

export function MobileMenu({ isOpen, currentLang, onClose }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 shadow z-10 ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div>
        <NavLinks 
          currentLang={currentLang} 
          onLinkClick={onClose}
          className="flex-col gap-4"
        />
        <div className="flex items-center justify-center gap-4 pt-4 pb-4">
          <ModeToggle />
          <LanguageDropdown currentLang={currentLang} />
        </div>
      </div>
      <Separator />
    </div>
  );
}
