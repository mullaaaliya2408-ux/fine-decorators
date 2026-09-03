import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] px-6 py-16 text-[#f4f1eb] md:px-16 md:py-20">
      <div className="mx-auto max-w-[1500px]">

        {/* TOP */}
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6"
          >
            <p className="text-sm font-semibold tracking-[0.25em]">
              FINE DECORATORS
            </p>

            <h2 className="mt-8 max-w-2xl text-4xl leading-tight md:text-6xl">
              WHERE CEILINGS
              <br />
              BECOME A STATEMENT.
            </h2>
          </motion.div>

          {/* NAVIGATION */}
          <div className="md:col-span-3">
            <p className="mb-6 text-[10px] tracking-[0.2em] text-[#a58b5b]">
              NAVIGATION
            </p>

            <nav className="flex flex-col items-start gap-4 text-xs text-white/60">
              <a className="transition-colors hover:text-white" href="#home">
                Home
              </a>

              <a className="transition-colors hover:text-white" href="#about">
                About
              </a>

              <a className="transition-colors hover:text-white" href="#work">
                Our Work
              </a>

              <a className="transition-colors hover:text-white" href="#services">
                Services
              </a>

              <a className="transition-colors hover:text-white" href="#experience">
                Experience
              </a>

              <a className="transition-colors hover:text-white" href="#team">
                Our Team
              </a>

              <a className="transition-colors hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3">
            <p className="mb-6 text-[10px] tracking-[0.2em] text-[#a58b5b]">
              CONTACT
            </p>

            <div className="space-y-4 text-xs text-white/60">
              <a
  href="tel:+918726446227"
  className="mt-2 block text-sm transition-colors duration-300 hover:text-[#a58b5b]"
>
  +91 8726446227
</a>
              <a
  href="mailto:finedecorators397@gmail.com"
  className="transition-colors duration-300 hover:text-white"
>
  finedecorators397@gmail.com
</a>
              <p>[LOCATION]</p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-4 border border-white/20 px-5 py-3 text-[10px] tracking-[0.15em] transition-all duration-300 hover:border-[#a58b5b] hover:bg-[#a58b5b] hover:text-white"
            >
              GET A FREE QUOTE
              <span>→</span>
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 pt-8 text-[10px] tracking-[0.12em] text-white/30 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} FINE DECORATORS. ALL RIGHTS RESERVED.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-3 self-start transition-colors hover:text-white md:self-auto"
          >
            BACK TO TOP
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;