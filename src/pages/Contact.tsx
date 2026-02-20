import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import HangingDiyas from '@/components/HangingDiyas';
import galleryBg from '@/assets/gallery.jpeg';
import toranamImg from '@/assets/toranam.png';

const Contact = () => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const footerRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: 'Contact Us',
      form_title: 'Send a Message',
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      contact_info_title: 'Contact Information',
      address: 'Gopalapuram & Kashiredypally, Markook Mandal, Siddipet District, Telangana.',
      call_to_action: 'Feel the call of Maa Chandi Argala Devi?',
      reach_out: 'Reach out and be part of this sacred journey.',
      path_of_giving: 'The Path of Giving',
      donation_devotion: '"Every donation is devotion in action."',
      contribution_worship: '"Every contribution becomes eternal worship."',
      connect_today: 'Connect with us today',
      faith_service: 'Let your faith take form in service of the Divine.',
      error_required: 'Please fill all required fields',
      success_message: 'Message sent successfully! We will get back to you soon.',
    },
    te: {
      title: 'సంప్రదించండి',
      form_title: 'సందేశం పంపండి',
      name: 'పూర్తి పేరు',
      email: 'ఈమెయిల్ చిరునామా',
      subject: 'విషయం',
      message: 'మీ సందేశం',
      send: 'సందేశం పంపండి',
      contact_info_title: 'సంప్రదింపు సమాచారం',
      address: 'గోపాలపురం & కాశిరెడ్డిపల్లి, మార్కూక్ మండలం, సిద్దిపేట జిల్లా, తెలంగాణ.',
      call_to_action: 'మా చండి అర్గళాదేవి పిలుపును అనుభవిస్తున్నారా?',
      reach_out: 'సంప్రదించండి మరియు ఈ పవిత్ర ప్రయాణంలో భాగం అవ్వండి.',
      path_of_giving: 'దాన మార్గం',
      donation_devotion: '"ప్రతి విరాళం భక్తికి నిదర్శనం."',
      contribution_worship: '"ప్రతి సహాయం శాశ్వతమైన ఆరాధన అవుతుంది."',
      connect_today: 'ఈరోజే మాతో కనెక్ట్ అవ్వండి',
      faith_service: 'మీ విశ్వాసాన్ని దైవ సేవలో రూపం దాల్చనివ్వండి.',
      error_required: 'దయచేసి అన్ని వివరాలను నింపండి',
      success_message: 'సందేశం విజయవంతంగా పంపబడింది! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.',
    },
    hi: {
      title: 'संपर्क करें',
      form_title: 'संदेश भेजें',
      name: 'पूरा नाम',
      email: 'ईमेल पता',
      subject: 'विषय',
      message: 'आपका संदेश',
      send: 'संदेश भेजें',
      contact_info_title: 'संपर्क विवरण',
      address: 'गोपालपुरम और काशीरेड्डीपल्ली, मार्कूक मंडल, सिद्दीपेट जिला, तेलंगाना.',
      call_to_action: 'माँ चण्डी अर्गला देवी के आह्वान को महसूस कर रहे हैं?',
      reach_out: 'संपर्क करें और इस पवित्र यात्रा का हिस्सा बनें।',
      path_of_giving: 'दान का मार्ग',
      donation_devotion: '"हर दान क्रिया में भक्ति है।"',
      contribution_worship: '"हर योगदान शाश्वत पूजा बन जाता है।"',
      connect_today: 'आज ही हमसे जुड़ें',
      faith_service: 'अपनी आस्था को परमात्मा की सेवा में रूप लेने दें।',
      error_required: 'कृपया सभी आवश्यक फ़ील्ड भरें',
      success_message: 'संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।',
    }
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error(content.error_required || 'Please fill all required fields');
      return;
    }
    toast.success(content.success_message || 'Message sent successfully! We will get back to you soon.');
    setName(''); setEmail(''); setSubject(''); setMessage('');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HangingDiyas isHomePage={false} footerRef={footerRef} />


      <div
        className="relative pt-[calc(48px+3.5rem)] md:pt-[calc(56px+4.5rem)] bg-cover bg-center bg-no-repeat bg-fixed bg-temple-stone min-h-screen"
        style={{ backgroundImage: `url(${galleryBg})` }}
      >
        {/* Black Shade Overlay - Increased darkness */}
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-4xl text-temple-gold block mb-4">ॐ</span>
            <h1 className="font-sacred text-3xl md:text-4xl text-temple-gold mb-4">{content.title}</h1>
            <div className="sacred-divider"><span className="text-temple-gold text-sm">✦</span></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Spiritual Content & Contact info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
              {/* Spiritual Call to Action */}
              <div className="space-y-8 px-2">
                <div className="space-y-3 relative">
                  <span className="absolute -left-4 top-0 text-temple-gold animate-pulse text-xl">✨ </span>
                  <p className="font-sacred text-temple-gold text-xl lg:text-2xl leading-tight">
                    {content.call_to_action}
                  </p>
                  <p className="font-body text-temple-cream/90 text-base md:text-lg italic tracking-wide">
                    {content.reach_out}
                  </p>
                </div>

                <div className="bg-temple-maroon/30 border-l-4 border-temple-gold p-6 rounded-r-lg space-y-4 shadow-2xl backdrop-blur-sm">
                  <div className="space-y-1">
                    <p className="font-sacred text-temple-gold/90 text-sm tracking-widest uppercase mb-1 opacity-70">{content.path_of_giving}</p>
                    <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                      {content.donation_devotion}
                    </p>
                    <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                      {content.contribution_worship}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-temple-gold/20">
                  <p className="font-sacred text-temple-gold text-lg tracking-[0.15em] uppercase border-b-2 border-temple-gold/10 inline-block pb-1">
                    {content.connect_today}
                  </p>
                  <p className="font-body text-temple-cream/60 text-sm italic mt-2">
                    {content.faith_service}
                  </p>
                </div>
              </div>

              {/* Contact info card moved below */}
              <div className="golden-border rounded-lg p-6 bg-black/40 backdrop-blur-md space-y-4 shadow-xl">
                <h3 className="font-sacred text-lg text-temple-gold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-temple-gold" /> {content.contact_info_title}
                </h3>
                <p className="font-body text-sm text-temple-cream/90">{content.address}</p>
                <div className="space-y-2 text-sm font-body text-temple-cream/80 border-t border-temple-gold/10 pt-4">
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-temple-gold" /> +91 87908 17722</p>
                  <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-temple-gold" /> chandiargalatrust@gmail.com</p>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <form onSubmit={handleSubmit} className="golden-border rounded-lg p-8 bg-black/40 backdrop-blur-md space-y-5 text-temple-cream">
                <h3 className="font-sacred text-xl text-temple-gold mb-2">{content.form_title}</h3>
                <div>
                  <label className="font-body text-sm block mb-1.5">{content.name} *</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100}
                    className="w-full px-4 py-2.5 bg-black/20 border border-temple-gold/30 rounded-sm font-body text-temple-cream focus:border-temple-gold focus:outline-none" />
                </div>
                <div>
                  <label className="font-body text-sm block mb-1.5">{content.email} *</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255}
                    className="w-full px-4 py-2.5 bg-black/20 border border-temple-gold/30 rounded-sm font-body text-temple-cream focus:border-temple-gold focus:outline-none" />
                </div>
                <div>
                  <label className="font-body text-sm block mb-1.5">{content.subject}</label>
                  <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} maxLength={200}
                    className="w-full px-4 py-2.5 bg-black/20 border border-temple-gold/30 rounded-sm font-body text-temple-cream focus:border-temple-gold focus:outline-none" />
                </div>
                <div>
                  <label className="font-body text-sm block mb-1.5">{content.message} *</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} maxLength={1000}
                    className="w-full px-4 py-2.5 bg-black/20 border border-temple-gold/30 rounded-sm font-body text-temple-cream focus:border-temple-gold focus:outline-none resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-temple-gold text-temple-stone font-sacred text-sm tracking-widest uppercase rounded-sm hover:bg-temple-saffron transition-all flex items-center justify-center gap-2 shadow-lg">
                  <Send className="w-4 h-4" /> {content.send}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
