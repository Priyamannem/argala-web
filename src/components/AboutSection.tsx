import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import goddessStatue from '@/assets/goddess-statue.jpg';

const AboutSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Sri Argaladevi',
      desc: 'Argaladevi is one of the most revered goddesses in Hindu tradition, known for her fierce compassion and protective nature. She is the divine embodiment of Shakti, the cosmic energy that creates, sustains, and transforms the universe.',
      mother_title: 'The Divine Mother',
      mother_desc: 'Argaladevi represents the nurturing aspect of the Divine Mother, yet she is also fierce when protecting her devotees. Her name itself signifies \'the one who removes obstacles\' and \'the bestower of all good fortune.\'',
      mother_desc2: 'Ancient scriptures describe her as having multiple arms, each holding sacred symbols representing different aspects of divine power. Her benevolent smile brings peace, while her fierce form destroys negativity and evil.',
      img_alt: 'Divine Goddess Argaladevi',
    },
    te: {
      title: 'శ్రీ అర్గళాదేవి గురించి',
      desc: 'అర్గళాదేవి హిందూ సంప్రదాయంలో అత్యంత పూజ్యమైన దేవతలలో ఒకరు, తన తీవ్ర కరుణ మరియు రక్షణ స్వభావానికి ప్రసిద్ధి.',
      mother_title: 'దివ్య మాత',
      mother_desc: 'అర్గళాదేవి దివ్య మాత యొక్క పోషణ అంశాన్ని సూచిస్తుంది, అయినప్పటికీ తన భక్తులను రక్షించేటప్పుడు ఆమె భీకరంగా ఉంటుంది.',
      mother_desc2: 'ప్రాచీన గ్రంథాలు ఆమెను బహుళ చేతులతో వర్ణిస్తాయి, ప్రతి ఒక్కటి దివ్య శక్తి యొక్క వివిధ అంశాలను సూచించే పవిత్ర చిహ్నాలను కలిగి ఉంటుంది.',
      img_alt: 'దివ్య మాత అర్గళాదేవి',
    },
    hi: {
      title: 'श्री अर्गलादेवी के बारे में',
      desc: 'अर्गलादेवी हिंदू परंपरा में सबसे पूजनीय देवियों में से एक हैं, अपनी उग्र करुणा और सुरक्षात्मक स्वभाव के लिए जानी जाती हैं।',
      mother_title: 'दिव्य माता',
      mother_desc: 'अर्गलादेवी दिव्य माता के पोषण पहलू का प्रतिनिधित्व करती हैं, फिर भी वे अपने भक्तों की रक्षा करते समय उग्र होती हैं।',
      mother_desc2: 'प्राचीन ग्रंथों में उन्हें कई भुजाओं वाला वर्णित किया गया है, प्रत्येक में दिव्य शक्ति के विभिन्न पहलुओं का प्रतिनिधित्व करने वाले पवित्र प्रतीक हैं।',
      img_alt: 'दिव्य माता अर्गलादेवी',
    }
  }[language];

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
