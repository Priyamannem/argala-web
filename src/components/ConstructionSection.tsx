import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import templeConstruction from '@/assets/temple-construction.jpg';
import galleryBg from '@/assets/gallery.jpeg';
import { CheckCircle, Flower2 } from 'lucide-react';

import { getComponentContent } from '@/lang';

const ConstructionSection = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).ConstructionSection;

  return (
    <section className="relative py-24 px-4 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background with Mandala and Darker Overlay to match reference */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url(${galleryBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-temple-maroon/80 to-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6">
        {/* Sacred Design Principles Section - Matches First Image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h2 className="font-sacred text-2xl md:text-3xl lg:text-4xl font-bold text-temple-gold uppercase tracking-wider drop-shadow-sm">
                {content.principles_title}
              </h2>
              <div className="h-1 w-20 bg-temple-gold rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="font-body text-base md:text-lg lg:text-xl leading-relaxed font-medium opacity-95 text-temple-cream">
                {content.principles_desc}
              </p>
              <p className="font-body text-sm md:text-base lg:text-lg leading-relaxed font-medium opacity-90 italic border-l-4 border-temple-gold/40 pl-5 py-2 text-temple-cream/90">
                {content.principles_desc2}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            {/* The Framed Image - Matches Image 1 */}
            <div className="relative z-10 p-1.5 border-[2px] border-temple-gold rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(184,134,11,0.2)] bg-temple-maroon/20 backdrop-blur-sm">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={templeConstruction}
                  alt={content.img_alt}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Decorative Glows */}
            <div className="absolute -inset-6 bg-temple-gold/5 blur-[60px] -z-10 group-hover:bg-temple-gold/15 transition-all duration-700" />
          </motion.div>
        </div>

        {/* Key Architectural Features Section - Matches Second Image Request */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block relative mb-16">
            <h3 className="font-sacred text-2xl md:text-4xl font-bold text-temple-gold uppercase tracking-[0.2em]">
              {content.features_title}
            </h3>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-temple-gold" />
              <span className="text-temple-gold text-xs">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-temple-gold" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: 'rgba(184, 134, 11, 0.1)',
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
                className="group relative flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-temple-gold/20 px-5 py-2.5 rounded-full hover:border-temple-gold/60 transition-all duration-500 cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(184,134,11,0.2)] overflow-hidden"
              >
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-temple-gold group-hover:text-amber-400 transition-colors"
                  >
                    <Flower2 className="w-5 h-5 drop-shadow-[0_0_3px_rgba(184,134,11,0.5)]" />
                  </motion.div>
                </div>
                <span className="font-body text-temple-cream font-bold text-sm md:text-base tracking-wide whitespace-nowrap relative z-10">
                  {feature}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-temple-gold/0 via-temple-gold/5 to-temple-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionSection;
