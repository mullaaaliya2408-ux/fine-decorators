import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#171717] px-6 py-24 text-[#f4f1eb] md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs tracking-[0.3em] text-[#a58b5b]"
            >
              CLIENT WORDS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl leading-[0.95] md:text-7xl"
            >
              WHAT OUR
              <br />
              CLIENTS SAY.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-md text-sm leading-7 text-white/50"
          >
            The spaces we create are ultimately about the people who live and
            work in them.
          </motion.p>

        </div>

        {/* TESTIMONIALS */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              className="flex min-h-[360px] flex-col justify-between border border-white/10 p-7 transition-colors duration-500 hover:border-[#a58b5b]/50 md:p-9"
            >

              {/* QUOTE MARK */}
              <span className="font-serif text-5xl leading-none text-[#a58b5b]">
                “
              </span>

              {/* QUOTE */}
              <p className="mt-8 font-serif text-xl leading-relaxed text-white/85 md:text-2xl">
                {testimonial.quote}
              </p>

              {/* CLIENT */}
              <div className="mt-10 border-t border-white/10 pt-5">

                <p className="text-xs font-medium tracking-[0.15em]">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-[10px] tracking-[0.15em] text-white/40">
                  {testimonial.project}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;