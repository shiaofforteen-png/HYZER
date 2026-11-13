import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { CLINIC_INFO, DENTAL_SERVICES } from '../data/clinicData';

interface FooterProps {
  onBookClick: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export function Footer({ onBookClick, onSelectService }: FooterProps) {
  return (
    <>
      <footer className="bg-[#22195C] pt-14 pb-24 text-white sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <a href="#top" className="inline-flex items-center gap-2.5 text-lg font-extrabold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#3B2D8F] text-[#70F3A8]">
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

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#E4E2F5]">
                Comprehensive general, cosmetic, orthodontic, and family dentistry in the heart of
                F-11 Markaz, Islamabad.
              </p>

              <button
                type="button"
                onClick={onBookClick}
                className="mt-6 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full bg-[#70F3A8] px-5 py-2.5 text-sm font-bold text-[#22195C] transition-colors hover:bg-[#5AE998]"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-sm font-bold text-white">Clinic</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#E4E2F5]">
                <li>
                  <a href="#about" className="transition-colors hover:text-[#70F3A8]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-[#70F3A8]">
                    Dental Services
                  </a>
                </li>
                <li>
                  <a href="#clinic" className="transition-colors hover:text-[#70F3A8]">
                    Clinical Standards
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="transition-colors hover:text-[#70F3A8]">
                    Patient Reviews
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="transition-colors hover:text-[#70F3A8]">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="font-display text-sm font-bold text-white">Treatments</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#E4E2F5]">
                {DENTAL_SERVICES.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="cursor-pointer text-left transition-colors hover:text-[#70F3A8]"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Phone */}
            <div className="lg:col-span-3">
              <h3 className="font-display text-sm font-bold text-white">Location &amp; Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-[#E4E2F5]">
                <p className="flex items-start gap-2.5 leading-relaxed">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#70F3A8]" aria-hidden="true" />
                  <span>{CLINIC_INFO.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#70F3A8]" aria-hidden="true" />
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="font-bold tabular-nums text-white hover:text-[#70F3A8]"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/12 pt-6 text-xs text-[#E4E2F5]/80 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
            <p>F-11 Markaz, Islamabad · {CLINIC_INFO.hours}</p>
          </div>
        </div>
      </footer>

      {/* Compact Mobile Sticky Quick Action Bar (<= 15% mobile viewport height) */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#22195C]/10 bg-white/95 px-3 py-2 backdrop-blur-md sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full border border-[#22195C]/20 bg-[#F8F9FC] px-3 py-2 text-xs font-bold tabular-nums text-[#22195C]"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full bg-[#70F3A8] px-3 py-2 text-xs font-bold text-[#22195C]"
          >
            <span>Book Slot</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}
