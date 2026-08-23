import { FULL_STACK_PROJECTS, BACKEND_PROJECTS } from '../data.js';
import { Icons } from './Icons.jsx';
import { SectionLabel } from './common.jsx';

function Project({ p }) {
  const LinkIcon = Icons[p.link.icon];
  return (
    <article className="project reveal">
      <div className="p-index">{p.index}</div>
      <div className="p-main">
        <div className="p-head">
          <h3>{p.name}</h3>
          <span className="p-type">{p.type}</span>
          <span className="p-year">{p.year}</span>
        </div>
        <p className="p-desc">{p.desc}</p>
        <ul className="p-points">
          {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
        <div className="p-stack">
          {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
        </div>
      </div>
      <div className="p-links">
        <a className="p-link" href={p.link.href} target="_blank" rel="noopener noreferrer">
          <LinkIcon /> {p.link.label}
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="section-pad" id="work">
      <div className="container">
        <SectionLabel num="02" title="Full-Stack Projects" />
        <div className="projects" style={{ marginBottom: '64px' }}>
          {FULL_STACK_PROJECTS.map((p) => <Project p={p} key={p.index} />)}
        </div>

        <SectionLabel num="" title="Backend Projects" />
        <div className="projects">
          {BACKEND_PROJECTS.map((p) => <Project p={p} key={p.index} />)}
        </div>
      </div>
    </section>
  );
}
