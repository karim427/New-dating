import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Server, Paintbrush, Rocket, TrendingUp, Check, User } from "lucide-react";

const steps = [
  {
    day: "Day 0",
    icon: MessageSquare,
    title: "Discovery Workshop",
    desc: "We run a focused workshop to understand your requirements, existing workflows, and scale targets. You walk away with a detailed roadmap for project execution and launch.",
    bullets: ["Deep-dive into your operations", "Map your shipper & carrier workflows", "Define customization requirements", "Propose execution roadmap & timeline"],
    cardTitle: "Workshop Agenda",
    cardItems: [
      { label: "Business Model & Workflows", done: true },
      { label: "Tech Requirements", done: true },
      { label: "Integration Mapping", num: 3 },
      { label: "Roadmap Sign-Off", num: 4 },
    ],
  },
  {
    day: "Day 15",
    icon: Server,
    title: "Pre-Built App on Dedicated Servers",
    desc: "Your production-ready white-label dating app is set up on dedicated servers. Start using the platform alongside your existing system to manage real operations immediately.",
    bullets: ["Dedicated server provisioning", "Database & API setup", "Push notifications & analytics", "CI/CD pipeline configuration"],
    cardTitle: "Deployment Status",
    cardItems: [
      { label: "Server Setup", done: true },
      { label: "App Deployment", done: true },
      { label: "Data Migration", num: 3 },
      { label: "User Setup", num: 4 },
    ],
  },
  {
    day: "Day 45",
    icon: Paintbrush,
    title: "Customize & White Label",
    desc: "We customize the platform to your exact workflows, apply your branding, and integrate with your existing tools. Your white-label dating app is ready to launch - your brand, your identity.",
    bullets: ["Apply your brand colors, logo & identity", "Customize workflows to match operations", "Integrate with existing tools & systems", "User acceptance testing"],
    cardTitle: "White Label Progress",
    cardItems: [
      { label: "Brand Assets Applied", done: true },
      { label: "Custom Workflows Configured", done: true },
      { label: "Third-Party Integrations", done: true },
      { label: "UAT Sign-Off", done: false },
    ],
  },
  {
    day: "Day 60",
    icon: Rocket,
    title: "Go Live on App Stores",
    desc: "Your branded native apps go live on the Apple App Store and Google Play Store. We handle the submission process and ensure a smooth launch.",
    bullets: ["App Store submission & review", "Google Play Store publishing", "Launch monitoring & support", "Post-launch optimization"],
    cardTitle: "Launch Checklist",
    cardItems: [
      { label: "App Store ", done: true },
      { label: "Play Store ", done: true },
    ]
  },
  {
    day: "Day 60+",
    icon: TrendingUp,
    title: "AI-First Marketing & Growth",
    desc: "Post-launch, we help you grow with AI-powered marketing tools, user acquisition strategies, and continuous optimization.",
    bullets: ["AI-powered user acquisition campaigns", "Retention campaigns & re-engagement strategies", "Marketplace growth analytics", "Ongoing platform optimization"],
    cardTitle: "Growth Metrics",
    cardItems: [
      { label: "User Acquisition Strategy", done: true },
      { label: "Retention Campaigns", done: true },
      { label: "Analytics & Insights", done: true },
      { label: "Feature Roadmap", done: true },
    ],
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="py-14 lg:py-16 bg-background" id="how-it-works">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">THE PROCESS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 text-foreground">
          From Idea to Launch in{" "}
            <span className="gradient-text">in 60 Days</span>
          </h2>
          <p className="text-lg text-muted-foreground">
          A proven process that takes you from idea to a live, branded dating app on the app stores - with AI-first marketing to grow your marketplace.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] border-t-2 border-dashed border-border" />
          <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-6 md:gap-0">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex flex-col items-center text-center relative z-10 group cursor-pointer flex-1"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    i === active
                      ? "bg-primary text-primary-foreground scale-110"
                      : "bg-card border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-primary"
                  }`}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-bold mt-3 transition-colors ${i === active ? "text-primary" : "text-muted-foreground"}`}>
                  {s.day}
                </span>
                <span className={`text-xs mt-1 max-w-[140px] transition-colors ${i === active ? "text-foreground" : "text-muted-foreground/60"}`}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-bold text-primary">{step.day}</span>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
              <ul className="space-y-3">
                {step.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="text-sm font-bold text-primary mb-5">{step.cardTitle}</h4>
              <div className="space-y-3">
                {step.cardItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                    {item.done ? (
                      <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {item.num}
                      </div>
                    )}
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;
