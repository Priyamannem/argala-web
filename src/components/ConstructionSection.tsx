import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import templeConstruction from '@/assets/temple-construction.jpg';
import galleryBg from '@/assets/gallery.jpeg';
import { CheckCircle, Flower2 } from 'lucide-react';

const ConstructionSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      principles_title: 'Sacred Design Principles',
      principles_desc: 'Our temple construction follows the ancient science of Vastu Shastra and traditional Agama scriptures. Every aspect - from the foundation to the pinnacle - is designed to create perfect harmony between the earthly and divine realms.',
      principles_desc2: 'The temple\'s orientation, proportions, and sacred geometry are carefully calculated to maximize the flow of positive energy and create an atmosphere conducive to meditation, prayer, and spiritual awakening.',
      features_title: 'Key Architectural Features',
      features: [
        'Traditional Dravidian architectural style',
        'Hand-carved stone sculptures and pillars',
        'Sacred geometric patterns in floor design',
        'Natural lighting for divine ambiance',
        'Eco-friendly construction materials',
      ],
      img_alt: 'Temple Architecture',
    },
    te: {
      principles_title: 'పవిత్ర రూపకల్పన సూత్రాలు',
      principles_desc: 'మా ఆలయ నిర్మాణం వాస్తు శాస్త్రం మరియు సంప్రదాయ ఆగమ గ్రంథాల ప్రాచీన శాస్త్రాన్ని అనుసరిస్తుంది.',
      principles_desc2: 'ఆలయం యొక్క దిశ, అనుపాతాలు మరియు పవిత్ర రేఖాగణితం సానుకూల శక్తి ప్రవాహాన్ని గరిష్టం చేయడానికి జాగ్రత్తగా లెక్కించబడతాయి.',
      features_title: 'ముఖ్య వాస్తుశిల్ప లక్షణాలు',
      features: [
        'సంప్రదాయ ద్రావిడ వాస్తుశిల్ప శైలి',
        'చేతితో చెక్కిన రాతి శిల్పాలు మరియు స్తంభాలు',
        'నేల రూపకల్పనలో పవిత్ర రేఖాగణిత నమూనాలు',
        'దివ్య వాతావరణం కోసం సహజ వెలుగు',
        'పర్యావరణ అనుకూల నిర్మాణ సామగ్రి',
      ],
      img_alt: 'ఆలయ వాస్తుశిల్పం',
    },
    hi: {
      principles_title: 'पवित्र डिजाइन सिद्धांत',
      principles_desc: 'हमारा मंदिर निर्माण वास्तु शास्त्र और पारंपरिक आगम ग्रंथों के प्राचीन विज्ञान का पालन करता है।',
      principles_desc2: 'मंदिर की दिशा, अनुपात और पवित्र ज्यामिति सकारात्मक ऊर्जा के प्रवाह को अधिकतम करने के लिए सावधानीपूर्वक गणना की जाती है।',
      features_title: 'प्रमुख वास्तुशिल्प विशेषताएं',
      features: [
        'पारंपरिक द्रविड़ वास्तुशिल्प शैली',
        'हाथ से तराशी गई पत्थर की मूर्तियां और स्तंभ',
        'फर्श डिजाइन में पवित्र ज्यामितीय पैटर्न',
        'दिव्य माहौल के लिए प्राकृतिक प्रकाश',
        'पर्यावरण अनुकूल निर्माण सामग्री',
      ],
      img_alt: 'मंदिर वास्तुकला',
    }
  }[language];

  return (
    <section className="relative py-24 px-4 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background with Mandala and Darker Overlay to match reference */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url(${galleryBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-temple-maroon/80 to-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6">
        {/* Sacred Design Principles Section - Matches First Image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h2 className="font-sacred text-2xl md:text-3xl lg:text-4xl font-bold text-temple-gold uppercase tracking-wider drop-shadow-sm">
                {content.principles_title}
              </h2>
              <div className="h-1 w-20 bg-temple-gold rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="font-body text-base md:text-lg lg:text-xl leading-relaxed font-medium opacity-95 text-temple-cream">
                {content.principles_desc}
              </p>
              <p className="font-body text-sm md:text-base lg:text-lg leading-relaxed font-medium opacity-90 italic border-l-4 border-temple-gold/40 pl-5 py-2 text-temple-cream/90">
                {content.principles_desc2}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            {/* The Framed Image - Matches Image 1 */}
            <div className="relative z-10 p-1.5 border-[2px] border-temple-gold rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(184,134,11,0.2)] bg-temple-maroon/20 backdrop-blur-sm">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={templeConstruction}
                  alt={content.img_alt}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Decorative Glows */}
            <div className="absolute -inset-6 bg-temple-gold/5 blur-[60px] -z-10 group-hover:bg-temple-gold/15 transition-all duration-700" />
          </motion.div>
        </div>

        {/* Key Architectural Features Section - Matches Second Image Request */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block relative mb-16">
            <h3 className="font-sacred text-2xl md:text-4xl font-bold text-temple-gold uppercase tracking-[0.2em]">
              {content.features_title}
            </h3>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-temple-gold" />
              <span className="text-temple-gold text-xs">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-temple-gold" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: 'rgba(184, 134, 11, 0.1)',
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
                className="group relative flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-temple-gold/20 px-5 py-2.5 rounded-full hover:border-temple-gold/60 transition-all duration-500 cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(184,134,11,0.2)] overflow-hidden"
              >
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-temple-gold group-hover:text-amber-400 transition-colors"
                  >
                    <Flower2 className="w-5 h-5 drop-shadow-[0_0_3px_rgba(184,134,11,0.5)]" />
                  </motion.div>
                </div>
                <span className="font-body text-temple-cream font-bold text-sm md:text-base tracking-wide whitespace-nowrap relative z-10">
                  {feature}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-temple-gold/0 via-temple-gold/5 to-temple-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionSection;
