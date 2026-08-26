import { Link } from 'react-router-dom';
import { LINKS, HOME_PROJECTS, EXPERIENCE, SKILLS, FACTS, COURSEWORK } from '../data.js';
import { Github, LinkedIn, Mail } from '../components/Icons.jsx';
import GitHubContributions from '../components/GitHubContributions.jsx';

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <h1 className="hero-name">Mohit Bhandari</h1>
                <p className="hero-tagline">Full-stack developer</p>
                <p className="hero-bio">
                    Final-year B.Tech Computer Science student at Uttaranchal University.
                    I build production-grade web systems end to end — from cloud editors and execution
                    engines to social commerce apps. Currently interned at Acorn Globus, building features
                    for the Formester platform.
                </p>
                <div className="hero-links">
                    <a className="hero-link" href={`mailto:${LINKS.email}`}>
                        <Mail /> {LINKS.email}
                    </a>
                    <a className="hero-link" href={LINKS.github} target="_blank" rel="noopener noreferrer">
                        <Github /> GitHub
                    </a>
                    <a className="hero-link" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn /> LinkedIn
                    </a>
                    <a className="hero-link" href={LINKS.leetcode} target="_blank" rel="noopener noreferrer">
                        LeetCode
                    </a>
                </div>
            </div>
        </section>
    );
}

function FindMe() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-title">Find Me</div>
                <div className="find-me-list">
                    <div className="find-me-item">
                        <span className="fm-label">Email</span>
                        <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
                    </div>
                    <div className="find-me-item">
                        <span className="fm-label">GitHub</span>
                        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">mohit-bhandari45</a>
                    </div>
                    <div className="find-me-item">
                        <span className="fm-label">LinkedIn</span>
                        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">mohit-bhandari45</a>
                    </div>
                    <div className="find-me-item">
                        <span className="fm-label">LeetCode</span>
                        <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer">mohitbhandari852</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

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

function Projects() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-title">Projects</div>
                <div className="projects-list">
                    {HOME_PROJECTS.map((p) => (
                        <ProjectCard key={p.name} p={p} />
                    ))}
                </div>
                <Link className="show-more-link" to="/projects">View all projects →</Link>
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-title">Experience</div>
                <div className="exp-list">
                    {EXPERIENCE.map((e) => (
                        <div className="exp-item" key={e.org}>
                            <div className="exp-top">
                                <span className="exp-role">
                                    {e.role} <span className="exp-org">@ {e.org}</span>
                                </span>
                                <span className="exp-meta">{e.meta} · {e.loc}</span>
                            </div>
                            <ul className="exp-points">
                                {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-title">Skills</div>
                <div className="skills-grid">
                    {SKILLS.map((g) => (
                        <div className="skill-group" key={g.title}>
                            <div className="skill-group-title">{g.title}</div>
                            <div className="skill-items">{g.items.join(', ')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Quote() {
    return (
        <section className="section">
            <div className="container">
                <blockquote className="closing-quote">
                    <p>"First, solve the problem. Then, write the code."</p>
                </blockquote>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-title">About</div>
                <div className="find-me-list">
                    {FACTS.map(([label, value]) => (
                        <div className="find-me-item" key={label}>
                            <span className="fm-label">{label}</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
                <div className="coursework-list">
                    {COURSEWORK.map((c) => (
                        <span className="coursework-chip" key={c}>{c}</span>
                    ))}
                </div>
            </div>
        </section>
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
                        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={`mailto:${LINKS.email}`}>Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function HomePage() {
    return (
        <div className="shell">
            <div className="page-content">
                <Hero />
                <FindMe />
                <GitHubContributions username="mohit-bhandari45" />
                <Projects />
                <Experience />
                <Skills />
                <About />
                <Quote />
            </div>
            <Footer />
        </div>
    );
}
