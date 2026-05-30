import { useEffect, useState } from 'react';

/* Sets up scroll-reveal animations and active-nav highlighting via
   IntersectionObserver. Call once from the App root after render. */
export function useObservers() {
  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // Active section in nav
    const links = [...document.querySelectorAll('.nav-section-link')];
    const map = new Map(links.map((l) => [l.getAttribute('href').slice(1), l]));
    const secObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const link = map.get(e.target.id);
          if (!link) return;
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['about', 'work', 'experience', 'skills'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) secObserver.observe(el);
    });

    return () => {
      io.disconnect();
      secObserver.disconnect();
    };
  }, []);
}

/* Tracks whether the page has scrolled past a threshold (for the nav border). */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}
