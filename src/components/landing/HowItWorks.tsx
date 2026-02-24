import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Server, Paintbrush, Rocket, TrendingUp, Check } from "lucide-react";

const steps = [
  {
    day: "Day 0",
    icon: MessageSquare,
    title: "Discovery Workshop",
    desc: "We run a focused workshop to understand your requirements, existing workflows, and scale targets. You walk away with a detailed roadmap.",
    bullets: ["Deep-dive into your business model", "Map your user flows & monetization", "Define customization requirements", "Propose execution roadmap & timeline"],
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
    desc: "Your white-label dating app is deployed on dedicated servers with your own database, APIs, and infrastructure — fully isolated and production-ready.",
    bullets: ["Dedicated server provisioning", "Database & API setup", "Push notifications & analytics", "CI/CD pipeline configuration"],
    cardTitle: "Infrastructure Setup",
    cardItems: [
      { label: "Dedicated Servers", done: true },
      { label: "Database Cluster", done: true },
      { label: "API Gateway", num: 3 },
      { label: "Monitoring & Alerts", num: 4 },
    ],
  },
  {
    day: "Day 45",
    icon: Paintbrush,
    title: "Customize & White Label",
    desc: "Apply your brand identity — logos, colors, fonts, and custom features. We tailor the app to match your vision and target audience.",
    bullets: ["Brand identity & theme setup", "Custom feature configuration", "Localization & language support", "Payment gateway integration"],
    cardTitle: "Customization Checklist",
    cardItems: [
      { label: "Brand & Theme Applied", done: true },
      { label: "Features Configured", done: true },
      { label: "Payments Integrated", num: 3 },
      { label: "Localization Ready", num: 4 },
    ],
  },
  {
    day: "Day 60",
    icon: Rocket,
    title: "Go Live on App Stores",
    desc: "We handle the full submission process for both iOS and Android app stores, including compliance checks and launch optimization.",
    bullets: ["App Store & Play Store submission", "Compliance & policy review", "ASO metadata optimization", "Launch day monitoring"],
    cardTitle: "Launch Readiness",
    cardItems: [
      { label: "QA & Testing Complete", done: true },
      { label: "Store Submissions", done: true },
      { label: "Compliance Approved", num: 3 },
      { label: "Go-Live Checklist", num: 4 },
    ],
  },
  {
    day: "Day 60+",
    icon: TrendingUp,
    title: "AI-First Marketing & Growth",
    desc: "Post-launch, we help you grow with AI-powered marketing tools, user acquisition strategies, and continuous optimization.",
    bullets: ["AI-driven user acquisition", "Engagement & retention campaigns", "Performance analytics dashboard", "Ongoing feature updates"],
    cardTitle: "Growth Playbook",
    cardItems: [
      { label: "User Acquisition Strategy", done: true },
      { label: "Retention Campaigns", done: true },
      { label: "Analytics & Insights", num: 3 },
      { label: "Feature Roadmap", num: 4 },
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Your Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 text-foreground">
            From Idea to Launch — Your Dating App{" "}
            <span className="gradient-text">in 60 Days</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured process to turn your concept into a scalable, market-ready dating platform.
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
