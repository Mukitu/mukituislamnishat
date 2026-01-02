import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Headphones } from 'lucide-react';

const guarantees = [
  { icon: Shield, title: 'Quality Guarantee', desc: 'Clean, maintainable code that follows best practices.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Projects delivered within agreed timeline, always.' },
  { icon: Headphones, title: 'Free Support', desc: 'Complimentary support included with every package.' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container-section text-center">
            <p className="text-primary font-medium mb-4">Pricing</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent & Affordable
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality web development doesn&apos;t have to be expensive. Check out my 
              competitive pricing with a special 70% discount for limited time.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingSection />

        {/* Guarantees */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">Why Choose Me</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {guarantees.map((item) => (
                <div key={item.title} className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-secondary/30">
          <div className="container-section max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">Common Questions</h2>
            </div>
            <div className="space-y-6">
              {[
                { q: 'How long does a project take?', a: 'Typically 1-2 weeks for personal sites, 2-4 weeks for ecommerce, and 4-8 weeks for custom apps.' },
                { q: 'Do you offer revisions?', a: 'Yes, unlimited revisions during the development phase until you\'re 100% satisfied.' },
                { q: 'What payment methods do you accept?', a: 'Bank transfer, bKash, Nagad, and international payment methods like PayPal.' },
                { q: 'Do you provide hosting?', a: 'I can help you set up hosting and deploy your website. Hosting costs are separate.' },
              ].map((faq) => (
                <div key={faq.q} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-section text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Not sure which package fits your needs? Let&apos;s talk and find the perfect solution.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Me
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
