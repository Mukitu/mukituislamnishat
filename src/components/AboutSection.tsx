import { GraduationCap, Award, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const timeline = [
  {
    year: '2023',
    titleEn: 'Started CSE Degree',
    titleBn: 'সিএসই ডিগ্রি শুরু',
    descEn: 'Began Computer Science & Engineering studies',
    descBn: 'কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং পড়াশোনা শুরু',
    icon: GraduationCap,
  },
  {
    year: '2023',
    titleEn: 'Web Development Journey',
    titleBn: 'ওয়েব ডেভেলপমেন্ট যাত্রা',
    descEn: 'Mastered HTML, CSS, JavaScript, and React',
    descBn: 'HTML, CSS, JavaScript এবং React আয়ত্ত করেছি',
    icon: Award,
  },
  {
    year: '2024',
    titleEn: 'MERN Stack Expert',
    titleBn: 'মার্ন স্ট্যাক এক্সপার্ট',
    descEn: 'Full proficiency in MongoDB, Express, React, Node.js',
    descBn: 'MongoDB, Express, React, Node.js এ সম্পূর্ণ দক্ষতা',
    icon: Briefcase,
  },
  {
    year: '2025',
    titleEn: '583+ Happy Clients',
    titleBn: '৫৮৩+ সন্তুষ্ট ক্লায়েন্ট',
    descEn: 'Successfully delivered projects worldwide',
    descBn: 'বিশ্বব্যাপী সফলভাবে প্রকল্প সম্পন্ন',
    icon: Calendar,
  },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('About', 'সম্পর্কে')}{' '}
            <span className="gradient-text">{t('Me', 'আমি')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Passionate about creating digital solutions that make a difference',
              'ডিজিটাল সলিউশন তৈরিতে আগ্রহী যা পার্থক্য তৈরি করে'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bio */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold mb-4 gradient-text">
                {t('Who Am I?', 'আমি কে?')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "My name is Mukitu Islam Nishat. I am a CSE student and professional Full Stack Web Developer. I specialize in building dynamic, animated, and scalable web applications using MERN stack technologies. With a passion for clean code and user-centric design, I've helped 583+ clients bring their visions to life.",
                  'আমার নাম মুকিতু ইসলাম নিশাত। আমি একজন সিএসই স্টুডেন্ট এবং প্রফেশনাল ফুল স্ট্যাক ওয়েব ডেভেলপার। আমি মার্ন স্ট্যাক টেকনোলজি ব্যবহার করে ডাইনামিক, অ্যানিমেটেড এবং স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরিতে বিশেষজ্ঞ। ক্লিন কোড এবং ইউজার-সেন্ট্রিক ডিজাইনের প্রতি আগ্রহের সাথে, আমি ৫৮৩+ ক্লায়েন্টদের তাদের দৃষ্টিভঙ্গি বাস্তবায়নে সাহায্য করেছি।'
                )}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{t('Name', 'নাম')}</p>
                  <p className="font-semibold">Mukitu Islam Nishat</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{t('Role', 'ভূমিকা')}</p>
                  <p className="font-semibold">{t('Full Stack Developer', 'ফুল স্ট্যাক ডেভেলপার')}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{t('Education', 'শিক্ষা')}</p>
                  <p className="font-semibold">{t('CSE Student', 'সিএসই স্টুডেন্ট')}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{t('Experience', 'অভিজ্ঞতা')}</p>
                  <p className="font-semibold">583+ {t('Clients', 'ক্লায়েন্ট')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="glass-card p-6 hover:border-primary/50 transition-colors">
                    <span className="text-primary text-sm font-medium">{item.year}</span>
                    <h4 className="font-display text-lg font-bold mt-1 mb-2">
                      {t(item.titleEn, item.titleBn)}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t(item.descEn, item.descBn)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
