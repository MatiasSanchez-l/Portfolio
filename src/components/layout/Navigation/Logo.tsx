import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { LogoProps } from '@/types';

export function Logo({ className, currentLang }: LogoProps) {
  const homeUrl = `/${currentLang}/`;
  
  return (
    <a href={homeUrl} className={`flex items-center ${className || ''}`}>
      <Avatar className="w-8 h-8">
        <AvatarImage
          alt="Matias Sanchez"
        />
        <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">
          MS
        </AvatarFallback>
      </Avatar>
    </a>
  );
}
