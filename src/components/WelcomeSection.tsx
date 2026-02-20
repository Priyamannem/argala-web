import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';

const WelcomeSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Welcome to the Divine Realm',
      desc: 'Argaladevi, the divine mother goddess, represents the ultimate source of protection, prosperity, and spiritual enlightenment. Her divine presence brings peace, removes obstacles, and blesses devotees with abundance in all aspects of life.',
      protection_title: 'Divine Protection',
      protection_desc: 'Argaladevi is renowned for her protective powers, shielding devotees from negative energies, evil forces, and life\'s challenges. Her divine grace creates a protective shield around those who seek her blessings with pure heart.',
      prosperity_title: 'Spiritual Prosperity',
      prosperity_desc: 'The goddess bestows both material and spiritual prosperity upon her devotees. Through her blessings, one experiences growth in wealth, health, knowledge, and spiritual wisdom, leading to a fulfilling and abundant life.',
    },
    te: {
      title: 'దివ్య లోకానికి స్వాగతం',
      desc: 'అర్గళాదేవి, దివ్య మాతృదేవత, రక్షణ, సంపద మరియు ఆధ్యాత్మిక జ్ఞానోదయం యొక్క అంతిమ మూలాన్ని సూచిస్తుంది. ఆమె దివ్య సన్నిధి శాంతిని తెస్తుంది, అడ్డంకులను తొలగిస్తుంది మరియు భక్తులను జీవితంలోని అన్ని అంశాలలో సమృద్ధితో ఆశీర్వదిస్తుంది.',
      protection_title: 'దివ్య రక్షణ',
      protection_desc: 'అర్గళాదేవి తన రక్షణ శక్తులకు ప్రసిద్ధి, భక్తులను ప్రతికూల శక్తులు, దుష్ట శక్తులు మరియు జీవిత సవాళ్ల నుండి కాపాడుతుంది.',
      prosperity_title: 'ఆధ్యాత్మిక సంపద',
      prosperity_desc: 'దేవి తన భక్తులకు భౌతిక మరియు ఆధ్యాత్మిక సంపదను ప్రసాదిస్తుంది. ఆమె ఆశీర్వాదాల ద్వారా, సంపద, ఆరోగ్యం, జ్ఞానం మరియు ఆధ్యాత్మిక జ్ఞానంలో వృద్ధిని అనుభవిస్తారు.',
    },
    hi: {
      title: 'दिव्य लोक में आपका स्वागत है',
      desc: 'अर्गलादेवी, दिव्य मातृदेवी, सुरक्षा, समृद्धि और आध्यात्मिक ज्ञान के परम स्रोत का प्रतिनिधित्व करती हैं। उनकी दिव्य उपस्थिति शांति लाती है, बाधाओं को दूर करती है और भक्तों को जीवन के सभी पहलुओं में प्रचुरता का आशीर्वाद देती है।',
      protection_title: 'दिव्य सुरक्षा',
      protection_desc: 'अर्गलादेवी अपनी सुरक्षात्मक शक्तियों के लिए प्रसिद्ध हैं, भक्तों को नकारात्मक ऊर्जाओं, बुरी शक्तियों और जीवन की चुनौतियों से बचाती हैं।',
      prosperity_title: 'आध्यात्मिक समृद्धि',
      prosperity_desc: 'देवी अपने भक्तों को भौतिक और आध्यात्मिक दोनों प्रकार की समृद्धि प्रदान करती हैं। उनके आशीर्वाद से धन, स्वास्थ्य, ज्ञान में वृद्धि होती है।',
    }
  }[language];

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