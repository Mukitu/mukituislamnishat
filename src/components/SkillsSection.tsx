import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const skillCategories = [
  {
    titleEn: 'Frontend',
    titleBn: 'ফ্রন্টএন্ড',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    titleEn: 'Backend',
    titleBn: 'ব্যাকএন্ড',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'REST API', level: 90 },
      { name: 'Authentication', level: 85 },
    ],
  },
  {
    titleEn: 'Frameworks',
    titleBn: 'ফ্রেমওয়ার্ক',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Redux', level: 78 },
      { name: 'TypeScript', level: 75 },
      { name: 'Vite', level: 85 },
    ],
  },
  {
    titleEn: 'Others',
    titleBn: 'অন্যান্য',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'DSA', level: 75 },
      { name: 'Problem Solving', level: 85 },
      { name: 'AI Tools', level: 80 },
      { name: 'Figma', level: 70 },
    ],
  },
];

const SkillBar = ({ name, level, isVisible }: { name: string; level: number; isVisible: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(level), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary font-semibold">{width}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('My', 'আমার')}{' '}
            <span className="gradient-text">{t('Skills', 'দক্ষতা')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Technologies and tools I use to bring your ideas to life',
              'আপনার আইডিয়া বাস্তবায়নে যে প্রযুক্তি ও টুলস ব্যবহার করি'
            )}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="font-display text-xl font-bold mb-6 gradient-text">
                {t(category.titleEn, category.titleBn)}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">{t('Additional Expertise', 'অতিরিক্ত দক্ষতা')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design', 'SEO', 'Performance Optimization', 'API Integration', 'Database Design', 'Agile Development'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
