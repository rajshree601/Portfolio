import { useEffect, useRef, useState } from 'react';

export function useCountUp(target, duration = 1400, decimals = 0) {
  const [value, setValue] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((target * eased).toFixed(decimals)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [decimals, duration, target]);

  return value;
}
