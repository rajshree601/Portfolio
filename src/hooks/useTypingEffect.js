import { useEffect, useState } from 'react';

export function useTypingEffect(words, speed = 68, pause = 1300) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const nextLength = isDeleting ? text.length - 1 : text.length + 1;
    const delay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && text === currentWord) {
      const timer = window.setTimeout(() => setIsDeleting(true), pause);
      return () => window.clearTimeout(timer);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setText(currentWord.slice(0, Math.max(0, nextLength)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, pause, speed, text, wordIndex, words]);

  return text;
}
