import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sparkles, ArrowRight, HeartHandshake,
  ShieldCheck, BotMessageSquare, ScanFace, Settings2,
} from "lucide-react";
import { useRef, useState } from "react";

const aiFeatures = [
  { icon: BotMessageSquare, title: "AI Chatbots / Intelligent Assistants", desc: "An AI-powered assistant guides users through their journey by suggesting matches, helping with conversations, and improving overall engagement on the platform.", stat: "+45% replies" },
  { icon: HeartHandshake, title: "Advanced AI Matchmaking Engine", desc: "AI analyzes user behavior, preferences, and interactions to deliver highly compatible matches, improving match quality and increasing meaningful connections.", stat: "3x matches" },
  { icon: Settings2, title: "AI Personalization Engine", desc: "AI continuously learns from user activity to personalize match feeds, recommendations, and interactions, creating a more relevant and engaging experience.", stat: "+35% retention" },
  { icon: ScanFace, title: "AI Profile Analysis", desc: "AI evaluates profile photos, bios, and activity to provide insights and suggestions, helping users create more attractive profiles and improve match success.", stat: "+60% engagement" },
  { icon: ShieldCheck, title: "AI Fraud Detection", desc: "AI identifies fake profiles and suspicious behavior using real-time pattern analysis, helping maintain authenticity and build user trust.", stat: "Real-time" },
];

const AISection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  return (
    <section className="py-14 lg:py-16 section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
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

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {aiFeatures.map((feature) => (
              <div
                key={feature.title}
                className="min-w-[260px] max-w-[260px] snap-start flex-shrink-0 rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-section-dark-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-section-dark-foreground/50 mb-4">{feature.desc}</p>
                <p className="text-lg font-extrabold gradient-text">{feature.stat}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-section-dark-foreground/60 mb-4 text-sm">
            Ready to launch your AI-powered dating platform?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card/50 border-border/50 text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus-visible:ring-primary h-12"
            />
            <Button variant="gradient" size="lg" className="rounded-full whitespace-nowrap">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
