import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/hero.png";

function Hero() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 900], [0, 120]);
  const imageScale = useTransform(scrollY, [0, 900], [1, 1.08]);
  const contentY = useTransform(scrollY, [0, 600], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden bg-[#0d0d0d]"
    >
      {/* HERO IMAGE */}
      <motion.img
        src={heroImage}
        alt="Fine Decorators ceiling design"
        style={{
          y: imageY,
          scale: imageScale,
        }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black/45"
      />

      {/* CONTENT */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 flex h-full items-end px-6 pb-20 md:px-16 md:pb-24"
      >
        <div className="max-w-[1100px] text-white">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-[#d8c7a5]"
          >
            FINE DECORATORS
          </motion.p>

          {/* HEADING */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.65,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-5xl leading-[0.92] tracking-[-0.04em] md:text-7xl lg:text-8xl"
            >
              WHERE CEILINGS
              <br />
              BECOME A STATEMENT.
            </motion.h1>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/70 md:text-base"
          >
            Precision-crafted POP and false ceiling solutions designed to
            transform ordinary spaces into remarkable interiors.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-4 border border-white/70 bg-black/20 px-6 py-4 text-xs font-medium tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-[#d8c7a5] hover:bg-[#a58b5b]/80"
            >
              EXPLORE OUR WORK

              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-4 border border-white/60 bg-transparent px-6 py-4 text-xs font-medium tracking-[0.15em] text-white transition-all duration-500 hover:border-[#d8c7a5] hover:bg-[#171717]/80"
            >
              GET A FREE QUOTE

              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
        className="absolute bottom-8 right-6 z-10 flex items-center gap-3 text-[9px] tracking-[0.2em] text-white/60 md:right-16"
      >
        SCROLL

        <span className="h-px w-12 bg-white/40" />

        <motion.span
          animate={{ x: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          →
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;