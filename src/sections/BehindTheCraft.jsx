import { motion } from "framer-motion";
import { behindTheCraft } from "../data/behindTheCraft";

function BehindTheCraft() {
  return (
    <section
      id="behind-the-craft"
      className="bg-[#f4f1eb] px-6 py-24 md:px-16 md:py-32"
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
              THE MAKING
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl leading-[0.95] tracking-[-0.03em] md:text-8xl"
            >
              BEHIND
              <br />
              THE CRAFT.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-md text-sm leading-7 text-[#77736c] md:justify-self-end"
          >
            A glimpse into the work behind our finished spaces — from the
            first framework to the final detail.
          </motion.p>
        </div>

        {/* PHOTO GRID */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {behindTheCraft.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: Math.min(index * 0.06, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden"
            >
              <div
                className={`overflow-hidden ${
                  index % 5 === 0
                    ? "aspect-[4/5]"
                    : index % 3 === 0
                      ? "aspect-[3/4]"
                      : "aspect-square"
                }`}
              >
                <img
                  src={item.image}
                  alt={`Fine Decorators behind the craft ${item.id}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.05]"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                {/* NUMBER */}
                <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-[10px] tracking-[0.2em] text-white">
                    {String(item.id).padStart(2, "0")}
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

export default BehindTheCraft;