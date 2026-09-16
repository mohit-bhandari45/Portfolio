import { Link } from 'react-router-dom';
import { LINKS, HOME_PROJECTS, EXPERIENCE, SKILLS, FACTS, COURSEWORK } from '../data.js';
import { Github, LinkedIn, Mail } from '../components/Icons.jsx';
import GitHubContributions from '../components/GitHubContributions.jsx';

const HOME_OSS_PRS = [
    {
        type: 'pr',
        number: 412,
        title: "feat(cmd): add 'get' subcommand for build and buildrun resources",
        repo: 'shipwright-io/cli',
        url: 'https://github.com/shipwright-io/cli/pull/412',
        status: 'open',
    },
    {
        type: 'pr',
        number: 2341,
        title: 'fix: validate referenced volumes in PipelineRun executor before creation',
        repo: 'shipwright-io/build',
        url: 'https://github.com/shipwright-io/build/pull/2341',
        status: 'open',
    },
    {
        type: 'pr',
        number: 409,
        title: 'fix(streamer): prevent skipPath from over-matching .git prefix',
        repo: 'shipwright-io/cli',
        url: 'https://github.com/shipwright-io/cli/pull/409',
        status: 'open',
    },
];

function PRIcon({ status }) {
    if (status === 'merged') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#8250df" style={{ flexShrink: 0 }}>
                <path d="M5.45 5.154A4.25 4.25 0 0 0 9.165 7.5h1.585a2.251 2.251 0 1 1 0 1.5H9.165A5.75 5.75 0 0 1 4 4.361V3.75a2.25 2.25 0 1 1 1.45 2.404ZM4.75 3a.75.75 0 1 0 0 1.5A.75.75 0 0 0 4.75 3Zm6.5 6.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                <path d="M12 3.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Zm-1.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        );
    }
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#1f883d" style={{ flexShrink: 0 }}>
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h.5A3.5 3.5 0 0 1 14 6v6.628a2.251 2.251 0 1 1-1.5 0V6a2 2 0 0 0-2-2h-.5v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
        </svg>
    );
}

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <h1 className="hero-name">Mohit Bhandari</h1>
                <p className="hero-tagline">Full-stack developer</p>
                <p className="hero-bio">
                    B.Tech Computer Science graduate from Uttaranchal University.
                    I build production-grade web systems end to end — from cloud editors
                    to social commerce apps. Completed a Software Development Internship at Acorn Globus,
                    building features for the Formester platform.
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

function OpenSource() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-title">Open Source</div>
                <div className="oss2-rows">
                    {HOME_OSS_PRS.map((item) => (
                        <div className="oss2-row" key={item.number}>
                            <div className="oss2-row-icon">
                                <PRIcon status={item.status} />
                            </div>
                            <a className="oss2-row-title" href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                            <a className="oss2-row-repo" href={`https://github.com/${item.repo}`} target="_blank" rel="noopener noreferrer">
                                {item.repo}
                            </a>
                        </div>
                    ))}
                </div>
                <Link className="show-more-link" to="/oss">View all open source contributions →</Link>
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
                <GitHubContributions username="mohit-bhandari45" />
                <Projects />
                <OpenSource />
                <Experience />
                <Skills />
                <About />
                <Quote />
            </div>
            <Footer />
        </div>
    );
}
