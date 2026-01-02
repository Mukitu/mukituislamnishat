import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/mukitunishat.official', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mukituislamnishat/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/MukituNishat', label: 'X/Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/8801303595062', label: 'WhatsApp' },
];

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Personal Website', path: '/services' },
      { name: 'Ecommerce Website', path: '/services' },
      { name: 'Custom Web Apps', path: '/services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-section py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold">
              Mukitu<span className="text-primary">.</span>Nishat
            </Link>
            <p className="mt-4 text-background/70 max-w-sm">
              Full Stack Web Developer specializing in MERN stack technologies. 
              Building scalable, animated, and dynamic web applications.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/10 text-background/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Mukitu Islam Nishat. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Built with passion and clean code.
          </p>
        </div>
      </div>
    </footer>
  );
}
