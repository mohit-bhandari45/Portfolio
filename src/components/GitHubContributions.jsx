import { useEffect, useState } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* Level → fill colour — updated via CSS variables injected as data attrs */
const DARK_FILLS = ['#1c1c1c', '#1e4620', '#2a6832', '#3d9142', '#55c257'];
const LIGHT_FILLS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

function getFills(theme) {
    return theme === 'light' ? LIGHT_FILLS : DARK_FILLS;
}

export default function GitHubContributions({ username }) {
    const [weeks, setWeeks] = useState(null);
    const [total, setTotal] = useState(null);
    const [error, setError] = useState(false);
    const [theme, setTheme] = useState(
        () => document.documentElement.getAttribute('data-theme') || 'dark'
    );

    /* Stay in sync with theme toggles */
    useEffect(() => {
        const obs = new MutationObserver(() => {
            setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
        });
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
            .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
            .then((json) => {
                const contribs = json.contributions;
                setTotal(Object.values(json.total).reduce((a, b) => a + b, 0));

                const ws = [];
                let week = [];
                const firstDay = new Date(contribs[0].date).getDay();
                for (let i = 0; i < firstDay; i++) week.push(null);
                contribs.forEach((d) => {
                    week.push(d);
                    if (week.length === 7) { ws.push(week); week = []; }
                });
                if (week.length) {
                    while (week.length < 7) week.push(null);
                    ws.push(week);
                }
                setWeeks(ws);
            })
            .catch(() => setError(true));
    }, [username]);

    /* ── Loading / error states ── */
    if (error) return (
        <section className="section">
            <div className="container">
                <div className="section-title">Contributions</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>
                    Could not load. View on{' '}
                    <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
            </div>
        </section>
    );

    if (!weeks) return (
        <section className="section">
            <div className="container">
                <div className="section-title">Contributions</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>Loading…</p>
            </div>
        </section>
    );

    /* ── SVG layout constants ── */
    const CELL = 11;      // cell size
    const GAP = 2;       // gap between cells
    const STEP = CELL + GAP;
    const DAY_LABEL_W = 26;
    const TOP_LABEL_H = 16;

    const numWeeks = weeks.length;
    const svgW = DAY_LABEL_W + numWeeks * STEP;
    const svgH = TOP_LABEL_H + 7 * STEP;

    const fills = getFills(theme);

    /* Build month labels from week index */
    const monthLabels = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
        const first = week.find(Boolean);
        if (!first) return;
        const m = new Date(first.date).getMonth();
        if (m !== lastMonth) { monthLabels.push({ wi, label: MONTHS[m] }); lastMonth = m; }
    });

    return (
        <section className="section">
            <div className="container">
                <div className="section-title">Contributions</div>

                {/* viewBox makes it scale to 100% width — no scrollbar ever */}
                <svg
                    viewBox={`0 0 ${svgW} ${svgH}`}
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block', maxWidth: '100%' }}
                    aria-label="GitHub contribution graph"
                >
                    {/* Month labels */}
                    {monthLabels.map(({ wi, label }) => (
                        <text
                            key={label + wi}
                            x={DAY_LABEL_W + wi * STEP}
                            y={10}
                            fontSize="7"
                            fill="var(--fg-muted)"
                            fontFamily="monospace"
                        >
                            {label}
                        </text>
                    ))}

                    {/* Day labels: Mon Wed Fri */}
                    {[1, 3, 5].map((dayIdx, i) => (
                        <text
                            key={dayIdx}
                            x={DAY_LABEL_W - 3}
                            y={TOP_LABEL_H + dayIdx * STEP + CELL - 2}
                            fontSize="7"
                            fill="var(--fg-muted)"
                            fontFamily="monospace"
                            textAnchor="end"
                        >
                            {['Mon', 'Wed', 'Fri'][i]}
                        </text>
                    ))}

                    {/* Contribution cells */}
                    {weeks.map((week, wi) =>
                        week.map((day, di) => {
                            if (!day) return null;
                            return (
                                <rect
                                    key={`${wi}-${di}`}
                                    x={DAY_LABEL_W + wi * STEP}
                                    y={TOP_LABEL_H + di * STEP}
                                    width={CELL}
                                    height={CELL}
                                    rx={2}
                                    fill={fills[day.level] || fills[0]}
                                >
                                    <title>{`${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}</title>
                                </rect>
                            );
                        })
                    )}
                </svg>

                {/* Footer */}
                <div className="contrib-footer">
                    <span className="contrib-total">
                        {total?.toLocaleString()} contributions in the last year
                    </span>
                    <div className="contrib-legend">
                        <span>Less</span>
                        {fills.map((f, i) => (
                            <svg key={i} width="11" height="11" viewBox="0 0 11 11">
                                <rect width="11" height="11" rx="2" fill={f} />
                            </svg>
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
