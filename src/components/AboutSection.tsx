import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface AboutSectionProps {
  onBookClick: () => void;
}

export function AboutSection({ onBookClick }: AboutSectionProps) {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const [xrayFailed, setXrayFailed] = useState(false);
  const [alignerFailed, setAlignerFailed] = useState(false);

  return (
    <section id="about" className="bg-[#3B2D8F] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Left Column: Specialist White-Framed Portrait + Quote */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl bg-white p-4 pb-24 sm:pb-24">
            {!portraitFailed ? (
              <img
                src={IMAGES.leadDentistPortrait}
                alt="Dr. Mustabshira, Senior Dental Surgeon at Smile Squad Dental Clinic"
                referrerPolicy="no-referrer"
                onError={() => setPortraitFailed(true)}
                className="aspect-square w-full rounded-2xl object-cover object-top"
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-[#F3F4FC] text-center">
                <span className="font-display text-lg font-bold text-[#22195C]">
                  Dr. Mustabshira · BDS, DDS
                </span>
              </div>
            )}

            {/* Inset Indigo Nameplate Card */}
            <button
              type="button"
              onClick={onBookClick}
              className="group absolute right-5 bottom-5 left-5 flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-[#43349C] px-5 py-4 text-left shadow-[0_12px_28px_rgba(34,25,92,0.22)] transition-colors hover:bg-[#362886] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70F3A8]"
            >
              <div>
                <p className="font-display text-lg font-bold text-white">Dr. Mustabshira</p>
                <p className="text-sm font-medium text-[#E4E2F5]">
                  Senior Dental Surgeon · BDS, DDS
                </p>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/12 text-white transition-colors group-hover:bg-[#70F3A8] group-hover:text-[#22195C]">
                <ArrowUpRight className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
            </button>
          </div>

          <p className="mt-6 text-base leading-relaxed text-[#E4E2F5]">
            “We don&apos;t just treat teeth—we build lasting confidence and gentle dental experiences
            for every family walking into our F-11 clinic.”
          </p>

          <button
            type="button"
            onClick={onBookClick}
            className="group mt-6 inline-flex min-h-[46px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#70F3A8] px-6 py-3 text-sm font-bold text-[#22195C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#5AE998] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Book with Our Team</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Right Column: Clinic Story + Bento Stat & Diagnostics Grid */}
        <div className="lg:col-span-7">
          <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-[1.12] font-extrabold tracking-tight text-white">
            Dedicated to Your Dental{' '}
            <span className="relative inline-block italic">
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-1 left-0 h-3 rounded-sm bg-[#70F3A8]/85"
              />
              <span className="relative">Health</span>
            </span>
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-[#E4E2F5]">
            <p>
              At <strong className="font-semibold text-white">{CLINIC_INFO.name}</strong>, we believe
              a healthy smile is the cornerstone of everyday comfort and confidence. Conveniently
              located at <strong className="font-semibold text-white">Lord Trade Centre, F-11 Markaz</strong>{' '}
              near Najeeb Pharmacy, our clinic serves patients from F-11, F-10, E-11, G-11, and
              across Islamabad.
            </p>
            <p>
              From routine ultrasonic cleanings and pediatric checkups to digital rotary root canals,
              clear aligners, and implants, every room follows strict Class-B autoclave sterilization
              and uses low-dose digital imaging so your care is both accurate and pain-free.
            </p>
          </div>

          {/* Asymmetric Bento Sub-Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-12">
            {/* Mint Green Stat Card */}
            <button
              type="button"
              onClick={onBookClick}
              className="group flex cursor-pointer flex-col justify-between rounded-2xl bg-[#70F3A8] p-6 text-left text-[#22195C] transition-transform duration-150 hover:-translate-y-0.5 sm:col-span-6"
            >
              <div>
                <p className="font-display text-5xl font-extrabold tracking-tight tabular-nums">
                  +12
                </p>
                <p className="mt-3 text-sm leading-relaxed font-semibold text-[#22195C]/90">
                  Years of combined clinical experience across restorative, cosmetic, and family
                  dentistry in Islamabad.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-[#22195C]/12 pt-4">
                <span className="text-xs font-bold">Schedule a consultation</span>
                <ArrowUpRight
                  className="h-4.5 w-4.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </button>

            {/* Stacked Clinical Detail Photos */}
            <div className="flex flex-col gap-4 sm:col-span-6">
              <div className="overflow-hidden rounded-2xl bg-[#2D2172]">
                {!xrayFailed ? (
                  <img
                    src={IMAGES.bentoXray}
                    alt="Digital panoramic dental X-ray diagnostics at Smile Squad Dental Clinic"
                    referrerPolicy="no-referrer"
                    onError={() => setXrayFailed(true)}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center p-4 text-sm font-semibold text-[#E4E2F5]">
                    Digital OPG &amp; Low-Dose Imaging
                  </div>
                )}
              </div>

              <div className="overflow-hidden rounded-2xl bg-[#2D2172]">
                {!alignerFailed ? (
                  <img
                    src={IMAGES.bentoAligners}
                    alt="Crystal-clear orthodontic aligner fitting for natural smile alignment"
                    referrerPolicy="no-referrer"
                    onError={() => setAlignerFailed(true)}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center p-4 text-sm font-semibold text-[#E4E2F5]">
                    Clear Aligners &amp; Cosmetic Care
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
