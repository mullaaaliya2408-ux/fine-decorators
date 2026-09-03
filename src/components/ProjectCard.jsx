import { motion } from "framer-motion";

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 70,
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
        duration: 0.9,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#dedbd4] md:aspect-[5/6]">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />

        {/* DARK HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/45" />

        {/* PROJECT NUMBER */}
        <div className="absolute left-5 top-5 overflow-hidden">
          <span className="block text-[10px] tracking-[0.2em] text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* HOVER INFORMATION */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">

          <div className="translate-y-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">

            <p className="mb-3 text-[10px] tracking-[0.22em] text-[#d8c7a5]">
              {project.category}
            </p>

            <h3 className="text-3xl leading-none text-white md:text-4xl">
              {project.title}
            </h3>

            <div className="mt-5 flex items-center justify-between border-t border-white/30 pt-4">

              <span className="text-[10px] tracking-[0.15em] text-white/70">
                {project.location}
              </span>

              <span className="text-lg text-white transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>

            </div>

          </div>

        </div>

        {/* SUBTLE BORDER */}
        <div className="pointer-events-none absolute inset-0 border border-white/0 transition-all duration-500 group-hover:inset-3 group-hover:border-white/25" />

      </div>

      {/* MOBILE / DEFAULT INFO */}
      <div className="mt-5 flex items-start justify-between gap-6">

        <div>
          <p className="text-[9px] tracking-[0.2em] text-[#a58b5b]">
            {project.category}
          </p>

          <h3 className="mt-2 text-2xl">
            {project.title}
          </h3>
        </div>

        <span className="mt-1 text-[10px] tracking-[0.15em] text-[#77736c]">
          {String(index + 1).padStart(2, "0")}
        </span>

      </div>
    </motion.article>
  );
}

export default ProjectCard;