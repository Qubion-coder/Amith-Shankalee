import { motion } from 'motion/react';
import { Music, VolumeX, Heart } from 'lucide-react';
import { Hero } from './Hero';
import { CoupleDetails } from './CoupleDetails';
import { CeremonyDetails } from './CeremonyDetails';
import { Location } from './Location';
import { Timeline } from './Timeline';
import { Countdown } from './Countdown';
import { RSVPForm } from './RSVPForm';
import { FloatingPetals } from './FloatingPetals';

import { InviteeBanner } from './InviteeBanner';
import { DeferredMount } from './DeferredMount';

interface InvitationContentProps {
  active: boolean;
  eventParam: string;
  fullInviteeName: string;
  eventLabel: string;
  weddingDate: Date;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onVideoStart: () => void;
}

export function InvitationContent({
  active,
  eventParam,
  fullInviteeName,
  eventLabel,
  weddingDate,
  isMusicPlaying,
  onToggleMusic,
  onVideoStart,
}: InvitationContentProps) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="font-sans text-stone-800 bg-brand-blush selection:bg-brand-plum/20"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={onToggleMusic}
        className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#365c91]/35 bg-white/80 text-[#365c91] shadow-[0_8px_30px_rgba(54,92,145,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-105 sm:h-14 sm:w-14"
      >
        {isMusicPlaying ? (
          <Music className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>

      <FloatingPetals />

      <Hero event={eventParam} inviteeName={fullInviteeName} onVideoStart={onVideoStart} />

      {fullInviteeName && (
        <DeferredMount active={active} delay={80}>
          <InviteeBanner inviteeName={fullInviteeName} eventLabel={eventLabel} />
        </DeferredMount>
      )}

      <DeferredMount active={active} delay={120} minHeight="40vh">
        <div className="relative overflow-hidden border-t border-[#c7a24b]/15 bg-[#fbfaf7] py-20 sm:py-28">

          <CoupleDetails />
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={180} minHeight="40vh">
        <Countdown targetDate={weddingDate} />
      </DeferredMount>

      <DeferredMount active={active} delay={240} minHeight="40vh">
        <div className="relative overflow-hidden border-y border-[#365c91]/10 bg-[#f6efe1] py-20 sm:py-28">
          <CeremonyDetails event={eventParam} />
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={300} minHeight="40vh">
        <div className="relative overflow-hidden bg-[#fbfaf7] pt-12 pb-16 sm:py-24">
          <Location event={eventParam} />
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={360} minHeight="30vh">
        <Timeline />
      </DeferredMount>

      <DeferredMount active={active} delay={420} minHeight="30vh">
        <div className="relative overflow-hidden bg-[#f6efe1] py-20 sm:py-28">
          <RSVPForm inviteeName={fullInviteeName} eventName={eventLabel} eventParam={eventParam} />
        </div>
      </DeferredMount>



      <DeferredMount active={active} delay={520}>
        <footer className="relative mt-10 overflow-hidden border-t border-[#c7a24b]/25 bg-[#fffdf8] py-16 text-center">
          <div className="absolute top-1/2 left-1/2 hidden h-64 w-64 md:block -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#365c91]/10 blur-[80px] pointer-events-none" />
          <Heart className="mx-auto mb-6 h-6 w-6 fill-[#e6c77b]/30 text-[#c7a24b]" />
          <p className="font-names text-3xl text-[#5c3e13] sm:text-5xl">Amith & Shankalee</p>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] font-sans text-stone-400 font-semibold block mb-4">
            December 15, 2026
          </span>
          
          <div className="w-12 h-[1px] bg-brand-lavender/30 mx-auto my-6" />

          <p className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] text-stone-400 uppercase">
            Want a beautiful wedding website like this? <br className="sm:hidden" />Create yours with{' '}
            <a 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#D4AF37] hover:text-brand-plum font-bold underline decoration-[#D4AF37]/40 hover:decoration-brand-plum/40 underline-offset-4 transition-colors" 
              href="https://wa.me/94707819074"
            >
              Invitemint
            </a>
          </p>
        </footer>
      </DeferredMount>
    </motion.div>
  );
}
