import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ImageIcon, MailIcon } from 'lucide-react';

const HERO_IMAGE = "/ae88b9f2-d2fa-43a6-963c-d924cec6e124.jpg";


export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#fdf4f2]">
      
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl" />
      <div className="grid grid-cols-1 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 px-8 py-14 sm:px-12 lg:py-20 lg:pl-16">
          
          <h1
            id="hero-heading"
            className="font-serif text-[2.9rem] font-extrabold leading-[1.06] tracking-tight text-blush-700 sm:text-6xl">
            
            Happy
            <br />
            Girlfriend Day,
            <br />
            <span className="inline-flex items-end gap-4">
              My Love
              <HeartIcon
                aria-hidden="true"
                className="mb-2 text-blush-400"
                size={44}
                strokeWidth={1.6} />
              
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-neutral-600">
            A little website made just for you, to celebrate how special you are to me.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#letter"
              className="inline-flex items-center gap-2.5 rounded-full bg-blush-700 px-7 py-3.5 text-[15px] font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:bg-blush-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2">
              
              <MailIcon size={18} strokeWidth={1.8} aria-hidden="true" />
              Open My Letter
            </a>
            <a
              href="#memories"
              className="inline-flex items-center gap-2.5 rounded-full border border-blush-300 bg-white/80 px-7 py-3.5 text-[15px] font-semibold text-blush-700 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2">
              
              <ImageIcon size={18} strokeWidth={1.8} aria-hidden="true" />
              See Our Memories
            </a>
          </div>
        </motion.div>

        <div className="relative min-h-[320px] lg:min-h-[540px]">
          <img
            src={HERO_IMAGE}
            alt="A couple smiling and touching foreheads, surrounded by pink roses and glowing lights"
            className="h-full w-full object-cover lg:absolute lg:inset-0" />
          
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#fdf4f2] via-[#fdf4f2]/40 to-transparent lg:w-1/3" />
          
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] top-[18%] text-blush-400/80"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            
            <HeartIcon size={26} fill="currentColor" strokeWidth={0} />
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16%] bottom-[16%] text-blush-300/80"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
            
            <HeartIcon size={18} fill="currentColor" strokeWidth={0} />
          </motion.div>
        </div>
      </div>
    </section>);

}