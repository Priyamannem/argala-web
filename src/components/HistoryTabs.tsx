import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const HistoryTabs = () => {
  const { language } = useLanguage();
  const [active, setActive] = useState('history');

  const content = {
    en: {
      tabs: [
        { id: 'history', label: 'History', content: 'Argaladevi\'s worship dates back to ancient times, with references found in sacred texts like the Devi Mahatmya. She emerged as a powerful goddess during the battle against evil forces, manifesting from the combined energies of all divine beings. Her temples have been centers of spiritual learning and devotion for over a millennium, with the most sacred shrines located in South India.' },
        { id: 'geography', label: 'Geography', content: 'The main temple of Argaladevi is situated in the sacred hills of Karnataka, surrounded by lush forests and natural springs. The temple complex spans across 50 acres, featuring ancient stone carvings and traditional Dravidian architecture. Pilgrims from across the world visit this holy site, which is believed to be one of the 108 Shakti Peethas mentioned in ancient scriptures.' },
        { id: 'culture', label: 'Culture', content: 'The cultural traditions surrounding Argaladevi worship include classical dance performances, devotional music, and elaborate rituals performed during auspicious occasions. The temple festivals showcase rich heritage through traditional arts, including Bharatanatyam, Carnatic music, and ancient Sanskrit chants. Local artisans create beautiful handcrafted items used in worship ceremonies.' },
        { id: 'utsava', label: 'Utsava', content: 'The annual Navaratri festival is the most significant celebration, lasting nine days with special prayers, cultural programs, and community feasts. Other important festivals include Devi Puja during full moon days, Abhisheka ceremonies on Fridays, and special darshan during auspicious planetary alignments. Each celebration brings together thousands of devotees in spiritual harmony.' },
      ]
    },
    te: {
      tabs: [
        { id: 'history', label: 'చరిత్ర', content: 'అర్గళాదేవి ఆరాధన ప్రాచీన కాలం నాటిది, దేవీ మహాత్మ్యం వంటి పవిత్ర గ్రంథాలలో ప్రస్తావనలు కనుగొనబడ్డాయి.' },
        { id: 'geography', label: 'భౌగోళికం', content: 'అర్గళాదేవి ప్రధాన ఆలయం కర్ణాటక పవిత్ర కొండలలో ఉంది, పచ్చని అడవులు మరియు సహజ ఊటలతో చుట్టుముట్టబడి ఉంది.' },
        { id: 'culture', label: 'సంస్కృతి', content: 'అర్గళాదేవి ఆరాధనను చుట్టుముట్టిన సాంస్కృతిక సంప్రదాయాలలో శాస్త్రీయ నృత్య ప్రదర్శనలు, భక్తి సంగీతం మరియు విస్తారమైన ఆచారాలు ఉన్నాయి.' },
        { id: 'utsava', label: 'ఉత్సవం', content: 'వార్షిక నవరాత్రి ఉత్సవం అత్యంత ముఖ్యమైన వేడుక, ప్రత్యేక ప్రార్థనలు, సాంస్కృతిక కార్యక్రమాలు మరియు సామూహిక విందులతో తొమ్మిది రోజులు జరుపుతారు.' },
      ]
    },
    hi: {
      tabs: [
        { id: 'history', label: 'इतिहास', content: 'अर्गलादेवी की पूजा प्राचीन काल से होती आ रही है, देवी माहात्म्य जैसे पवित्र ग्रंथों में संदर्भ मिलते हैं।' },
        { id: 'geography', label: 'भूगोल', content: 'अर्गलादेवी का मुख्य मंदिर कर्नाटक की पवित्र पहाड़ियों में स्थित है, हरे-भरे जंगलों और प्राकृतिक झरनों से घिरा हुआ।' },
        { id: 'culture', label: 'संस्कृति', content: 'अर्गलादेवी पूजा से जुड़ी सांस्कृतिक परंपराओं में शास्त्रीय नृत्य प्रदर्शन, भक्ति संगीत और विस्तृत अनुष्ठान शामिल हैं।' },
        { id: 'utsava', label: 'उत्सव', content: 'वार्षिक नवरात्रि उत्सव सबसे महत्वपूर्ण उत्सव है, विशेष प्रार्थनाओं, सांस्कृतिक कार्यक्रमों और सामुदायिक भोज के साथ नौ दिनों तक चलता है।' },
      ]
    }
  }[language];

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
                ? 'bg-temple-gold text-temple-stone shadow-lg'
                : 'border border-temple-gold text-temple-gold font-extrabold hover:bg-temple-gold/10 bg-transparent'
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
          <p className="font-body text-temple-cream font-bold leading-relaxed text-base md:text-lg">
            {content.tabs.find((tab) => tab.id === active)?.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTabs;