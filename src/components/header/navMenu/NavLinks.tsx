import React from 'react';
import { useTranslations } from '@/i18n/utils';
import { languageList } from '@/i18n/ui';
import { navigation } from '@/lib/navigation';
import { handleSectionNavigation } from '@/lib/scroll';

interface NavLinksProps {
  currentLang: string;
  onLinkClick?: () => void;
  className?: string;
}

export function NavLinks({ currentLang, onLinkClick, className = '' }: NavLinksProps) {
  const translateLabels = useTranslations(
    currentLang as keyof typeof languageList,
  );

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
            {translateLabels(item.labelKey as any)}
          </a>
        </li>
      ))}
    </ul>
  );
}
