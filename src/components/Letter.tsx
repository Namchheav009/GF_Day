import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const LETTER_IMAGE = "/01d533ea-6912-41d8-aed0-e26f5eb48b35.jpg";


export function Letter() {
  return (
    <section
      id="letter"
      aria-labelledby="letter-heading"
      className="relative bg-[#fffaf8] px-6 py-16 sm:px-10">
      
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto grid w-full max-w-[1180px] grid-cols-1 overflow-hidden rounded-[2rem] border border-blush-200 bg-blush-100/70 shadow-card md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        
        <img
          src={LETTER_IMAGE}
          alt="A pink envelope with a handwritten letter, sealed with a heart and surrounded by roses"
          className="h-64 w-full object-cover md:h-full" />
        

        <div className="px-8 py-10 sm:px-12">
          <SectionHeading id="letter-heading">A Letter For You</SectionHeading>

          <p className="mt-7 text-[16px] leading-[1.85] text-neutral-700">
            My love, thank you for being the most wonderful part of my life. You make every day
            brighter, every moment sweeter, and every dream worth chasing. I am so grateful to have
            you by my side. Today and always, I want you to know that you are my heart, my
            happiness, and my forever.
          </p>

          <p className="mt-7 flex items-center gap-2.5 font-script text-2xl text-blush-700">
            Always yours,
            <HeartIcon size={20} className="text-blush-500" strokeWidth={1.6} aria-hidden="true" />
          </p>
        </div>
      </motion.div>
    </section>);

}