import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Globe } from 'lucide-react';
import { useMusic } from '@/contexts/MusicContext';
import brochurePdf from '@/assets/broucher.pdf';
import borderImg from '@/assets/border.png';
import toranamImg from '@/assets/toranam.png';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिंदी' },
];

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { isMuted, toggleMute } = useMusic();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const content = {
    en: {
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      contact: 'Contact',
      donate: 'Donate',
      brochure: 'Brochure',
      temple_name: 'Sri Maha Chandi Argala',
      border_alt: 'border decoration',
    },
    te: {
      home: 'హోమ్',
      about: 'గురించి',
      gallery: 'గ్యాలరీ',
      contact: 'సంప్రదించండి',
      donate: 'విరాళం',
      brochure: 'బ్రోచర్',
      temple_name: 'శ్రీ మహా చండి అర్గళ',
      border_alt: 'అలంకార సరిహద్దు',
    },
    hi: {
      home: 'होम',
      about: 'बारे में',
      gallery: 'गैलरी',
      contact: 'संपर्क',
      donate: 'दान',
      brochure: 'ब्रोशर',
      temple_name: 'श्री महा चण्डी अर्गला',
      border_alt: 'सजावटी सीमा',
    }
  }[language];

  const navLinks = [
    { path: '/', label: content.home },
    { path: '/about', label: content.about },
    { path: '/gallery', label: content.gallery },
    { path: '/contact', label: content.contact },
    { path: '/donate', label: content.donate, isButton: true },
    { path: brochurePdf, label: content.brochure, isDownload: true, isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => { }; // Scrolled state removed if not used, or keep it if needed.
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.startsWith('/#')) {
      const id = path.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-temple-maroon shadow-lg">
      <div className="w-full overflow-hidden h-12 md:h-12">
        <img src={borderImg} alt={content.border_alt} className="w-full h-full object-fill opacity-90" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5 relative z-0 -mt-7 md:-mt-7">
        <div className="flex items-center justify-between py-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 py-0">
            <span className="font-sacred text-sm md:text-base text-temple-cream font-semibold tracking-wide hidden sm:block">
              {content.temple_name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const btnClass = link.isButton
                ? "font-sacred text-xs tracking-widest uppercase px-3 py-1.5 rounded border border-temple-gold/60 text-temple-gold hover:bg-temple-gold/20 transition-all duration-300"
                : "font-sacred text-xs tracking-widest uppercase text-temple-cream/80 hover:text-temple-gold transition-colors duration-300";

              return link.path.startsWith('/#') ? (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={btnClass}
                >
                  {link.label}
                </button>
              ) : link.isDownload ? (
                <a
                  key={link.label}
                  href={link.path}
                  download="Argaladevi_Brochure.pdf"
                  className={btnClass}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={btnClass}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 text-temple-cream/80 hover:text-temple-gold transition-colors"
                aria-label="Switch language"
              >
                <Globe className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-36 rounded-md border border-temple-gold/30 bg-temple-stone/95 backdrop-blur-md shadow-xl overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${language === lang.code ? 'bg-temple-gold/20 text-temple-gold' : 'text-temple-cream/80 hover:bg-temple-gold/10 hover:text-temple-gold'} ${lang.code === 'te' ? 'font-telugu' : lang.code === 'hi' ? 'font-devanagari' : 'font-body'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Music Control */}
            {location.pathname !== '/gallery' && (
              <button
                onClick={toggleMute}
                className="p-2 text-temple-cream/80 hover:text-temple-gold transition-all duration-300 group relative"
                aria-label={isMuted ? "Unmute background music" : "Mute background music"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <div className="relative">
                    <Volume2 className="w-5 h-5" />
                    <motion.div
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 bg-temple-gold rounded-full"
                    />
                  </div>
                )}
                {/* Tooltip on hover */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-[10px] text-temple-gold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-sacred uppercase tracking-widest">
                  {isMuted ? "Play Music" : "Mute Music"}
                </span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <div ref={langRef} className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="p-2 text-temple-cream/80 hover:text-temple-gold">
                <Globe className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-36 rounded-md border border-temple-gold/30 bg-temple-stone/95 backdrop-blur-md shadow-xl overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${language === lang.code ? 'bg-temple-gold/20 text-temple-gold' : 'text-temple-cream/80 hover:bg-temple-gold/10'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Music Control */}
            {location.pathname !== '/gallery' && (
              <button onClick={toggleMute} className="p-2 text-temple-cream/80 hover:text-temple-gold transition-colors">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-temple-gold" />}
              </button>
            )}

            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-temple-cream">
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-temple-gold transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-temple-gold transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-temple-gold transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-temple-stone/95 backdrop-blur-md border-t border-temple-gold/20"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                link.path.startsWith('/#') ? (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="block w-full text-left px-3 py-2 font-sacred text-sm tracking-widest uppercase text-temple-cream/80 hover:text-temple-gold"
                  >
                    {link.label}
                  </button>
                ) : link.isDownload ? (
                  <a
                    key={link.label}
                    href={link.path}
                    download="Argaladevi_Brochure.pdf"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 font-sacred text-sm tracking-widest uppercase text-temple-cream/80 hover:text-temple-gold"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 font-sacred text-sm tracking-widest uppercase text-temple-cream/80 hover:text-temple-gold"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Border below Navbar - Fixed on all pages */}
      <div className="absolute top-full left-0 right-0 pointer-events-none z-40 h-13 md:h-13">
        <img src={borderImg} alt={content.border_alt} className="w-full h-full object-fill opacity-100 drop-shadow-md" />
      </div>
    </nav>
  );
};

export default Navbar;
