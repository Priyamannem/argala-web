import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import diyaImg from '@/assets/diya.png';
import brochurePdf from '@/assets/broucher.pdf';

const Footer = () => {
  const { language } = useLanguage();

  const allContent = {
    en: {
      desc: 'Sri Maha Chandi Argala Kshetram is a sacred spiritual center dedicated to Goddess Argaladevi. This divine area brings peace, protection, and prosperity to all devotees who visit and seek her blessings.',
      contact_title: 'Contact Information',
      address: 'Gopalapuram & Kashiredypally, Markook Mandal, Siddipet District, Telangana.',
      copyright: '© 2024 Sri Maha Chandi Argala Kshetram Trust. All rights reserved.',
      credit: 'Designed by HashTag Heros Digital Solutions',
      quick_links: 'Quick Links',
      home_link: 'Home',
      about_link: 'About',
      stotram_link: 'Stotram',
      contact_link: 'Contact',
      donate_link: 'Donate',
      brochure_link: 'Brochure',
      crafted_with_devotion: 'Crafted with Devotion',
      temple_name: 'Sri Maha Chandi Argala',
      diya_alt: 'diya',
    },
    te: {
      desc: 'శ్రీ మహా చండి అర్గళాదేవి క్షేత్రం అర్గళాదేవికి అంకితం చేయబడిన పవిత్ర ఆధ్యాత్మిక కేంద్రం. ఈ దివ్య క్షేత్రం భక్తులందరికీ శాంతి, రక్షణ మరియు అభివృద్ధిని ప్రసాదిస్తుంది.',
      contact_title: 'సంప్రదింపు సమాచారం',
      address: 'గోపాలపురం & కాశిరెడ్డిపల్లి, మార్కూక్ మండలం, సిద్దిపేట జిల్లా, తెలంగాణ.',
      copyright: '© 2024 శ్రీ మహా చండి అర్గళాదేవి క్షేత్రం ట్రస్ట్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
      credit: 'రూపకల్పన: హ్యాష్‌ట్యాగ్ హీరోస్ డిజిటల్ సొల్యూషన్స్',
      quick_links: 'త్వరిత లింకులు',
      home_link: 'హోమ్',
      about_link: 'గురించి',
      stotram_link: 'స్తోత్రం',
      contact_link: 'సంప్రదించండి',
      donate_link: 'విరాళం',
      brochure_link: 'బ్రోచర్',
      crafted_with_devotion: 'భక్తితో రూపొందించబడింది',
      temple_name: 'శ్రీ మహా చండి అర్గళ',
      diya_alt: 'దీపం',
    },
    hi: {
      desc: 'श्री महा चण्डी अर्गला क्षेत्रम देवी अर्गलादेवी को समर्पित एक पवित्र आध्यात्मिक केंद्र है। यह दिव्य क्षेत्र उन सभी भक्तों को शांति, सुरक्षा और समृद्धि प्रदान करता है जो दर्शन करते हैं और उनका आशीर्वाद चाहते हैं।',
      contact_title: 'संपर्क विवरण',
      address: 'गोपालपुरम और काशीरेड्डीपल्ली, मार्कूक मंडल, सिद्दीपेट जिला, तेलंगाना।',
      copyright: '© 2024 श्री महा चण्डी अर्गला क्षेत्रम ट्रस्ट। सर्वाधिकार सुरक्षित।',
      credit: 'डिज़ाइन द्वारा: हैशटैग हीरोज डिजिटल सॉल्यूशंस',
      quick_links: 'त्वरित लिंक',
      home_link: 'होम',
      about_link: 'बारे में',
      stotram_link: 'स्तोत्रम',
      contact_link: 'संपर्क',
      donate_link: 'दान',
      brochure_link: 'ब्रोशर',
      crafted_with_devotion: 'भक्ति के साथ निर्मित',
      temple_name: 'श्री महा चण्डी अर्गला',
      diya_alt: 'दीया',
    }
  };

  const content = allContent[language as keyof typeof allContent];

  return (
    <>
      <div className="flex flex-col">
        {/* Continuous Diya Line - Blends with site background */}
        <div className="w-full flex justify-center items-center py-1 overflow-hidden select-none relative z-40 bg-transparent">
          <div className="flex flex-nowrap items-center gap-1">
            {[...Array(100)].map((_, i) => (
              <img
                key={i}
                src={diyaImg}
                alt={content.diya_alt}
                className="w-5 h-5 md:w-6 md:h-6 object-contain animate-diya inline-block shrink-0"
                style={{ animationDelay: `${(i % 10) * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        <footer className="bg-temple-maroon text-temple-cream/80 relative z-10 border-t border-temple-gold/10">
          {/* Main footer content */}
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Temple info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-3 group">
                  <img src={diyaImg} alt={content.diya_alt} className="w-8 h-8 object-contain animate-diya" />
                  <span className="font-sacred text-base text-temple-gold tracking-wider group-hover:text-temple-cream transition-colors duration-300">
                    {content.temple_name}
                  </span>
                </div>
                <p className="font-body text-xs leading-relaxed text-temple-cream/70 text-justify">
                  {content.desc}
                </p>
              </div>

              {/* Quick Links */}
              <div className="md:text-center">
                <h4 className="font-sacred text-xs tracking-[0.2em] uppercase text-temple-gold/90 mb-3 border-b border-temple-gold/20 pb-1 inline-block">
                  {content.quick_links}
                </h4>
                <ul className="space-y-2 font-body text-xs flex flex-col items-start md:items-center">
                  {[
                    { label: content.home_link || 'Home', path: '/' },
                    { label: content.about_link || 'About', path: '/about' },
                    { label: content.stotram_link || 'Stotram', path: '/gallery' },
                    { label: content.contact_link || 'Contact', path: '/contact' },
                    { label: content.donate_link || 'Donate', path: '/donate' },
                    { label: content.brochure_link || 'Brochure', path: brochurePdf, isDownload: true },
                  ].map((item) => (
                    <li key={item.path}>
                      <a
                        href={item.path}
                        download={item.isDownload ? "Argaladevi_Brochure.pdf" : undefined}
                        className="hover:text-temple-gold transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-temple-gold/40 rounded-full group-hover:bg-temple-gold transition-all duration-300" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="lg:pl-4">
                <h4 className="font-sacred text-xs tracking-[0.2em] uppercase text-temple-gold/90 mb-3 border-b border-temple-gold/20 pb-1 inline-block">
                  {content.contact_title}
                </h4>
                <ul className="space-y-3 font-body text-xs">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-temple-gold shrink-0 mt-0.5" />
                    <span className="text-temple-cream/70 leading-relaxed">{content.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-temple-gold shrink-0" />
                    <span className="text-temple-cream/70">+91 87908 17722</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-temple-gold shrink-0" />
                    <span className="text-temple-cream/70 truncate">chandiargalatrust@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="bg-black/20 border-t border-temple-gold/10 py-2 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] font-body tracking-wider">
              <p className="text-temple-cream/90 uppercase tracking-widest">{allContent.en.copyright}</p>
              <div className="flex items-center gap-2">
                <p className="text-temple-gold/60">{allContent.en.credit}</p>
                <span className="text-temple-gold/30">|</span>
                <p className="text-temple-gold/60">{allContent.en.crafted_with_devotion}</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
