import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Petal {
  id: number;
  x: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  color: string;
  drift: number;
}

function getPetalCount() {
  if (typeof window === 'undefined') return 12;
  const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const narrow = window.innerWidth < 768;
  if (coarse || narrow) return 5;
  return 18;
}

export const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = ['#f4d98d', '#c7a24b', '#e6c77b', '#a87924'];
    const count = getPetalCount();

    const newPetals = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 20, // increased size: 20 to 40px
      rotation: Math.random() * 360,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * -15, // Negative delay so they are already falling when the page loads!
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: Math.random() * 40 - 20,
    }));
    setPetals(newPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[40]" style={{ perspective: '1000px' }}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute will-change-transform"
          initial={{
            x: `${petal.x}vw`,
            y: '-20vh',
            rotateZ: petal.rotation,
            rotateX: petal.rotation,
            rotateY: petal.rotation,
            opacity: 0,
          }}
          animate={{
            y: '120vh',
            x: `${petal.x + petal.drift}vw`,
            rotateZ: petal.rotation + 720,
            rotateX: petal.rotation + 360,
            rotateY: petal.rotation + 540,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
            times: [0, 0.1, 0.9, 1]
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            className="drop-shadow-md"
          >
            <defs>
              <linearGradient id={`petal-grad-${petal.id}`} x1="20%" y1="10%" x2="85%" y2="90%">
                <stop offset="0%" stopColor="#fff7d6" stopOpacity="0.95" />
                <stop offset="32%" stopColor={petal.color} stopOpacity="0.95" />
                <stop offset="72%" stopColor={petal.color} stopOpacity="0.8" />
                <stop offset="100%" stopColor="#765015" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <path
              d="M 12 2 C 5 2 2 8 4 14 C 6 20 12 22 12 22 C 12 22 18 20 20 14 C 22 8 19 2 12 2 Z"
              fill={`url(#petal-grad-${petal.id})`}
              stroke="#fff1b8"
              strokeOpacity="0.35"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
