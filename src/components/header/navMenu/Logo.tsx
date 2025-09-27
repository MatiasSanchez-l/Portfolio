import React from 'react';

export function Logo() {
  return (
    <a href="/" className="flex items-center">
      <img
        src="/logo/logo.png"
        alt="Logo"
        className="h-8 w-auto rounded bg-white p-1"
      />
    </a>
  );
}
