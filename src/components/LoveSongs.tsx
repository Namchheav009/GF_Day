import { motion } from 'framer-motion';
import {
  HeartIcon,
  Music2Icon,
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Song = {
  title: string;
  artist: string;
  audioUrl: string;
};

const songs: Song[] = [
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    audioUrl: '/songs/Ed Sheeran - Perfect (Official Music Video).mp3',
  },
  {
    title: 'Closer',
    artist: 'The Chainsmokers ft. Halsey',
    audioUrl: '/songs/The Chainsmokers - Closer (Lyric) ft. Halsey.mp3',
  },
];

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return '0:00';
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function LoveSongs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const currentSong = songs[currentIndex];
  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.pause();
    audio.src = currentSong.audioUrl;
    audio.load();
    setProgress(0);
    setDuration(0);

    if (isPlaying) {
      void audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentIndex, currentSong.audioUrl, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const handleTimeUpdate = () => setProgress(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentIndex((prev) => (prev + 1) % songs.length);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audio.src = currentSong.audioUrl;
      audio.load();
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Unable to play the selected song.', error);
      setIsPlaying(false);
    }
  };

  const switchSong = (direction: -1 | 1) => {
    setCurrentIndex((prev) => (prev + direction + songs.length) % songs.length);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || duration === 0) return;

    const bar = progressBarRef.current;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = Math.max(0, Math.min(percent * duration, duration));

    audio.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed bottom-5 right-4 z-50 w-[340px] rounded-[26px] border border-[#efc9d4] bg-white/90 p-4 shadow-[0_18px_45px_rgba(200,126,148,0.22)] backdrop-blur sm:right-6"
        >
          <audio ref={audioRef} preload="metadata" />

          <div className="flex items-start justify-between gap-3 border-b border-[#f0d2db] pb-3">
            <div className="flex items-center gap-3">
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
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="rounded-full border border-[#f0d2db] px-3 py-1 text-xs font-semibold text-[#b04f76] transition hover:bg-[#fff3f7]"
            >
              Hide
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[1.03rem] font-semibold text-[#5f2f3f]">{currentSong.title} - {currentSong.artist}</p>
              <p className="mt-1 text-xs text-neutral-500">{formatTime(progress)} • {formatTime(duration)}</p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#cc2b79] to-[#7a1e5c] text-white shadow-lg">
              {isPlaying ? <PauseIcon size={20} strokeWidth={2.4} /> : <PlayIcon size={20} strokeWidth={2.4} fill="currentColor" />}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => switchSong(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cf6f92] text-white shadow-md transition hover:scale-[1.04]"
              aria-label="Previous song"
            >
              <SkipBackIcon size={18} strokeWidth={2.3} />
            </button>
            <button
              type="button"
              onClick={togglePlayback}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#cf6f92] text-white shadow-md transition hover:scale-[1.04]"
              aria-label={isPlaying ? 'Pause song' : 'Play song'}
            >
              {isPlaying ? <PauseIcon size={20} strokeWidth={2.5} /> : <PlayIcon size={20} strokeWidth={2.5} fill="currentColor" />}
            </button>
            <button
              type="button"
              onClick={() => switchSong(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cf6f92] text-white shadow-md transition hover:scale-[1.04]"
              aria-label="Next song"
            >
              <SkipForwardIcon size={18} strokeWidth={2.3} />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="text-[#c45b78]">
              <Music2Icon size={18} strokeWidth={2} />
            </div>
            <div
              ref={progressBarRef}
              onClick={handleSeek}
              className="h-1.5 flex-1 cursor-pointer rounded-full bg-[#f1d7df] hover:h-2 transition-all"
            >
              <div className="h-full rounded-full bg-gradient-to-r from-[#c45b78] to-[#7a1e5c]" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fdf1f5] text-[#b04f76]">
              {isPlaying ? <PauseIcon size={14} strokeWidth={2.5} /> : <PlayIcon size={14} strokeWidth={2.5} fill="currentColor" />}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {songs.map((song, index) => {
              const active = currentIndex === index;

              return (
                <button
                  key={song.title}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full rounded-2xl border px-3 py-2 text-left text-sm transition ${
                    active ? 'border-[#d97ca5] bg-[#fff3f7] text-[#6f3243]' : 'border-transparent bg-[#fdf7fa] text-neutral-600'
                  }`}
                >
                  <span className="block font-semibold">{song.title}</span>
                  <span className="text-xs text-neutral-500">{song.artist}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      ) : (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          type="button"
          onClick={() => setIsVisible(true)}
          className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full border border-[#efc9d4] bg-white/90 px-4 py-3 text-sm font-semibold text-[#b04f76] shadow-[0_10px_30px_rgba(200,126,148,0.2)] backdrop-blur sm:right-6"
        >
          <Music2Icon size={18} strokeWidth={2} />
          Show player
        </motion.button>
      )}
    </>
  );
}
