import { ArrowRight, Download, Code2, Users, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  { icon: Users, value: '583+', labelEn: 'Happy Clients', labelBn: 'সন্তুষ্ট ক্লায়েন্ট' },
  { icon: Code2, value: '120+', labelEn: 'Projects Done', labelBn: 'প্রকল্প সম্পন্ন' },
  { icon: Star, value: '50+', labelEn: 'Reviews', labelBn: 'রিভিউ' },
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t('Available for Freelance Projects', 'ফ্রিল্যান্স প্রজেক্টের জন্য উপলব্ধ')}
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              {t('Full Stack', 'ফুল স্ট্যাক')}{' '}
              <span className="gradient-text">{t('Web Developer', 'ওয়েব ডেভেলপার')}</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                & {t('Digital Solution Architect', 'ডিজিটাল সলিউশন আর্কিটেক্ট')}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t(
                'CSE Student | MERN Stack Expert | Transforming ideas into scalable, high-performance web applications.',
                'সিএসই স্টুডেন্ট | মার্ন স্ট্যাক এক্সপার্ট | আইডিয়াকে স্কেলেবল, হাই-পারফর্মেন্স ওয়েব অ্যাপ্লিকেশনে রূপান্তর করছি।'
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                {t('Hire Me', 'আমাকে নিয়োগ করুন')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-outline flex items-center justify-center gap-2">
                {t('View Services', 'সেবা দেখুন')}
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="font-display text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t(stat.labelEn, stat.labelBn)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-slide-up">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float group">

                {/* Rotating Gradient Border */}
                <div
                  className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-primary via-primary/50 to-transparent animate-spin"
                  style={{ animationDuration: '8s' }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden" />
                </div>

                {/* Profile Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/mypic.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Optional Soft Glass Overlay */}
                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm pointer-events-none"></div>

              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 px-4 py-2 glass-card text-sm font-medium animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="text-primary">MERN</span> Stack
          </div>
          <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card text-sm font-medium animate-bounce" style={{ animationDuration: '3.5s' }}>
            <span className="text-primary">583+</span> Clients
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
