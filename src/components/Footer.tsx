import React from 'react';
import { HeartIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blush-700 px-4 py-5 sm:px-6 sm:py-6">
      <p className="flex flex-wrap items-center justify-center gap-2 text-center text-[13px] font-medium tracking-wide text-white sm:gap-3 sm:text-[15px]">
        <HeartIcon size={18} strokeWidth={1.6} aria-hidden="true" />
        Made with love, just for you
        <HeartIcon size={18} strokeWidth={1.6} aria-hidden="true" />
      </p>
    </footer>);

}