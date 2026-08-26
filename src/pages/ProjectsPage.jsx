import { FULL_STACK_PROJECTS, BACKEND_PROJECTS, LINKS } from '../data.js';
import { Github } from '../components/Icons.jsx';

function ProjectCard({ p }) {
    return (
        <div className="project-item">
            <div className="project-top">
                <span className="project-name">{p.name}</span>
                <div className="project-meta">
                    <span className="project-year">{p.year}</span>
                </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            {p.points && (
                <ul className="exp-points" style={{ marginBottom: '8px' }}>
                    {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
            )}
            <div className="project-stack">
                {p.stack.map((s) => (
                    <span className="stack-chip" key={s}>{s}</span>
                ))}
            </div>
            <div className="project-links">
                <a className="project-link" href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github /> Code
                </a>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <span className="footer-meta">© 2026 Mohit Bhandari · Dehradun, India</span>
                    <div className="footer-links">
                        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={`mailto:${LINKS.email}`}>Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function ProjectsPage() {
    return (
        <div className="shell">
            <div className="page-content">
                <section className="section">
                    <div className="container">
                        <div className="section-title">Projects</div>

                        <div className="category-heading">Full-Stack</div>
                        <div className="projects-list">
                            {FULL_STACK_PROJECTS.map((p) => (
                                <ProjectCard key={p.name} p={p} />
                            ))}
                        </div>

                        <div className="category-heading">Backend</div>
                        <div className="projects-list">
                            {BACKEND_PROJECTS.map((p) => (
                                <ProjectCard key={p.name} p={p} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
