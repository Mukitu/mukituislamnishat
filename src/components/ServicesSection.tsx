import { Globe, ShoppingCart, Code, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    icon: Globe,
    titleEn: 'Personal Website',
    titleBn: 'পার্সোনাল ওয়েবসাইট',
    descEn: 'Stunning portfolio websites that showcase your personal brand, achievements, and professional journey with modern design and smooth animations.',
    descBn: 'আধুনিক ডিজাইন এবং স্মুথ অ্যানিমেশন সহ আপনার ব্যক্তিগত ব্র্যান্ড, অর্জন এবং পেশাদার যাত্রা প্রদর্শনকারী আকর্ষণীয় পোর্টফোলিও ওয়েবসাইট।',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom Animations'],
  },
  {
    icon: ShoppingCart,
    titleEn: 'Ecommerce Website',
    titleBn: 'ই-কমার্স ওয়েবসাইট',
    descEn: 'Full-featured online stores with secure payment integration, inventory management, and beautiful product showcases that drive conversions.',
    descBn: 'সুরক্ষিত পেমেন্ট ইন্টিগ্রেশন, ইনভেন্টরি ম্যানেজমেন্ট এবং সুন্দর প্রোডাক্ট শোকেস সহ সম্পূর্ণ ফিচার্ড অনলাইন স্টোর।',
    features: ['Payment Gateway', 'Admin Dashboard', 'Order Management', 'Analytics'],
  },
  {
    icon: Code,
    titleEn: 'Custom Web Application',
    titleBn: 'কাস্টম ওয়েব অ্যাপ্লিকেশন',
    descEn: 'Scalable, high-performance web applications tailored to your business needs using cutting-edge MERN stack technologies.',
    descBn: 'আপনার ব্যবসায়িক প্রয়োজন অনুযায়ী কাটিং-এজ মার্ন স্ট্যাক প্রযুক্তি ব্যবহার করে স্কেলেবল, হাই-পারফর্মেন্স ওয়েব অ্যাপ্লিকেশন।',
    features: ['MERN Stack', 'Real-time Features', 'API Development', 'Cloud Deployment'],
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('My', 'আমার')}{' '}
            <span className="gradient-text">{t('Services', 'সেবা')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Professional web development services tailored to your needs',
              'আপনার প্রয়োজন অনুযায়ী পেশাদার ওয়েব ডেভেলপমেন্ট সেবা'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_hsl(174_72%_56%_/_0.15)]"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-4">
                {t(service.titleEn, service.titleBn)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {t(service.descEn, service.descBn)}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
              >
                {t('Get Started', 'শুরু করুন')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
