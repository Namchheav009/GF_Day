import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  ImageIcon,
  MailIcon,
  SparklesIcon,
} from 'lucide-react';

const HERO_IMAGE = '/1.png';
const CARTOON_IMAGE = '/cartoon.png';

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#fdf4f2]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl" />

      <div className="grid grid-cols-1 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-20 px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20 lg:pl-16"
        >
          <h1
            id="hero-heading"
            className="font-serif text-[2.35rem] font-extrabold leading-[1.06] tracking-tight text-blush-700 sm:text-[3.2rem] lg:text-6xl"
          >
            Happy
            <br />
            Girlfriend Day,
            <br />

            <span className="inline-flex items-end gap-4">
              My Love

              <motion.span
                animate={{
                  scale: [1, 1.18, 1],
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <HeartIcon
                  aria-hidden="true"
                  className="mb-2 text-blush-400"
                  size={44}
                  strokeWidth={1.6}
                />
              </motion.span>
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600 sm:mt-6 sm:text-[17px]">
            A little website made just for you, to celebrate how special
            you are to me.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <motion.a
              href="#letter"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-blush-700 px-6 py-3 text-[14px] font-semibold text-white shadow-card transition-colors hover:bg-blush-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2 sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              <MailIcon size={18} strokeWidth={1.8} aria-hidden="true" />
              Open My Letter
            </motion.a>

            <motion.a
              href="#memories"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-blush-300 bg-white/80 px-6 py-3 text-[14px] font-semibold text-blush-700 shadow-soft transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2 sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              <ImageIcon size={18} strokeWidth={1.8} aria-hidden="true" />
              See Our Memories
            </motion.a>
          </div>

          {/* Cartoon on mobile and desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.5 },
              scale: { duration: 0.7, delay: 0.5 },
              rotate: { duration: 0.7, delay: 0.5 },
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.2,
              },
            }}
            className="relative mt-8 w-fit lg:absolute lg:-bottom-10 lg:right-4"
          >
            <div className="relative">
              <img
                src={CARTOON_IMAGE}
                alt="Cute cartoon character showing love"
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl sm:h-40 sm:w-40 lg:h-44 lg:w-44"
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 12, -12, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-3 -top-4 rounded-full bg-white p-2 shadow-lg"
              >
                <HeartIcon
                  className="text-blush-500"
                  size={26}
                  fill="currentColor"
                  strokeWidth={0}
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -left-4 top-2 rounded-full bg-white p-1.5 shadow-md"
              >
                <SparklesIcon
                  className="text-yellow-400"
                  size={20}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[540px]">
          <motion.img
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            src={HERO_IMAGE}
            alt="A couple smiling and touching foreheads, surrounded by pink roses and glowing lights"
            className="h-full w-full object-cover lg:absolute lg:inset-0"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#fdf4f2] via-[#fdf4f2]/40 to-transparent lg:w-1/3"
          />

          {/* Floating hearts */}
          <FloatingHeart
            className="left-[8%] top-[18%]"
            size={26}
            duration={6}
          />

          <FloatingHeart
            className="bottom-[16%] left-[16%]"
            size={18}
            duration={7.5}
            delay={1}
          />

          <FloatingHeart
            className="right-[9%] top-[16%]"
            size={22}
            duration={5.5}
            delay={0.5}
          />

          <FloatingHeart
            className="bottom-[10%] right-[18%]"
            size={16}
            duration={6.5}
            delay={1.4}
          />
        </div>
      </div>
    </section>
  );
}

type FloatingHeartProps = {
  className: string;
  size: number;
  duration: number;
  delay?: number;
};

function FloatingHeart({
  className,
  size,
  duration,
  delay = 0,
}: FloatingHeartProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute text-blush-400/80 ${className}`}
      animate={{
        y: [0, -14, 0],
        x: [0, 5, 0],
        rotate: [0, 8, -8, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <HeartIcon
        size={size}
        fill="currentColor"
        strokeWidth={0}
      />
    </motion.div>
  );
}