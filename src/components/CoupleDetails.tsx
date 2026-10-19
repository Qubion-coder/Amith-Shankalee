import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-plum/60" />
            <span className="text-[#365c91] uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">Two hearts, one promise</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-plum/60" />
          </div>
          <h2 className="font-names text-3xl font-semibold leading-tight tracking-[0.07em] text-[#5c3e13] sm:text-5xl">
            Amith <span className="text-[#c7a24b] font-light mx-2">&</span> Shankalee
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Groom Details (Left on Desktop, Bottom on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10 order-4 lg:order-1 relative w-full"
        >
          {/* Mobile Background Image attached only to this text section */}
          <div className="absolute -top-60 sm:-top-72 inset-x-0 z-0 lg:hidden pointer-events-none flex justify-center items-center opacity-80 overflow-visible">
            <img 
              src="/couple-bg.webp"
              loading="lazy" 
              alt="Mobile Background" 
              className="w-full max-w-md scale-125 sm:scale-150 h-auto object-contain mix-blend-multiply"
            />
          </div>

          <div className="mb-4 flex flex-col items-center lg:items-end relative z-10">
            <span className="text-[#365c91] uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Groom</span>
            <h3 className="text-4xl sm:text-5xl font-['Cormorant_Garamond',_serif] text-stone-800 mb-2 drop-shadow-sm">Amith</h3>
            <p className="text-stone-500/90 font-serif italic text-base sm:text-lg">Amith Warnakulasuriya</p>
          </div>
          <div className="hidden lg:flex justify-end mt-8 relative z-10">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>

        {/* Center monogram card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto flex aspect-[4/5] w-full max-w-sm flex-shrink-0 items-center justify-center order-1 z-20 mb-12 lg:mb-0 sm:max-w-md lg:order-2 lg:w-[35%]"
        >
          <div className="absolute inset-8 z-10 overflow-hidden rounded-t-[12rem] rounded-b-[8rem] border border-[#c7a24b]/45 bg-[#fffdf8] shadow-[0_25px_55px_-28px_rgba(70,40,30,0.55)] sm:inset-10">
            <div className="absolute inset-3 z-20 rounded-t-[11rem] rounded-b-[7rem] border border-[#c7a24b]/30" />
            <img
              src="/couple-photo.jpg"
              alt="Amith and Shankalee"
              className="absolute inset-0 z-0 h-full w-full rounded-t-[12rem] rounded-b-[8rem] object-cover opacity-20 grayscale-[30%]"
            />
            <div className="absolute inset-0 z-10 rounded-t-[12rem] rounded-b-[8rem] bg-[#fffaf0]/40" />
            <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">
              <Sparkles className="mb-6 h-5 w-5 text-[#c7a24b]" />
              <span className="font-display text-3xl text-[#c4a155]">Together</span>
              <span className="my-4 h-px w-14 bg-gradient-to-r from-transparent via-[#c7a24b] to-transparent" />
              <span className="font-names text-4xl tracking-[0.08em] text-[#5c3e13] sm:text-5xl">A <span className="text-[#c7a24b]">&amp;</span> S</span>
              <p className="mt-5 text-[0.65rem] uppercase tracking-[0.3em] text-[#8b8168]">One beautiful beginning</p>
            </div>
          </div>
          <Heart className="absolute bottom-1/4 -left-2 h-4 w-4 animate-bounce text-[#c7a24b]" />
        </motion.div>
        {/* Bride Details (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10 order-2 lg:order-3"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-[#365c91] uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block mt-28 sm:mt-36 lg:mt-0">The Bride</span>
            <h3 className="text-4xl sm:text-5xl font-['Cormorant_Garamond',_serif] text-stone-800 mb-2 drop-shadow-sm">Shankalee</h3>
            <p className="text-stone-500/90 font-serif italic text-base sm:text-lg">Shankalee Kannangara</p>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
