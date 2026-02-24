import { motion } from "framer-motion";

// Back-End
import nodejs from "@/assets/tech/nodejs.png";
import python from "@/assets/tech/python.png";
import go from "@/assets/tech/go.png";

// Database
import redis from "@/assets/tech/redis.png";
import mongodb from "@/assets/tech/mongodb.png";
import elasticsearch from "@/assets/tech/elasticsearch.png";

// Mobile
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
      { name: "MongoDB", logo: mongodb },
      { name: "Redis", logo: redis },
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
    <section className="py-14 bg-[#efefef]">
      <div className="max-w-[1500px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tech Stack
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Cutting-edge technologies powering our dating app platform
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {techStack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative rounded-2xl bg-[#f6f6f6] border border-white shadow-sm px-6 pt-12 pb-8 min-h-[190px]"
            >
              {/* Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#e9e9e9] border border-white">
                <h3 className="text-lg font-semibold whitespace-nowrap">
                  {item.category}
                </h3>
              </div>

              {/* Logos */}
              <div className="flex items-center justify-between gap-6">
                {item.technologies.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.logo}
                    alt={tech.name}
                    className="h-10 md:h-12 w-auto object-contain"
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
