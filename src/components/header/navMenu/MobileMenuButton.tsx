import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import type { MobileMenuButtonProps } from '@/types';

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <Button
      className="md:hidden p-2 ml-auto"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onToggle}
      variant="ghost"
      size="icon"
    >
      <Menu className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
    </Button>
  );
}
