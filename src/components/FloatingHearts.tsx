import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';

type Heart = {
  left: string;
  top: string;
  size: number;
  delay: number;
  opacity: number;
};

const HEARTS: Heart[] = [
{ left: '4%', top: '12%', size: 18, delay: 0, opacity: 0.4 },
{ left: '9%', top: '48%', size: 12, delay: 1.4, opacity: 0.3 },
{ left: '2%', top: '76%', size: 22, delay: 0.7, opacity: 0.28 },
{ left: '94%', top: '20%', size: 16, delay: 1.1, opacity: 0.35 },
{ left: '90%', top: '58%', size: 24, delay: 0.3, opacity: 0.3 },
{ left: '96%', top: '84%', size: 13, delay: 1.8, opacity: 0.35 }];


export function FloatingHearts() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {HEARTS.map((heart, index) =>
      <motion.div
        key={index}
        className="absolute text-blush-400"
        style={{ left: heart.left, top: heart.top, opacity: heart.opacity }}
        animate={{ y: [0, -14, 0], rotate: [0, 6, -4, 0] }}
        transition={{
          duration: 7 + index,
          delay: heart.delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
        
          <HeartIcon size={heart.size} fill="currentColor" strokeWidth={1} />
        </motion.div>
      )}
    </div>);

}