import { motion } from "framer-motion";
import { ArrowRight, Users, ShoppingBag, MessageSquare, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const similarProducts = [
  { icon: MessageSquare, title: "Social Networking App", desc: "Community-driven social platforms with feeds, groups, stories, and messaging.", link: "https://appscrip.com/tiktok-clone/" },
  { icon: Layers, title: "Community Apps", desc: "Private community platforms for interest groups, alumni networks, and professional circles.", link: "https://appscrip.com/onlyfans-clone/" },
  { icon: ShoppingBag, title: "Marketplace Platforms", desc: "Multi-vendor marketplace apps for products, services, or digital goods.", link: "https://appscrip.com/multivendor-ecommerce-marketplace/"  },
  { icon: Users, title: "On-Demand Services", desc: "Service marketplace apps connecting customers with providers in real-time.", link: "https://appscrip.com/on-demand-services-marketplace/" },
  { icon: MessageSquare, title: "Live Streaming Platform", desc: "Interactive live streaming apps with virtual gifting, chat, and audience tools.", link: "https://appscrip.com/live-streaming-platform" },
];

const CrossSellResources = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 lg:py-16 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-5 text-section-dark-foreground">
              Similar <span className="gradient-text">Products</span>
            </h2>
            <p className="text-lg text-section-dark-foreground/50">
              Expand your portfolio with proven white-label solutions for different verticals.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {similarProducts.map((product) => (
                <div key={product.title} className="min-w-[280px] max-w-[280px] snap-start flex-shrink-0">
                  <div className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2 text-section-dark-foreground text-sm flex-shrink-0">{product.title}</h3>
                    <p className="text-xs text-section-dark-foreground/45 flex-1 min-h-0">{product.desc}</p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-4 flex-shrink-0 self-start no-underline hover:no-underline hover:opacity-80 transition-opacity"
                    >
                      Learn More <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-6">
              <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors" aria-label="Scroll left">
                <ChevronLeft className="w-5 h-5 text-section-dark-foreground" />
              </button>
              <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors" aria-label="Scroll right">
                <ChevronRight className="w-5 h-5 text-section-dark-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrossSellResources;

