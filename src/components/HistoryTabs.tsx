import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { getComponentContent } from '@/lang';

const HistoryTabs = () => {
  const { language } = useLanguage();
  const content = getComponentContent(language).HistoryTabs;
  const [active, setActive] = useState(content.tabs[0].id);

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Tabs Container */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {content.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-6 py-2.5 font-sacred font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 ${active === tab.id
                  ? 'bg-temple-gold text-white shadow-lg'
                  : 'border border-temple-gold text-temple-gold hover:bg-temple-gold/10 bg-transparent'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Box with Gold Border */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border-2 border-temple-gold rounded-lg p-8 bg-black/40 backdrop-blur-sm shadow-xl"
        >
          <p className="font-body text-temple-cream leading-relaxed text-base md:text-lg">
            {content.tabs.find((tab) => tab.id === active)?.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTabs;