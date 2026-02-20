import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

import { getComponentContent } from '@/lang';

const LocationSection = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).LocationSection;

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-4xl text-temple-gold font-extrabold block mb-4">ॐ</span>
          <h2 className="font-sacred text-3xl md:text-4xl font-extrabold text-temple-gold mb-2">{content.title}</h2>
          <p className="font-sacred text-lg font-extrabold text-temple-gold">{content.subtitle}</p>
          <div className="sacred-divider"><span className="text-temple-gold font-extrabold text-sm">✦</span></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {content.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-black/40 backdrop-blur-sm border-2 border-temple-gold"
            >
              <MapPin className="w-5 h-5 text-temple-gold mt-0.5 shrink-0" />
              <p className="font-body text-temple-cream font-bold">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-center text-temple-cream font-bold italic max-w-2xl mx-auto"
        >
          {content.desc}
        </motion.p>
      </div>
    </section>
  );
};

export default LocationSection;
