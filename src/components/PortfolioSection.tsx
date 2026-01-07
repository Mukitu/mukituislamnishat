import { useState } from 'react';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    id: 1,
    titleEn: 'E-commerce Platform',
    titleBn: 'ই-কমার্স প্ল্যাটফর্ম',
    descEn: 'Full-featured online store with payment integration',
    descBn: 'পেমেন্ট ইন্টিগ্রেশন সহ সম্পূর্ণ অনলাইন স্টোর',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    titleEn: 'Portfolio Website',
    titleBn: 'পোর্টফোলিও ওয়েবসাইট',
    descEn: 'Modern portfolio with stunning animations',
    descBn: 'আকর্ষণীয় অ্যানিমেশন সহ আধুনিক পোর্টফোলিও',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    titleEn: 'Task Management App',
    titleBn: 'টাস্ক ম্যানেজমেন্ট অ্যাপ',
    descEn: 'Real-time collaborative task management',
    descBn: 'রিয়েল-টাইম কোলাবোরেটিভ টাস্ক ম্যানেজমেন্ট',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    titleEn: 'Restaurant Website',
    titleBn: 'রেস্টুরেন্ট ওয়েবসাইট',
    descEn: 'Online ordering system for restaurants',
    descBn: 'রেস্টুরেন্টের জন্য অনলাইন অর্ডারিং সিস্টেম',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    titleEn: 'Social Media Dashboard',
    titleBn: 'সোশ্যাল মিডিয়া ড্যাশবোর্ড',
    descEn: 'Analytics dashboard for social media',
    descBn: 'সোশ্যাল মিডিয়ার জন্য অ্যানালিটিক্স ড্যাশবোর্ড',
    tech: ['React', 'Chart.js', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    titleEn: 'Blog Platform',
    titleBn: 'ব্লগ প্ল্যাটফর্ম',
    descEn: 'Modern blogging platform with CMS',
    descBn: 'সিএমএস সহ আধুনিক ব্লগিং প্ল্যাটফর্ম',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    titleEn: 'Fitness Tracker',
    titleBn: 'ফিটনেস ট্র্যাকার',
    descEn: 'Health and fitness tracking application',
    descBn: 'স্বাস্থ্য ও ফিটনেস ট্র্যাকিং অ্যাপ্লিকেশন',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    titleEn: 'Learning Platform',
    titleBn: 'লার্নিং প্ল্যাটফর্ম',
    descEn: 'Online education and course platform',
    descBn: 'অনলাইন শিক্ষা ও কোর্স প্ল্যাটফর্ম',
    tech: ['React', 'Node.js', 'AWS', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  // Additional projects (hidden initially)
  {
    id: 9,
    titleEn: 'Real Estate Portal',
    titleBn: 'রিয়েল এস্টেট পোর্টাল',
    descEn: 'Property listing and management system',
    descBn: 'প্রপার্টি লিস্টিং ও ম্যানেজমেন্ট সিস্টেম',
    tech: ['React', 'Node.js', 'MongoDB', 'Maps API'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 10,
    titleEn: 'Event Management',
    titleBn: 'ইভেন্ট ম্যানেজমেন্ট',
    descEn: 'Event booking and management platform',
    descBn: 'ইভেন্ট বুকিং ও ম্যানেজমেন্ট প্ল্যাটফর্ম',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 11,
    titleEn: 'Chat Application',
    titleBn: 'চ্যাট অ্যাপ্লিকেশন',
    descEn: 'Real-time messaging application',
    descBn: 'রিয়েল-টাইম মেসেজিং অ্যাপ্লিকেশন',
    tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 12,
    titleEn: 'Weather App',
    titleBn: 'ওয়েদার অ্যাপ',
    descEn: 'Beautiful weather forecasting app',
    descBn: 'সুন্দর আবহাওয়া পূর্বাভাস অ্যাপ',
    tech: ['React', 'Weather API', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
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
