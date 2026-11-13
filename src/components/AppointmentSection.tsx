import { type FormEvent, useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CalendarCheck2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_INFO, DENTAL_SERVICES } from '../data/clinicData';

interface AppointmentSectionProps {
  selectedService: string;
}

interface FormState {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
}

const TIME_SLOTS = [
  'Morning (11:00 AM – 2:00 PM)',
  'Afternoon (2:00 PM – 5:00 PM)',
  'Evening (5:00 PM – 9:00 PM)',
];

export function AppointmentSection({ selectedService }: AppointmentSectionProps) {
  const todayIso = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    service: selectedService || DENTAL_SERVICES[0].title,
    preferredDate: todayIso,
    timeSlot: TIME_SLOTS[0],
    notes: '',
  });
  const [error, setError] = useState<string>('');
  const [submittedBooking, setSubmittedBooking] = useState<FormState | null>(null);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
      setSubmittedBooking(null);
    }
  }, [selectedService]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanedName = form.fullName.trim();
    const cleanedPhone = form.phone.replace(/[\s-]/g, '');

    if (cleanedName.length < 2) {
      setError('Please enter your full name so our reception can greet you.');
      return;
    }

    if (!/^(\+?92|0)?3\d{9}$/.test(cleanedPhone) && cleanedPhone.length < 10) {
      setError('Please enter a valid mobile or WhatsApp number (e.g., 0332-8128989).');
      return;
    }

    setError('');
    setSubmittedBooking({ ...form, fullName: cleanedName });
  };

  const whatsappConfirmUrl = submittedBooking
    ? `https://wa.me/923328128989?text=${encodeURIComponent(
        `Assalam o Alaikum, I would like to confirm my appointment at Smile Squad Dental Clinic:\nName: ${submittedBooking.fullName}\nPhone: ${submittedBooking.phone}\nTreatment: ${submittedBooking.service}\nPreferred Date: ${submittedBooking.preferredDate}\nPreferred Time: ${submittedBooking.timeSlot}${
          submittedBooking.notes ? `\nNotes: ${submittedBooking.notes}` : ''
        }`,
      )}`
    : CLINIC_INFO.whatsappHref;

  return (
    <section id="appointment" className="bg-[#F8F9FC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Appointment Request Form */}
          <div className="rounded-3xl border border-[#22195C]/8 bg-white p-6 shadow-[0_20px_50px_-16px_rgba(34,25,92,0.09)] sm:p-9 lg:col-span-7">
            <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.5rem)] leading-[1.15] font-extrabold tracking-tight text-[#22195C]">
              Book Your{' '}
              <span className="relative inline-block italic">
                <span
                  aria-hidden="true"
                  className="absolute right-0 bottom-1 left-0 h-3 rounded-sm bg-[#70F3A8]"
                />
                <span className="relative">Appointment</span>
              </span>
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[#5C5877] sm:text-base">
              Request your preferred date and treatment in seconds. Our F-11 front desk will confirm
              your exact slot shortly.
            </p>

            {submittedBooking ? (
              <div
                role="status"
                className="mt-7 rounded-2xl border border-[#22195C]/12 bg-[#F3F4FC] p-6 sm:p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#70F3A8] text-[#22195C]">
                  <CalendarCheck2 className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-display text-2xl font-extrabold text-[#22195C]">
                  Appointment Request Received
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C5877]">
                  Thank you, <strong className="text-[#22195C]">{submittedBooking.fullName}</strong>.
                  Our coordinator at Lord Trade Centre, F-11 Markaz will call{' '}
                  <span className="font-semibold tabular-nums text-[#22195C]">
                    {submittedBooking.phone}
                  </span>{' '}
                  to finalize your slot.
                </p>

                <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-[#22195C]/10 pt-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold text-[#5C5877]">Treatment</dt>
                    <dd className="mt-0.5 font-bold text-[#22195C]">{submittedBooking.service}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[#5C5877]">Preferred Date &amp; Slot</dt>
                    <dd className="mt-0.5 font-bold tabular-nums text-[#22195C]">
                      {submittedBooking.preferredDate} · {submittedBooking.timeSlot}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappConfirmUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#70F3A8] px-5 py-2.5 text-sm font-bold text-[#22195C] transition-colors hover:bg-[#5AE998]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedBooking(null)}
                    className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-[#22195C]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#22195C] transition-colors hover:bg-[#EBEAF7]"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="patient-name"
                      className="mb-1.5 block text-xs font-bold text-[#22195C]"
                    >
                      Full Name
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g., Ayesha Siddiqui"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="min-h-[46px] w-full rounded-xl border border-[#22195C]/15 bg-[#F8F9FC] px-4 py-2.5 text-sm text-[#22195C] placeholder:text-[#5C5877]/65 focus:border-[#3B2D8F] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="patient-phone"
                      className="mb-1.5 block text-xs font-bold text-[#22195C]"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      placeholder="03XX-XXXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="min-h-[46px] w-full rounded-xl border border-[#22195C]/15 bg-[#F8F9FC] px-4 py-2.5 text-sm tabular-nums text-[#22195C] placeholder:text-[#5C5877]/65 focus:border-[#3B2D8F] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="dental-service"
                      className="mb-1.5 block text-xs font-bold text-[#22195C]"
                    >
                      Treatment Needed
                    </label>
                    <select
                      id="dental-service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="min-h-[46px] w-full rounded-xl border border-[#22195C]/15 bg-[#F8F9FC] px-4 py-2.5 text-sm font-medium text-[#22195C] focus:border-[#3B2D8F] focus:bg-white focus:outline-none"
                    >
                      {DENTAL_SERVICES.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="mb-1.5 block text-xs font-bold text-[#22195C]"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="preferred-date"
                      type="date"
                      min={todayIso}
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className="min-h-[46px] w-full rounded-xl border border-[#22195C]/15 bg-[#F8F9FC] px-4 py-2.5 text-sm tabular-nums text-[#22195C] focus:border-[#3B2D8F] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <span className="mb-1.5 block text-xs font-bold text-[#22195C]">
                    Preferred Time Slot
                  </span>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {TIME_SLOTS.map((slot) => {
                      const active = form.timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setForm({ ...form, timeSlot: slot })}
                          className={`min-h-[44px] cursor-pointer rounded-xl border px-3 py-2 text-xs font-bold transition-colors ${
                            active
                              ? 'border-[#3B2D8F] bg-[#3B2D8F] text-white'
                              : 'border-[#22195C]/12 bg-[#F8F9FC] text-[#22195C] hover:bg-[#EBEAF7]'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appointment-notes"
                    className="mb-1.5 block text-xs font-bold text-[#22195C]"
                  >
                    Optional Notes or Symptoms
                  </label>
                  <textarea
                    id="appointment-notes"
                    rows={3}
                    placeholder="Tell us about tooth sensitivity, pain, or any specific request..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full rounded-xl border border-[#22195C]/15 bg-[#F8F9FC] px-4 py-3 text-sm text-[#22195C] placeholder:text-[#5C5877]/65 focus:border-[#3B2D8F] focus:bg-white focus:outline-none"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm font-semibold text-[#B91C1C]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#70F3A8] px-6 py-3.5 text-sm font-bold text-[#22195C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#5AE998] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22195C]"
                >
                  <span>Confirm Appointment Request</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: F-11 Markaz Clinic Info & Direct Contact Card */}
          <aside className="flex flex-col justify-between rounded-3xl bg-[#3B2D8F] p-7 text-white sm:p-9 lg:col-span-5">
            <div>
              <p className="text-sm font-semibold text-[#70F3A8]">Visit Our Islamabad Clinic</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                {CLINIC_INFO.name}
              </h3>

              <div className="mt-7 space-y-6">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#70F3A8]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#E4E2F5]">Clinic Address</p>
                    <p className="mt-1 text-sm leading-relaxed font-medium text-white">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#70F3A8]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#E4E2F5]">
                      Appointments &amp; Emergencies
                    </p>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="mt-1 inline-block font-display text-xl font-extrabold tabular-nums text-white underline-offset-4 hover:text-[#70F3A8] hover:underline"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#70F3A8]">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#E4E2F5]">Clinic Hours</p>
                    <p className="mt-1 text-sm font-medium text-white">{CLINIC_INFO.hours}</p>
                    <p className="mt-0.5 text-xs text-[#E4E2F5]">{CLINIC_INFO.sundayHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3 border-t border-white/14 pt-6">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#70F3A8] px-5 py-3 text-sm font-bold text-[#22195C] transition-colors hover:bg-[#5AE998]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">Call {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <span>Open Directions in Google Maps</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
