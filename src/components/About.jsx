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
              Currently completing my B.Tech in Computer Science at Uttaranchal University, I've built and
              shipped a cloud-based coding platform handling 100+ concurrent users, a social commerce app
              recognized by IIT students and founders, and a published npm utility library. I care about clean
              architecture, measurable performance, and code that's maintainable long after launch.
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
