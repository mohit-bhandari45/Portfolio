import { STATS } from '../data.js';
import { Icons } from './Icons.jsx';
import { SectionLabel } from './common.jsx';

export default function Achievements() {
  return (
    <section className="section-pad" id="achievements">
      <div className="container">
        <SectionLabel num="05" title="Achievements" />
        <div className="stats-grid">
          {STATS.map((s) => {
            const Ic = Icons[s.icon];
            return (
              <div className="stat reveal" key={s.tag}>
                <div className="s-top">
                  <span className="s-icon"><Ic /></span>
                  <span className="s-tag">{s.tag}</span>
                </div>
                <div className="s-num">
                  {s.num}{s.unit && <span className="unit">{s.unit}</span>}
                </div>
                <div className="s-label">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
