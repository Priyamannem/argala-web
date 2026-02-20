import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';

import { getComponentContent } from '@/lang';

const WelcomeSection = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).WelcomeSection;

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-4xl text-temple-gold font-extrabold block mb-4">ॐ</span>
          <h2 className="font-sacred text-3xl md:text-4xl font-extrabold text-temple-gold mb-4">
            {content.title}
          </h2>

          {/* Bold Maroon Divider Line */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-0.5 w-12 bg-temple-gold opacity-80"></div>
            <span className="text-temple-gold font-extrabold text-lg">✦</span>
            <div className="h-0.5 w-12 bg-temple-gold opacity-80"></div>
          </div>

          {/* Main Content: Black and Bold */}
          <p className="font-body text-temple-cream font-bold max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            {content.desc}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Shield, title: content.protection_title, desc: content.protection_desc },
            { icon: Sparkles, title: content.prosperity_title, desc: content.prosperity_desc },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="border-2 border-temple-gold rounded-lg p-8 bg-black/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon and Heading: Maroon */}
              <item.icon className="w-10 h-10 text-temple-gold mb-4" />
              <h3 className="font-sacred text-xl font-extrabold text-temple-gold mb-3 uppercase tracking-wide">
                {item.title}
              </h3>

              {/* Card Description: Black and Bold */}
              <p className="font-body text-temple-cream font-bold leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;