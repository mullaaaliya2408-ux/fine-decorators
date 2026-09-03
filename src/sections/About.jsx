import { motion } from "framer-motion";
import aboutImage from "../assets/hero.png";
import ImageReveal from "../components/ImageReveal";

function About() {
  return (
    <section
  id="about"
  className="relative bg-[#f4f1eb] px-6 py-24 md:px-16 md:py-32"
>
      <div className="mx-auto max-w-[1500px]">

        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-xs font-medium tracking-[0.3em] text-[#a58b5b]"
        >
          ABOUT FINE DECORATORS
        </motion.p>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* TEXT */}
          <div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl text-5xl leading-[0.98] tracking-[-0.03em] md:text-7xl"
            >
              CRAFTED WITH EXPERIENCE.
              <br />
              DESIGNED FOR YOUR SPACE.
            </motion.h2>

          <div className="relative overflow-hidden">
  <ImageReveal
    src={aboutImage}
    alt="Fine Decorators ceiling design and installation"
    className="aspect-[4/5] w-full"
    imageClassName="transition-transform duration-700 hover:scale-[1.03]"
  />

  <div className="absolute bottom-0 left-0 bg-[#f4f1eb] px-5 py-4">
    <p className="text-[10px] tracking-[0.2em] text-[#77736c]">
      FINE DECORATORS
    </p>
  </div>
</div>

            {/* LINK */}
            <motion.a
              href="#work"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#171717] pb-2 text-xs font-medium tracking-[0.18em]"
            >
              DISCOVER OUR WORK

              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </motion.a>

          </div>

          {/* IMAGE */}
          <motion.div
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0 0% 0)",
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden"
          >
            <motion.img
              src={aboutImage}
              alt="Fine Decorators ceiling design and installation"
              whileInView={{ scale: [1.08, 1] }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="aspect-[4/5] h-full w-full object-cover"
            />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-0 left-0 bg-[#f4f1eb] px-5 py-4">
              <p className="text-[10px] tracking-[0.2em] text-[#77736c]">
                FINE DECORATORS
              </p>
            </div>
          </motion.div>

        </div>

      </div>
      <div className="section-divider" />
    </section>
  );
}

export default About;