import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

import { getComponentContent } from '@/lang';

const TempleOverview = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).TempleOverview;

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-4xl text-temple-gold font-extrabold block mb-4">ॐ</span>
          <h2 className="font-sacred text-3xl md:text-4xl font-extrabold text-temple-gold mb-6">{content.title}</h2>
          <div className="sacred-divider"><span className="text-temple-gold font-extrabold text-sm">✦</span></div>
          <div className="space-y-4 mt-8">
            <p className="font-body text-temple-cream font-bold leading-relaxed">{content.desc}</p>
            <p className="font-body text-temple-cream font-bold leading-relaxed">{content.desc2}</p>
            <p className="font-body text-temple-cream font-bold leading-relaxed italic">{content.desc3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TempleOverview;
