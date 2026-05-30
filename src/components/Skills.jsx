import { SKILLS } from '../data.js';
import { Icons } from './Icons.jsx';
import { SectionLabel } from './common.jsx';

export default function Skills() {
  return (
    <section className="section-pad" id="skills">
      <div className="container">
        <SectionLabel num="04" title="Skills & Tools" />
        <div className="skills-grid">
          {SKILLS.map((s) => {
            const Ic = Icons[s.icon];
            return (
              <div className="skill-card reveal" key={s.title}>
                <div className="sc-head">
                  <span className="sc-icon"><Ic /></span>
                  <h4>{s.title}</h4>
                </div>
                <div className="sc-list">
                  {s.items.map((it) => (
                    <span className={'chip' + (s.violet ? ' chip-violet' : '')} key={it}>{it}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
