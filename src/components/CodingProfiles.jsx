import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { codingProfiles } from '../data/portfolio.js';

function CodingProfiles() {
  return (
    <section id="profiles" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Public proof of practice"
          description="Fast access to code, problem solving, professional credentials and engineering presence."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card group p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                whileHover={{ y: -8 }}
                aria-label={`Open ${profile.name} profile`}
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-azure-primary">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <FiExternalLink className="text-slate-400 transition group-hover:text-azure-primary" size={22} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-slate-950">{profile.name}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">{profile.label}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;
