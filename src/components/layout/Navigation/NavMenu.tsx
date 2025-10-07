import React, { useState } from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";
import { DesktopControls } from "./DesktopControls";
import type { NavMenuProps } from '@/types';

export function NavMenu({ currentLang }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav className="flex items-center justify-between relative w-full">
        {/* Left: Logo + Desktop Navigation */}
        <div className="flex items-center">
          <Logo currentLang={currentLang} />
          <NavLinks 
            currentLang={currentLang} 
            className="hidden md:flex ml-8"
          />
        </div>
        
        {/* Right: Desktop Controls + Mobile Menu Button */}
        <div className="flex items-center">
          <DesktopControls currentLang={currentLang} />
          <MobileMenuButton isOpen={isOpen} onToggle={handleToggle} />
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isOpen} 
        currentLang={currentLang} 
        onClose={handleClose} 
      />
    </>
  );
}
