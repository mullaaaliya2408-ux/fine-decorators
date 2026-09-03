import { motion } from "framer-motion";
import { team } from "../data/team";

function Team() {
  return (
    <section
      id="team"
      className="bg-[#171717] px-6 py-24 text-[#f4f1eb] md:px-16 md:py-32"
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
              THE PEOPLE
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
              MEET THE PEOPLE
              <br />
              BEHIND THE CRAFT.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-md text-sm leading-7 text-white/50 md:justify-self-end"
          >
            Behind every finished space is a team that cares about precision,
            detail and the character of the space we create.
          </motion.p>

        </div>

        {/* TEAM */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {team.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* PORTRAIT */}
              <div className="group relative aspect-[4/5] overflow-hidden bg-[#242424]">

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xs tracking-[0.25em] text-white/30">
                      PORTRAIT COMING SOON
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

              </div>

              {/* DETAILS */}
              <div className="mt-6 border-t border-white/15 pt-5">

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <h3 className="text-3xl md:text-4xl">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-[10px] tracking-[0.2em] text-[#a58b5b]">
                      {member.role}
                    </p>
                  </div>

                  <span className="text-right text-[10px] tracking-[0.15em] text-white/40">
                    {member.experience}
                  </span>

                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                  {member.bio}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;