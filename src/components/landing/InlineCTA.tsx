import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface InlineCTAProps {
  title?: string;
  subtitle?: string;
}

const InlineCTA = ({
  title = "Ready to Launch Your Dating Platform?",
  subtitle = "Book a free consultation with our team and get a personalized demo.",
}: InlineCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-10 lg:py-12"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="gradient-primary rounded-2xl p-8 lg:p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold rounded-full"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline-light"
              className="rounded-full"
            >
              <Phone className="w-4 h-4" /> Talk to Expert
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InlineCTA;
