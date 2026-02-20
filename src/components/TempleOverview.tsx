import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const TempleOverview = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Temple Overview',
      desc: 'Sri Maha Chandi Argaladevi Kshetram is a divine temple being constructed between Gopalapuram and Kashiredypally villages, in Markook Mandal, Siddipet District.',
      desc2: 'This temple stands on a naturally elevated hill beside a sacred pond (Pushkarini), surrounded by the calmness of nature. Built entirely according to Agama Shastra, it represents an Akhanda Shakti Kshetram — a center of divine feminine energy and Sanatana Dharma.',
      desc3: 'This sacred site is envisioned to become a spiritual landmark for seekers, devotees, and generations to come.',
    },
    te: {
      title: 'ఆలయ అవలోకనం',
      desc: 'శ్రీ మహా చండి అర్గళాదేవి క్షేత్రం గోపాలపురం మరియు కాశిరెడ్డిపల్లి గ్రామాల మధ్య, మార్కూక్ మండలం, సిద్దిపేట జిల్లాలో నిర్మించబడుతున్న దివ్య ఆలయం.',
      desc2: 'ఈ ఆలయం ఒక పవిత్ర కొలను (పుష్కరిణి) పక్కన సహజంగా ఎత్తైన కొండపై నిలుస్తుంది. ఆగమ శాస్త్రం ప్రకారం పూర్తిగా నిర్మించబడింది.',
      desc3: 'ఈ పవిత్ర స్థలం సాధకులు, భక్తులు మరియు రాబోయే తరాల కోసం ఆధ్యాత్మిక ల్యాండ్‌మార్క్‌గా మారాలని ఊహించబడింది.',
    },
    hi: {
      title: 'मंदिर अवलोकन',
      desc: 'श्री महा चण्डी अर्गलादेवी क्षेत्रम गोपालपुरम और काशीरेड्डीपल्ली गांवों के बीच, मार्कूक मंडल, सिद्दीपेट जिले में निर्मित हो रहा दिव्य मंदिर है।',
      desc2: 'यह मंदिर एक पवित्र तालाब (पुष्करिणी) के बगल में प्राकृतिक रूप से ऊंची पहाड़ी पर स्थित है। पूरी तरह से आगम शास्त्र के अनुसार निर्मित।',
      desc3: 'इस पवित्र स्थल की कल्पना साधकों, भक्तों और आने वाली पीढ़ियों के लिए एक आध्यात्मिक स्थलचिह्न बनने की है।',
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
