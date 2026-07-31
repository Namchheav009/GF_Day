import { useEffect, useState } from 'react';
import { HeartIcon } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Memories', href: '#memories' },
  { label: 'Little Things I Adore', href: '#little-things' },
  { label: 'Letter', href: '#letter' },
];

export function NavBar() {
  const [activeLink, setActiveLink] = useState(LINKS[0].href);

  useEffect(() => {
    const sectionIds = LINKS.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveLink = () => {
      const viewportMidpoint = window.innerHeight * 0.35;
      let currentSection = LINKS[0].href;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMidpoint && rect.bottom > viewportMidpoint) {
          currentSection = `#${section.id}`;
          break;
        }
      }

      setActiveLink((previousLink) => (previousLink === currentSection ? previousLink : currentSection));
    };

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);

    return () => {
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-blush-200/70 bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[68px] w-full max-w-[1180px] items-center justify-between gap-3 px-4 sm:px-6"
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2"
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 shadow-soft">
            <HeartIcon
              className="text-blush-600"
              size={30}
              strokeWidth={1.6}
              fill="#fbe4e6"
              aria-hidden="true"
            />
          </span>
          <span className="truncate font-script text-[1.8rem] leading-none text-blush-700 sm:text-2xl">
            My Everything
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end">
          <ul className="flex max-w-full items-center gap-3 overflow-x-auto whitespace-nowrap py-1 [scrollbar-width:none] sm:gap-4 lg:gap-6">
            {LINKS.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <li key={link.label} className="shrink-0">
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative pb-1 text-[13px] transition-colors sm:text-[14px] lg:text-[15px] ${
                      isActive
                        ? 'font-semibold text-blush-600'
                        : 'text-neutral-600 hover:text-blush-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-blush-500" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <a
          href="#letter"
          aria-label="Send a little love"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blush-300 bg-white shadow-soft transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2"
        >
          <HeartIcon
            size={18}
            className="text-blush-600"
            fill="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </a>
      </nav>
    </header>
  );
}
