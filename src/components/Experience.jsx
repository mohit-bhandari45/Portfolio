import { EXPERIENCE } from '../data.js';
import { SectionLabel } from './common.jsx';

export default function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="container">
        <SectionLabel num="03" title="Experience" />
        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <div className="tl-item reveal" key={e.org}>
              <div className="tl-head">
                <h3 className="tl-role">
                  {e.role} · <span className="tl-org">{e.org}</span>
                </h3>
                <span className="tl-meta">{e.meta}</span>
              </div>
              <div className="tl-loc">{e.loc}</div>
              <ul className="tl-points">
                {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
