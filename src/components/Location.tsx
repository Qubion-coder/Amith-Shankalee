import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationProps {
  event?: string | null;
}

const venues = [
  {
    label: 'Church Ceremony · 4.00 PM',
    name: "St. Joseph's Church",
    address: 'Wennappuwa, Sri Lanka',
    query: "St. Joseph's Church, Wennappuwa, Sri Lanka",
  },
  {
    label: 'Wedding Ceremony & Reception · 6.00 PM',
    name: 'Suriya Resort',
    address: 'Waikkal, Sri Lanka',
    query: 'Suriya Resort, Waikkal, Sri Lanka',
  },
];

const mapsUrl = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const embedUrl = (query: string) => `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;

export const Location: React.FC<LocationProps> = () => {
  return (
    <section id="venue" className="mx-auto max-w-6xl px-6 py-16 sm:px-7 sm:py-24">
      <div className="mb-12 text-center sm:mb-16">
        <span className="mb-3 block text-[0.72rem] uppercase tracking-[0.34em] text-[#c7a24b]">
          How to find us
        </span>
        <h2 className="font-names text-2xl font-semibold leading-tight tracking-[0.07em] text-[#5c3e13] sm:text-4xl">
          THE <span className="text-[#c7a24b]">LOCATION</span>
        </h2>
        <span className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#c7a24b]" />
          <span className="text-xs text-[#c7a24b]">✦</span>
          <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#c7a24b]" />
        </span>
      </div>

      <div className="flex flex-col gap-14 sm:gap-20">
        {venues.map((venue) => (
          <div key={venue.name} className="grid items-stretch gap-5 sm:gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col items-center gap-3 rounded-t-[90px] rounded-b-[18px] border border-[#c7a24b]/30 bg-[#fffdf8] px-8 py-9 text-center shadow-[0_16px_36px_-26px_rgba(70,40,30,0.4)] sm:flex-row sm:items-start sm:gap-5 sm:text-left">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#365c91]/45 text-[#365c91]">
                  <MapPin className="h-7 w-7" strokeWidth={1.3} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-2xl leading-none text-[#c4a155]">{venue.label}</span>
                  <h3 className="font-serif text-lg uppercase tracking-[0.08em] text-[#5c3e13]">
                    {venue.name}
                  </h3>
                  <p className="text-[0.96rem] text-[#8b8168]">{venue.address}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-[18px] border border-[#c7a24b]/35 shadow-[0_30px_60px_-34px_rgba(70,40,30,0.45)]">
                <iframe
                  title={`Map of ${venue.name}`}
                  src={embedUrl(venue.query)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 saturate-90"
                />
              </div>
              <a
                href={mapsUrl(venue.query)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 self-center rounded-full bg-gradient-to-br from-[#365c91] to-[#203c68] px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#f6efdd] shadow-[0_14px_26px_-14px_rgba(54,92,145,0.7)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <MapPin className="h-4 w-4" strokeWidth={1.6} />
                Open in Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
