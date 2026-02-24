import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Alison Koenig",
    role: "Founder, SalesPADDOCK",
    rating: 5.0,
    quote: "With Rahul, it was just amazing, he really got the concept of the app. They think of things that I even thought of to make my app better. Anybody who chooses them will have just as great of experience as I have.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, EliteBond",
    rating: 5.0,
    quote: "We needed a premium dating platform for professionals. Appscrip delivered a polished product with full source code — we've since customized it heavily and scaled to 200K+ users.",
  },
  {
    name: "Michael Torres",
    role: "Founder, VibeConnect",
    rating: 5.0,
    quote: "The AI matchmaking and content moderation features saved us months of development. Appscrip's platform gave us a 2-year head start over building from scratch.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, DesiHearts",
    rating: 5.0,
    quote: "Appscrip helped us go from idea to launch in under 6 weeks. The white-label solution was incredibly flexible and their team understood exactly what our South Asian community needed.",
  },
];

const FounderReviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            See how companies like yours used Appscrip's app platform to help them achieve their business goals
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Card */}
          <div className="flex-1 relative pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border-2 border-primary/20 bg-card p-8 md:p-12 text-center relative"
              >
                {/* Speech bubble tail */}
                <div className="absolute -bottom-[17px] left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 border-r-2 border-b-2 border-primary/20 bg-card rotate-45" />
                </div>

                {/* Rating */}
                <p className="text-2xl font-bold text-foreground mb-2">{t.rating.toFixed(1)}</p>
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed text-base md:text-lg italic max-w-xl mx-auto">
                  "{t.quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Author — below the card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-10"
          >
            <p className="font-bold text-foreground text-lg">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderReviews;
