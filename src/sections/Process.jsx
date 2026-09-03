import { motion } from "framer-motion";

function Process() {
  const steps = [
    {
      number: "01",
      title: "DISCUSS",
      description:
        "We understand your space, requirements, preferences and vision before beginning the work.",
    },
    {
      number: "02",
      title: "DESIGN",
      description:
        "Your ideas are shaped into a ceiling design that complements the character of your interior.",
    },
    {
      number: "03",
      title: "CRAFT",
      description:
        "Our team brings the design to life with careful execution and attention to detail.",
    },
    {
      number: "04",
      title: "FINISH",
      description:
        "Every detail is completed with care to achieve a clean and refined final result.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#f4f1eb] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs tracking-[0.3em] text-[#a58b5b]"
            >
              OUR PROCESS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl"
            >
              FROM IDEA
              <br />
              TO FINISH.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-md text-sm leading-7 text-[#77736c] md:justify-self-end"
          >
            A simple, focused process designed to turn your vision into a
            beautifully finished space.
          </motion.p>

        </div>

        {/* STEPS */}
        <div className="mt-20 border-t border-[#171717]/15">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group border-b border-[#171717]/15"
            >
              <div className="grid gap-6 py-8 md:grid-cols-12 md:items-center md:py-10">

                {/* NUMBER */}
                <div className="md:col-span-2">
                  <span className="text-xs tracking-[0.2em] text-[#a58b5b]">
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="md:col-span-4">
                  <h3 className="text-4xl transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                    {step.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-5">
                  <p className="max-w-lg text-sm leading-7 text-[#77736c]">
                    {step.description}
                  </p>
                </div>

                {/* ARROW */}
                <div className="hidden justify-self-end md:col-span-1 md:block">
                  <span className="text-xl text-[#77736c] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#a58b5b]">
                    →
                  </span>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;