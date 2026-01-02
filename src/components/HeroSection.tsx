import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Code } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-up">
              <Code size={16} />
              <span className="text-sm font-medium">MERN Stack Expert</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Full Stack Web Developer &{' '}
              <span className="text-gradient">Digital Solution Architect</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              CSE Student | MERN Stack Expert | Building scalable web applications 
              with modern technologies and clean architecture.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <Users className="text-primary" size={20} />
                <span className="font-semibold">583+</span>
                <span className="text-muted-foreground">Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-primary" size={20} />
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground">Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary">
                Hire Me
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary to-card rounded-3xl -rotate-3" />
              
              {/* Main image container */}
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Mukitu Islam Nishat - Full Stack Developer"
                  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-medium animate-float"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-card px-4 py-3 rounded-xl shadow-medium">
                  <p className="text-sm font-medium text-muted-foreground">CEO & Founder</p>
                  <p className="font-display font-semibold text-foreground">Nishat Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
