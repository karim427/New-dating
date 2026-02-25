import { motion } from "framer-motion";
import { Star } from "lucide-react";

const metrics = [
  { value: "150+", label: "Apps Launched" },
  { value: "12+", label: "Years in Business" },
  { value: "4.8/5", label: "Clutch Rating" },
];

const testimonials = [
  {
    name: "James K.",
    role: "Freight Aggregator",
    country: "USA",
    flag: "🇺🇸",
    quote: "We went from idea to live platform in under 90 days. Appscrip gave us a TMS that works exactly how our business operates.",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    role: "Fleet Operator",
    country: "UAE",
    flag: "🇦🇪",
    quote: "The source code ownership was the deciding factor. Appscrip was the only one that gave us a pre-built base we could fully own.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Logistics Startup",
    country: "Singapore",
    flag: "🇸🇬",
    quote: "I'm a non-tech founder. Their team understood our business first, then built the tech around it. Our driver app is a game-changer.",
    rating: 5,
  },
];

const FounderReviews = () => {
  return (
    <section className="py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Trusted Worldwide
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Powering Businesses Across Countries
          </h2>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {metrics.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-card border border-border/50 shadow-sm p-6 text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * (i + 2) }}
              className="rounded-2xl bg-card border border-border/50 shadow-sm p-6 text-left"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-amber-400 text-amber-400 flex-shrink-0"
                  />
                ))}
              </div>
              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Name */}
              <p className="font-bold text-foreground text-sm">{t.name}</p>
              {/* Role + Country + Flag */}
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                {t.role}, {t.country}
                <span className="text-base" aria-hidden>
                  {t.flag}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderReviews;
