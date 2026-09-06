import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Introduction', href: '#introduction' },
    { label: 'Design', href: '#design' },
    { label: 'Performance', href: '#performance' },
    { label: 'Technology', href: '#technology' },
    { label: 'Interior', href: '#interior' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`top-navbar ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main navigation">
      <a href="#home" className="brand">E 450</a>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-menu">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#gallery" className="nav-cta" onClick={() => setIsOpen(false)}>
  View Gallery
</a>
      </div>
    </nav>
  );
}

export default Navbar;