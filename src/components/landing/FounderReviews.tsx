import { motion } from "framer-motion";
import { Star } from "lucide-react";

const metrics = [
  { value: "150+", label: "Apps Launched" },
  { value: "12+", label: "Years in Business" },
  { value: "4.8/5", label: "Clutch Rating" },
];

const testimonials = [
  {
    name: "Marvin Walker.",
    role: "Founder, Day Runner",
    country: "USA",
    flag: "🇺🇸",
    quote: "I’m thoroughly pleased with the job they did. They are highly competent, capable, and consistently exceed expectations. Their communication and app development process are seamless and easy.",
    rating: 5,
  },
  {
    name: "Alison Koenig.",
    role: "Founder, SalesPADDOCK",
    country: "UAE",
    flag: "🇦🇪",
    quote: "Working with Rahul was amazing—he really understood the concept of the app. The team even thought of improvements I hadn’t considered. Anyone who chooses them will have just as great an experience as I did.",
    rating: 5,
  },
  {
    name: "Alexi",
    role: "Founder, Loadsonar",
    country: "Singapore",
    flag: "🇸🇬",
    quote: "Working with Appscrip on a cargo shipping app has been great. Their responsive team and skilled developers made the process smooth and effective. I look forward to continuing our partnership!",
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
