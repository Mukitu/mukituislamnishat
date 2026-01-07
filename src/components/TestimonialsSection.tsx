import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  { id: 1, name: 'রাহাত হোসেন', review: 'অসাধারণ কাজ করেছেন! আমার ওয়েবসাইটটি খুবই সুন্দর হয়েছে। সময়মতো ডেলিভারি দিয়েছেন।', rating: 5 },
  { id: 2, name: 'নাজমুল ইসলাম', review: 'পেশাদার এবং দক্ষ। আমার ই-কমার্স সাইট পারফেক্ট হয়েছে।', rating: 5 },
  { id: 3, name: 'ফারজানা আক্তার', review: 'খুবই সন্তুষ্ট! কাস্টমার সার্ভিস অসাধারণ।', rating: 5 },
  { id: 4, name: 'মাহমুদুল হাসান', review: 'আমার পোর্টফোলিও সাইট অনেক সুন্দর হয়েছে। সবাইকে রেকমেন্ড করব।', rating: 5 },
  { id: 5, name: 'সাবরিনা ইসলাম', review: 'প্রফেশনাল ওয়ার্ক। ডিজাইন এবং ফাংশনালিটি দুটোই পারফেক্ট।', rating: 5 },
  { id: 6, name: 'তানভীর আহমেদ', review: 'আমার বিজনেস ওয়েবসাইট দারুণ হয়েছে। অনেক ধন্যবাদ!', rating: 5 },
  { id: 7, name: 'শাহরিয়ার কবির', review: 'টাইমলাইন মেইনটেইন করে কাজ করেছেন। খুবই পেশাদার।', rating: 5 },
  { id: 8, name: 'রুমানা খান', review: 'ওয়েবসাইটের স্পিড এবং পারফর্মেন্স অসাধারণ!', rating: 5 },
  { id: 9, name: 'আরিফুল ইসলাম', review: 'কোড কোয়ালিটি খুবই ভালো। প্রফেশনাল ডেভেলপার।', rating: 5 },
  { id: 10, name: 'মিথিলা রহমান', review: 'আমার রেস্টুরেন্ট ওয়েবসাইট পারফেক্ট হয়েছে।', rating: 5 },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('Client', 'ক্লায়েন্ট')}{' '}
            <span className="gradient-text">{t('Testimonials', 'প্রশংসাপত্র')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "What my clients say about working with me",
              'আমার সাথে কাজ করার অভিজ্ঞতা সম্পর্কে ক্লায়েন্টদের মতামত'
            )}
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold gradient-text">583+</p>
            <p className="text-sm text-muted-foreground">{t('Happy Clients', 'সন্তুষ্ট ক্লায়েন্ট')}</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold gradient-text">50+</p>
            <p className="text-sm text-muted-foreground">{t('Reviews', 'রিভিউ')}</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold gradient-text">5.0</p>
            <p className="text-sm text-muted-foreground">{t('Average Rating', 'গড় রেটিং')}</p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
            
            {/* Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Review */}
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
                "{testimonials[currentIndex].review}"
              </p>

              {/* Author */}
              <p className="font-display font-bold text-primary">
                {testimonials[currentIndex].name}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
