import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Landmark, Heart, Users, Receipt, Sparkles, Star, ArrowRight } from 'lucide-react';
import HangingDiyas from '@/components/HangingDiyas';
import galleryBg from '@/assets/gallery.jpeg';
import templeConstruction from '@/assets/temple-construction.jpg';
import goddessStatue from '@/assets/goddess-statue.jpg';
import heroTemple2 from '@/assets/hero-temple-2.jpg';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

const About = () => {
    const { language } = useLanguage();
    const footerRef = useRef<HTMLDivElement>(null);

    const content = {
        en: {
            header_title: 'A Sacred Abode of Divine Shakti',
            header_subtitle: 'Built as per Sacred Tradition',
            kshetram_para1: 'is being constructed strictly in accordance with Vedic principles and the classical canons of Shilpa Shastra, specifically aligned with the traditional guidelines prescribed for Chandi temples.',
            kshetram_para2: 'Every dimension, alignment, and structural element follows:',
            kshetram_points: [
                'Authentic Vastu Shastra alignment',
                'Sacred geometrical proportions',
                'Agama and Shakta scriptural injunctions',
                'Ritual sanctification at each stage of construction',
            ],
            seat_of_shakti: 'From foundation rituals to sanctum design, the temple is being established as a true Seat of Shakti, as ordained in the scriptures — ensuring spiritual potency, vibrational purity, and divine presence for generations to come.',
            beginning_title: 'Divine Beginning — Be Part of the Foundation',
            beginning_para1: 'With the boundless blessings of Maa Chandi, the sacred construction of the temple has commenced.',
            beginning_para2: 'We extend a heartfelt invitation to devotees, families, and spiritual seekers to participate in this historic spiritual endeavor from its very foundation.',
            beginning_para3: 'This is not merely a construction project — it is the manifestation of devotion into sacred form.',
            beginning_points: [
                'Every stone laid becomes an offering.',
                'Every contribution becomes eternal worship.',
                "Every devotee becomes part of the temple's living legacy.",
            ],
            founder_title: 'Become a Founder-Devotee',
            founder_para1: 'This is a rare opportunity to become a Founder-Devotee of Sri Maha Chandi Argala Kshetram — to have your devotion permanently embedded in the temple\'s sacred structure.',
            founder_para2: 'Your contribution today becomes a spiritual investment for generations, a part of daily nitya pooja, and a share in the temple\'s ongoing spiritual merit (punya).',
            founder_quote1: 'Let your devotion take form.',
            founder_quote2: 'Let your faith become stone, sanctum, and sacred space.',
            ways_title: 'Ways to Contribute',
            way1_title: '1. Material Contributions',
            way1_points: [
                'Bricks, cement, steel, granite',
                'Pooja items and ritual materials',
                'Sacred elements for the sanctum (Garbha Griha)',
                'Mandap, Dwajasthambam, and structural components',
            ],
            way2_title: '2. Financial Donations',
            way2_desc: 'Every rupee brings us closer to completion and consecration (Prana Pratishta). Contributions may be made towards general construction fund, sanctum sponsorship, mandap construction, or sacred architectural elements.',
            way3_title: '3. Volunteer Service (Seva)',
            way3_desc: 'Offer your time, professional skills, architectural or engineering support, event coordination, or devotional services according to your capacity.',
            tax_title: 'Tax Benefits',
            tax_desc: 'All donations are eligible for tax exemption under Section 80G of the Income Tax Act. An official receipt will be provided for tax purposes.',
            generations_title: 'A Temple for Generations',
            generations_para1: 'Sri Maha Chandi Argala Kshetram is envisioned not merely as a structure, but as:',
            generations_points: [
                'A center for Shakti worship',
                'A spiritual energy hub',
                'A place for community upliftment',
                'A sacred space for future generations',
            ],
            generations_para2: 'Your support today ensures that the divine flame of Maa Chandi continues to illuminate countless lives tomorrow.',
            journey_title: 'Join the Sacred Journey',
            journey_subtitle: 'Stand at the beginning of something eternal.',
            journey_words: ['Participate', 'Contribute', 'Serve'],
            journey_quote: '"Let devotion become destiny."',
            journey_btn: 'Contribute Now',
            temple_name: 'Sri Maha Chandi Argala Kshetram',
            img_alt_goddess: 'Sri Maha Chandi Argala Kshetram',
            img_alt_construction: 'Temple Construction',
            img_alt_vision: 'Temple Vision',
        },
        te: {
            header_title: 'దివ్య శక్తి యొక్క పవిత్ర నిలయం',
            header_subtitle: 'పవిత్ర సంప్రదాయం ప్రకారం నిర్మించబడింది',
            kshetram_para1: 'వేద సూత్రాలు మరియు శిల్ప శాస్త్ర నిబంధనల ప్రకారం ఖచ్చితంగా నిర్మించబడుతోంది, ముఖ్యంగా చండి ఆలయాల కోసం సూచించిన సంప్రదాయ మార్గదర్శకాలకు అనుగుణంగా ఉంటుంది.',
            kshetram_para2: 'ప్రతి కోణం, అనుసంధానం మరియు నిర్మాణాత్మక అంశం కింది వాటిని అనుసరిస్తుంది:',
            kshetram_points: [
                'ప్రామాణిక వాస్తు శాస్త్ర అమరిక',
                'పవిత్ర రేఖాగణిత నిష్పత్తులు',
                'ఆగమ మరియు శాక్త గ్రంథాల నిబంధనలు',
                'నిర్మాణంలోని ప్రతి దశలోనూ ఆచారబద్ధమైన పవిత్రీకరణ',
            ],
            seat_of_shakti: 'పునాది ఆచారాల నుండి గర్భగుడి రూపకల్పన వరకు, శాస్త్రాలలో ఆదేశించబడినట్లుగా ఈ ఆలయం నిజమైన శక్తి పీఠంగా స్థాపించబడుతోంది - రాబోయే తరాలకు ఆధ్యాత్మిక శక్తి, ప్రకంపనల పవిత్రత మరియు దివ్య ఉనికిని నిర్ధారిస్తుంది.',
            beginning_title: 'దివ్యమైన ప్రారంభం — పునాదిలో భాగం అవ్వండి',
            beginning_para1: 'మా చండి యొక్క అపరిమితమైన ఆశీర్వాదాలతో, ఆలయ పవిత్ర నిర్మాణం ప్రారంభమైంది.',
            beginning_para2: 'ఈ చారిత్రాత్మక ఆధ్యాత్మిక ప్రయత్నంలో దాని పునాది నుండే పాలుపంచుకోవాలని మేము భక్తులను, కుటుంబాలను మరియు ఆధ్యాత్మిక సాధకులను హృదయపూర్వకముగా ఆహ్వానిస్తున్నాము.',
            beginning_para3: 'ఇది కేవలం ఒక నిర్మాణ ప్రాజెక్ట్ మాత్రమే కాదు - ఇది భక్తి యొక్క పవిత్ర రూపం.',
            beginning_points: [
                'వేసిన ప్రతి రాయి ఒక సమర్పణ అవుతుంది.',
                'ప్రతి విరాళం శాశ్వతమైన ఆారాధన అవుతుంది.',
                'ప్రతి భక్తుడు ఆలయ సజీవ వారసత్వంలో భాగం అవుతాడు.',
            ],
            founder_title: 'వ్యవస్థాపక భక్తులుగా మారండి',
            founder_para1: 'శ్రీ మహా చండి అర్గళాదేవి క్షేత్రం యొక్క వ్యవస్థాపక భక్తులుగా మారడానికి ఇది ఒక అరుదైన అవకాశం — మీ భక్తిని ఆలయ పవిత్ర నిర్మాణంలో శాశ్వతంగా నిక్షిప్తం చేయడానికి.',
            founder_para2: 'ఈరోజు మీ విరాళం తరతరాలకు ఆధ్యాత్మిక పెట్టుబడిగా మారుతుంది, నిత్య పూజలో భాగం అవుతుంది మరియు ఆలయ ఆధ్యాత్మిక పుణ్యంలో వాటా పొందుతారు.',
            founder_quote1: 'మీ భక్తికి రూపం ఇవ్వండి.',
            founder_quote2: 'మీ విశ్వాసాన్ని శిలగా, గర్భగుడిగా మరియు పవిత్ర స్థలంగా మారనివ్వండి.',
            ways_title: 'విరాళం అందించే మార్గాలు',
            way1_title: '1. నిర్మాణ సామగ్రి విరాళాలు',
            way1_points: [
                'ఇటుకలు, సిమెంటు, ఉక్కు, గ్రానైట్',
                'పూజా వస్తువులు మరియు ఆచార సామగ్రి',
                'గర్భగుడి కోసం పవిత్ర అంశాలు',
                'మండపం, ధ్వజస్తంభం మరియు నిర్మాణాత్మక భాగాలు',
            ],
            way2_title: '2. ఆర్థిక విరాళాలు',
            way2_desc: 'ప్రతి రూపాయి మనల్ని ఆలయ పూర్తికి మరియు ప్రతిష్ఠాపన (ప్రాణ ప్రతిష్ఠ) కు చేరువ చేస్తుంది. జనరల్ కన్స్ట్రక్షన్ ఫండ్, గర్భగుడి స్పాన్సర్షిప్ లేదా పవిత్ర వాస్తుశిల్ప అంశాల కోసం విరాళాలు అందించవచ్చు.',
            way3_title: '3. స్వచ్ఛంద సేవ (సేవ)',
            way3_desc: 'మీ సామర్థ్యం ప్రకారం మీ సమయాన్ని, వృత్తిపరమైన నైపుణ్యాలను, వాస్తుశిల్ప లేదా ఇంజనీరింగ్ మద్దతును అందించండి.',
            tax_title: 'పన్ను ప్రయోజనాలు',
            tax_desc: 'అన్ని విరాళాలకు ఆదాయపు పన్ను చట్టంలోని సెక్షన్ 80G కింద పన్ను మినహాయింపు లభిస్తుంది. పన్ను ప్రయోజనాల కోసం అధికారిక రసీదు అందించబడుతుంది.',
            generations_title: 'తరతరాల కోసం ఒక ఆలయం',
            generations_para1: 'శ్రీ మహా చండి అర్గళాదేవి క్షేత్రం కేవలం ఒక నిర్మాణం మాత్రమే కాదు, ఇది:',
            generations_points: [
                'శక్తి ఆరాధన కేంద్రం',
                'ఆధ్యాత్మిక శక్తి హబ్',
                'సంఘం అభ్యున్నతి కోసం ఒక ప్రదేశం',
                'భావి తరాల కోసం పవిత్ర స్థలం',
            ],
            generations_para2: 'ఈరోజు మీ మద్దతు రేపు మా చండి యొక్క దివ్య జ్యోతి లెక్కలేనన్ని జీవితాలను ప్రకాశింపజేస్తుందని నిర్ధారిస్తుంది.',
            journey_title: 'పవిత్ర ప్రయాణంలో చేరండి',
            journey_subtitle: 'శాశ్వతమైన ప్రారంభంలో నిలబడండి.',
            journey_words: ['పాల్గొనండి', 'సహకరించండి', 'సేవ చేయండి'],
            journey_quote: '"భక్తే విధిగా మారనివ్వండి."',
            journey_btn: 'ఇప్పుడే విరాళం ఇవ్వండి',
            temple_name: 'శ్రీ మహా చండి అర్గళాదేవి క్షేత్రం',
            img_alt_goddess: 'శ్రీ మహా చండి అర్గళాదేవి క్షేత్రం',
            img_alt_construction: 'ఆలయ నిర్మాణం',
            img_alt_vision: 'ఆలయ దార్శనికత',
        },
        hi: {
            header_title: 'दिव्य शक्ति का एक पवित्र निवास',
            header_subtitle: 'पवित्र परंपरा के अनुसार निर्मित',
            kshetram_para1: 'का निर्माण वैदिक सिद्धांतों और शिल्प शास्त्र के शास्त्रीय नियमों के अनुसार कड़ाई से किया जा रहा है, जो विशेष रूप से चंडी मंदिरों के लिए निर्धारित पारंपरिक दिशानिर्देशों के साथ संरेखित है।',
            kshetram_para2: 'प्रत्येक आयाम, संरेखण और संरचनात्मक तत्व निम्नलिखित का पालन करता है:',
            kshetram_points: [
                'प्रामाणिक वास्तु शास्त्र संरेखण',
                'पवित्र ज्यामितीय अनुपात',
                'आगम और शाक्त शास्त्रीय आदेश',
                'निर्माण के प्रत्येक चरण में अनुष्ठानिक पवित्रीकरण',
            ],
            seat_of_shakti: 'नींव के अनुष्ठानों से लेकर गर्भगृह के डिजाइन तक, मंदिर को शास्त्रोक्त विधि से शक्ति के वास्तविक स्थान के रूप में स्थापित किया जा रहा है - जो आने वाली पीढ़ियों के लिए आध्यात्मिक क्षमता, कंपन शुद्धता और दिव्य उपस्थिति सुनिश्चित करता है।',
            beginning_title: 'दिव्य शुरुआत — नींव का हिस्सा बनें',
            beginning_para1: 'माँ चण्डी के असीम आशीर्वाद से मंदिर का पवित्र निर्माण कार्य प्रारंभ हो चुका है।',
            beginning_para2: 'हम भक्तों, परिवारों और आध्यात्मिक साधकों को इस ऐतिहासिक आध्यात्मिक प्रयास में इसकी नींव से ही भाग लेने के लिए हार्दिक निमंत्रण देते हैं।',
            beginning_para3: 'यह केवल एक निर्माण परियोजना नहीं है - यह पवित्र रूप में भक्ति की अभिव्यक्ति है।',
            beginning_points: [
                'रखा गया हर पत्थर एक भेंट बन जाता है।',
                'हर योगदान शाश्वत पूजा बन जाता है।',
                'हर भक्त मंदिर की जीवित विरासत का हिस्सा बन जाता है।',
            ],
            founder_title: 'संस्थापक-भक्त बनें',
            founder_para1: 'यह श्री महा चण्डी अर्गला क्षेत्रम का संस्थापक-भक्त बनने का एक दुर्लभ अवसर है - अपनी भक्ति को मंदिर की पवित्र संरचना में स्थायी रूप से स्थापित करने का।',
            founder_para2: 'आज आपका योगदान पीढ़ियों के लिए एक आध्यात्मिक निवेश, दैनिक नित्य पूजा का हिस्सा और मंदिर के चल रहे आध्यात्मिक पुण्य में भागीदारी बन जाता है।',
            founder_quote1: 'अपनी भक्ति को रूप लेने दें।',
            founder_quote2: 'अपनी आस्था को पत्थर, गर्भगृह और पवित्र स्थान बनने दें।',
            ways_title: 'योगदान करने के तरीके',
            way1_title: '1. सामग्री योगदान',
            way1_points: [
                'ईंटें, सीमेंट, स्टील, ग्रेनाइट',
                'पूजा सामग्री और अनुष्ठान सामग्री',
                'गर्भगृह के लिए पवित्र तत्व',
                'मंडप, ध्वजस्तंभ और संरचनात्मक घटक',
            ],
            way2_title: '2. वित्तीय दान',
            way2_desc: 'हर रुपया हमें पूर्णता और प्राण प्रतिष्ठा के करीब लाता है। योगदान सामान्य निर्माण निधि, गर्भगृह प्रायोजन, मंडप निर्माण या पवित्र वास्तुशिल्प तत्वों के लिए दिया जा सकता है।',
            way3_title: '3. स्वयंसेवक सेवा (सेवा)',
            way3_desc: 'अपनी क्षमता के अनुसार अपना समय, व्यावसायिक कौशल, वास्तुशिल्प या इंजीनियरिंग सहायता, कार्यक्रम समन्वय या भक्ति सेवाएं प्रदान करें।',
            tax_title: 'कर लाभ',
            tax_desc: 'आयकर अधिनियम की धारा 80G के तहत सभी दान कर छूट के लिए पात्र हैं। कर उद्देश्यों के लिए एक आधिकारिक रसीद प्रदान की जाएगी।',
            generations_title: 'पीढ़ियों के लिए एक मंदिर',
            generations_para1: 'श्री महा चण्डी अर्गला क्षेत्रम की कल्पना केवल एक संरचना के रूप में नहीं, बल्कि इसके रूप में की गई है:',
            generations_points: [
                'शक्ति पूजा का केंद्र',
                'एक आध्यात्मिक ऊर्जा केंद्र',
                'सामुदायिक उत्थान का स्थान',
                'आने वाली पीढ़ियों के लिए एक पवित्र स्थान',
            ],
            generations_para2: 'आज आपका समर्थन यह सुनिश्चित करता है कि माँ चण्डी की दिव्य ज्वाला कल अनगिनत जीवन को प्रकाशित करती रहे।',
            journey_title: 'पवित्र यात्रा में शामिल हों',
            journey_subtitle: 'किसी शाश्वत चीज़ की शुरुआत में खड़े हों।',
            journey_words: ['भाग लें', 'योगदान दें', 'सेवा करें'],
            journey_quote: '"भक्ति को नियति बनने दें। "',
            journey_btn: 'अभी योगदान दें',
            temple_name: 'श्री महा चण्डी अर्गला क्षेत्रम',
            img_alt_goddess: 'श्री महा चण्डी अर्गला क्षेत्रम',
            img_alt_construction: 'मंदिर निर्माण',
            img_alt_vision: 'मंदिर दृष्टि',
        }
    }[language];

    return (
        <div className="min-h-screen">
            <Navbar />
            <HangingDiyas isHomePage={false} footerRef={footerRef} />

            <div
                className="relative pt-[calc(48px+3rem)] md:pt-[calc(56px+4rem)] bg-cover bg-center bg-no-repeat bg-fixed bg-temple-stone min-h-screen"
                style={{ backgroundImage: `url(${galleryBg})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/85" />

                <div className="relative z-10">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center py-12 md:py-16"
                    >
                        <span className="text-4xl text-temple-gold block mb-4">ॐ</span>
                        <h1 className="font-sacred text-3xl md:text-5xl text-temple-gold mb-4 tracking-wider">
                            {content.header_title}
                        </h1>
                        <div className="sacred-divider">
                            <span className="text-temple-gold text-sm">✦</span>
                        </div>
                        <p className="font-body text-temple-cream/80 mt-4 italic text-lg max-w-2xl mx-auto px-4">
                            {content.header_subtitle}
                        </p>
                    </motion.div>

                    {/* Section 1: About the Kshetram */}
                    <div className="max-w-6xl mx-auto px-4 pb-16">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                                    <span className="font-sacred text-temple-gold text-xl">{content.temple_name}</span> {content.kshetram_para1}
                                </p>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                    {content.kshetram_para2}
                                </p>
                                <ul className="space-y-3">
                                    {content.kshetram_points.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            custom={i + 1}
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3"
                                        >
                                            <Star className="w-4 h-4 text-temple-gold mt-1 flex-shrink-0" />
                                            <span className="font-body text-temple-cream/80 text-sm md:text-base">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                custom={2}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="golden-border rounded-lg overflow-hidden shadow-2xl">
                                    <img
                                        src={goddessStatue}
                                        alt={content.img_alt_goddess}
                                        className="w-full h-[350px] md:h-[400px] object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-temple-gold/30 rounded-lg -z-10" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Sacred Quote Banner */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative py-12 md:py-16 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-temple-maroon/40 backdrop-blur-sm" />
                        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
                            <Sparkles className="w-8 h-8 text-temple-gold mx-auto mb-2 animate-pulse" />
                            <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed italic">
                                {content.seat_of_shakti}
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 2: Divine Beginning */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative order-2 md:order-1"
                            >
                                <div className="golden-border rounded-lg overflow-hidden shadow-2xl">
                                    <img
                                        src={templeConstruction}
                                        alt={content.img_alt_construction}
                                        className="w-full h-[350px] md:h-[400px] object-cover"
                                    />
                                </div>
                                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-temple-gold/30 rounded-lg -z-10" />
                            </motion.div>
                            <motion.div
                                custom={1}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6 order-1 md:order-2"
                            >
                                <h2 className="font-sacred text-2xl md:text-3xl text-temple-gold tracking-wide">
                                    {content.beginning_title}
                                </h2>
                                <p className="font-body text-temple-cream/90 text-base leading-relaxed">
                                    {content.beginning_para1}
                                </p>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                    {content.beginning_para2}
                                </p>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed italic">
                                    {content.beginning_para3}
                                </p>

                                <div className="bg-temple-maroon/30 border-l-4 border-temple-gold p-5 rounded-r-lg space-y-3">
                                    {content.beginning_points.map((item, i) => (
                                        <p key={i} className="font-body text-temple-cream/90 text-sm md:text-base flex items-start gap-2">
                                            <span className="text-temple-gold">✦</span> {item}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Section 3: Become a Founder-Devotee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative py-16 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-temple-maroon/50 to-black/60 backdrop-blur-sm" />
                        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
                            <h2 className="font-sacred text-2xl md:text-3xl text-temple-gold tracking-wide">
                                {content.founder_title}
                            </h2>
                            <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                                {content.founder_para1}
                            </p>
                            <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                {content.founder_para2}
                            </p>
                            <div className="pt-4 space-y-2">
                                <p className="font-sacred text-temple-gold text-lg tracking-wide">
                                    {content.founder_quote1}
                                </p>
                                <p className="font-body text-temple-cream/70 italic">
                                    {content.founder_quote2}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 4: Ways to Contribute */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-sacred text-2xl md:text-3xl text-temple-gold text-center mb-12 tracking-wide"
                        >
                            {content.ways_title}
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="golden-border rounded-lg p-6 bg-black/40 backdrop-blur-md space-y-4 hover:bg-black/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold/30 transition-colors">
                                    <Landmark className="w-6 h-6 text-temple-gold" />
                                </div>
                                <h3 className="font-sacred text-lg text-temple-gold">{content.way1_title}</h3>
                                <ul className="space-y-2">
                                    {content.way1_points.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm font-body text-temple-cream/80">
                                            <ArrowRight className="w-3 h-3 text-temple-gold mt-1 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                custom={1}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="golden-border rounded-lg p-6 bg-black/40 backdrop-blur-md space-y-4 hover:bg-black/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold/30 transition-colors">
                                    <Heart className="w-6 h-6 text-temple-gold" />
                                </div>
                                <h3 className="font-sacred text-lg text-temple-gold">{content.way2_title}</h3>
                                <p className="font-body text-temple-cream/80 text-sm leading-relaxed">
                                    {content.way2_desc}
                                </p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                custom={2}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="golden-border rounded-lg p-6 bg-black/40 backdrop-blur-md space-y-4 hover:bg-black/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold/30 transition-colors">
                                    <Users className="w-6 h-6 text-temple-gold" />
                                </div>
                                <h3 className="font-sacred text-lg text-temple-gold">{content.way3_title}</h3>
                                <p className="font-body text-temple-cream/80 text-sm leading-relaxed">
                                    {content.way3_desc}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Tax Benefits */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto px-4 pb-12"
                    >
                        <div className="golden-border rounded-lg p-6 md:p-8 bg-black/40 backdrop-blur-md flex items-start gap-4">
                            <Receipt className="w-8 h-8 text-temple-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-sacred text-lg text-temple-gold mb-2">{content.tax_title}</h3>
                                <p className="font-body text-temple-cream/80 text-sm md:text-base leading-relaxed">
                                    {content.tax_desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 5: A Temple for Generations */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="font-sacred text-2xl md:text-3xl text-temple-gold tracking-wide">
                                    {content.generations_title}
                                </h2>
                                <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                                    {content.generations_para1}
                                </p>
                                <ul className="space-y-3">
                                    {content.generations_points.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            custom={i + 1}
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3"
                                        >
                                            <Sparkles className="w-4 h-4 text-temple-saffron mt-1 flex-shrink-0" />
                                            <span className="font-body text-temple-cream/80 text-sm md:text-base">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                    {content.generations_para2}
                                </p>
                            </motion.div>
                            <motion.div
                                custom={2}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="golden-border rounded-lg overflow-hidden shadow-2xl">
                                    <img
                                        src={heroTemple2}
                                        alt={content.img_alt_vision}
                                        className="w-full h-[350px] md:h-[400px] object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-temple-gold/30 rounded-lg -z-10" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative py-20 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-temple-maroon/60 to-black/70 backdrop-blur-sm" />
                        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-6">
                            <h2 className="font-sacred text-2xl md:text-4xl text-temple-gold tracking-wide">
                                {content.journey_title}
                            </h2>
                            <p className="font-body text-temple-cream/90 text-lg md:text-xl">
                                {content.journey_subtitle}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-temple-gold font-sacred text-lg tracking-widest uppercase">
                                {content.journey_words.map((word, i) => (
                                    <span key={i} className="flex items-center gap-4">
                                        {word}
                                        {i < content.journey_words.length - 1 && <span className="text-temple-cream/30">•</span>}
                                    </span>
                                ))}
                            </div>
                            <p className="font-sacred text-temple-saffron text-xl md:text-2xl pt-4 italic">
                                {content.journey_quote}
                            </p>
                            <div className="pt-6">
                                <a
                                    href="/donate"
                                    className="inline-block px-10 py-3 bg-temple-gold/80 text-temple-cream font-sacred text-sm tracking-widest uppercase rounded-sm hover:bg-temple-saffron transition-all duration-300 glow-gold"
                                >
                                    {content.journey_btn}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <div ref={footerRef}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
