import { motion } from "framer-motion";
import { company } from "../data/company";
import Counter from "../components/Counter";

function Experience() {
  const stats = [
    {
      value: company.yearsExperience,
      suffix: "+",
      label: "YEARS OF EXPERIENCE",
    },
    {
      value: company.projectsCompleted,
      suffix: "+",
      label: "PROJECTS COMPLETED",
    },
    {
      value: company.happyClients,
      suffix: "+",
      label: "HAPPY CLIENTS",
    },
    {
      value: company.quality,
      suffix: "%",
      label: "DEDICATION TO QUALITY",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#f4f1eb] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* INTRO */}
        <div className="grid gap-10 md:grid-cols-2 md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs tracking-[0.3em] text-[#a58b5b]"
            >
              EXPERIENCE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl"
            >
              BUILT ON EXPERIENCE.
              <br />
              DEFINED BY CRAFT.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-md text-sm leading-7 text-[#77736c] md:justify-self-end"
          >
            Every ceiling we create is shaped by careful planning, skilled
            workmanship and attention to the smallest details.
          </motion.p>

        </div>

        {/* STATISTICS */}
        <div className="mt-20 grid border-t border-[#171717]/15 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="border-b border-[#171717]/15 py-10 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-12 first:lg:pl-0 last:lg:border-r-0"
            >
              <div className="flex items-start">

                <span className="font-serif text-5xl leading-none md:text-7xl">
  <Counter
    value={stat.value}
    suffix={stat.value === null ? "" : stat.suffix}
  />
</span>

              </div>

              <p className="mt-5 text-[10px] tracking-[0.2em] text-[#77736c]">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;