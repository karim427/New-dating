import { motion } from "framer-motion";

// 🔹 Back-End
import nodejs from "@/assets/tech/nodejs.png";
import python from "@/assets/tech/python.png";
import go from "@/assets/tech/go.png";

// 🔹 Database
import redis from "@/assets/tech/redis.png";
import mongodb from "@/assets/tech/mongodb.png";
import elasticsearch from "@/assets/tech/elasticsearch.png";

// 🔹 Mobile
import swift from "@/assets/tech/swift.png";
import java from "@/assets/tech/java.png";
import kotlin from "@/assets/tech/kotlin.png";

const techStack = [
  {
    category: "Back-End",
    technologies: [
      { name: "Node.js", logo: nodejs },
      { name: "Python", logo: python },
      { name: "Go", logo: go },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "Redis", logo: redis },
      { name: "MongoDB", logo: mongodb },
      { name: "Elasticsearch", logo: elasticsearch },
    ],
  },
  {
    category: "Mobile Apps",
    technologies: [
      { name: "Swift", logo: swift },
      { name: "Java", logo: java },
      { name: "Kotlin", logo: kotlin },
    ],
  },
];

const TechCustomization = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#eeeeee]">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-foreground">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-foreground/65">
            Cutting-edge technologies powering our dating app platform
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {techStack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl bg-[#f5f5f5] border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] px-8 md:px-10 pt-16 pb-10 min-h-[260px] flex items-center"
            >
              {/* Category Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 min-w-[230px] px-8 py-3 rounded-[22px] bg-[#e9e9e9] border border-white/90">
                <h3 className="text-[22px] md:text-[24px] font-semibold text-center text-foreground leading-none whitespace-nowrap">
                  {item.category}
                </h3>
              </div>

              {/* Logos */}
              <div className="flex items-center justify-center gap-10 md:gap-14 w-full">
                {item.technologies.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.logo}
                    alt={tech.name}
                    className="h-14 md:h-16 w-auto object-contain"
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCustomization;
