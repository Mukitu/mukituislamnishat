import { Link } from 'react-router-dom';
import { Check, MessageCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Personal Website',
    originalPrice: 50,
    discountedPrice: 15,
    discount: '70% OFF',
    description: 'Perfect for individuals and freelancers',
    features: [
      'Custom responsive design',
      'Up to 5 pages',
      'Contact form integration',
      'SEO optimization',
      'Mobile-first approach',
      '1 month free support',
    ],
    popular: false,
  },
  {
    name: 'Ecommerce Website',
    originalPrice: 70,
    discountedPrice: 20,
    discount: '70% OFF',
    description: 'Complete online store solution',
    features: [
      'Everything in Personal',
      'Product catalog',
      'Shopping cart & checkout',
      'Payment gateway setup',
      'Order management',
      'Admin dashboard',
      '2 months free support',
    ],
    popular: true,
  },
  {
    name: 'Custom Web App',
    originalPrice: 130,
    discountedPrice: 40,
    discount: '70% OFF',
    description: 'Tailored solutions for your business',
    features: [
      'Everything in Ecommerce',
      'Custom feature development',
      'Database architecture',
      'API development',
      'Third-party integrations',
      'Performance optimization',
      '3 months free support',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding bg-secondary/30" id="pricing">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <span className="font-semibold">🔥 Limited Time: 70% OFF</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Affordable Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quality web development at prices that won&apos;t break the bank. 
            Get started with your project today!
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border ${
                plan.popular
                  ? 'border-primary shadow-glow scale-105 z-10'
                  : 'border-border'
              } card-hover`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="btn-primary text-xs px-4 py-1.5">Most Popular</span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

                {/* Price */}
                <div className="flex items-center justify-center gap-3">
                  <span className="text-muted-foreground line-through">${plan.originalPrice}</span>
                  <span className="font-display text-4xl font-bold text-foreground">
                    ${plan.discountedPrice}
                  </span>
                </div>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {plan.discount}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} justify-center`}
                >
                  Get Started
                </Link>
                <a
                  href="https://wa.me/8801303595062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
