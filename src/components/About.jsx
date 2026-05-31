import { FACTS } from '../data.js';
import { SectionLabel } from './common.jsx';

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container">
        <SectionLabel num="01" title="About" />
        <div className="about-grid">
          <div className="reveal">
            <p className="lead">
              I like turning hard backend problems — concurrency, caching, low-latency execution —
              into products that feel effortless to use.
            </p>
            <p>
              I'm a final-year B.Tech Computer Science student at Uttaranchal University and currently a
              Software Development Intern at Acorn Globus, where I build features for the Formester form
              platform — an AI form builder, smart resume reminders, conditional field logic, and an
              embeddable form configurator. Alongside, I've shipped a cloud-based coding platform handling
              100+ concurrent users and a social commerce app recognized by IIT students and founders.
            </p>
            <p>
              Beyond projects, I'm a consistent competitive programmer with 630+ problems solved on LeetCode,
              and was selected for the McKinsey Forward Learning Program.
            </p>
          </div>
          <div className="reveal d1">
            <div className="facts">
              {FACTS.map(([label, value]) => (
                <div className="fact" key={label}>
                  <span className="label">{label}</span>
                  <span className="value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
