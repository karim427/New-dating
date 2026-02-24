import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Phone, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import demoVideoThumbnail from "@/assets/images/demo-video-thumbnail.png";
import { useRef } from "react";

const trustBadges = [
"100% White Label",
"Full Source Code Ownership",
"Launch in Weeks"];


const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden" style={{ backgroundColor: 'hsl(340 100% 96%)' }}>
      {/* Parallax background blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/8 blur-[200px]" />
        <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] rounded-full bg-primary/6 blur-[100px]" />
      </motion.div>

      <motion.div style={{ y: contentY, opacity }} className="relative container mx-auto px-4 lg:px-8 pt-28 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">White Label Dating App</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-8 text-section-dark-foreground tracking-tight">
            Launch Your <span className="gradient-text italic">AI-Powered</span>
            <br className="hidden md:block" />
            White Label Dating App in 60 Days
          </h1>

          <p className="text-lg md:text-xl text-section-dark-foreground/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Launch your own fully customizable dating platform with complete source code, IP ownership, and rapid deployment. Built for startups, entrepreneurs, and niche communities.
          </p>

          <div className="flex items-center justify-center gap-8 flex-wrap mb-12">
            {trustBadges.map((badge) =>
            <div key={badge} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-section-dark-foreground/60">{badge}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button variant="gradient" size="xl" className="rounded-full bg-black text-white hover:bg-black/90">
              Book a Free Demo <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline-light" size="xl" className="rounded-full bg-black text-white border-black hover:bg-black/90 hover:text-white">
              <Phone className="w-5 h-5" /> Talk to an Expert
            </Button>
          </div>

          {/* Trust Logos */}
          <div className="mb-16">
            <p className="text-sm text-section-dark-foreground/40 mb-6">
              Trusted by 500+ Clients. Featured in TechCrunch
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {/* GoodFirms */}
              <div className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-[#4285F4] flex items-center justify-center">
                    <span className="text-white font-bold text-[10px]">G</span>
                  </div>
                  <span className="font-bold text-section-dark-foreground text-sm">GoodFirms</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-section-dark-foreground/50">4.9/5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) =>
                    <Star key={i} className="w-3 h-3 fill-[#4285F4] text-[#4285F4]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Clutch */}
              <div className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="font-black text-section-dark-foreground text-lg leading-none">Clutch</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-section-dark-foreground/50">4.9/5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) =>
                    <Star key={i} className="w-3 h-3 fill-[#EF4444] text-[#EF4444]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Smart.Reviews */}
              <div className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="font-bold text-section-dark-foreground text-sm">Smart.Reviews</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-section-dark-foreground/50">4.9/5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) =>
                    <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto">

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-border/50">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-all" />
            <img
              src={demoVideoThumbnail}
              alt="White label dating app displayed on smartphones showing profile matching and discovery features"
              className="relative w-full h-auto rounded-2xl object-contain"
              loading="eager" />
          </div>
        </motion.div>
      </motion.div>
    </section>);

};

export default HeroSection;
