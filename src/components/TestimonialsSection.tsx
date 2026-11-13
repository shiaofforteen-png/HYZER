import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.6vw,2.85rem)] leading-[1.12] font-extrabold tracking-tight text-[#22195C]">
            Trusted by Families Across{' '}
            <span className="relative inline-block italic">
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-1 left-0 h-3 rounded-sm bg-[#70F3A8]"
              />
              <span className="relative">Islamabad</span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5C5877]">
            Verified feedback from patients visiting us from F-11, F-10, E-11, and surrounding
            sectors.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-[#22195C]/8 bg-[#F3F4FC] p-7"
            >
              <div>
                <div className="flex items-center gap-1 text-[#22195C]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[#22195C] text-[#22195C]" />
                  ))}
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-[#22195C]">
                  “{review.quote}”
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3.5 border-t border-[#22195C]/10 pt-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3B2D8F] text-xs font-bold text-[#70F3A8]">
                  {review.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold text-[#22195C]">
                    {review.patientName}
                  </p>
                  <p className="truncate text-xs text-[#5C5877]">
                    {review.neighborhood} · {review.treatment}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
