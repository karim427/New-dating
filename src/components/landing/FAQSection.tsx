import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a white label dating app?",
    a: "A white label dating app is a pre-built platform that businesses can customize with their own branding, features, and user experience. It allows you to launch your own dating app quickly without building everything from scratch, reducing development time and cost.",
  },
  {
    q: "How much does it cost to build a white label dating app?",
    a: "Building a dating app from scratch typically costs between $25,000 and $80,000, depending on features, platforms, and integrations. Costs often increase further as new features are added during development.\n\nWith Appscrip, a white label dating app starts from $3000 per month. Since the core platform is already built, you can launch faster while focusing on customization, branding, and scaling your platform as you grow.",
  },
  {
    q: "How long does it take to launch a white label dating app?",
    a: "Developing a dating app from scratch usually takes 3 to 6 months, including development, testing, and deployment. This often delays market entry and increases overall costs.\n\nAppscrip delivers a ready-to-launch white label dating app in 45 days. The platform is already tested, so the timeline focuses on customization, setup, and going live.",
  },
  {
    q: "What features should a white label dating app have?",
    a: "A white label dating app should include core features such as user profiles, swipe-based matching, chat, video calls, subscription plans, payment integration, and an admin dashboard. Advanced features like AI matchmaking, fraud detection, and personalization can improve user engagement and retention.",
  },
  {
    q: "How do white label dating apps make money?",
    a: "White label dating apps generate revenue through subscriptions, in-app purchases, ads, premium features, and virtual gifts. Monetization strategies can be customized based on your target audience and business model.",
  },
  {
    q: "Is a white label dating app profitable?",
    a: "Yes, a white label dating app can be highly profitable when combined with the right monetization strategy and user acquisition plan. With features like subscriptions, paid messaging, and virtual gifting, many dating platforms generate recurring revenue while keeping operational costs low.",
  },
  {
    q: "Why should I choose Appscrip for a white label dating app?",
    a: "Appscrip offers a ready-to-launch white label dating app that can be deployed in 45 days, with full customization and ownership of the source code. This allows you to scale, modify, and operate your platform without dependency on a vendor.\n\nAppscrip has experience building large-scale marketplace platforms, giving you a proven foundation to launch and grow your dating app business.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-14 lg:py-16 bg-background" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5 text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.a.split("\n\n").map((paragraph, j) => (
                    <p key={j} className={j > 0 ? "mt-3" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
