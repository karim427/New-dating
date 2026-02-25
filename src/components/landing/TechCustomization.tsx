import { motion } from "framer-motion";
import backendImg from "@/assets/tech/backend.webp";
import databaseImg from "@/assets/tech/database.webp";
import mobilestackImg from "@/assets/tech/mobilestack.webp";

const techImages = [
  { image: backendImg, alt: "Backend technologies" },
  { image: databaseImg, alt: "Database technologies" },
  { image: mobilestackImg, alt: "Mobile stack technologies" },
];

const TechCustomization = () => {
  return (
    <section className="py-14 lg:py-16 bg-[#efefef]">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-4 text-foreground">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-foreground/65">
            Cutting-edge technologies powering our white label dating platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techImages.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto max-h-[140px] md:max-h-[160px] object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCustomization;
