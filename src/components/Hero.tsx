import { useState } from 'react';
import { ArrowUpRight, Check, Phone, Star } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
}

const TRUST_POINTS = [
  'Comprehensive dental care for kids, adults, and seniors',
  'Same-day emergency dental appointments in F-11 Markaz',
  'Transparent treatment plans with modern pain-free equipment',
];

export function Hero({ onBookClick }: HeroProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="top" className="bg-[#F8F9FC] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left Column: Core Proposition & Booking CTAs */}
        <div className="lg:col-span-6">
          <p className="mb-4 text-sm font-semibold text-[#3B2D8F]">
            Smile Squad Dental Clinic · F-11 Markaz, Islamabad
          </p>

          <h1 className="font-display text-[clamp(2.35rem,4.6vw,3.85rem)] leading-[1.08] font-extrabold tracking-tight text-[#22195C]">
            Your Smile, Our Priority — Dental Care in{' '}
            <span className="relative inline-block italic">
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-1 left-0 h-3.5 rounded-sm bg-[#70F3A8]"
              />
              <span className="relative">Islamabad</span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C5877] sm:text-lg">
            Gentle, technology-driven general, cosmetic, and family dentistry at{' '}
            <span className="font-semibold text-[#22195C]">Lord Trade Centre, F-11 Markaz</span>—designed
            to make every visit calm, clear, and comfortable.
          </p>

          {/* Primary Conversion Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={onBookClick}
              className="group inline-flex min-h-[48px] shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#70F3A8] px-7 py-3.5 text-sm font-bold text-[#22195C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#5AE998] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22195C]"
            >
              <span>Book Appointment</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex min-h-[48px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[#22195C] bg-transparent px-6 py-3.5 text-sm font-bold text-[#22195C] transition-colors duration-150 hover:bg-[#22195C] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22195C]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="tabular-nums">Call {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust Checklist */}
          <ul className="mt-8 space-y-3">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm font-medium text-[#22195C] sm:text-[15px]">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#70F3A8] text-[#22195C]">
                  <Check className="h-3.5 w-3.5 stroke-[2.6]" aria-hidden="true" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Hero Clinical Visual + Rotating Experience Seal + Floating Review Bar */}
        <div className="relative lg:col-span-6">
          {/* Rotating Mint Seal Badge */}
          <div
            aria-hidden="true"
            className="absolute -top-5 -left-3 z-20 hidden h-24 w-24 items-center justify-center rounded-full bg-[#70F3A8] shadow-[0_14px_30px_rgba(34,25,92,0.14)] sm:flex lg:-left-6 lg:h-26 lg:w-26"
          >
            <svg viewBox="0 0 120 120" className="animate-seal-spin h-22 w-22">
              <defs>
                <path
                  id="sealCirclePath"
                  d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                />
              </defs>
              <text
                fill="#22195C"
                fontSize="9.2"
                fontWeight="800"
                letterSpacing="2.2"
              >
                <textPath href="#sealCirclePath" startOffset="0%">
                  10+ YEARS OF CARE • F-11 ISLAMABAD •
                </textPath>
              </text>
            </svg>
            <div className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3B2D8F]">
              <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
                <path
                  d="M8.5 4.5C6 4.5 4.5 6.5 4.5 9.2C4.5 12.5 6.3 15.8 7.6 19.3C8 20.5 9.4 20.6 10 19.4L11.2 16.5C11.6 15.6 12.4 15.6 12.8 16.5L14 19.4C14.6 20.6 16 20.5 16.4 19.3C17.7 15.8 19.5 12.5 19.5 9.2C19.5 6.5 18 4.5 15.5 4.5C14 4.5 13 5.2 12 5.2C11 5.2 10 4.5 8.5 4.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Main Clinical Image Container */}
          <div className="relative overflow-hidden rounded-3xl bg-[#EBEAF7] shadow-[0_24px_60px_-16px_rgba(34,25,92,0.16)]">
            {!imgFailed ? (
              <img
                src={IMAGES.heroDentalCare}
                alt="Smile Squad Dental Clinic team welcoming patients in F-11 Markaz, Islamabad"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="aspect-[10/11] w-full object-cover object-top"
              />
            ) : (
              <div className="flex aspect-[10/11] w-full flex-col items-center justify-center bg-gradient-to-br from-[#EBEAF7] via-[#F3F4FC] to-[#70F3A8]/30 p-8 text-center">
                <span className="font-display text-xl font-bold text-[#22195C]">
                  Smile Squad Dental Clinic
                </span>
                <span className="mt-1 text-sm text-[#5C5877]">
                  Modern Family Dental Care · F-11 Markaz, Islamabad
                </span>
              </div>
            )}

            {/* Subtle Bottom Scrim for Overlay Readability */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#22195C]/35 via-[#22195C]/10 to-transparent"
            />

            {/* Floating Social Proof Card */}
            <a
              href="#reviews"
              className="group absolute right-4 bottom-4 left-4 flex items-center justify-between gap-4 rounded-2xl bg-white/98 p-4 shadow-[0_14px_34px_rgba(34,25,92,0.16)] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2D8F]"
            >
              <div className="flex items-center gap-3.5">
                {/* Clean Initials Avatar Stack */}
                <div className="flex -space-x-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#3B2D8F] text-xs font-bold text-white">
                    HM
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#70F3A8] text-xs font-bold text-[#22195C]">
                    SQ
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#EBEAF7] text-xs font-bold text-[#22195C]">
                    ZM
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-0.5 text-[#22195C]" aria-label="4.9 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#22195C] text-[#22195C]" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold tabular-nums text-[#22195C]">
                      4.9
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-[#5C5877] sm:text-sm">
                    <span className="tabular-nums text-[#22195C]">2,500+</span> Happy Patients in Islamabad
                  </p>
                </div>
              </div>

              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F4FC] text-[#22195C] transition-colors group-hover:bg-[#70F3A8]">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
