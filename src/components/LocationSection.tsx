import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Location & Significance',
      subtitle: 'The Divine Power of the Place',
      points: [
        'Only 20 km from Yadagirigutta and Swarnagiri Temples',
        'Just 25 km from Ratnagiri Temple (Aliyabad)',
        'Naturally formed hilltop site surrounded by greenery and serenity',
        'Located beside a natural Pushkarini, symbol of divine energy and purity',
      ],
      desc: 'The chosen land for the temple is not just geographically blessed — it vibrates with spiritual resonance. Every stone, every breeze here carries the silent power of devotion.',
    },
    te: {
      title: 'స్థానం & ప్రాముఖ్యత',
      subtitle: 'ఈ ప్రదేశం యొక్క దివ్య శక్తి',
      points: [
        'యాదగిరిగుట్ట మరియు స్వర్ణగిరి ఆలయాల నుండి కేవలం 20 కి.మీ',
        'రత్నగిరి ఆలయం (అలియాబాద్) నుండి కేవలం 25 కి.మీ',
        'పచ్చదనం మరియు ప్రశాంతతలతో చుట్టుముట్టబడిన సహజంగా ఏర్పడిన కొండ ప్రదేశం',
        'దివ్య శక్తి మరియు పవిత్రత యొక్క చిహ్నమైన సహజ పుష్కరిణి పక్కన ఉంది',
      ],
      desc: 'ఆలయం కోసం ఎంపిక చేయబడిన భూమి భౌగోళికంగా మాత్రమే ఆశీర్వదించబడలేదు — ఇది ఆధ్యాత్మిక ప్రతిధ్వనితో ప్రకంపిస్తుంది.',
    },
    hi: {
      title: 'स्थान और महत्व',
      subtitle: 'इस स्थान की दिव्य शक्ति',
      points: [
        'यादगिरिगुट्टा और स्वर्णगिरि मंदिरों से केवल 20 किमी',
        'रत्नगिरि मंदिर (अलियाबाद) से केवल 25 किमी',
        'हरियाली और शांति से घिरा प्राकृतिक रूप से निर्मित पहाड़ी स्थल',
        'दिव्य ऊर्जा और पवित्रता के प्रतीक प्राकृतिक पुष्करिणी के बगल में स्थित',
      ],
      desc: 'मंदिर के लिए चुनी गई भूमि केवल भौगोलिक रूप से धन्य नहीं है — यह आध्यात्मिक प्रतिध्वनि से कंपित होती है।',
    }
  }[language];

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
