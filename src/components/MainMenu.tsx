import React from 'react';
import { TactileButton } from './TactileButton';
import { LevelProgress } from '../types/game';

interface MainMenuProps {
  onPlay: () => void;
  onLearn: () => void;
  onHelp: () => void;
  onSettings: () => void;
  progress: Record<number, LevelProgress>;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  onPlay,
  onLearn,
  onHelp,
  onSettings,
  progress,
}) => {
  const totalStars = Object.values(progress).reduce((acc, p) => acc + p.stars, 0);
  const completedLevels = Object.values(progress).filter((p) => p.completed).length;
  const totalLevels = 6;
  const maxStars = totalLevels * 3;

  return (
    <div className="relative w-full h-[100dvh] max-h-screen flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 landscape:p-2 bg-radial from-slate-800 via-slate-900 to-slate-950 overflow-hidden text-slate-100 select-none">
      {/* Decorative Floating 3D Geometric Illustrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <img
          src="/assets/geometry/shape_right_triangle.png"
          alt="Segitiga Siku-Siku"
          className="absolute -top-6 -left-6 w-36 md:w-56 object-contain animate-pulse"
        />
        <img
          src="/assets/geometry/shape_square.png"
          alt="Persegi"
          className="absolute top-1/4 -right-10 w-32 md:w-52 object-contain"
        />
        <img
          src="/assets/geometry/shape_trapezoid.png"
          alt="Trapesium"
          className="absolute -bottom-10 -left-6 w-40 md:w-64 object-contain"
        />
        <img
          src="/assets/geometry/shape_parallelogram.png"
          alt="Jajargenjang"
          className="absolute -bottom-8 -right-8 w-36 md:w-56 object-contain"
        />
      </div>

      {/* Top Header: Stats Badges (Trophy & Stars) */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between landscape:py-0">
        <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl border-2 border-amber-500/40 shadow-xl">
          <img src="/assets/icons/trophy.png" alt="Piala" className="w-5 h-5 sm:w-7 sm:h-7 object-contain drop-shadow" />
          <div className="text-left leading-tight">
            <span className="text-[9px] sm:text-[10px] text-amber-400 font-bold uppercase tracking-wider block">Prestasi</span>
            <span className="text-xs sm:text-sm font-black text-white">{completedLevels} / {totalLevels} Level</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl border-2 border-amber-500/40 shadow-xl">
          <img src="/assets/icons/star.png" alt="Bintang" className="w-5 h-5 sm:w-7 sm:h-7 object-contain drop-shadow" />
          <div className="text-left leading-tight">
            <span className="text-[9px] sm:text-[10px] text-amber-400 font-bold uppercase tracking-wider block">Bintang</span>
            <span className="text-xs sm:text-sm font-black text-amber-300">{totalStars} / {maxStars}</span>
          </div>
        </div>
      </header>

      {/* Center Hero: Title & Action */}
      <main className="relative z-10 flex flex-col items-center justify-center my-auto text-center max-w-2xl landscape:my-1">
        {/* Animated Badge Container */}
        <div className="relative mb-2 sm:mb-3 landscape:mb-1">
          <div className="inline-flex items-center justify-center p-2 sm:p-2.5 rounded-2xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 shadow-[0_4px_0_#b45309] border-2 sm:border-4 border-amber-200">
            <img
              src="/assets/icons/star.png"
              alt="Pythagoras Icon"
              className="w-10 h-10 sm:w-14 sm:h-14 landscape:w-8 landscape:h-8 object-contain drop-shadow"
            />
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-tight landscape:text-2xl sm:landscape:text-3xl">
          PYTHAGORAS ADVENTURE
        </h1>

        <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-300 font-medium max-w-lg leading-snug landscape:hidden sm:landscape:block">
          Petualangan pembuktian geometri klasik: pasang puzzle kuadrat sisi membuktikan <strong className="text-amber-400 font-mono">a² + b² = c²</strong>!
        </p>

        {/* Big 3D Play Button */}
        <div className="mt-3 sm:mt-6 landscape:mt-2 w-full max-w-xs sm:max-w-sm">
          <TactileButton
            iconSrc="/assets/icons/play.png"
            iconAlt="Mulai Bermain"
            label="MULAI PETUALANGAN"
            variant="primary"
            size="lg"
            className="w-full text-base sm:text-lg py-2.5 sm:py-3.5 shadow-[0_6px_0_#b45309] hover:scale-102 active:translate-y-1 transition-all"
            onClick={onPlay}
          />
        </div>

        {/* Secondary Menu Navigation Buttons */}
        <div className="mt-2.5 sm:mt-4 landscape:mt-2 grid grid-cols-3 gap-2 w-full max-w-sm">
          <TactileButton
            iconSrc="/assets/icons/learn.png"
            iconAlt="Belajar Materi"
            label="Materi"
            variant="secondary"
            size="sm"
            className="py-1.5 text-xs"
            onClick={onLearn}
          />
          <TactileButton
            iconSrc="/assets/icons/help.png"
            iconAlt="Petunjuk"
            label="Petunjuk"
            variant="purple"
            size="sm"
            className="py-1.5 text-xs"
            onClick={onHelp}
          />
          <TactileButton
            iconSrc="/assets/icons/settings.png"
            iconAlt="Pengaturan"
            label="Setelan"
            variant="neutral"
            size="sm"
            className="py-1.5 text-xs"
            onClick={onSettings}
          />
        </div>
      </main>

      {/* Footer Info */}
      <footer className="relative z-10 flex flex-col items-center gap-1 text-center text-xs text-slate-400 pb-1 landscape:hidden sm:landscape:flex">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 rounded-full border border-amber-500/40 text-amber-300 font-black text-[11px] shadow-lg tracking-wide">
          <span>👑 Made In Didit Fakhrullah</span>
        </div>
        <span className="text-[9px] text-slate-500">Pythagoras Adventure • Game Interaktif Pembuktian Teorema Geometri</span>
      </footer>
    </div>
  );
};
