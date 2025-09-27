import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { navigation } from '@/lib/navigation';
import { handleSectionNavigation } from '@/lib/scroll';
import type { NavLinksProps } from '@/types';

export function NavLinks({ currentLang, onLinkClick, className = '' }: NavLinksProps) {
  const { t } = useTranslations(currentLang);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    handleSectionNavigation(href, onLinkClick);
  };

  return (
    <ul className={`flex items-center gap-4 p-4 ${className}`}>
      {navigation.map((item) => (
        <li key={item.href}>
          <a 
            href={item.href} 
            className="block py-2 hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => handleClick(e, item.href)}
          >
            {t(item.labelKey)}
          </a>
        </li>
      ))}
    </ul>
  );
}
