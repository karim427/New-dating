import { motion } from "framer-motion";

const techStack = [
  {
    category: "Back-End",
    technologies: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      },
      {
        name: "Go",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      }
    ]
  },
  {
    category: "Database",
    technologies: [
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Elasticsearch",
        logo: "https://cdn.simpleicons.org/elasticsearch/005571",
      }
    ]
  },
  {
    category: "Mobile Apps",
    technologies: [
      {
        name: "Swift",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
      },
      {
        name: "Kotlin",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      }
    ]
  },
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
            Cutting-edge technologies shaping our cabify clone
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {techStack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl bg-[#f7f7f7] border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] px-6 md:px-8 pt-14 pb-6 min-h-[180px]"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 min-w-[230px] px-8 py-3 rounded-[22px] bg-[#ededed] border border-white/90">
                <h3 className="text-[24px] font-semibold text-center text-foreground leading-none whitespace-nowrap">{item.category}</h3>
              </div>
              <div className="flex items-center justify-between gap-4 md:gap-6 flex-nowrap whitespace-nowrap py-1">
                {item.technologies.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.logo}
                    alt={tech.name}
                    className={`${tech.name === "Elasticsearch" ? "h-11 md:h-14 max-w-[130px] md:max-w-[160px]" : "h-10 md:h-12 max-w-[110px] md:max-w-[140px]"} w-auto object-contain shrink-0`}
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
