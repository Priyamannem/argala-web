import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import goddessStatue from '@/assets/goddess-statue.jpg';

import { getComponentContent } from '@/lang';

const AboutSection = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).AboutSection;

  return (
    <section id="about" className="py-12 md:py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-sacred text-3xl md:text-4xl font-extrabold text-temple-gold mb-2">{content.title}</h2>
          <div className="sacred-divider !my-4"><span className="text-temple-gold font-extrabold text-sm">✦</span></div>
          {language !== 'te' && (
            <p className="font-body text-temple-cream font-bold max-w-3xl font-bold mx-auto mt-4 leading-relaxed">{content.desc}</p>
          )}
        </motion.div>

        <div className={`grid md:grid-cols-[45%_55%] lg:grid-cols-[40%_60%] gap-8 md:gap-12 items-center text-center md:text-left`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-2 border-temple-gold rounded-lg overflow-hidden max-w-[300px] md:max-w-none mx-auto"
          >
            <img src={goddessStatue} alt={content.img_alt} className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            {language !== 'te' && (
              <span className="text-3xl text-temple-gold font-extrabold">ॐ</span>
            )}

            {/* Move description here for Telugu */}
            {language === 'te' && (
              <p className="font-body text-temple-cream font-bold leading-relaxed text-sm md:text-base mb-4 italic border-l-2 border-temple-gold/30 pl-4">
                {content.desc}
              </p>
            )}

            {(content as any).mother_title && (
              <h3 className="font-sacred text-2xl font-extrabold text-temple-gold">{(content as any).mother_title}</h3>
            )}
            <p className="font-body text-temple-cream font-bold leading-relaxed text-sm md:text-base">{content.mother_desc}</p>
            <p className="font-body text-temple-cream font-bold leading-relaxed text-sm md:text-base">{content.mother_desc2}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
