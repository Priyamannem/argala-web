import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import goddessStatue from '@/assets/goddess-statue.jpg';

import { getComponentContent } from '@/lang';

const AboutSection = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).AboutSection;

  return (
    <section id="about" className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-sacred text-3xl md:text-4xl font-extrabold text-temple-gold mb-4">{content.title}</h2>
          <div className="sacred-divider"><span className="text-temple-gold font-extrabold text-sm">✦</span></div>
          <p className="font-body text-temple-cream font-bold max-w-3xl font-bold mx-auto mt-6 leading-relaxed">{content.desc}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-2 border-temple-gold rounded-lg overflow-hidden"
          >
            <img src={goddessStatue} alt={content.img_alt} className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-3xl text-temple-gold font-extrabold">ॐ</span>
            <h3 className="font-sacred text-2xl font-extrabold text-temple-gold">{content.mother_title}</h3>
            <p className="font-body text-temple-cream font-bold leading-relaxed">{content.mother_desc}</p>
            <p className="font-body text-temple-cream font-bold leading-relaxed">{content.mother_desc2}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
