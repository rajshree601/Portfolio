import { motion } from 'framer-motion';
import { FiCheckCircle, FiGlobe, FiTarget, FiUsers } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';

const focusAreas = [
  { icon: FiUsers, title: 'Workforce Enablement', text: 'Global training programs that convert platform knowledge into job-ready capability.' },
  { icon: FiTarget, title: 'Curriculum Strategy', text: 'Version-aware technical curricula, certification paths and educator enablement systems.' },
  { icon: FiGlobe, title: 'Ecosystem Growth', text: 'Customer, partner and university collaboration across life sciences and enterprise platforms.' }
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="Education services leader with enterprise platform depth"
          description="A senior profile built for leadership teams evaluating enablement, partner growth and workforce transformation impact."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-9 text-slate-700">
              With 29+ years of experience in the IT industry, Sarada Prasanna Satapathy brings deep
              expertise in competency building, curriculum innovation and education ecosystem enablement.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              As Practice Director of Education Services at Veeva Systems, he focuses on expanding
              education services across India and evangelizing learning ecosystems for the life sciences
              community. His work spans strategic collaboration with academia, partners and customers.
            </p>

            <div className="mt-8 grid gap-4">
              {['20,000+ professionals empowered', '70% placement rate for certified engineers', '65% female representation achieved in team'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <FiCheckCircle className="text-azure-primary" size={20} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.article
                  key={area.title}
                  className="glass-card flex gap-5 p-6"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky-50 text-azure-primary">
                    <Icon size={25} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-950">{area.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{area.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
