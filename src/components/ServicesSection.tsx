import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DENTAL_SERVICES, type ServiceCategory } from '../data/clinicData';
import { ServiceIcon } from './ServiceIcons';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const FILTER_TABS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Treatments' },
  { id: 'preventive', label: 'General & Restorative' },
  { id: 'cosmetic', label: 'Cosmetic & Ortho' },
];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const visibleServices =
    activeCategory === 'all'
      ? DENTAL_SERVICES
      : DENTAL_SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-[1.12] font-extrabold tracking-tight text-[#22195C]">
            Comprehensive Dental Services for the Whole{' '}
            <span className="relative inline-block italic">
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-1 left-0 h-3 rounded-sm bg-[#70F3A8]"
              />
              <span className="relative">Family</span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5C5877]">
            Choose a treatment below to reserve your appointment slot at our F-11 Markaz clinic.
          </p>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter dental treatments"
            className="mt-7 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-[#F3F4FC] p-1.5"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-colors duration-150 sm:text-sm ${
                    isActive
                      ? 'bg-[#22195C] text-white'
                      : 'text-[#5C5877] hover:text-[#22195C]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Responsive Service Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleServices.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#22195C]/6 bg-[#F3F4FC] p-7 transition-all duration-150 hover:-translate-y-1 hover:border-[#3B2D8F]/20 hover:bg-white hover:shadow-[0_18px_40px_-14px_rgba(34,25,92,0.12)]"
            >
              <div>
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-white p-3 shadow-[0_4px_14px_rgba(34,25,92,0.06)]">
                  <ServiceIcon icon={service.icon} className="h-9 w-9" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#22195C]">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#5C5877]">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#22195C]/8 pt-4">
                <span className="text-xs font-semibold text-[#5C5877]">{service.duration}</span>
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap text-xs font-bold text-[#22195C] transition-colors group-hover:text-[#3B2D8F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2D8F]"
                >
                  <span>Book Slot</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
