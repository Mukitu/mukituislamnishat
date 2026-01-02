import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Code, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Personal Website',
    description: 'Custom portfolio and personal websites designed to showcase your skills, achievements, and personality in a professional manner.',
    features: [
      'Custom responsive design',
      'Mobile-first approach',
      'SEO optimization',
      'Contact form integration',
      'Social media links',
      'Fast loading speed',
      'Cross-browser compatibility',
      '1 month free support',
    ],
    price: 15,
    originalPrice: 50,
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Website',
    description: 'Full-featured online stores with everything you need to sell products online and manage your business efficiently.',
    features: [
      'Everything in Personal Website',
      'Product catalog & management',
      'Shopping cart functionality',
      'Secure checkout process',
      'Payment gateway integration',
      'Order tracking system',
      'Admin dashboard',
      'Inventory management',
      '2 months free support',
    ],
    price: 20,
    originalPrice: 70,
  },
  {
    icon: Code,
    title: 'Custom Web Application',
    description: 'Bespoke web applications built from scratch using MERN stack to meet your unique business requirements.',
    features: [
      'Everything in Ecommerce',
      'Custom feature development',
      'Database architecture design',
      'RESTful API development',
      'Third-party integrations',
      'User authentication system',
      'Performance optimization',
      'Scalable architecture',
      '3 months free support',
    ],
    price: 40,
    originalPrice: 130,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container-section text-center">
            <p className="text-primary font-medium mb-4">Services</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              What I Can Build For You
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional web development services tailored to your needs. From simple portfolios 
              to complex web applications, I deliver quality solutions on time.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-muted-foreground line-through">${service.originalPrice}</span>
                      <span className="font-display text-4xl font-bold text-foreground">${service.price}</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        70% OFF
                      </span>
                    </div>
                    <Link to="/contact" className="btn-primary">
                      Get Started
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                  <div className={`bg-card rounded-2xl p-8 border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-semibold text-lg mb-4">What&apos;s Included</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-section text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss your requirements and build something amazing together.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Me Now
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
