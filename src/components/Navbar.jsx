import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../content/site';
import { useConsultation } from '../lib/consultation';
import { buttonClass } from '../lib/styles';
import Logo from './ui/Logo';

const sectionId = (href) => href.split('#')[1];

export default function Navbar() {
  const openConsultation = useConsultation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for whichever section sits in the middle of the viewport
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or when the viewport grows to desktop
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = (e) => e.matches && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  const handleContact = () => {
    setMenuOpen(false);
    openConsultation();
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || menuOpen ? 'border-line bg-white/90 shadow-sm backdrop-blur-md' : 'border-transparent bg-white'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="/#home" className="shrink-0 rounded-lg" aria-label="LoDi Tech Consulting, home">
          <Logo className="h-11 sm:h-12 lg:h-14" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeId === sectionId(link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? 'location' : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:text-brand-600 ${
                      active ? 'text-brand-600' : 'text-ink'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand transition-transform duration-300 ${
                        active ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <button type="button" onClick={handleContact} className={buttonClass({ size: 'sm' })}>
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-lg bg-surface text-ink transition-colors hover:bg-line lg:hidden cursor-pointer"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white px-4 pb-6 pt-3 shadow-lg animate-fade-in lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" onClick={handleContact} className={buttonClass({ className: 'mt-4 w-full' })}>
          Contact us
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
