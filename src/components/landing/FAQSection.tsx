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
    a: "A white label dating app is a pre-built, fully functional dating platform that you can customize with your own branding, features, and design. Unlike SaaS solutions, you get complete source code ownership and IP rights, meaning you own the product entirely.",
  },
  {
    q: "How much does a white label dating app cost?",
    a: "The cost depends on your customization needs. Our white label solution starts at $3K, eliminating the need for building from scratch (which can cost $100K+). Contact us for a detailed quote based on your specific requirements.",
  },
  {
    q: "How quickly can I launch my dating app?",
    a: "With our white label solution, you can launch in 60–90 days. This includes platform setup, customization, branding, QA testing, and app store submission.",
  },
  {
    q: "Can I build a niche dating app with this solution?",
    a: "Absolutely. Our platform is designed for customization. Whether it's dating for seniors, professionals, specific religions, or communities — you can customize the matching logic, onboarding flow, profile fields, and monetization.",
  },
  {
    q: "Do I own the complete source code?",
    a: "Yes. You receive 100% of the source code with full IP ownership. You can modify, extend, and scale the platform independently. No ongoing license fees or vendor lock-in.",
  },
  {
    q: "Can I raise funding with a white label dating app?",
    a: "Yes. Since you own the complete source code and IP, your product is investor-ready. Full IP ownership significantly strengthens your funding position.",
  },
  {
    q: "What support do you provide after launch?",
    a: "We provide comprehensive post-launch support including bug fixes, performance monitoring, app store updates, feature enhancements, and user activation strategy guidance.",
  },
  {
    q: "What AI features are included?",
    a: "Our platform includes AI matchmaking, AI content moderation, AI icebreakers, fraud detection, smart recommendations, and AI-powered analytics — all built-in and ready to use.",
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
                  {faq.a}
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
