import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f4f1eb] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="grid gap-10 md:grid-cols-2 md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs tracking-[0.3em] text-[#a58b5b]"
            >
              LET'S CREATE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl leading-[0.95] tracking-[-0.03em] md:text-8xl"
            >
              HAVE A SPACE
              <br />
              IN MIND?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-md text-sm leading-7 text-[#77736c] md:justify-self-end"
          >
            Tell us about your project and let’s discuss how we can transform
            your space.
          </motion.p>

        </div>

        {/* CONTACT CONTENT */}
        <div className="mt-20 grid gap-16 border-t border-[#171717]/15 pt-12 md:grid-cols-12">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4"
          >
            <p className="text-xs tracking-[0.2em] text-[#a58b5b]">
              GET IN TOUCH
            </p>

            <div className="mt-8 space-y-7">

              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#77736c]">
                  PHONE
                </p>
                <a
  href="tel:+918726446227"
  className="mt-2 block text-sm transition-colors duration-300 hover:text-[#a58b5b]"
>
  +91 8726446227
</a>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#77736c]">
                  EMAIL
                </p>
                <a
  href="mailto:finedecorators397@gmail.com"
  className="mt-2 block text-sm transition-colors duration-300 hover:text-[#a58b5b]"
>
  finedecorators397@gmail.com
</a>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#77736c]">
                  LOCATION
                </p>
                <p className="mt-2 text-sm">
                  [LOCATION]
                </p>
              </div>

            </div>

            {/* DIRECT CONTACT */}
            <div className="mt-12 flex flex-wrap gap-3">

              <a
                href="tel:[PHONE NUMBER]"
                className="border border-[#171717]/30 px-5 py-3 text-[10px] font-medium tracking-[0.15em] transition-all duration-300 hover:bg-[#171717] hover:text-[#f4f1eb]"
              >
                CALL US
              </a>

              <a
                href="#"
                className="border border-[#171717]/30 px-5 py-3 text-[10px] font-medium tracking-[0.15em] transition-all duration-300 hover:bg-[#a58b5b] hover:text-white"
              >
                WHATSAPP
              </a>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8"
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="grid gap-8 md:grid-cols-2">

              {/* NAME */}
              <div className="border-b border-[#171717]/25">
                <label className="block pb-3 text-[10px] tracking-[0.15em] text-[#77736c]">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent pb-4 text-sm outline-none placeholder:text-[#77736c]/50"
                />
              </div>

              {/* PHONE */}
              <div className="border-b border-[#171717]/25">
                <label className="block pb-3 text-[10px] tracking-[0.15em] text-[#77736c]">
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent pb-4 text-sm outline-none placeholder:text-[#77736c]/50"
                />
              </div>

              {/* EMAIL */}
              <div className="border-b border-[#171717]/25">
                <label className="block pb-3 text-[10px] tracking-[0.15em] text-[#77736c]">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent pb-4 text-sm outline-none placeholder:text-[#77736c]/50"
                />
              </div>

              {/* PROJECT TYPE */}
              <div className="border-b border-[#171717]/25">
                <label className="block pb-3 text-[10px] tracking-[0.15em] text-[#77736c]">
                  PROJECT TYPE
                </label>

                <select
                  defaultValue=""
                  className="w-full bg-transparent pb-4 text-sm outline-none"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>

            </div>

            {/* MESSAGE */}
            <div className="mt-10 border-b border-[#171717]/25">
              <label className="block pb-3 text-[10px] tracking-[0.15em] text-[#77736c]">
                TELL US ABOUT YOUR PROJECT
              </label>

              <textarea
                rows="4"
                placeholder="Tell us what you have in mind..."
                className="w-full resize-none bg-transparent pb-4 text-sm outline-none placeholder:text-[#77736c]/50"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group mt-10 inline-flex items-center gap-5 bg-[#171717] px-7 py-4 text-xs font-medium tracking-[0.15em] text-[#f4f1eb] transition-all duration-500 hover:bg-[#a58b5b]"
            >
              REQUEST A QUOTE

              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;