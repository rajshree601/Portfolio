import { motion } from 'framer-motion';
import { FiFlag, FiStar, FiTrendingUp } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { achievements } from '../data/portfolio.js';

const icons = [FiTrendingUp, FiFlag, FiStar, FiStar];

function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Achievements"
          title="Signals of curiosity, competition and delivery"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={achievement.title}
                className="glass-card flex gap-5 p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950">{achievement.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{achievement.detail}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
