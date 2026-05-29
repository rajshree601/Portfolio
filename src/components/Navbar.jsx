import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../data/portfolio.js';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-sky-100/80 bg-white/85 shadow-sm backdrop-blur-xl' : 'bg-white/55 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          to="hero"
          smooth
          duration={550}
          offset={-96}
          className="group flex cursor-pointer items-center gap-3"
          aria-label="Go to hero section"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-azure-primary text-lg font-black text-white shadow-glow">
            RS
          </span>
          <span className="hidden text-sm font-extrabold text-slate-900 sm:block">
            Rajashree Satapathy
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              duration={550}
              offset={-92}
              activeClass="nav-active"
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-azure-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:satapathy.rajashree@gmail.com"
          className="hidden rounded-full bg-azure-primary px-5 py-2.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-sky-700 lg:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-sky-100 bg-white text-slate-800 shadow-sm lg:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-sky-100 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                duration={550}
                offset={-92}
                activeClass="nav-active"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-sky-50 hover:text-azure-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
