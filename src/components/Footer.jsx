function Footer({ id }) {
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
    <footer id={id} className="footer">
      <div className="footer-brand">
        <p>Mercedes-Benz E 450</p>
        <p className="footer-dealer">Helms Bros., Inc. — Bayside, NY</p>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="footer-contact">
        <a href="tel:3477458645">347-745-8645</a>
        <a href="https://maps.google.com/?q=208-24%20Northern%20Blvd%2C%20Bayside%2C%20NY%2011361">
          208-24 Northern Blvd, Bayside, NY 11361
        </a>
      </div>

      <p className="footer-legal">
        © {new Date().getFullYear()} Helms Bros., Inc. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;