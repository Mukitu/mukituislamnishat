import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Database, Server, Globe, ArrowRight, Check } from 'lucide-react';

const modules = [
  { icon: Globe, title: 'HTML & CSS Fundamentals', desc: 'Building blocks of the web - structure and styling' },
  { icon: Code, title: 'JavaScript Mastery', desc: 'Core programming concepts and DOM manipulation' },
  { icon: BookOpen, title: 'React Development', desc: 'Component-based UI development with React' },
  { icon: Server, title: 'Node.js & Express', desc: 'Backend development and API creation' },
  { icon: Database, title: 'MongoDB & Databases', desc: 'Data modeling and database operations' },
  { icon: Globe, title: 'Full Stack Projects', desc: 'Real-world projects combining all skills' },
];

const outcomes = [
  'Build complete web applications from scratch',
  'Understand modern development workflows',
  'Deploy applications to production',
  'Work with databases and APIs',
  'Write clean, maintainable code',
  'Problem-solving and debugging skills',
];

export default function CoursePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container-section">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4">Course & Learning</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Learn Web Development
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As a CSE student and working developer, I understand the challenges of learning 
                to code. My approach focuses on practical skills through building real projects, 
                not just theory. I&apos;ve designed my teaching methodology based on what actually 
                works in the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re a complete beginner or looking to level up your skills, 
                I provide personalized guidance to help you achieve your goals. My students 
                go from zero to building full-stack applications in months, not years.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="section-padding bg-secondary/30">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">Learning Path</h2>
              <p className="text-muted-foreground mt-2">A structured approach to becoming a full-stack developer</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <div key={module.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <module.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{module.title}</h3>
                  <p className="text-muted-foreground text-sm">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  What You&apos;ll Learn
                </h2>
                <p className="text-muted-foreground mb-8">
                  By the end of our sessions, you&apos;ll have the practical skills and confidence 
                  to build and deploy your own web applications. No fluff, just real skills.
                </p>
                <ul className="space-y-4">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-display font-semibold text-xl mb-4">My Teaching Approach</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I believe in learning by doing. Instead of lengthy lectures, we focus on 
                    building projects that you can actually use and showcase in your portfolio.
                  </p>
                  <p>
                    Every concept is explained with practical examples. You won&apos;t just 
                    understand how things work - you&apos;ll know when and why to use them.
                  </p>
                  <p>
                    As someone who&apos;s currently studying CSE while working on real client 
                    projects, I bridge the gap between academic knowledge and industry practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-section text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Interested in Learning?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Contact me to discuss your learning goals and how I can help you 
              become a professional web developer.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
