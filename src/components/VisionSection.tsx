import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const VisionSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'A Temple Beyond Time',
      quote: '"Sri Maha Chandi Argala Kshetram is not just a temple — it is a spiritual movement. It aims to preserve the essence of Sanatana Dharma, Vedic tradition, and divine feminine power in its purest form. Our purpose is to create a timeless space where devotion, knowledge, and service unite — a sacred center that will inspire faith and spiritual awakening for centuries."',
    },
    te: {
      title: 'కాలాతీత ఆలయం',
      quote: '"శ్రీ మహా చండి అర్గళ క్షేత్రం కేవలం ఒక ఆలయం కాదు — ఇది ఒక ఆధ్యాత్మిక ఉద్యమం. ఇది సనాతన ధర్మం, వైదిక సంప్రదాయం మరియు దివ్య స్త్రీ శక్తి యొక్క సారాంశాన్ని దాని స్వచ్ఛమైన రూపంలో సంరక్షించాలనే లక్ష్యం కలిగి ఉంది."',
    },
    hi: {
      title: 'समय से परे एक मंदिर',
      quote: '"श्री महा चण्डी अर्गला क्षेत्रम केवल एक मंदिर नहीं है — यह एक आध्यात्मिक आंदोलन है। इसका उद्देश्य सनातन धर्म, वैदिक परंपरा और दिव्य स्त्री शक्ति के सार को उसके शुद्धतम रूप में संरक्षित करना है। हमारा उद्देश्य एक ऐसा कालजयी स्थान बनाना है जहाँ भक्ति, ज्ञान और सेवा एकजुट हों - एक पवित्र केंद्र जो सदियों तक विश्वास और आध्यात्मिक जागृति को प्रेरित करेगा। "',
    }
  }[language];

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
