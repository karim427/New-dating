import { motion } from "framer-motion";
import {
  Sparkles, HeartHandshake,
  ShieldCheck, BotMessageSquare, ScanFace, Settings2,
} from "lucide-react";

const aiFeatures = [
  { icon: BotMessageSquare, title: "AI Assistance", desc: "An AI-powered assistant guides users through their journey by suggesting matches, helping with conversations, and improving overall engagement on the platform."},
  { icon: HeartHandshake, title: "Advanced AI Matchmaking", desc: "AI analyzes user behavior, preferences, and interactions to deliver highly compatible matches, improving match quality and increasing meaningful connections."},
  { icon: Settings2, title: "AI Personalization Engine", desc: "AI continuously learns from user activity to personalize match feeds, recommendations, and interactions, creating a more relevant and engaging experience."},
  { icon: ScanFace, title: "AI Profile Analysis", desc: "AI evaluates profile photos, bios, and activity to provide insights and suggestions, helping users create more attractive profiles and improve match success."},
  { icon: ShieldCheck, title: "AI Fraud Detection", desc: "AI identifies fake profiles and suspicious behavior using real-time pattern analysis, helping maintain authenticity and build user trust."},
];

const AISection = () => {
  return (
    <section className="py-14 lg:py-16 section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">AI-Powered Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 text-section-dark-foreground">
            AI Features That{" "}
            <span className="gradient-text">Set Us Apart</span>
          </h2>
          <p className="text-lg text-section-dark-foreground/50">
            Built AI-native from day one. Every feature designed to improve matches, safety, and engagement.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {aiFeatures.slice(0, 3).map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-section-dark-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-section-dark-foreground/55 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {aiFeatures.slice(3).map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.08 }}
                className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-section-dark-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-section-dark-foreground/55 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
