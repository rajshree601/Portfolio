import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { certifications } from '../data/portfolio.js';

function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white/55">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Validated learning across algorithms, cloud and service platforms"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification}
              className="glass-card flex min-h-44 flex-col justify-between p-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <FiAward className="text-azure-primary" size={30} aria-hidden="true" />
              <h3 className="mt-8 text-base font-black leading-6 text-slate-950">{certification}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
