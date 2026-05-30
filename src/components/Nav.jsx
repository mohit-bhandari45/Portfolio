import { useScrolled } from '../hooks/useObservers.js';

export default function Nav() {
  const scrolled = useScrolled(8);
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')} id="nav">
      <div className="container">
        <a className="brand" href="#top" aria-label="Mohit Bhandari — home">
          <span className="mark">MB</span>
          <span className="name">Mohit Bhandari</span>
        </a>
        <div className="nav-links">
          <a className="nav-section-link" href="#about">About</a>
          <a className="nav-section-link" href="#work">Work</a>
          <a className="nav-section-link" href="#experience">Experience</a>
          <a className="nav-section-link" href="#skills">Skills</a>
          <a className="btn btn-primary nav-cta" href="#contact">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}
