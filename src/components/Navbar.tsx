import { useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Clinic', href: '#clinic' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#appointment' },
];

export function Navbar({ onBookClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#22195C]/8 bg-[#F8F9FC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-base font-extrabold tracking-tight text-[#22195C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B2D8F] lg:text-lg"
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#3B2D8F] text-[#70F3A8]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden="true">
              <path
                d="M8.5 4.5C6 4.5 4.5 6.5 4.5 9.2C4.5 12.5 6.3 15.8 7.6 19.3C8 20.5 9.4 20.6 10 19.4L11.2 16.5C11.6 15.6 12.4 15.6 12.8 16.5L14 19.4C14.6 20.6 16 20.5 16.4 19.3C17.7 15.8 19.5 12.5 19.5 9.2C19.5 6.5 18 4.5 15.5 4.5C14 4.5 13 5.2 12 5.2C11 5.2 10 4.5 8.5 4.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{CLINIC_INFO.name}</span>
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex lg:gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 text-sm font-semibold text-[#5C5877] underline-offset-4 transition-colors duration-150 hover:text-[#22195C] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B2D8F]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action (+ mobile menu trigger on small/tablet screens) */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#70F3A8] px-5 py-2.5 text-sm font-bold text-[#22195C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#5AE998] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22195C] sm:inline-flex"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#22195C]/15 bg-white text-[#22195C] transition-colors hover:bg-[#F3F4FC] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#22195C]/10 bg-white px-4 py-5 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-xl px-3 py-3 text-base font-semibold text-[#22195C] transition-colors hover:bg-[#F3F4FC]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-[#22195C]/10 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#70F3A8] px-5 py-3 text-sm font-bold text-[#22195C]"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#22195C]/20 px-5 py-3 text-sm font-semibold text-[#22195C]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
