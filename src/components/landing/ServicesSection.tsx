import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  RefreshCw, Upload, Paintbrush, TrendingUp,
  AppWindow, CheckCircle, FileCheck, Globe, ArrowRight
} from "lucide-react";

const migrationFeatures = [
  { icon: Upload, title: "User Data Migration", desc: "Seamlessly transfer user profiles, messages, and match history" },
  { icon: TrendingUp, title: "Activation Campaigns", desc: "Re-engage existing users with targeted campaigns post-migration" },
  { icon: Paintbrush, title: "UI Redesign", desc: "Modernize your platform's look and feel with current design trends" },
  { icon: RefreshCw, title: "Performance Improvements", desc: "Optimize loading times, reduce crashes, and improve stability" },
];

const appStoreSteps = [
  { icon: FileCheck, title: "App Store Submission", desc: "We handle the complete submission process for iOS App Store and Google Play" },
  { icon: CheckCircle, title: "Review Cycle Support", desc: "Dedicated team to address app review feedback and resolve rejections" },
  { icon: Globe, title: "Compliance Guidance", desc: "Ensure your app meets all platform policies and regional regulations" },
  { icon: AppWindow, title: "Web Deployment", desc: "Alternative progressive web app deployment for wider reach" },
];

const ServicesSection = () => {
  return (
    <section className="py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Migration Services */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Migration Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-5">
              Revive & Migrate Your{" "}
              <span className="gradient-text">Existing Platform</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Already have a dating app? We'll migrate your users, modernize your technology, and revitalize your platform — without losing a single user.
            </p>
            <div className="space-y-6">
              {migrationFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Your Old Platform</div>
                    <div className="font-bold">Outdated • Slow • Limited</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-8 h-16 flex flex-col items-center justify-center">
                    <div className="w-0.5 h-full gradient-primary" />
                    <RefreshCw className="w-5 h-5 text-primary my-2" />
                    <div className="w-0.5 h-full gradient-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium">Your New Platform</div>
                    <div className="font-bold">Modern • Fast • Scalable</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* App Store Launch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Launch Support</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-5">
            App Store Launch &{" "}
            <span className="gradient-text">Compliance Support</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just build your app — we help you get it live. From submission to approval, our team guides you through every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {appStoreSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="gradient" size="lg">
            Start Your Launch Journey <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;