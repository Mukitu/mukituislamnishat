import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/mukitunishat.official', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mukituislamnishat/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/MukituNishat', label: 'X/Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/8801303595062', label: 'WhatsApp' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    alert('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section-padding bg-secondary/30" id="contact">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message 
            and let&apos;s discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:mukituislamnishat@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    mukituislamnishat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <a href="https://wa.me/8801303595062" className="text-muted-foreground hover:text-primary transition-colors">
                    +880 1303 595062
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Rajshahi,Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium text-foreground mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
