import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectLightbox from "../components/ProjectLightbox";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "ALL",
    "LIVING ROOM",
    "BEDROOM",
    "RESIDENTIAL",
    "COMMERCIAL",
    "LIGHTING",
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory ||
            project.type === activeCategory
        );

  return (
    <section
      id="work"
      className="bg-[#f4f1eb] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs tracking-[0.3em] text-[#a58b5b]"
            >
              PORTFOLIO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl leading-none md:text-8xl"
            >
              OUR WORK
            </motion.h2>

            <p className="mt-6 text-sm text-[#77736c]">
              Spaces we've transformed.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex max-w-xl flex-wrap gap-x-6 gap-y-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative pb-2 text-[10px] tracking-[0.15em] transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[#171717]"
                    : "text-[#77736c] hover:text-[#171717]"
                }`}
              >
                {category}

                {activeCategory === category && (
                  <motion.span
                    layoutId="active-category"
                    className="absolute bottom-0 left-0 h-px w-full bg-[#a58b5b]"
                  />
                )}
              </button>
            ))}
          </div>

        </div>

        {/* PROJECT GRID */}
        <motion.div
  layout
  className="mt-16 grid gap-5 md:grid-cols-12"
>
  {filteredProjects.map((project, index) => {
    const layouts = [
      "md:col-span-8",
      "md:col-span-4 md:mt-24",
      "md:col-span-4 md:-mt-8",
      "md:col-span-8",
    ];

    return (
      <div
        key={project.id}
        className={layouts[index % layouts.length]}
      >
        <ProjectCard
  key={project.id}
  project={project}
  index={index}
  onClick={() => setSelectedProject(project)}
/>
      </div>
    );
  })}
</motion.div>

        {/* VIEW ALL */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-5 border-b border-[#171717] pb-3 text-xs tracking-[0.2em]"
          >
            DISCUSS YOUR PROJECT

            <span className="transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

      </div>
      <ProjectLightbox
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>
    </section>
  );
}

export default Projects;