import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/55">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities across education, platforms and ecosystem growth"
          description="Organized around the leadership areas needed to scale technical learning across customers, partners, universities and internal teams."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="glass-card group p-6"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-azure-primary text-white shadow-glow transition group-hover:scale-110">
                    <GroupIcon size={22} aria-hidden="true" />
                  </div>
                </div>

                <div className="grid gap-3">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={`${group.title}-${skill.name}`}
                        className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                        whileHover={{ x: 4, backgroundColor: '#F0F9FF' }}
                      >
                        <Icon className="text-azure-primary" size={18} aria-hidden="true" />
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
