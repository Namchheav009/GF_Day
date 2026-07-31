import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
  id?: string;
};

function Flourish({ flip = false }: {flip?: boolean;}) {
  return (
    <svg
      aria-hidden="true"
      width="72"
      height="20"
      viewBox="0 0 72 20"
      fill="none"
      className={flip ? 'scale-x-[-1] text-blush-400' : 'text-blush-400'}>
      
      <path
        d="M2 12c8-9 18-4 12 2-4 4-9-1-3-5 7-4 16 1 22 3 5 2 10 1 13-2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round" />
      
      <path
        d="M63 6.5c1.6-2 4.6-1.2 4.6 1.1 0 2-2.2 3.6-4.6 5.4-2.4-1.8-4.6-3.4-4.6-5.4 0-2.3 3-3.1 4.6-1.1z"
        fill="currentColor" />
      
    </svg>);

}

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Flourish />
      <h2
        id={id}
        className="font-serif text-3xl md:text-[2.6rem] font-bold text-blush-700 tracking-tight text-center">
        
        {children}
      </h2>
      <Flourish flip />
    </div>);

}