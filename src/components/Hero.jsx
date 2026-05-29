import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { profile, stats } from '../data/portfolio.js';
import { useTypingEffect } from '../hooks/useTypingEffect.js';
import { useCountUp } from '../hooks/useCountUp.js';
import portrait from '../assets/profile-portrait.svg';

function StatCard({ stat }) {
  const value = useCountUp(stat.value, 1500, stat.decimals || 0);
  const formatted = stat.value >= 1000 ? Math.round(value).toLocaleString('en-IN') : value;

  return (
    <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-azure backdrop-blur-xl">
      <div className="text-2xl font-black text-slate-950">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </div>
      <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
    </div>
  );
}

function Hero() {
  const typed = useTypingEffect(['AWS Serverless', 'Azure Cloud', 'Java APIs', 'BDD Automation']);

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-20 bg-azure-grid bg-[length:38px_38px]" />
      <motion.div
        className="azure-blob left-[-9rem] top-28 h-72 w-72 bg-azure-secondary/35"
        animate={{ x: [0, 24, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
      />
      <motion.div
        className="azure-blob right-[-7rem] top-48 h-80 w-80 bg-azure-primary/20"
        animate={{ x: [0, -26, 0], y: [0, -22, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-100 bg-white/75 px-4 py-2 text-sm font-bold text-azure-primary shadow-sm backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
            Open to Software, Cloud and QA roles
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-bold text-azure-primary sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profile.tagline}</p>

          <div className="mt-6 min-h-10 text-lg font-extrabold text-slate-900 sm:text-xl">
            Specialized in <span className="text-azure-primary">{typed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 bg-azure-secondary" />
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/Rajashree_Satapathy_Resume.md" download className="btn-primary">
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
            <Link to="projects" smooth duration={550} offset={-92} className="btn-secondary">
              View Projects
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <FiMail aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-sky-200/70 via-white/50 to-cyan-100/70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/70 p-6 shadow-azure backdrop-blur-xl">
            <img
              src={portrait}
              alt="Professional illustrated portrait of Rajashree Satapathy"
              className="mx-auto aspect-square w-full max-w-sm rounded-[2rem] object-cover"
            />
            <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold text-sky-200">Current focus</p>
              <p className="mt-2 text-2xl font-black">Cloud-native apps + reliable test automation</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
