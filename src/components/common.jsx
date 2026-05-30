/* Small shared presentational helpers. */

export function SectionLabel({ num, title }) {
  return (
    <div className="section-label reveal">
      <span className="num">{num}</span>
      <span className="title">{title}</span>
      <span className="rule"></span>
    </div>
  );
}

export function IconLink({ href, label, children }) {
  const external = href.startsWith('http');
  return (
    <a
      className="icon-link"
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </a>
  );
}
