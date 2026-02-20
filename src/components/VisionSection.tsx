import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

import { getComponentContent } from '@/lang';

const VisionSection = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).VisionSection;

  return (
    <section className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl text-temple-gold">ॐ</div>
        <div className="absolute bottom-10 right-10 text-9xl text-temple-gold">ॐ</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-sacred text-3xl md:text-4xl text-temple-cream mb-4">{content.title}</h2>
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-temple-gold/50" />
            <span className="text-temple-gold">✦</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-temple-gold/50" />
          </div>
          <blockquote className="font-body text-lg md:text-xl text-temple-cream/90 leading-relaxed italic">
            {content.quote}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
