import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, Shield, Users } from 'lucide-react';
import { toast } from 'sonner';

import { getComponentContent } from '@/lang';

const presetAmounts = [1000, 5000, 10000, 20000];

const DonationSection = () => {
  const { language } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const content = getComponentContent(language).DonationSection;

  const amount = customAmount ? parseInt(customAmount) : (selectedAmount || 0);

  const adjustCustomAmount = (delta: number) => {
    const current = customAmount ? parseInt(customAmount) : (selectedAmount || 0);
    const newValue = Math.max(0, current + delta);
    setCustomAmount(newValue.toString());
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error(content.error_fields);
      return;
    }
    if (amount < 1) {
      toast.error(content.error_amount);
      return;
    }
    toast.success(content.success_msg);
  };

  const blessings = [
    { icon: Heart, title: content.merit_title, desc: content.merit_desc },
    { icon: Shield, title: content.protection_title, desc: content.protection_desc },
    { icon: Users, title: content.community_title, desc: content.community_desc },
  ];

  return (
    <section id="donate" className="py-10 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* Om Symbol */}
          <span className="text-5xl text-temple-gold font-extrabold block mb-4 text-center">ॐ</span>

          {/* Main Title */}
          <h1 className="font-sacred text-3xl md:text-5xl font-extrabold text-temple-gold mb-2 tracking-wide uppercase">
            {content.title}
          </h1>

          {/* Subtitle */}
          <p className="font-sacred text-lg md:text-xl font-extrabold text-temple-gold/90 mb-6 uppercase tracking-wider">
            {content.subtitle}
          </p>

          {/* Decorative Divider */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-temple-gold"></div>
            <span className="text-temple-gold text-xl">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-temple-gold"></div>
          </div>

          {/* Description Text */}
          <p className="font-body text-base md:text-lg text-temple-cream/90 font-medium max-w-3xl mx-auto leading-relaxed italic border-l-2 border-r-2 border-temple-gold/20 px-8">
            {content.desc}
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Main Donation Card - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="border-2 border-temple-gold rounded-2xl p-6 md:p-10 bg-black/60 shadow-[0_0_40px_rgba(184,134,11,0.2)] backdrop-blur-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-temple-gold to-transparent opacity-50" />

              <div className="text-center">
                <h3 className="font-sacred text-2xl font-extrabold text-temple-gold mb-2 tracking-wide">{content.card_title}</h3>
                <p className="font-body text-sm text-temple-cream/80 font-medium">{content.card_desc}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-sacred text-[10px] text-temple-gold font-bold mb-4 tracking-[0.3em] text-center uppercase opacity-80">{content.presets_label}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                        className={`py-3 rounded-xl font-sacred font-bold text-base transition-all duration-500 border-2 ${selectedAmount === amt && !customAmount
                          ? 'bg-temple-gold border-temple-gold text-temple-stone shadow-[0_0_20px_rgba(184,134,11,0.5)] scale-105'
                          : 'border-temple-gold/30 text-temple-gold hover:border-temple-gold/100 hover:bg-temple-gold/10'
                          }`}
                      >
                        ₹{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount with Arrows */}
                <div className="relative pt-4 border-t border-temple-gold/10">
                  <p className="font-sacred text-[10px] text-temple-gold font-bold mb-4 tracking-[0.3em] text-center uppercase opacity-80">{content.custom_label}</p>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => adjustCustomAmount(-1)}
                      className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-temple-gold/30 text-temple-gold hover:bg-temple-gold hover:text-temple-stone transition-all active:scale-90"
                    >
                      <span className="text-2xl font-bold">−</span>
                    </button>

                    <div className="relative flex-1 max-w-[200px]">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-temple-gold font-bold">₹</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border-2 border-temple-gold/30 rounded-xl font-body font-bold text-center text-xl text-temple-gold placeholder:text-temple-gold/20 focus:border-temple-gold focus:outline-none focus:bg-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-all"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => adjustCustomAmount(1)}
                      className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-temple-gold/30 text-temple-gold hover:bg-temple-gold hover:text-temple-stone transition-all active:scale-90"
                    >
                      <span className="text-2xl font-bold">+</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={content.name_placeholder}
                  className="w-full px-5 py-3.5 bg-white/5 border-2 border-temple-gold/30 rounded-xl font-body font-medium text-temple-cream placeholder:text-temple-cream/40 focus:border-temple-gold focus:outline-none focus:bg-white/10 transition-all font-bold"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder={content.email_placeholder}
                  className="w-full px-5 py-3.5 bg-white/5 border-2 border-temple-gold/30 rounded-xl font-body font-medium text-temple-cream placeholder:text-temple-cream/40 focus:border-temple-gold focus:outline-none focus:bg-white/10 transition-all font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Price Summary Display */}
              <motion.div
                key={amount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-4 border-t border-temple-gold/20 text-center"
              >
                <p className="font-sacred text-xs text-temple-gold/60 uppercase tracking-widest mb-1">{content.summary_label}</p>
                <p className="font-sacred text-3xl font-extrabold text-temple-gold animate-glow">
                  ₹{amount.toLocaleString()}
                </p>
              </motion.div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-temple-gold via-amber-400 to-temple-gold text-temple-stone font-sacred font-extrabold tracking-[0.15em] uppercase rounded-xl hover:scale-[1.02] transform transition-all duration-300 shadow-2xl active:scale-95 text-lg">
                {content.submit_btn}
              </button>
            </form>
          </motion.div>

          {/* Blessings Section - Horizontal */}
          <div className="max-w-5xl mx-auto">
            <h3 className="font-sacred text-xl font-bold text-temple-gold text-center mb-10 tracking-[0.2em] uppercase">{content.blessings_title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blessings.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, borderColor: 'rgba(184, 134, 11, 0.6)' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-temple-gold/20 rounded-2xl p-6 bg-white/5 backdrop-blur-md text-center group transition-all duration-300"
                >
                  <div className="mb-4 inline-block p-3 bg-temple-gold/10 rounded-full group-hover:bg-temple-gold/20 transition-colors">
                    <b.icon className="w-6 h-6 text-temple-gold" />
                  </div>
                  <h4 className="font-sacred text-sm font-bold text-temple-gold mb-2 uppercase tracking-widest">{b.title}</h4>
                  <p className="font-body text-xs text-temple-cream/70 font-medium leading-relaxed uppercase">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;