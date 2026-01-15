import { useState } from 'react';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  { id: 1, titleEn: 'E-commerce Platform', titleBn: 'ই-কমার্স প্ল্যাটফর্ম', descEn: 'Full-featured online store with payment integration', descBn: 'পেমেন্ট ইন্টিগ্রেশন সহ সম্পূর্ণ অনলাইন স্টোর', tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], image: '/images/projects/img1.jpg', liveUrl: 'https://ghorerbazar.com/', githubUrl: '#' },
  { id: 2, titleEn: 'E-commerce Platform', titleBn: 'ই-কমার্স প্ল্যাটফর্ম', descEn: 'Full-featured online store with payment integration', descBn: 'পেমেন্ট ইন্টিগ্রেশন সহ সম্পূর্ণ অনলাইন স্টোর', tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], image: '/images/projects/img2.jpg', liveUrl: 'https://htbazar.com/', githubUrl: '#' },
  { id: 3, titleEn: 'Task Management App', titleBn: 'টাস্ক ম্যানেজমেন্ট অ্যাপ', descEn: 'Real-time collaborative task management', descBn: 'রিয়েল-টাইম কোলাবোরেটিভ টাস্ক ম্যানেজমেন্ট', tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'], image: '/images/projects/img3.jpg', liveUrl: '#', githubUrl: '#' },
  { id: 4, titleEn: 'Bangladesh Tax & Government Utility', titleBn: 'বাংলাদেশ কর ও সরকারি ইউটিলিটি', descEn: 'Real-time Tax & Government Utility', descBn: 'রিয়েল-টাইম কর ও সরকারি ইউটিলিটি', tech: ['React', 'HTML', 'TypeScript'tailwind css'], image: '/images/projects/img4.jpg', liveUrl: 'https://nishatai.vercel.app/', githubUrl: '#' },
  ];

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 8);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('My', 'আমার')}{' '}
            <span className="gradient-text">{t('Portfolio', 'পোর্টফোলিও')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'A collection of projects showcasing my expertise and creativity',
              'আমার দক্ষতা ও সৃজনশীলতা প্রদর্শনকারী প্রকল্পের সংকলন'
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleEn, project.titleBn)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.liveUrl}
                    className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {t(project.titleEn, project.titleBn)}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {t(project.descEn, project.descBn)}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {projects.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline flex items-center gap-2 mx-auto"
            >
              {showAll ? t('Show Less', 'কম দেখুন') : t('Load More', 'আরো দেখুন')}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
