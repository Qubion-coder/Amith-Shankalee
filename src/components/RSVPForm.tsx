import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2, Heart, Sparkles, Phone } from 'lucide-react';
import { toast } from 'sonner';

interface RSVPFormProps {
  inviteeName?: string;
  eventName?: string;
  eventParam?: string;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ inviteeName = '', eventName = 'the celebration', eventParam = 'both' }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const guestsParam = searchParams.get('guests') || '1';

  const [formData, setFormData] = useState({
    fullName: inviteeName,
    attendance: 'yes',
    guests: guestsParam,
    thoughts: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwt6cJXTFiTVlvdj7LdXe5023CEf9K4AnVGagdufCBwFbrDuM3JqQUPHQaOz_YEk8b9/exec";

  useEffect(() => {
    if (inviteeName) {
      setFormData(prev => ({ ...prev, fullName: inviteeName }));
    }
  }, [inviteeName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {

      const payload = new FormData();
      payload.append('sheet', 'RSVP');
      payload.append('fullName', formData.fullName);
      payload.append('attendance', formData.attendance);
      payload.append('guests', formData.attendance === 'yes' ? formData.guests : '0'); 
      payload.append('thoughts', formData.thoughts);
      payload.append('dietaryNotes', formData.thoughts); // Fallback for old sheet column

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });

      setStatus('success');
      toast.success('Your RSVP has been warmly received!');
      setFormData({ fullName: inviteeName, attendance: 'yes', guests: guestsParam, thoughts: '' });
    } catch (error) {
      console.error('Error sending RSVP: ', error);
      setStatus('error');
      toast.error('Could not submit RSVP. Please try again.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 relative py-4 sm:py-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="glass relative overflow-hidden rounded-[2rem] border border-[#c7a24b]/25 bg-[#fffdf8]/80 p-6 shadow-[0_30px_60px_rgba(70,40,30,0.16)] md:backdrop-blur-3xl sm:rounded-[3rem] sm:p-10 lg:flex lg:items-center lg:gap-16 lg:p-12"
      >
        {/* Soft top border line */}
        <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-transparent via-[#c7a24b] to-transparent" />

        {/* Left Side: Elegant Text */}
        <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0 relative text-center lg:text-left">
          <Sparkles className="absolute -top-6 -left-6 w-12 h-12 text-brand-lavender/30 animate-pulse" />

          <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-4">
            <span className="text-[#365c91] uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
              Kindly reply
            </span>
            <div className="hidden lg:block w-16 h-[1px] bg-gradient-to-r from-brand-plum/60 to-transparent" />
          </div>

          <h2 className="font-names text-2xl font-semibold leading-tight tracking-[0.07em] text-[#5c3e13] sm:text-4xl">
            We would love <span className="italic font-light text-[#c7a24b]">to have you</span> with us
          </h2>

          <p className="text-stone-500/90 font-serif text-base sm:text-lg leading-relaxed mb-6">
            {inviteeName
              ? `Dear ${inviteeName}, your presence at ${eventName} means the world to us. Please kindly let us know if you will be able to join our celebration.`
              : `Your presence means the world to us. Please kindly let us know if you will be able to join our celebration.`
            }
          </p>

          <div className="mb-6 inline-flex flex-col items-center gap-3 rounded-[1.5rem] border border-[#c7a24b]/30 bg-white/70 px-6 py-5 shadow-[0_12px_28px_-20px_rgba(70,40,30,0.5)] lg:items-start">
            <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#365c91]">R.S.V.P</span>
            <p className="font-serif text-base sm:text-lg text-stone-600">
              Kindly reply by <span className="font-semibold text-stone-800">08th December 2026</span>
            </p>
            <a
              href="tel:+94770610141"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#365c91] to-[#203c68] px-6 py-3 text-sm font-semibold tracking-[0.15em] text-[#f6efdd] shadow-[0_14px_26px_-14px_rgba(54,92,145,0.7)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              077 061 0141
            </a>
          </div>

          <div className="w-12 h-[1px] bg-brand-lavender/50 mx-auto lg:mx-0" />
        </div>

        {/* Right Side: Flowing Form */}
        <div className="lg:w-1/2 relative z-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-16 px-8 bg-white/70 rounded-[2rem] border border-white shadow-xl"
              >
                <div className="w-24 h-24 bg-green-50/80 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-green-100">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-4xl font-display text-stone-800 mb-4 tracking-tight drop-shadow-sm">With Gratitude</h3>
                <p className="text-stone-500/90 leading-relaxed font-serif text-lg mb-8">
                  Your response has been warmly received. We cannot wait to celebrate with you!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 rounded-full border border-brand-lavender/30 text-brand-plum font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-brand-lavender/10 transition-all duration-300 shadow-sm"
                >
                  Update Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 bg-white/40 p-6 sm:p-8 rounded-[2rem] border border-white shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 ml-2">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="E.g., John & Jane Doe"
                    className="w-full bg-white/80 px-6 py-3 rounded-full border border-stone-200/60 focus:ring-2 focus:ring-brand-lavender/30 focus:border-brand-plum/40 outline-none transition-all duration-300 font-serif italic text-base shadow-inner placeholder:text-stone-300"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 ml-2">Reserved Seats</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full bg-white/80 px-6 py-3 rounded-full border border-stone-200/60 focus:ring-2 focus:ring-brand-lavender/30 focus:border-brand-plum/40 outline-none transition-all duration-300 font-serif italic text-base shadow-inner placeholder:text-stone-300"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  />
                  <p className="text-[9px] text-stone-400 mt-1.5 ml-3 italic">Number of seats you will be taking</p>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 ml-2">Attendance</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'yes' })}
                      className={`flex-1 py-3 rounded-full border transition-all duration-300 font-serif italic text-base shadow-sm flex items-center justify-center gap-2 ${formData.attendance === 'yes'
                          ? 'bg-brand-lavender/30 border-brand-plum/50 text-brand-plum font-medium'
                          : 'bg-white/80 border-stone-200/60 text-stone-400 hover:border-brand-lavender/50 hover:text-stone-500'
                        }`}
                    >
                      {formData.attendance === 'yes' && <Heart className="w-4 h-4 fill-brand-plum/30" />}
                      Yes, I'll be there
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'no' })}
                      className={`flex-1 py-3 rounded-full border transition-all duration-300 font-serif italic text-base shadow-sm ${formData.attendance === 'no'
                          ? 'bg-stone-100 border-stone-300 text-stone-600 font-medium'
                          : 'bg-white/80 border-stone-200/60 text-stone-400 hover:border-stone-300 hover:text-stone-500'
                        }`}
                    >
                      Can't make it
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 ml-2">A thought for the couple</label>
                  <textarea
                    placeholder="Share your wishes, thoughts, or advice..."
                    className="w-full bg-white/80 px-6 py-3 rounded-[2rem] border border-stone-200/60 focus:ring-2 focus:ring-brand-lavender/30 focus:border-brand-plum/40 outline-none transition-all duration-300 h-20 resize-none font-serif italic text-base shadow-inner placeholder:text-stone-300"
                    value={formData.thoughts}
                    onChange={(e) => setFormData({ ...formData, thoughts: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-stone-800 text-brand-rose py-5 rounded-full font-sans tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-stone-900 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Confirm Attendance'
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
