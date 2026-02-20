import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const MantrasSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Sacred Mantras',
      mantra1: 'Om Argaladevi Namaha',
      meaning1: 'I bow to the divine mother Argaladevi',
      mantra2: 'Sarva Mangala Mangalye Shive Sarvartha Sadhike',
    },
    te: {
      title: 'పవిత్ర మంత్రాలు',
      mantra1: 'Om Argaladevi Namaha',
      meaning1: 'దివ్య మాత అర్గళాదేవికి నమస్కరిస్తున్నాను',
      mantra2: 'Sarva Mangala Mangalye Shive Sarvartha Sadhike',
    },
    hi: {
      title: 'पवित्र मंत्र',
      mantra1: 'Om Argaladevi Namaha',
      meaning1: 'मैं दिव्य माता अर्गलादेवी को नमन करता हूँ',
      mantra2: 'Sarva Mangala Mangalye Shive Sarvartha Sadhike',
    }
  }[language];

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sacred text-3xl md:text-4xl font-extrabold text-temple-gold mb-8">
            {content.title}
          </h2>
          <div className="sacred-divider">
            <span className="text-temple-gold font-extrabold text-sm">✦</span>
          </div>
        </motion.div>

        <div className="space-y-8 mt-10">
          {/* Mantra Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-temple-gold/50 rounded-lg p-8 bg-black/40 backdrop-blur-sm hover:border-temple-gold transition-all duration-300"
          >
            <p className="font-devanagari text-2xl md:text-3xl text-temple-gold mb-3 font-extrabold">
              "{content.mantra1}"
            </p>
            <p className="font-body text-temple-cream font-bold">
              {content.meaning1}
            </p>
          </motion.div>

          {/* Mantra Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-temple-gold/50 rounded-lg p-8 bg-black/40 backdrop-blur-sm hover:border-temple-gold transition-all duration-300"
          >
            <p className="font-devanagari text-xl md:text-2xl font-extrabold text-temple-gold">
              "{content.mantra2}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MantrasSection;
