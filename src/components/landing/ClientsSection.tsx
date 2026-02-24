import { motion } from "framer-motion";
import fineMeAFreak from "@/assets/images/Fine-me-a-freak.webp";
import gogetter from "@/assets/images/Gogetter.webp";
import hookup from "@/assets/images/Hookup.webp";
import jewzz from "@/assets/images/Jewzz.webp";
import jewz from "@/assets/images/Jewz.webp";

const ClientsSection = () => {
  const clientLogos = [gogetter, fineMeAFreak, hookup, jewzz];

  return (
    <section className="py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Clients</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 text-foreground">
            From startups to market leaders — our clients are{" "}
            <span className="gradient-text">growing their dating apps quickly</span>
          </h2>
          <p className="text-lg text-muted-foreground italic">
            "From funded startups to unicorns — 100+ clients trust us.<br />
            Built to launch, scale, and succeed."
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={`${logo}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="transition-transform duration-300 hover:scale-105"
            >
              <img src={logo} alt="Client app logo" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

