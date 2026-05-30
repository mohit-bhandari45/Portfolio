import { SectionLabel } from './common.jsx';

export default function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="container">
        <SectionLabel num="03" title="Experience" />
        <div className="timeline">
          <div className="tl-item reveal">
            <div className="tl-head">
              <h3 className="tl-role">
                JavaScript Development Intern · <span className="tl-org">W3 Dev</span>
              </h3>
              <span className="tl-meta">Aug 2024 – Sep 2024</span>
            </div>
            <div className="tl-loc">Dehradun, Uttarakhand</div>
            <ul className="tl-points">
              <li>Enhanced the AI chatbot's prompt-generation logic to deliver more accurate, relevant, and coherent responses.</li>
              <li>Built export-to-PDF functionality and integrated chart/graph visualizations for richer data representation in the chatbot.</li>
              <li>Implemented a complete chat-history system, letting users access and navigate previous conversations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
