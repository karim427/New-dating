import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Rodriguez",
    role: "CEO, MatchConnect",
    text: "We launched our niche dating platform in just 6 weeks. The white-label solution gave us everything we needed — from swiping to monetization. Our user base grew to 50K in the first quarter.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder, EliteMeet",
    text: "Moving from a SaaS dating platform to Appscrip's white-label was the best decision. Full ownership, custom features, and the ability to raise funding with our own IP. Incredible value.",
    rating: 5,
  },
  {
    name: "Michael Okafor",
    role: "CTO, AfroConnect",
    text: "The technical architecture is solid. We're handling 200K+ users with no performance issues. The admin panel makes moderation a breeze. Highly recommend for serious dating app builders.",
    rating: 5,
  },
];

const logos = [
  "MatchConnect", "EliteMeet", "AfroConnect", "LoveNest",
  "DateCraft", "HeartLink", "CupidApp", "MinglePro",
];

const SocialProof = () => {
  return (
    <section className="py-14 lg:py-16 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Social Proof</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 text-section-dark-foreground">
            Trusted by <span className="gradient-text">Dating App Entrepreneurs</span> Worldwide
          </h2>
          <p className="text-lg text-section-dark-foreground/60">
            Join hundreds of successful dating platforms built on our white-label technology.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/5"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-sm text-section-dark-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="font-bold text-section-dark-foreground">{testimonial.name}</div>
                <div className="text-xs text-section-dark-foreground/50">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-section-dark-foreground/40 uppercase tracking-wider mb-6">
            Platforms Built With Our Technology
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 rounded-lg border border-section-dark-foreground/10 text-section-dark-foreground/30 font-bold text-lg"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;