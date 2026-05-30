import { COURSEWORK } from '../data.js';
import { SectionLabel } from './common.jsx';

export default function Education() {
  return (
    <section className="section-pad" id="education">
      <div className="container">
        <SectionLabel num="06" title="Education" />
        <div className="edu">
          <div className="edu-card reveal">
            <div className="e-degree">B.Tech, Computer Science</div>
            <div className="e-uni">Uttaranchal University</div>
            <div className="e-meta">
              <div>
                <div className="mono">Sept 2022 – Aug 2026</div>
                <div className="mono" style={{ marginTop: '6px' }}>Dehradun, Uttarakhand</div>
              </div>
              <div className="e-cgpa">9.1 <small>/ 10</small></div>
            </div>
          </div>
          <div className="coursework reveal d1">
            <h4>Relevant Coursework</h4>
            <div className="cw-list">
              {COURSEWORK.map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
