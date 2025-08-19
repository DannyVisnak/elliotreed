'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConfettiPiece = ({ color, left, delay, duration }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        backgroundColor: color,
        left: `${left}%`,
      }}
      initial={{ y: -10, opacity: 0, rotate: 0 }}
      animate={{
        y: [0, 100, 200, 300],
        opacity: [0, 1, 1, 0],
        rotate: [0, 180, 360, 540],
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
    />
  );
};

export default function Confetti({ isActive }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces
      const pieces = [];
      const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
      
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 2,
        });
      }
      
      setConfetti(pieces);
      
      // Clear confetti after animation
      setTimeout(() => {
        setConfetti([]);
      }, 4000);
    }
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {confetti.map((piece) => (
            <ConfettiPiece
              key={piece.id}
              color={piece.color}
              left={piece.left}
              delay={piece.delay}
              duration={piece.duration}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
