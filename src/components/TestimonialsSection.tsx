import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'রাকিব হাসান', review: 'অসাধারণ কাজ করেছেন। সময়মতো ডেলিভারি দিয়েছেন এবং ডিজাইন অনেক সুন্দর হয়েছে।', rating: 5 },
  { name: 'তানভীর আহমেদ', review: 'প্রফেশনাল মানের কাজ। আমার ইকমার্স সাইট পারফেক্ট হয়েছে।', rating: 5 },
  { name: 'সাবরিনা রহমান', review: 'খুব দ্রুত কাজ করেছেন এবং যোগাযোগ বজায় রেখেছেন পুরো সময়।', rating: 5 },
  { name: 'ফারহান ইসলাম', review: 'দারুণ অভিজ্ঞতা! সব রিকোয়ারমেন্ট বুঝে কাজ করেছেন।', rating: 5 },
  { name: 'নাফিসা খান', review: 'আমার পোর্টফোলিও সাইট অনেক সুন্দর হয়েছে। সবাইকে রেকমেন্ড করব।', rating: 5 },
  { name: 'মাহমুদ হোসেন', review: 'বেস্ট ডেভেলপার! কাস্টম ফিচার বানাতে কোনো সমস্যা হয়নি।', rating: 5 },
  { name: 'আয়েশা সিদ্দিকা', review: 'রেসপন্সিভ ডিজাইন পারফেক্ট। মোবাইলে অসাধারণ দেখাচ্ছে।', rating: 4 },
  { name: 'জাহিদ করিম', review: 'SEO অপ্টিমাইজড সাইট বানিয়েছেন। গুগলে র‍্যাংক বেড়ে গেছে।', rating: 5 },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="section-padding bg-background overflow-hidden" id="testimonials">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="text-primary fill-primary" size={20} />
              <span className="font-semibold text-foreground">4.9</span>
            </div>
            <span>•</span>
            <span>583+ Happy Clients</span>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-card rounded-2xl p-6 border border-border h-full">
                    <Quote className="text-primary/20 mb-4" size={32} />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{testimonial.name}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="text-primary fill-primary" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-card rounded-full border border-border shadow-soft disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-card rounded-full border border-border shadow-soft disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-primary' : 'bg-border'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
