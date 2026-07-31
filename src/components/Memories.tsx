import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FloatingHearts } from './FloatingHearts';

type Memory = {
  image: string;
  alt: string;
  caption: string;
};

const MEMORIES: Memory[] = [
{
  image: "/a023f09a-e2a3-4a81-9dcf-2dec84768263.jpg",

  alt: 'A couple embracing on the beach at sunset',
  caption: 'That sunset with you will always be in my heart.'
},
{
  image: "/66930440-97e0-4211-a507-8fcad044efd0.jpg",

  alt: 'A couple cuddling indoors surrounded by warm string lights',
  caption: 'Every ordinary moment becomes special with you.'
},
{
  image: "/cf871df9-d03b-4f54-91e0-ababfe9af993.jpg",

  alt: 'A couple overlooking a beautiful coastal landscape',
  caption: 'Adventures are better because I have you.'
}];


export function Memories() {
  return (
    <section
      id="memories"
      aria-labelledby="memories-heading"
      className="relative bg-[#fffaf8] px-6 py-16 sm:px-10">
      
      <FloatingHearts />
      <div className="relative mx-auto w-full max-w-[1180px]">
        <SectionHeading id="memories-heading">Our Sweet Memories</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {MEMORIES.map((memory, index) =>
          <motion.figure
            key={memory.caption}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
            className="group overflow-hidden rounded-3xl border border-blush-200 bg-white p-3 shadow-card transition-transform duration-300 hover:-translate-y-1.5">
            
              <div className="relative overflow-hidden rounded-2xl">
                <img
                src={memory.image}
                alt={memory.alt}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-soft">
                  <HeartIcon
                  size={15}
                  className="text-blush-600"
                  fill="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true" />
                
                </span>
              </div>
              <figcaption className="px-4 pb-3 pt-4 text-center">
                <p className="font-serif text-[16px] italic leading-snug text-blush-700">
                  {memory.caption}
                </p>
                <HeartIcon
                size={13}
                className="mx-auto mt-3 text-blush-400"
                fill="currentColor"
                strokeWidth={0}
                aria-hidden="true" />
              
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>);

}