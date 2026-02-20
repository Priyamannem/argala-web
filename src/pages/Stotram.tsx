import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMusic } from '@/contexts/MusicContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HangingDiyas from '@/components/HangingDiyas';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import homeBg from '@/assets/home.jpeg';
import toranamImg from '@/assets/toranam.png';

const stotramSanskrit = `ōṃ namaśchaṇḍikāyai

ōṃ jayatvaṃ dēvi chāmuṇḍē jaya bhūtāpahāriṇi।
jaya sarva gatē dēvi kāḻa rātri namō'stutē॥1॥

madhukaiṭhabhavidrāvi vidhātru varadē namaḥ
ōṃ jayantī maṅgaḻā kāḻī bhadrakāḻī kapālinī ॥2॥

durgā śivā kṣamā dhātrī svāhā svadhā namō'stutē
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi ॥3॥

mahiṣāsura nirnāśi bhaktānāṃ sukhadē namaḥ।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥4॥

dhūmranētra vadhē dēvi dharma kāmārtha dāyini।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥5॥

rakta bīja vadhē dēvi chaṇḍa muṇḍa vināśini ।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥6॥

niśumbhaśumbha nirnāśi trailōkya śubhadē namaḥ
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥7॥

vandi tāṅghriyugē dēvi sarvasaubhāgya dāyini।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥8॥

achintya rūpa charitē sarva śatru vināśini।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥9॥

natēbhyaḥ sarvadā bhaktyā chāparṇē duritāpahē।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥10॥

stuvadbhyōbhaktipūrvaṃ tvāṃ chaṇḍikē vyādhi nāśini
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥11॥

chaṇḍikē satataṃ yuddhē jayantī pāpanāśini।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥12॥

dēhi saubhāgyamārōgyaṃ dēhi dēvī paraṃ sukhaṃ।
rūpaṃ dhēhi jayaṃ dēhi yaśō dhēhi dviṣō jahi॥13॥

vidhēhi dēvi kalyāṇaṃ vidhēhi vipulāṃ śriyaṃ।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥14॥

vidhēhi dviṣatāṃ nāśaṃ vidhēhi balamuchchakaiḥ।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥15॥

surāsuraśirō ratna nighṛṣṭacharaṇē'mbikē।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥16॥

vidhyāvantaṃ yaśasvantaṃ lakṣmīvantañcha māṃ kuru।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥17॥

dēvi prachaṇḍa dōrdaṇḍa daitya darpa niṣūdini।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥18॥

prachaṇḍa daityadarpaghnē chaṇḍikē praṇatāyamē।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥19॥

chaturbhujē chaturvaktra saṃstutē paramēśvari।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥20॥

kṛṣṇēna saṃstutē dēvi śaśvadbhaktyā sadāmbikē।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥21॥

himāchalasutānāthasaṃstutē paramēśvari।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥22॥

indrāṇī patisadbhāva pūjitē paramēśvari।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi ॥23॥

dēvi bhaktajanōddāma dattānandōdayē'mbikē।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi ॥24॥

bhāryāṃ manōramāṃ dēhi manōvṛttānusāriṇīṃ।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi॥25॥

tāriṇīṃ durga saṃsāra sāgara syāchalōdbavē।
rūpaṃ dēhi jayaṃ dēhi yaśō dēhi dviṣō jahi ॥26॥

idaṃstōtraṃ paṭhitvā tu mahāstōtraṃ paṭhēnnaraḥ।
saptaśatīṃ samārādhya varamāpnōti durlabhaṃ ॥27॥

॥ iti śrī argalā stōtraṃ ॥`;

const stotramHindi = `ओम नमश्चंडिकायै

ओम जयत्वं देवि चामुंडे जय भूतापहारिणि।
जय सर्व गते देवि काल रात्रि नमोऽस्तुते॥1॥

मधुकैठभविद्रावि विधात्रु वरदे नमः
ओम जयंती मंगला काली भद्रकाली कपालिनी ॥2॥

दुर्गा शिवा क्षमा धात्री स्वाहा स्वधा नमोऽस्तुते
रूपं देहि जयं देहि यशो देहि द्विषो जहि ॥3॥

महिषासुर निर्नाशि भक्तानां सुखदे नमः।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥4॥

धूम्रनेत्र वधे देवि धर्म कामार्थ दायिनि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥5॥

रक्त बीज वधे देवि चंड मुंड विनाशिनि ।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥6॥

निशुंभशुंभ निर्नाशि त्रैलोक्य शुभदे नमः
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥7॥

वंदि तांघ्रियुगे देवि सर्वसौभाग्य दायिनि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥8॥

अचिंत्य रूप चरिते सर्व शत्रु विनाशिनि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥9॥

नतेभ्यः सर्वदा भक्त्या चापर्णे दुरितापहे।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥10॥

स्तुवद्भ्योभक्तिपूर्वं त्वां चंडिके व्याधि नाशिनि
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥11॥

चंडिके सततं युद्धे जयंती पापनाशिनि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥12॥

देहि सौभाग्यमारोग्यं देहि देवी परं सुखं।
रूपं धेहि जयं देहि यशो धेहि द्विषो जहि॥13॥

विधेहि देवि कल्याणं विधेहि विपुलां श्रियं।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥14॥

विधेहि द्विषतां नाशं विधेहि बलमुच्चकैः।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥15॥

सुरासुरशिरो रत्न निघृष्टचरणेऽंबिके।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥16॥

विध्यावंतं यशस्वंतं लक्ष्मीवंतं च मां कुरु।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥17॥

देवि प्रचंड दोर्दंड दैत्य दर्प निषूदिनि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥18॥

प्रचंड दैत्यदर्पघ्ने चंडिके प्रणतायमे।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥19॥

चतुर्भुजे चतुर्वक्त्र संस्तुते परमेश्वरि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥20॥

कृष्णेन संस्तुते देवि शश्वद्भक्त्या सदांबिके।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥21॥

हिमाचलसुतानाथसंस्तुते परमेश्वरि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥22॥

इंद्राणी पतिसद्भाव पूजिते परमेश्वरि।
रूपं देहि जयं देहि यशो देहि द्विषो जहि ॥23॥

देवि भक्तजनोद्दाम दत्तानंदोदयेऽंबिके।
रूपं देहि जयं देहि यशो देहि द्विषो जहि ॥24॥

भार्यां मनोरमां देहि मनोवृत्तानुसारिणीं।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥25॥

तारिणीं दुर्ग संसार सागर स्याचलोद्बवे।
रूपं देहि जयं देहि यशो देहि द्विषो जहि ॥26॥

इदंस्तोत्रं पठित्वा तु महास्तोत्रं पठेन्नरः।
सप्तशतीं समाराध्य वरमाप्नोति दुर्लभं ॥27॥

॥ इति श्री अर्गला स्तोत्रं ॥`;

const stotramTelugu = `ఓం నమశ్చండికాయై

ఓం జయత్వం దేవి చాముండే జయ భూతాపహారిణి।
జయ సర్వ గతే దేవి కాళ రాత్రి నమోఽస్తుతే॥1॥

మధుకైఠభవిద్రావి విధాత్రు వరదే నమః
ఓం జయంతీ మంగళా కాళీ భద్రకాళీ కపాలినీ ॥2॥

దుర్గా శివా క్షమా ధాత్రీ స్వాహా స్వధా నమోఽస్తుతే
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి ॥3॥

మహిషాసుర నిర్నాశి భక్తానాం సుఖదే నమః।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥4॥

ధూమ్రనేత్ర వధే దేవి ధర్మ కామార్థ దాయిని।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥5॥

రక్త బీజ వధే దేవి చండ ముండ వినాశిని ।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥6॥

నిశుంభశుంభ నిర్నాశి త్రైలోక్య శుభదే నమః
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥7॥

వంది తాంఘ్రియుగే దేవి సర్వసౌభాగ్య దాయిని।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥8॥

అచింత్య రూప చరితే సర్వ శత్రు వినాశిని।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥9॥

నతేభ్యః సర్వదా భక్త్యా చాపర్ణే దురితాపహే।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥10॥

స్తువద్భ్యోభక్తిపూర్వం త్వాం చండికే వ్యాధి నాశిని
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥11॥

చండికే సతతం యుద్ధే జయంతీ పాపనాశిని।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥12॥

దేహి సౌభాగ్యమారోగ్యం దేహి దేవీ పరం సుఖం।
రూపం ధేహి జయం దేహి యశో ధేహి ద్విషో జహి॥13॥

విధేహి దేవి కల్యాణం విధేహి విపులాం శ్రియం।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥14॥

విధేహి ద్విషతాం నాశం విధేహి బలముచ్చకైః।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥15॥

సురాసురశిరో రత్న నిఘృష్టచరణేఽంబికే।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥16॥

విధ్యావంతం యశస్వంతం లక్ష్మీవంతంచ మాం కురు।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥17॥

దేవి ప్రచండ దోర్దండ దైత్య దర్ప నిషూదిని।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥18॥

ప్రచండ దైత్యదర్పఘ్నే చండికే ప్రణతాయమే।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥19॥

చతుర్భుజే చతుర్వక్త్ర సంస్తుతే పరమేశ్వరి।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥20॥

కృష్ణేన సంస్తుతే దేవి శశ్వద్భక్త్యా సదాంబికే।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥21॥

హిమాచలసుతానాథసంస్తుతే పరమేశ్వరి।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥22॥

ఇంద్రాణీ పతిసద్భావ పూజితే పరమేశ్వరి।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి ॥23॥

దేవి భక్తజనోద్దామ దత్తానందోదయేఽంబికే।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి ॥24॥

భార్యాం మనోరమాం దేహి మనోవృత్తానుసారిణీం।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి॥25॥

తారిణీం దుర్గ సంసార సాగర స్యాచలోద్బవే।
రూపం దేహి జయం దేహి యశో దేహి ద్విషో జహి ॥26॥

ఇదంస్తోత్రం పఠిత్వా తు మహాస్తోత్రం పఠేన్నరః।
సప్తశతీం సమారాధ్య వరమాప్నోతి దుర్లభం ॥27॥

॥ ఇతి శ్రీ అర్గళా దేవి స్తోత్రం ॥`;

const Stotram = () => {
  const { language } = useLanguage();
  const { isMuted, toggleMute } = useMusic();
  const footerRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: 'Argala Stotram',
      subtitle: 'The sacred hymn of Goddess Argaladevi',
      play_audio: 'PLAY AUDIO',
      mute_audio: 'MUTE AUDIO',
    },
    te: {
      title: 'అర్గళా స్తోత్రం',
      subtitle: 'అర్గళాదేవి యొక్క పవిత్ర స్తోత్రం',
      play_audio: 'ఆడియో ప్లే చేయండి',
      mute_audio: 'ఆడియో మ్యూట్ చేయండి',
    },
    hi: {
      title: 'अर्गला स्तोत्र',
      subtitle: 'अर्गलादेवी का पवित्र स्तोत्र',
      play_audio: 'ऑडियो चलाएं',
      mute_audio: 'ऑडियो म्यूट करें',
    }
  }[language];

  const getStotramText = () => {
    switch (language) {
      case 'hi': return stotramHindi;
      case 'te': return stotramTelugu;
      default: return stotramSanskrit;
    }
  };

  const getFontClass = () => {
    switch (language) {
      case 'hi': return 'font-devanagari';
      case 'te': return 'font-telugu';
      default: return 'font-body';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Floating Audio Control */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="bg-temple-maroon border-2 border-temple-gold shadow-[0_0_15px_rgba(255,215,0,0.4)] text-temple-gold p-4 rounded-full flex items-center gap-2 group"
        >
          {isMuted ? <VolumeX size={24} /> : (
            <div className="relative">
              <Volume2 size={24} />
              <motion.div
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 bg-temple-gold rounded-full"
              />
            </div>
          )}
          <span className="font-sacred text-sm hidden md:block tracking-widest px-1 uppercase">
            {isMuted ? content.play_audio : content.mute_audio}
          </span>
        </motion.button>
      </div>

      <HangingDiyas isHomePage={false} footerRef={footerRef} />

      <div className="relative pt-[calc(48px+3.5rem)] md:pt-[calc(56px+4.5rem)] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen" style={{ backgroundImage: `url(${homeBg})` }}>
        <div className="absolute inset-0 bg-temple-maroon/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-4xl text-temple-gold block mb-4">ॐ</span>
            <h1 className="font-sacred text-3xl md:text-5xl text-temple-gold mb-4 tracking-wider">{content.title}</h1>
            <div className="sacred-divider"><span className="text-temple-gold text-sm">✦</span></div>
            <p className="font-body text-temple-cream/80 mt-4 italic text-lg">{content.subtitle}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2 }} className="bg-black/40 backdrop-blur-sm golden-border p-8 md:p-12 rounded-lg shadow-2xl">
            <div className={`whitespace-pre-wrap ${getFontClass()} text-temple-cream text-lg md:text-xl leading-relaxed text-center space-y-4`}>
              {getStotramText()}
            </div>
          </motion.div>
        </div>
        <div ref={footerRef}><Footer /></div>
      </div>
    </div>
  );
};

export default Stotram;
