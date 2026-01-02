import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Briefcase, Award, Code, Users, Target } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
  { category: 'Tools & Others', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'DSA', 'Problem Solving'] },
];

const values = [
  { icon: Code, title: 'Clean Code', description: 'Writing maintainable, scalable, and well-documented code.' },
  { icon: Users, title: 'Client First', description: 'Understanding client needs and delivering beyond expectations.' },
  { icon: Target, title: 'Result Driven', description: 'Focused on delivering tangible business outcomes.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-4">About Me</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  I&apos;m Mukitu Islam Nishat
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A passionate Full Stack Web Developer and CSE student from Bangladesh. I specialize 
                  in building dynamic, animated, and scalable web applications using MERN stack technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 583+ successful projects delivered, I&apos;ve helped businesses and individuals 
                  establish their digital presence. My approach combines technical expertise with creative 
                  problem-solving to deliver solutions that truly make an impact.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={profileImage}
                  alt="Mukitu Islam Nishat"
                  className="w-80 h-80 object-cover rounded-2xl shadow-medium"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="section-padding bg-secondary/30">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">My Journey</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: GraduationCap, title: 'Education', desc: 'CSE Student pursuing Computer Science & Engineering with focus on software development.' },
                { icon: Briefcase, title: 'Experience', desc: 'Professional web developer with 583+ completed projects and satisfied clients.' },
                { icon: Award, title: 'Achievement', desc: 'Founder of Nishat Dev agency, maintaining 4.9★ rating from clients.' },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 bg-card rounded-2xl border border-border">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((category) => (
                <div key={category.category} className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-semibold text-lg mb-4 text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/30">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">What I Believe In</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
