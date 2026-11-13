/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ClinicShowcase } from './components/ClinicShowcase';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DENTAL_SERVICES } from './data/clinicData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(DENTAL_SERVICES[0].title);

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#22195C]">
      <Navbar onBookClick={scrollToAppointment} />
      <main>
        <Hero onBookClick={scrollToAppointment} />
        <AboutSection onBookClick={scrollToAppointment} />
        <ServicesSection onSelectService={handleSelectService} />
        <ClinicShowcase onBookClick={scrollToAppointment} />
        <TestimonialsSection />
        <AppointmentSection selectedService={selectedService} />
      </main>
      <Footer onBookClick={scrollToAppointment} onSelectService={handleSelectService} />
    </div>
  );
}
