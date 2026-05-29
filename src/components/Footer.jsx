import { FiHeart } from 'react-icons/fi';
import { profile } from '../data/portfolio.js';

function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm font-semibold text-slate-600 sm:flex-row sm:px-8 sm:text-left lg:px-10">
        <p>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Built with <FiHeart className="text-azure-primary" aria-hidden="true" /> React, Tailwind and Azure-ready CI/CD
        </p>
      </div>
    </footer>
  );
}

export default Footer;
