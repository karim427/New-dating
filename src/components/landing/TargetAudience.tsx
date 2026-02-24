import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building2, Users, Briefcase, Heart } from "lucide-react";

const segments = [
  { icon: Rocket, title: "Entrepreneurs", desc: "Launch a new dating app startup with zero technical overhead" },
  { icon: TrendingUp, title: "Existing Platforms", desc: "Scale your dating platform with better tech and full control" },
  { icon: Building2, title: "Matchmaking Businesses", desc: "Enter the matchmaking industry with a proven technology stack" },
  { icon: Users, title: "Community Builders", desc: "Build private networks for niche communities and interest groups" },
  { icon: Briefcase, title: "Agencies", desc: "Launch white-label dating products for your clients" },
  { icon: Heart, title: "Niche Markets", desc: "Create specialized apps for underserved dating demographics" },
];

const useCases = [
  "Dating App for Seniors",
  
  "Matrimony Platform",
  "LGBTQ+ Dating App",
  "Professional Dating",
  "Disability-Friendly Dating",
  "Niche Community Apps",
  "Regional Dating Platforms",
];

const TargetAudience = () => {
  return (
    <section className="py-14 lg:py-16 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Who Is This For</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 text-section-dark-foreground">
            Built for Visionaries Who Want to{" "}
            <span className="gradient-text">Own Their Platform</span>
          </h2>
          <p className="text-lg text-section-dark-foreground/60">
            Whether you're launching your first app or scaling an existing platform, our white-label dating solution adapts to your business model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-section-dark-foreground/10 hover:border-primary/30 bg-section-dark-foreground/5 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <segment.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-section-dark-foreground mb-2">{segment.title}</h3>
              <p className="text-sm text-section-dark-foreground/60">{segment.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases as Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-section-dark-foreground mb-6">Popular Use Cases</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="px-4 py-2 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 transition-colors cursor-default"
              >
                {useCase}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;