import { useEffect, useState, useRef } from 'react';

export function useHeadsObserver( ) {

  const [activeId, setActiveId] = useState('');
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {

    const handleObsever = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id && entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: '-20% 0% -25% 0px'}
    );
    
    const elements = document.querySelectorAll('h1, h2');
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}