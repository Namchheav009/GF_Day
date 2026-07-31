import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshakeIcon, MoonStarIcon, SmileIcon, SparklesIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

type Adoration = {
  icon: React.ComponentType<{size?: number;className?: string;strokeWidth?: number;}>;
  title: string;
  text: string;
};

const ITEMS: Adoration[] = [
{
  icon: SmileIcon,
  title: 'Your laugh',
  text: 'It fills my heart with joy and makes every moment feel lighter.'
},
{
  icon: MoonStarIcon,
  title: 'Our late-night talks',
  text: 'Talking with you for hours is one of my favorite things in the world.'
},
{
  icon: HeartHandshakeIcon,
  title: 'Your warm hugs',
  text: 'In your arms, I always feel safe, loved, and completely at home.'
},
{
  icon: SparklesIcon,
  title: 'The way you care',
  text: 'Your love and gentle care make my life more beautiful every single day.'
}];


export function LittleThings() {
  return (
    <section
      id="little-things"
      aria-labelledby="little-things-heading"
      className="relative bg-[#fdf4f2] px-4 py-12 sm:px-10 sm:py-16">
      
      <div className="mx-auto w-full max-w-[1180px]">
        <SectionHeading id="little-things-heading">Little Things I Adore</SectionHeading>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="flex items-start gap-4 rounded-3xl border border-blush-200 bg-white/90 px-4 py-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:px-5 sm:py-6">
                
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blush-100">
                  <Icon size={24} className="text-blush-500" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-blush-700">{item.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-600">{item.text}</p>
                </div>
              </motion.article>);

          })}
        </div>
      </div>
    </section>);

}