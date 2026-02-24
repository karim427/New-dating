import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Coins, MessageCircle, Megaphone, RefreshCw, Timer, ArrowRight
} from "lucide-react";

const revenueStreams = [
  { icon: Coins, title: "Earn money via coins", desc: "Exchange virtual gifts using coins in our Tinder clone. Each time a gift is sent, the app earns a commission." },
  { icon: MessageCircle, title: "Chat commissions", desc: "Let users unlock chats with unmatched profiles by spending coins. These interactions earn commission and engage users." },
  { icon: Megaphone, title: "In-app advertisements", desc: "Monetize with third-party ads and earn commission from clicks, views, or referrals in your dating app." },
  { icon: RefreshCw, title: "Subscription & paid plans", desc: "Offer paid plans with premium features: advanced filters, video profiles, more daily matches, and exclusive tools." },
  { icon: Timer, title: "Setup paid speed dating events", desc: "Host hour-long speed dating events where users spend coins to join, boosting engagement and revenue." },
];

const MonetizationSection = () => {
  return (
    <section className="py-14 lg:py-16 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 text-section-dark-foreground">
            How to Monetize Your <span className="gradient-text">White Label Dating App</span>
          </h2>
          <p className="text-lg text-section-dark-foreground/60">
            Our white label dating app is equipped with flexible features that help you generate revenue and grow your dating platform
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {revenueStreams.slice(0, 3).map((stream, i) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <stream.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-section-dark-foreground mb-3">{stream.title}</h3>
                <p className="text-sm text-section-dark-foreground/55 leading-relaxed">{stream.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {revenueStreams.slice(3).map((stream, i) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.08 }}
                className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <stream.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-section-dark-foreground mb-3">{stream.title}</h3>
                <p className="text-sm text-section-dark-foreground/55 leading-relaxed">{stream.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MonetizationSection;
