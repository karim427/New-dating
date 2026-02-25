import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Cell =
  | { type: "text"; value: string; label?: string }
  | { type: "price"; value: string; label: string }
  | { type: "check" | "cross"; value?: undefined; label?: undefined };

const rows: { feature: string; appscrip: Cell; custom: Cell }[] = [
  {
    feature: "Time to market",
    appscrip: { type: "text", value: "45 Days" },
    custom: { type: "text", value: "6 Months – 12 Months" },
  },
  {
    feature: "Cost to market",
    appscrip: { type: "price", value: "$3,000 PM", label: "Starts at" },
    custom: { type: "text", value: "$60,000 – $500K" },
  },
  {
    feature: "Other Custom Apps in the Market",
    appscrip: { type: "check" },
    custom: { type: "cross" },
  },
  {
    feature: "Pre-Build demos to test before you buy for free",
    appscrip: { type: "check" },
    custom: { type: "cross" },
  },
  {
    feature: "Pre-existing pluggable modules to extend product features",
    appscrip: { type: "check" },
    custom: { type: "cross" },
  },
];

const PricingSection = () => {
  return (
    <section className="py-14 lg:py-16 bg-background" id="pricing">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Price</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Our <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Feature-rich dating app clone at a price better than leading alternatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
                <th className="text-left p-5 text-sm font-semibold text-foreground border-b border-border w-2/5">
                  Features
                </th>
                <th className="p-5 text-center border-b border-border border-l w-[30%]">
                  <span className="text-sm font-bold text-foreground">Appscrip's <span className="gradient-text">White Label Dating App</span></span>
                </th>
                <th className="p-5 text-center border-b border-border border-l w-[30%]">
                  <span className="text-sm font-bold text-muted-foreground">Custom Development</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="p-5 text-sm text-foreground font-bold border-b border-border">
                    {row.feature}
                  </td>
                  <td className="p-5 text-center border-b border-border border-l">
                    {row.appscrip.type === "check" && (
                      <div className="flex justify-center">
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                    {row.appscrip.type === "cross" && (
                      <div className="flex justify-center">
                        <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-destructive" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                    {row.appscrip.type === "text" && (
                      <span className="text-sm font-bold text-foreground">{row.appscrip.value}</span>
                    )}
                    {row.appscrip.type === "price" && (
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-primary">{row.appscrip.label}</span>
                        <span className="text-lg font-extrabold text-foreground">{row.appscrip.value}</span>
                      </div>
                    )}
                  </td>
                  <td className="p-5 text-center border-b border-border border-l">
                    {row.custom.type === "check" && (
                      <div className="flex justify-center">
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                    {row.custom.type === "cross" && (
                      <div className="flex justify-center">
                        <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-destructive" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                    {row.custom.type === "text" && (
                      <span className="text-sm text-muted-foreground">{row.custom.value}</span>
                    )}
                    {row.custom.type === "price" && (
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">{row.custom.label}</span>
                        <span className="text-lg font-extrabold text-muted-foreground">{row.custom.value}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-5" />
                <td className="p-5 text-center border-l border-border">
                  <Button variant="gradient" size="lg" className="rounded-full w-full max-w-[200px]">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Button>
                </td>
                <td className="p-5 border-l border-border" />
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
