import { useEffect, useState } from 'react';
import { HeartIcon, Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Memories', href: '#memories' },
  { label: 'Little Things I Adore', href: '#little-things' },
  { label: 'Letter', href: '#letter' },
];

export function NavBar() {
  const [activeLink, setActiveLink] = useState(LINKS[0].href);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative pb-1 text-[15px] transition-colors ${
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

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-blush-300 bg-white shadow-soft transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2"
          >
            {isMenuOpen ? (
              <X size={18} className="text-blush-600" strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu size={18} className="text-blush-600" strokeWidth={1.8} aria-hidden="true" />
            )}
          </button>

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
        </div>

        <a
          href="#letter"
          aria-label="Send a little love"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-blush-300 bg-white shadow-soft transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2 lg:flex"
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

      {isMenuOpen && (
        <div className="border-t border-blush-200/70 bg-cream/95 px-4 py-3 lg:hidden">
          <ul className="space-y-2">
            {LINKS.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blush-100 text-blush-700'
                        : 'text-neutral-700 hover:bg-blush-50 hover:text-blush-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
