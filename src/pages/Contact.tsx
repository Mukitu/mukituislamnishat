import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container-section text-center">
            <p className="text-primary font-medium mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I&apos;m always 
              excited to discuss new opportunities and ideas.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
