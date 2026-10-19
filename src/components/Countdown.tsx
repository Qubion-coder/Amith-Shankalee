import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = Math.max(0, targetDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-[#365c91] px-6 py-20 text-[#fffdf8] sm:px-7 sm:py-24">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#e6c77b]/20" />
      <div className="absolute -bottom-36 -right-20 h-80 w-80 rounded-full border border-[#e6c77b]/20" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7a24b]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Heart className="mx-auto mb-5 h-5 w-5 fill-[#e6c77b] text-[#e6c77b]" />
          <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.38em] text-[#f4d98d]">
            Counting every moment
          </span>
          <h2 className="font-names text-2xl font-semibold leading-tight tracking-[0.07em] text-[#fffdf8] sm:text-4xl">
            Forever begins in
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#e6c77b] to-transparent" />
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-[#e6c77b]/40 bg-[#fffdf8]/10 px-3 py-5 backdrop-blur-sm sm:rounded-3xl sm:py-7"
            >
              <div className="font-serif text-4xl tabular-nums text-[#fffdf8] sm:text-6xl">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-[#f4d98d]">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-9 text-sm italic text-[#fffdf8]/75">Until we celebrate with you in Wennappuwa &amp; Waikkal</p>
      </div>
    </section>
  );
};
