import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-14 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/10" />

      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Ready to Launch Your Product?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Book a free consultation with our team and get a personalized demo of your own branded dating platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold rounded-full"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline-light" size="xl" className="rounded-full">
              Get Pricing
            </Button>
            <Button variant="outline-light" size="xl" className="rounded-full">
              <Phone className="w-5 h-5" /> Talk to Expert
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-primary-foreground/60 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <span>sales@appscrip.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (800) 123-4567</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
