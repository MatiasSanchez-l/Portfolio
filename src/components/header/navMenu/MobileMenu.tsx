import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/modeToggle/ModeToggle';
import { LanguageDropdown } from '@/components/languageDropdown/LanguageDropdown';
import { NavLinks } from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  currentLang: string;
  onClose: () => void;
}

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
        <div className="flex items-center gap-4 pt-4">
          <ModeToggle />
          <LanguageDropdown currentLang={currentLang} />
        </div>
      </div>
      <Separator />
    </div>
  );
}
