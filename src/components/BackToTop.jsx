import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => scroll.scrollToTop({ duration: 600, smooth: 'easeInOutQuart' })}
      className="fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-azure-primary text-white shadow-glow transition hover:-translate-y-1 hover:bg-sky-700"
      aria-label="Back to top"
    >
      <FiArrowUp size={22} aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
