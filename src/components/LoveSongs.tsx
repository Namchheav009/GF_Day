import { motion } from 'framer-motion';
import {
  HeartIcon,
  Music2Icon,
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from 'lucide-react';

export function LoveSongs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-5 right-4 z-50 w-[320px] rounded-[26px] border border-[#efc9d4] bg-white/90 p-4 shadow-[0_18px_45px_rgba(200,126,148,0.22)] backdrop-blur sm:right-6"
    >
      <div className="flex items-center gap-3 border-b border-[#f0d2db] pb-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f9e5ea] text-blush-700">
          <Music2Icon size={22} strokeWidth={1.9} />
        </div>
        <div>
          <div className="flex items-center gap-2 text-[1.12rem] font-semibold text-[#6f3243]">
            Love Songs
            <HeartIcon size={16} fill="currentColor" strokeWidth={0} className="text-[#c45b78]" />
          </div>
          <p className="text-sm text-neutral-500">For you ♥</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[1.03rem] font-semibold text-[#5f2f3f]">Perfect - Ed Sheeran</p>
          <p className="mt-1 text-xs text-neutral-500">0:00</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#cc2b79] to-[#7a1e5c] text-white shadow-lg">
          <PlayIcon size={20} strokeWidth={2.4} fill="currentColor" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cf6f92] text-white shadow-md transition hover:scale-[1.04]">
          <SkipBackIcon size={18} strokeWidth={2.3} />
        </button>
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#cf6f92] text-white shadow-md transition hover:scale-[1.04]">
          <PlayIcon size={20} strokeWidth={2.5} fill="currentColor" />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cf6f92] text-white shadow-md transition hover:scale-[1.04]">
          <SkipForwardIcon size={18} strokeWidth={2.3} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="text-[#c45b78]">
          <Music2Icon size={18} strokeWidth={2} />
        </div>
        <div className="h-1.5 flex-1 rounded-full bg-[#f1d7df]">
          <div className="h-1.5 w-[68%] rounded-full bg-gradient-to-r from-[#c45b78] to-[#7a1e5c]" />
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fdf1f5] text-[#b04f76]">
          <PauseIcon size={14} strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
}
