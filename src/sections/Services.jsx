import { motion } from "framer-motion";
import { services } from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="bg-[#171717] px-6 py-24 text-[#f4f1eb] md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs tracking-[0.3em] text-[#a58b5b]"
            >
              WHAT WE DO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl leading-none md:text-8xl"
            >
              OUR
              <br />
              SERVICES
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-md text-sm leading-7 text-white/55 md:justify-self-end"
          >
            From the first design concept to the final finish, Fine Decorators
            delivers carefully executed ceiling solutions for spaces of every
            scale.
          </motion.p>

        </div>

        {/* SERVICES */}
        <div className="border-t border-white/15">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="group border-b border-white/15"
            >
              <div className="flex items-center gap-5 py-7 md:py-9">

                {/* NUMBER */}
                <span className="w-10 shrink-0 text-xs tracking-[0.15em] text-[#a58b5b]">
                  {service.number}
                </span>

                {/* TITLE + DESCRIPTION */}
                <div className="flex-1">

                  <h3 className="text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {service.title}
                  </h3>

                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pt-3 text-sm leading-7 text-white/50">
                        {service.description}
                      </p>
                    </div>
                  </div>

                </div>

                {/* ARROW */}
                <span className="text-xl text-white/50 transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#d8c7a5]">
                  →
                </span>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;