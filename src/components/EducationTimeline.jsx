import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { education } from '../data/portfolio.js';

function EducationTimeline() {
  return (
    <section id="education" className="section-padding bg-white/55">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Education" title="Academic timeline" />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-azure-primary via-azure-secondary to-transparent sm:left-1/2" />
          <div className="grid gap-8">
            {education.map((item, index) => (
              <motion.article
                key={item.institution}
                className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${index % 2 ? 'sm:text-left' : 'sm:text-right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className={`ml-12 sm:ml-0 ${index % 2 ? 'sm:col-start-2' : ''}`}>
                  <div className="glass-card p-6">
                    <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-azure-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-slate-950">{item.institution}</h3>
                    <p className="mt-2 font-semibold text-slate-700">{item.program}</p>
                    <p className="mt-4 inline-flex rounded-full bg-sky-50 px-4 py-2 text-sm font-black text-azure-primary">
                      {item.result}
                    </p>
                  </div>
                </div>
                <span className="absolute left-0 top-8 grid h-8 w-8 place-items-center rounded-full border-4 border-white bg-azure-primary shadow-glow sm:left-1/2 sm:-translate-x-1/2" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationTimeline;
