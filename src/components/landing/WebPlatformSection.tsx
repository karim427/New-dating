import webplatformImg from "@/assets/images/web-platform.png";
import agencyportalImg from "@/assets/images/agency-portal.png";
import admimdashboardImg from "@/assets/images/admin-dashboard.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Users,
  Settings,
  Check,
  ArrowRight,
} from "lucide-react";

const platforms = [
  {
    badge: "Web Platform",
    title: "Progressive Web App — Full Dating Experience on Browser",
    desc: "A responsive, mobile-first web application that mirrors your native app experience. Users can discover matches, chat, and manage profiles from any browser.",
    icon: Globe,
    image: "src/assets/web-platform.png",
    features: [
      "Responsive design across all devices",
      "Real-time chat & notifications",
      "Profile discovery & matching",
      "Subscription & payment flows",
    ],
  },
  {
    badge: "Agency Portal",
    title: "Agency & Matchmaker Management Portal",
    desc: "A dedicated portal for professional matchmakers and agencies to manage clients, create curated introductions, and track success metrics.",
    icon: Users,
    image: "src/assets/agency-portal.png",
    features: [
      "Client profile management",
      "Manual match curation",
      "Communication tracking",
      "Revenue & commission dashboards",
    ],
  },
  {
    badge: "Admin Dashboard",
    title: "Powerful Admin Dashboard — Complete Platform Control",
    desc: "Full administrative control over users, content, subscriptions, analytics, and platform configuration.",
    icon: Settings,
    image: "src/assets/admin-dashboard.png",
    features: [
      "User management & moderation",
      "Revenue & subscription analytics",
      "Feature toggles & A/B testing",
      "Content moderation queue",
    ],
  },
];

const WebPlatformSection = () => {
  return (
    <section className="py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Beyond Mobile
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Everything You Need to{" "}
            <span className="gradient-text">Launch</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Web app, agency tools, and admin dashboard — all integrated and ready to deploy.
          </p>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-xs font-bold text-primary">
                    {platform.badge}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-foreground">
                  {platform.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {platform.desc}
                </p>

                <ul className="space-y-3">
                  {platform.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img
                    src={platform.image}
                    alt={platform.badge}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button variant="gradient" size="lg" className="rounded-full">
            See Full Platform Demo{" "}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebPlatformSection;