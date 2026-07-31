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
      className="relative bg-[#fffaf8] px-4 py-12 sm:px-10 sm:py-16">
      
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
        

        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <SectionHeading id="letter-heading">A Letter For You</SectionHeading>

          <p className="mt-5 text-[15px] leading-[1.8] text-neutral-700 sm:mt-7 sm:text-[16px]">
            Pov meas, We argue sometimes, but I want you to know that I love you more than anything in this world.
            You are my sunshine, my strength, and my everything.Bong will always be here for you, through the good times and the bad.
             I promise to support you, to listen to you, and to love you unconditionally.I will never let you down, 
             and I will always be your biggest fan. You are the most important person in my life, and I am so grateful for you.
            
          </p>

          <p className="mt-7 flex items-center gap-2.5 font-script text-2xl text-blush-700">
            Namchheav with oun leap always,
            <HeartIcon size={20} className="text-blush-500" strokeWidth={1.6} aria-hidden="true" />
          </p>
        </div>
      </motion.div>
    </section>);

}