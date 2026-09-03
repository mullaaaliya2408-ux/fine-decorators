import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ProjectLightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d0d]/95 p-5 backdrop-blur-md md:p-10"
          onClick={onClose}
        >
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex h-full w-full max-w-[1400px] flex-col overflow-hidden md:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            {/* IMAGE */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#171717]">

              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-contain"
              />

              {/* IMAGE NUMBER */}
              <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-white/60 md:left-8 md:top-8">
                PROJECT
              </span>
            </div>

            {/* DETAILS */}
            <div className="flex w-full shrink-0 flex-col justify-between bg-[#f4f1eb] p-7 text-[#171717] md:w-[360px] md:p-9">

              <div>
                <div className="flex items-start justify-between gap-5">

                  <p className="text-[10px] tracking-[0.2em] text-[#a58b5b]">
                    {project.category}
                  </p>

                  {/* CLOSE */}
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close project"
                    className="group flex h-10 w-10 items-center justify-center border border-[#171717]/20 transition-all duration-300 hover:bg-[#171717] hover:text-[#f4f1eb]"
                  >
                    <span className="text-xl transition-transform duration-300 group-hover:rotate-90">
                      ×
                    </span>
                  </button>

                </div>

                <h2 className="mt-12 text-4xl leading-none md:text-5xl">
                  {project.title}
                </h2>

                <div className="mt-8 border-t border-[#171717]/15 pt-5">

                  <p className="text-[9px] tracking-[0.2em] text-[#77736c]">
                    LOCATION
                  </p>

                  <p className="mt-2 text-sm">
                    {project.location}
                  </p>

                </div>
              </div>

              <div className="border-t border-[#171717]/15 pt-5">
                <p className="text-[9px] leading-5 tracking-[0.12em] text-[#77736c]">
                  FINE DECORATORS
                </p>

                <p className="mt-2 text-[10px] tracking-[0.12em] text-[#77736c]">
                  PRESS ESC TO CLOSE
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectLightbox;