import { motion } from 'framer-motion';
import { FiCheckCircle, FiCpu, FiShield, FiZap } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';

const focusAreas = [
  { icon: FiCpu, title: 'Software Engineering', text: 'Component-driven thinking, clean APIs and practical full-stack delivery.' },
  { icon: FiZap, title: 'Cloud Architecture', text: 'AWS serverless systems, Azure-ready deployment, cost-aware scaling.' },
  { icon: FiShield, title: 'QA Automation', text: 'BDD, REST Assured, Postman workflows and reliable validation suites.' }
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="Engineering foundation with cloud-first ambition"
          description="A concise profile built for recruiters and engineering teams evaluating real-world readiness."
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
              Computer Science Engineering Honors student at KL University with strong interests in
              Cloud Computing, Software Development, QA Automation, and scalable application design.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              Experienced in AWS serverless architectures, API automation frameworks, and full-stack
              development. Passionate about building real-world solutions and continuously learning
              emerging technologies.
            </p>

            <div className="mt-8 grid gap-4">
              {['Recruiter-ready project storytelling', 'Microsoft Azure inspired presentation', 'Cloud, code and testing credibility'].map((item) => (
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
