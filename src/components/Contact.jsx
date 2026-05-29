import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FiExternalLink, FiMail, FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: 'LinkedIn', value: 'saradapsatapathy', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Veeva Education', value: 'education.veeva.com', href: profile.company, icon: FiExternalLink },
  { label: 'Location', value: profile.location, href: profile.linkedin, icon: FiMapPin }
];

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to strengthen education services and workforce capability"
          description="Connect for learning ecosystem strategy, customer enablement, partner training, university programs and talent acceleration initiatives."
        />

        <motion.div
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-sky-200">Professional CTA</p>
              <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Let us build scalable learning ecosystems.
              </h3>
              <p className="mt-5 leading-8 text-slate-300">
                Sarada brings executive experience across Veeva, Pegasystems and SQL Star, with a
                proven record of enabling global professionals, partners, customers and universities.
              </p>
              <a href={`mailto:${profile.email}`} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100">
                Start a conversation
              </a>
            </div>

            <div className="grid gap-4 p-6 sm:p-8">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-3xl border border-sky-100 bg-white/85 p-5 shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
                    whileHover={{ x: 5 }}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azure-primary text-white">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                        {contact.label}
                      </span>
                      <span className="mt-1 block break-all font-bold text-slate-900">{contact.value}</span>
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
