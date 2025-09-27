import React from 'react';
import type { LogoProps } from '@/types';

export function Logo({ className }: LogoProps) {
  return (
    <a href="/" className={`flex items-center ${className || ''}`}>
      <img
        src="/logo/logo.png"
        alt="Logo"
        className="h-8 w-auto rounded bg-white p-1"
      />
    </a>
  );
}
