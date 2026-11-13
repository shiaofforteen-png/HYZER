import heroDentalCareImg from '../assets/images/regenerated_image_1794555196883.png';
import leadDentistPortraitImg from '../assets/images/regenerated_image_1794555321188.png';
import bentoXrayImg from '../assets/images/bento_xray_diagnosis_1794553467310.jpg';
import bentoAlignersImg from '../assets/images/bento_clear_aligners_1794553466347.jpg';
import clinicInteriorImg from '../assets/images/clinic_suite_interior_1794553468598.jpg';

export const CLINIC_INFO = {
  name: 'Smile Squad Dental Clinic',
  phoneRaw: '03328128989',
  phoneDisplay: '0332-8128989',
  whatsappHref:
    'https://wa.me/923328128989?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment%20at%20Smile%20Squad%20Dental%20Clinic%20in%20F-11%20Markaz.',
  address:
    'Office no. 8, First Floor, Lord Trade Centre, Near Najeeb Pharmacy, F-11 Markaz, Islamabad, 44000, Pakistan',
  shortAddress: 'Office 8, 1st Floor, Lord Trade Centre, F-11 Markaz, Islamabad',
  landmark: 'Near Najeeb Pharmacy, F-11 Markaz',
  hours: 'Mon – Sat: 11:00 AM – 9:00 PM',
  sundayHours: 'Sunday: Emergency Appointments by Call',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Lord+Trade+Centre+F-11+Markaz+Islamabad+44000+Pakistan',
};

export const IMAGES = {
  heroDentalCare: heroDentalCareImg,
  leadDentistPortrait: leadDentistPortraitImg,
  bentoXray: bentoXrayImg,
  bentoAligners: bentoAlignersImg,
  clinicInterior: clinicInteriorImg,
};

export type ServiceCategory = 'all' | 'preventive' | 'cosmetic';

export type ServiceIconKey =
  | 'general'
  | 'cosmetic'
  | 'ortho'
  | 'implants'
  | 'rootcanal'
  | 'crowns'
  | 'pediatric'
  | 'emergency';

export interface DentalService {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  description: string;
  duration: string;
  icon: ServiceIconKey;
}

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    category: 'preventive',
    description:
      'Thorough digital exams, ultrasonic scaling, stain polishing, and tooth-colored composite fillings for lasting oral health.',
    duration: '30–45 min visit',
    icon: 'general',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    category: 'cosmetic',
    description:
      'In-clinic teeth whitening, composite bonding, and custom porcelain veneers designed for balanced, natural-looking smiles.',
    duration: '45–60 min visit',
    icon: 'cosmetic',
  },
  {
    id: 'orthodontics-aligners',
    title: 'Orthodontics & Aligners',
    category: 'cosmetic',
    description:
      'Discreet clear aligners as well as ceramic and self-ligating braces tailored for teens and working professionals.',
    duration: 'Custom plan',
    icon: 'ortho',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'preventive',
    description:
      'Biocompatible titanium implants and precision-milled crowns that restore natural biting strength and appearance.',
    duration: 'Guided placement',
    icon: 'implants',
  },
  {
    id: 'root-canal-therapy',
    title: 'Root Canal Therapy',
    category: 'preventive',
    description:
      'Pain-free rotary endodontics using digital apex localization to save infected teeth comfortably in fewer visits.',
    duration: 'Single sitting option',
    icon: 'rootcanal',
  },
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    category: 'cosmetic',
    description:
      'Metal-free Zirconia and E-max crowns crafted for seamless shade matching, strength, and gum comfort.',
    duration: '2 short visits',
    icon: 'crowns',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    category: 'preventive',
    description:
      'Gentle, anxiety-free checkups, fluoride protection, and pit-and-fissure sealants tailored for children.',
    duration: 'Kid-friendly care',
    icon: 'pediatric',
  },
  {
    id: 'emergency-dental-care',
    title: 'Emergency Dental Care',
    category: 'preventive',
    description:
      'Same-day priority appointments in F-11 Markaz for severe toothaches, broken teeth, swelling, or wisdom tooth pain.',
    duration: 'Same-day slot',
    icon: 'emergency',
  },
];

export interface Testimonial {
  id: string;
  patientName: string;
  initials: string;
  neighborhood: string;
  treatment: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    patientName: 'Hina Mansoor',
    initials: 'HM',
    neighborhood: 'F-11/3, Islamabad',
    treatment: 'Scaling & Whitening',
    quote:
      'I had avoided dentists for years due to sensitivity, but the ultrasonic scaling and whitening here were completely comfortable. The clinic near Najeeb Pharmacy is spotless and punctual.',
  },
  {
    id: 'rev-2',
    patientName: 'Saad Qureshi',
    initials: 'SQ',
    neighborhood: 'E-11, Islamabad',
    treatment: 'Root Canal & Zirconia Crown',
    quote:
      'Booked an urgent slot for a molar ache and walked out pain-free the same evening. Dr. Aisha explained my digital X-ray clearly before starting and there were no surprise charges.',
  },
  {
    id: 'rev-3',
    patientName: 'Zainab & Tariq Mahmood',
    initials: 'ZM',
    neighborhood: 'F-10 Markaz, Islamabad',
    treatment: 'Family & Clear Aligners',
    quote:
      'Our entire family visits Smile Squad Dental Clinic now—from our daughter’s routine checkups to my clear aligner plan. Easy parking at Lord Trade Centre and genuinely warm staff.',
  },
];
