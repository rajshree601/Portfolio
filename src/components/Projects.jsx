import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Project work that maps to production engineering"
          description="Each project is framed around system design, implementation value and recruiter-readable outcomes."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-card group relative overflow-hidden p-7"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] opacity-15" style={{ backgroundColor: project.accent }} />
              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <h3 className="max-w-lg text-2xl font-black tracking-tight text-slate-950">
                    {project.title}
                  </h3>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-950 text-white transition group-hover:bg-azure-primary">
                    <FiArrowUpRight size={20} aria-hidden="true" />
                  </div>
                </div>

                <p className="leading-8 text-slate-600">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-extrabold text-azure-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-50 text-azure-primary">
                        <FiCheck size={15} aria-hidden="true" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                {project.achievement && (
                  <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
                    {project.achievement}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
