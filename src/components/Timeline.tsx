import React from 'react';
import { motion } from 'motion/react';

const events = [
  { time: '3:30 PM', title: 'Welcome', desc: 'Guests arrive', icon: '/icon_arrive.jpg' },
  { time: '4:00 PM', title: 'Church Ceremony', desc: "St. Joseph's Church, Wennappuwa", icon: '/icon_church.jpg' },
  { time: '6:00 PM', title: 'Wedding & Reception', desc: 'Suriya Resort, Waikkal', icon: '/icon_eat.jpg' },
  { time: '7:30 PM', title: 'Dance', desc: 'Let the joy continue', icon: '/icon_dance.jpg' },
];

export const Timeline = () => {
  return (
    <section className="relative overflow-hidden bg-[#fffdf8] px-6 py-20 sm:px-7 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.35em] text-[#365c91]">
            A little glimpse
          </span>
          <h2 className="font-names text-2xl tracking-[0.08em] text-[#5c3e13] sm:text-4xl">
            THE <span className="text-[#c7a24b]">DAY</span>
          </h2>
          <span className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#c7a24b]" />
            <span className="text-xs text-[#c7a24b]">✦</span>
            <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#c7a24b]" />
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-t-[6rem] rounded-b-2xl border border-[#365c91]/25 bg-[#fbf5e9] px-5 pb-7 pt-5 text-center shadow-[0_18px_40px_-30px_rgba(70,40,30,0.65)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-[#fffdf8] shadow-[0_8px_24px_-12px_rgba(70,40,30,0.65)]">
                <img src={event.icon} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#365c91]">{event.time}</span>
              <h3 className="mt-2 font-serif text-2xl text-[#5c3e13]">{event.title}</h3>
              <p className="mt-1 text-sm text-[#8b8168]">{event.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
