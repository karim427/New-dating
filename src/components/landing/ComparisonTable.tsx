import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonRows = [
  { feature: "Product Ownership", whiteLabel: "Full — yours forever", saas: "None — rented access" },
  { feature: "Source Code Access", whiteLabel: "Complete source code", saas: "No access" },
  { feature: "Customization", whiteLabel: "Unlimited — any feature", saas: "Limited templates only" },
  { feature: "Monthly License Fees", whiteLabel: "None after purchase", saas: "Ongoing forever" },
  { feature: "Investor Readiness", whiteLabel: "High — own your IP", saas: "Low — no ownership" },
  { feature: "User Data Control", whiteLabel: "Full control & ownership", saas: "Vendor controlled" },
  { feature: "Scalability Cost", whiteLabel: "Fixed infrastructure", saas: "Increases with users" },
  { feature: "Branding", whiteLabel: "100% your brand", saas: "Platform branding visible" },
  { feature: "Feature Development", whiteLabel: "Build anything custom", saas: "Wait for vendor roadmap" },
  { feature: "Vendor Lock-in", whiteLabel: "Zero lock-in", saas: "High dependency" },
];

const ComparisonTable = () => {
  return (
    <section className="py-14 lg:py-16 bg-background" id="comparison">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Head-to-Head Comparison</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            White Label vs SaaS:{" "}
            <span className="gradient-text">The Clear Winner</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See exactly why serious dating app entrepreneurs choose white label over SaaS platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-muted-foreground border-b border-border">Feature</th>
                <th className="p-4 text-center border-b border-border">
                  <div className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold">
                    ✓ White Label
                  </div>
                </th>
                <th className="p-4 text-center border-b border-border">
                  <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-lg text-sm font-bold">
                    ✗ SaaS
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 font-medium text-sm">{row.feature}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{row.whiteLabel}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{row.saas}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center mt-10">
          <Button variant="gradient" size="lg">
            Choose White Label — Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;