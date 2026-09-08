import { useEffect, useRef, useState } from "react";

function StaggeredText({ text, as: Tag = "h2", className = "", wordDelay = 60 }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`staggered-text ${className}`}>
      {words.map((word, i) => (
        <span className="staggered-word-clip" key={`${word}-${i}`}>
          <span
            className={`staggered-word ${revealed ? "is-revealed" : ""}`}
            style={{ transitionDelay: `${i * wordDelay}ms` }}
          >
            {word}
          </span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

export default StaggeredText;