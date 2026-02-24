import { motion } from "framer-motion";

const techStack = [
  {
    category: "Back-End",
    technologies: ["Node.js", "Python", "Go"],
  },
  {
    category: "Database",
    technologies: ["MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Mobile Apps",
    technologies: ["Swift", "Java", "Kotlin"],
  },
];

const TechCustomization = () => {
  return (
    <section className="py-14 bg-[#efefef]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tech Stack
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Cutting-edge technologies powering our dating app platform
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {techStack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative bg-white rounded-2xl border border-[#e5e7eb] px-6 pt-12 pb-8 min-h-[170px] shadow-sm"
            >
              {/* Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#f3f4f6] rounded-full border text-sm font-semibold">
                {item.category}
              </div>

              {/* Tech Pills */}
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {item.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </div>
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
