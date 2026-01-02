import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const skills = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React & Next.js', level: 88 },
  { name: 'Node.js & Express', level: 85 },
  { name: 'MongoDB', level: 82 },
  { name: 'TypeScript', level: 80 },
];

const timeline = [
  {
    icon: GraduationCap,
    title: 'CSE Student',
    subtitle: 'Computer Science & Engineering',
    description: 'Pursuing degree in Computer Science with focus on software development.',
  },
  {
    icon: Briefcase,
    title: 'Professional Developer',
    subtitle: 'Full Stack Web Development',
    description: 'Working on client projects using MERN stack technologies.',
  },
  {
    icon: Award,
    title: 'Agency Founder',
    subtitle: 'CEO at Nishat Dev',
    description: 'Founded web development agency serving 583+ clients worldwide.',
  },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="about">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - About Text & Skills */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My name is <strong className="text-foreground">Mukitu Islam Nishat</strong>. 
              I am a CSE student and a professional Full Stack Web Developer. I specialize in 
              building dynamic, animated and scalable web applications using MERN stack technologies.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a strong foundation in computer science and hands-on experience with modern 
              web technologies, I help businesses and individuals bring their digital ideas to life. 
              My approach combines clean code practices with creative problem-solving.
            </p>

            {/* Skills */}
            <div className="space-y-5">
              <h3 className="font-display font-semibold text-lg mb-4">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                    <p className="text-primary text-sm mb-1">{item.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Grid */}
            <div className="mt-10">
              <h3 className="font-display font-semibold text-lg mb-4">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind', 'TypeScript', 'Git', 'API Design'].map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 text-center text-sm font-medium bg-card rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
