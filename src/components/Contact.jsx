import { LINKS } from '../data.js';
import { Mail, Phone, Github, LinkedIn } from './Icons.jsx';
import { IconLink } from './common.jsx';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-inner reveal">
          <span className="mono">// let's build something</span>
          <h2>Have a role or project in mind? Let's talk.</h2>
          <p>
            I'm open to full-stack and software engineering opportunities starting 2026.
            The fastest way to reach me is email — I usually reply within a day.
          </p>
          <div className="c-actions">
            <a className="btn btn-primary" href={`mailto:${LINKS.email}`}><Mail /> {LINKS.email}</a>
            <IconLink href={`tel:${LINKS.phone}`} label="Call"><Phone /></IconLink>
            <IconLink href={LINKS.github} label="GitHub"><Github /></IconLink>
            <IconLink href={LINKS.linkedin} label="LinkedIn"><LinkedIn /></IconLink>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer">
          <span className="f-meta">© 2026 Mohit Bhandari · Built with care in Dehradun</span>
          <div className="f-links">
            <a href="#top">Top</a>
            <a href="#work">Work</a>
            <a href={`mailto:${LINKS.email}`}>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
