import type { ServiceIconKey } from '../data/clinicData';

interface ServiceIconProps {
  icon: ServiceIconKey;
  className?: string;
}

export function ServiceIcon({ icon, className = 'w-10 h-10' }: ServiceIconProps) {
  switch (icon) {
    case 'general':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M15 9C10.5 9 8 12.5 8 17C8 22.5 11.2 28 13.5 34.5C14.3 36.8 16.8 37 17.8 34.8L20 29.5C20.7 27.8 23.3 27.8 24 29.5L26.2 34.8C27.2 37 29.7 36.8 30.5 34.5C32.8 28 36 22.5 36 17C36 12.5 33.5 9 29 9C26.4 9 24.3 10.4 22 10.4C19.7 10.4 17.6 9 15 9Z"
            stroke="#22195C"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="29" r="6" fill="#70F3A8" stroke="#22195C" strokeWidth="2" />
          <path d="M36.5 33.5L40 37" stroke="#22195C" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'cosmetic':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M15 11C10.5 11 8 14.5 8 19C8 24.2 11 29.2 13.3 35.2C14.1 37.3 16.5 37.4 17.4 35.4L19.8 30.2C20.5 28.6 23.5 28.6 24.2 30.2L26.6 35.4C27.5 37.4 29.9 37.3 30.7 35.2C33 29.2 36 24.2 36 19C36 14.5 33.5 11 29 11C26.4 11 24.3 12.3 22 12.3C19.7 12.3 17.6 11 15 11Z"
            stroke="#22195C"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M32 6L33.5 9.5L37 11L33.5 12.5L32 16L30.5 12.5L27 11L30.5 9.5L32 6Z"
            fill="#70F3A8"
            stroke="#22195C"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="18" r="2.2" fill="#70F3A8" />
        </svg>
      );
    case 'ortho':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <rect
            x="6"
            y="14"
            width="32"
            height="16"
            rx="8"
            fill="#70F3A8"
            fillOpacity="0.45"
            stroke="#22195C"
            strokeWidth="2.2"
          />
          <path d="M6 22H38" stroke="#22195C" strokeWidth="2" />
          <rect x="12" y="18.5" width="5" height="7" rx="1.5" fill="#FFFFFF" stroke="#22195C" strokeWidth="1.8" />
          <rect x="19.5" y="18.5" width="5" height="7" rx="1.5" fill="#70F3A8" stroke="#22195C" strokeWidth="1.8" />
          <rect x="27" y="18.5" width="5" height="7" rx="1.5" fill="#FFFFFF" stroke="#22195C" strokeWidth="1.8" />
        </svg>
      );
    case 'implants':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M14 10C11.5 10 10 12.2 10 15.2C10 19 12.5 22 15 22H29C31.5 22 34 19 34 15.2C34 12.2 32.5 10 30 10C27.5 10 25 11.4 22 11.4C19 11.4 16.5 10 14 10Z"
            fill="#70F3A8"
            fillOpacity="0.55"
            stroke="#22195C"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M17 22V33L22 38L27 33V22"
            stroke="#22195C"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M17 26.5H27M17 31H27" stroke="#22195C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'rootcanal':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M15 9C10.5 9 8 12.5 8 17C8 22.5 11.2 28 13.5 34.5C14.3 36.8 16.8 37 17.8 34.8L20 29.5C20.7 27.8 23.3 27.8 24 29.5L26.2 34.8C27.2 37 29.7 36.8 30.5 34.5C32.8 28 36 22.5 36 17C36 12.5 33.5 9 29 9C26.4 9 24.3 10.4 22 10.4C19.7 10.4 17.6 9 15 9Z"
            stroke="#22195C"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M16 17L15 30M28 17L29 30" stroke="#70F3A8" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="22" cy="18" r="3" fill="#70F3A8" stroke="#22195C" strokeWidth="1.8" />
        </svg>
      );
    case 'crowns':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M8 30L11 14L18 20L22 11L26 20L33 14L36 30H8Z"
            fill="#70F3A8"
            fillOpacity="0.65"
            stroke="#22195C"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <rect x="9" y="30" width="26" height="5" rx="2" stroke="#22195C" strokeWidth="2.2" />
        </svg>
      );
    case 'pediatric':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <circle cx="22" cy="22" r="14" fill="#70F3A8" fillOpacity="0.45" stroke="#22195C" strokeWidth="2.2" />
          <circle cx="17" cy="19" r="1.8" fill="#22195C" />
          <circle cx="27" cy="19" r="1.8" fill="#22195C" />
          <path d="M16 25C17.5 27.8 20 29 22 29C24 29 26.5 27.8 28 25" stroke="#22195C" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'emergency':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <rect x="8" y="8" width="28" height="28" rx="9" fill="#70F3A8" fillOpacity="0.55" stroke="#22195C" strokeWidth="2.2" />
          <path d="M22 15V29M15 22H29" stroke="#22195C" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );
  }
}
