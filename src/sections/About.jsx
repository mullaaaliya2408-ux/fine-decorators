import { motion } from "framer-motion";

import aboutImage from "../assets/hero.png";
import brickImage from "../assets/about/brick-detail.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#17130f] px-6 py-24 text-white md:px-12 md:py-28 lg:px-16"
    >
      {/* MOVING GRADIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[35%] animate-luxury-gradient bg-[radial-gradient(circle_at_18%_35%,rgba(185,145,90,0.32),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(238,200,140,0.20),transparent_25%),radial-gradient(circle_at_55%_80%,rgba(105,72,40,0.35),transparent_30%),linear-gradient(125deg,#0d0b09,#211810,#3a291b,#17120e)] bg-[length:140%_140%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-[10px] font-medium tracking-[0.35em] text-[#d8c7a5] md:text-xs"
        >
          ABOUT FINE DECORATORS
        </motion.p>

        {/* THREE COLUMN LAYOUT */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.75fr_1fr] lg:gap-10">

          {/* =========================
              TEXT
          ========================= */}
          <div className="flex flex-col justify-center">

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl leading-[0.94] tracking-[-0.035em] text-[#f5f0e8] sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[5rem]"
            >
              CRAFTED WITH
              <br />
              EXPERIENCE.
              <br />
              DESIGNED FOR
              <br />
              YOUR SPACE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="mt-10 max-w-md text-sm leading-7 text-white/60"
            >
              We believe every ceiling tells a story — of thoughtful design,
              precise execution, and timeless interiors.
            </motion.p>

            <motion.a
              href="#work"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.55,
                duration: 0.8,
              }}
              className="group mt-9 inline-flex w-fit items-center gap-5 border-b border-white/50 pb-3 text-[10px] font-medium tracking-[0.25em] transition-colors duration-300 hover:border-[#d8c7a5] hover:text-[#d8c7a5]"
            >
              DISCOVER OUR WORK

              <span className="text-base transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </motion.a>

          </div>

          {/* =========================
              BRICK IMAGE
          ========================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[650px] items-center justify-center overflow-hidden border border-white/15 bg-black/10 lg:min-h-[780px]"
          >
            {/* WHOLE IMAGE VISIBLE */}
            <motion.img
              src={brickImage}
              alt="Interior brick wall detail"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full object-contain"
            />

            {/* SUBTLE OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-black/5" />

            {/* LABEL */}
            <div className="absolute bottom-0 left-0 bg-[#17130f]/90 px-5 py-4 backdrop-blur-md">
              <p className="text-[9px] tracking-[0.22em] text-[#d8c7a5]">
                DETAILS MATTER
              </p>
            </div>
          </motion.div>

          {/* =========================
              LARGE IMAGE
          ========================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              clipPath: "inset(0 0 100% 0)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              clipPath: "inset(0 0 0% 0)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[650px] overflow-hidden border border-white/15 lg:min-h-[780px]"
          >
            <motion.img
              src={aboutImage}
              alt="Fine Decorators interior ceiling design"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

            <div className="absolute bottom-0 left-0 bg-[#17130f]/90 px-5 py-4 backdrop-blur-md">
              <p className="text-[10px] tracking-[0.22em] text-[#d8c7a5]">
                FINE DECORATORS
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="section-divider bg-white" />
    </section>
  );
}

export default About;