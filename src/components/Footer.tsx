import React from 'react';
import { HeartIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blush-700 px-6 py-6">
      <p className="flex items-center justify-center gap-3 text-[15px] font-medium tracking-wide text-white">
        <HeartIcon size={18} strokeWidth={1.6} aria-hidden="true" />
        Made with love, just for you
        <HeartIcon size={18} strokeWidth={1.6} aria-hidden="true" />
      </p>
    </footer>);

}