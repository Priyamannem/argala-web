import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import heroTemple1 from '@/assets/hero-temple-1.jpg';
import heroTemple2 from '@/assets/hero-temple-2.jpg';
import heroTemple3 from '@/assets/hero-temple-3.jpg';
import borderImg from '@/assets/border.png';

import { getComponentContent } from '@/lang';

const images = [heroTemple1, heroTemple2, heroTemple3];

const HeroSection = () => {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const content = getComponentContent(language).HeroSection;

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % images.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative mt-[48px] md:mt-[56px] h-[calc(100vh-48px)] md:h-[calc(100vh-56px)] w-full overflow-hidden bg-temple-black">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img src={images[current]} alt={content.img_alt} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-temple-gold/60"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 800,
            }}
            animate={{
              y: -20,
              x: `+=${Math.random() * 100 - 50}`,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="space-y-6"
        >

          <h1 className="font-sacred text-3xl md:text-4xl lg:text-5xl text-temple-gold font-bold tracking-wide leading-tight">
            {content.title}
          </h1>

          <div className="space-y-2">
            <p className="font-body text-lg md:text-xl text-temple-cream/90 italic">
              {content.subtitle}
            </p>
            <p className="font-body text-base md:text-lg text-temple-cream/90">
              {content.subtitle2}
            </p>
          </div>

          <div className="space-y-1 pt-2">
            <p className="font-devanagari text-xl md:text-2xl text-temple-saffron">
              {content.mantra}
            </p>
            <p className="font-body text-sm text-temple-cream/70 italic">
              {content.mantra_meaning}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={() => scrollTo('donate')}
              className="px-8 py-3 bg-temple-gold/80 text-temple-cream font-sacred text-sm tracking-widest uppercase rounded-sm hover:bg-temple-saffron transition-all duration-300 glow-gold"
            >
              {content.cta_donate}
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="px-8 py-3 border-2 border-temple-gold/60 text-temple-cream font-sacred text-sm tracking-widest uppercase rounded-sm hover:bg-temple-gold/10 transition-all duration-300"
            >
              {content.cta_darshan}
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
