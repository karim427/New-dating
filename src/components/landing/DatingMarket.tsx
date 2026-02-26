import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Globe, DollarSign, Check, X, FileDown } from "lucide-react";
import worldMapBg from "@/assets/world-map-bg.png";

const marketStats = [
  { icon: DollarSign, value: "$12.3B", label: "Global Market Size (2026)" },
  { icon: Users, value: "380M+", label: "Dating App Users Worldwide" },
  { icon: TrendingUp, value: "14.2%", label: "YoY Growth Rate" },
  { icon: Globe, value: "60+", label: "Countries with High Adoption" },
];

const DatingMarket = () => {
  return (
    <section className="py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Top: Heading + Intro + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Market Opportunity</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
              What is a <span className="gradient-text">White Label Dating App?</span> Why Launch One Now?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A white label dating app is a ready-to-deploy, fully customizable platform that allows businesses to launch their own branded dating application without building from scratch. It comes with essential features like intelligent matchmaking, advanced filters, real-time messaging, and secure user verification — all tailored to your brand and audience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With full source code ownership and customization flexibility, you can adapt the platform for niche communities, regional markets, or specialized dating experiences. As the global online dating market continues to expand rapidly, now is the perfect time to launch a scalable dating platform and capture a share of this growing opportunity.
            </p>
            <Button variant="gradient" size="lg" className="rounded-full">
              <FileDown className="w-4 h-4" /> Claim Your Free Market Report
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative grid grid-cols-2 gap-4 rounded-2xl overflow-hidden"
          >
            {/* World map background - larger so it's visible behind cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <img
                src={worldMapBg}
                alt=""
                aria-hidden="true"
                className="min-w-[180%] min-h-[180%] w-[180%] h-[180%] object-contain opacity-60 grayscale"
              />
            </div>
            {marketStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative rounded-2xl border border-primary/20 bg-white/10 dark:bg-black/10 backdrop-blur-md p-6 text-center hover:border-primary/40 hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DatingMarket;
