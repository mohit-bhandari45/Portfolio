import { LINKS } from '../data.js';

/* OSS contributions data — edit freely */
const OSS_CONTRIBUTIONS = [
    {
        title: 'CHORE: fix form-builder widget integration',
        repo: 'formester/formester-platform',
        repoUrl: 'https://github.com/mohit-bhandari45',
        prUrl: 'https://github.com/mohit-bhandari45',
        desc: 'Resolved rendering inconsistency in the AI form builder widget when embedded inside third-party sites.',
        status: 'merged',
    },
    {
        title: 'feat: resume reminder on form abandonment',
        repo: 'formester/formester-platform',
        repoUrl: 'https://github.com/mohit-bhandari45',
        prUrl: 'https://github.com/mohit-bhandari45',
        desc: 'Implemented automatic email that sends a resume link to users who abandon a form mid-way, improving completion rates.',
        status: 'merged',
    },
];

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

export default function OSSPage() {
    return (
        <div className="shell">
            <div className="page-content">
                <section className="section">
                    <div className="container">
                        <div className="section-title">Open Source</div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--fg-2)', marginBottom: '28px', lineHeight: '1.65' }}>
                            Contributions to open-source projects. I try to give back when I find issues or missing features
                            in tools I use regularly.
                        </p>

                        {OSS_CONTRIBUTIONS.length > 0 ? (
                            <div className="oss-list">
                                {OSS_CONTRIBUTIONS.map((item, i) => (
                                    <div className="oss-item" key={i}>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                                            <a className="oss-title" href={item.prUrl} target="_blank" rel="noopener noreferrer">
                                                {item.title}
                                            </a>
                                            <span className={`oss-badge ${item.status}`}>{item.status}</span>
                                        </div>
                                        <a className="oss-repo" href={item.repoUrl} target="_blank" rel="noopener noreferrer">
                                            {item.repo}
                                        </a>
                                        <p className="oss-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p style={{ fontSize: '0.88rem', color: 'var(--fg-muted)' }}>
                                More contributions coming soon. Check my{' '}
                                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a> for latest activity.
                            </p>
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
