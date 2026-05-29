import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-azure-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative grid h-28 w-28 place-items-center">
        <motion.div
          className="absolute inset-0 rounded-[2rem] border-4 border-azure-primary/15 border-t-azure-primary"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
        />
        <div className="rounded-2xl bg-white px-4 py-3 text-2xl font-black text-azure-primary shadow-glow">
          SS
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
