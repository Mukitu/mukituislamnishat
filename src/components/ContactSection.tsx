import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'ⓕ' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'X (Twitter)', url: 'https://x.com', icon: '𝕏 ' },
  { name: 'WhatsApp', url: 'https://wa.me/8801303595062', icon: '💬' },
];

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
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
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: t('Message Sent!', 'বার্তা পাঠানো হয়েছে!'),
      description: t(
        "Thank you for reaching out. I'll get back to you soon.",
        'যোগাযোগের জন্য ধন্যবাদ। শীঘ্রই আমি আপনার সাথে যোগাযোগ করব।'
      ),
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('Get In', 'যোগাযোগ')}{' '}
            <span className="gradient-text">{t('Touch', 'করুন')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Have a project in mind? Let's discuss how I can help bring your vision to life.",
              'মনে কোনো প্রকল্প আছে? আসুন আলোচনা করি কীভাবে আমি আপনার দৃষ্টিভঙ্গি বাস্তবায়নে সাহায্য করতে পারি।'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold mb-6 gradient-text">
                {t("Let's Connect", 'যোগাযোগ করুন')}
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:mukituislamnishat@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('Email', 'ইমেইল')}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      mukituislamnishat@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801303595062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('WhatsApp', 'হোয়াটসঅ্যাপ')}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      +880 1303 595062
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('Location', 'অবস্থান')}</p>
                    <p className="font-medium">Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">{t('Follow Me', 'ফলো করুন')}</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors text-lg"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="font-display text-2xl font-bold mb-6">
              {t('Send a Message', 'বার্তা পাঠান')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('Your Name', 'আপনার নাম')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t('Enter your name', 'আপনার নাম লিখুন')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('Your Email', 'আপনার ইমেইল')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t('Enter your email', 'আপনার ইমেইল লিখুন')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('Message', 'বার্তা')}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder={t('Enter your message', 'আপনার বার্তা লিখুন')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-spin">⏳</span>
                ) : (
                  <>
                    {t('Send Message', 'বার্তা পাঠান')}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
