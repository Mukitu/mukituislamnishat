import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Code, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Personal Website',
    description: 'Custom portfolio and personal websites with modern design, animations, and responsive layouts.',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading'],
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Website',
    description: 'Full-featured online stores with payment integration, inventory management, and admin panels.',
    features: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Analytics Dashboard'],
  },
  {
    icon: Code,
    title: 'Custom Web Application',
    description: 'Bespoke web applications built with MERN stack for your unique business requirements.',
    features: ['Custom Features', 'Database Design', 'API Integration', 'Scalable Architecture'],
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional web development services tailored to your needs. From simple 
            portfolios to complex web applications, I deliver quality solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="text-primary group-hover:text-primary-foreground" size={28} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">
            Start Your Project
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
