import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface ClinicShowcaseProps {
  onBookClick: () => void;
}

const CLINIC_STANDARDS = [
  {
    title: '01. Class-B Autoclave Sterilization',
    detail:
      'Every dental handpiece and surgical instrument goes through sealed, multi-cycle autoclave sterilization before each patient visit.',
  },
  {
    title: '02. Low-Dose Digital Diagnostics',
    detail:
      'On-screen intraoral cameras and digital X-rays let you inspect every tooth alongside your dentist with full price transparency.',
  },
  {
    title: '03. Easy F-11 Markaz Access',
    detail:
      'Located at Office no. 8, First Floor, Lord Trade Centre right near Najeeb Pharmacy with convenient Markaz parking.',
  },
];

export function ClinicShowcase({ onBookClick }: ClinicShowcaseProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="clinic" className="bg-[#F8F9FC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Left: Clinic Interior Photo */}
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl bg-[#EBEAF7] shadow-[0_24px_55px_-18px_rgba(34,25,92,0.14)]">
            {!imgFailed ? (
              <img
                src={IMAGES.clinicInterior}
                alt="Modern spotless treatment suite inside Smile Squad Dental Clinic in F-11 Markaz, Islamabad"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center p-8 text-center">
                <p className="font-display text-lg font-bold text-[#22195C]">
                  {CLINIC_INFO.shortAddress}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Clinical Standards */}
        <div className="lg:col-span-6">
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] font-extrabold tracking-tight text-[#22195C]">
            Calm, Sterile Suites Built Around Your{' '}
            <span className="relative inline-block italic">
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-1 left-0 h-3 rounded-sm bg-[#70F3A8]"
              />
              <span className="relative">Comfort</span>
            </span>
          </h2>

          <div className="mt-7 space-y-5">
            {CLINIC_STANDARDS.map((item) => (
              <div
                key={item.title}
                className="border-b border-[#22195C]/10 pb-5 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#3B2D8F]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#22195C]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#5C5877]">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="group mt-7 inline-flex min-h-[46px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#70F3A8] px-6 py-3 text-sm font-bold text-[#22195C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#5AE998] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22195C]"
          >
            <span>Reserve Your Visit</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
