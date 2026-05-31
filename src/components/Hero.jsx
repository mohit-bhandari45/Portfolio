import { LINKS } from '../data.js';
import { ArrowRight, Mail, Github, LinkedIn, LeetCode, Code } from './Icons.jsx';
import { IconLink } from './common.jsx';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left reveal">
            <span className="hero-eyebrow">
              <span className="status-dot" aria-hidden="true"></span>
              <span className="mono">Available for Summer 2026 · Dehradun, India</span>
            </span>
            <h1>
              Full-stack developer<br />building <span className="accent">fast, scalable</span> systems.
            </h1>
            <p className="hero-sub">
              I'm Mohit — a final-year Computer Science engineer currently building the Formester form platform
              at Acorn Globus. I ship production-grade web systems end to end, from cloud editors and execution
              engines to social commerce apps.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">View Selected Work <ArrowRight /></a>
              <a className="btn btn-secondary" href={`mailto:${LINKS.email}`}><Mail /> Email Me</a>
            </div>
            <div className="hero-socials" aria-label="Profiles">
              <IconLink href={LINKS.github} label="GitHub"><Github /></IconLink>
              <IconLink href={LINKS.linkedin} label="LinkedIn"><LinkedIn /></IconLink>
              <IconLink href={LINKS.leetcode} label="LeetCode"><LeetCode /></IconLink>
              <IconLink href={LINKS.gfg} label="GeeksforGeeks"><Code /></IconLink>
            </div>
          </div>

          <aside className="hero-card reveal d1" aria-label="Quick facts">
            <div className="card-head">
              <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
              <span className="card-file">~/mohit.profile</span>
            </div>
            <div className="card-body">
              <div className="kv"><span className="k">role</span><span className="v">Full-Stack Developer</span></div>
              <div className="kv"><span className="k">focus</span><span className="v">Web platforms · <span className="em">scale</span></span></div>
              <div className="kv"><span className="k">stack</span><span className="v">TS · Next · Node · Mongo</span></div>
              <div className="kv"><span className="k">leetcode</span><span className="v"><span className="em">630+</span> solved · 1549</span></div>
              <div className="kv"><span className="k">cgpa</span><span className="v">9.1 / 10</span></div>
              <div className="kv"><span className="k">status</span><span className="v">Open to opportunities</span></div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
