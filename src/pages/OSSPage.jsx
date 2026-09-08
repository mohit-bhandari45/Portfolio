import { useState, useEffect, useCallback } from 'react';
import { LINKS } from '../data.js';

/* ─── Target Orgs Configuration (Exact Order Requested) ─── */
const TARGET_ORGS = [
    {
        key: 'shipwright',
        name: 'Shipwright',
        handle: 'shipwright-io',
        url: 'https://github.com/shipwright-io',
        avatar: 'https://github.com/shipwright-io.png',
        match: (repo) => repo.toLowerCase().includes('shipwright'),
    },
    {
        key: 'connectrpc',
        name: 'ConnectRPC',
        handle: 'connectrpc',
        url: 'https://github.com/connectrpc',
        avatar: 'https://github.com/connectrpc.png',
        match: (repo) => repo.toLowerCase().includes('connectrpc'),
    },
    {
        key: 'openstatus',
        name: 'OpenStatus HQ',
        handle: 'openstatusHQ',
        url: 'https://github.com/openstatusHQ',
        avatar: 'https://github.com/openstatusHQ.png',
        match: (repo) => repo.toLowerCase().includes('openstatus'),
    },
    {
        key: 'papermarl',
        name: 'Papermark',
        handle: 'papermark',
        url: 'https://github.com/papermark',
        avatar: 'https://github.com/papermark.png',
        match: (repo) => repo.toLowerCase().includes('papermark') || repo.toLowerCase().includes('papermarl'),
    },
];

const KNOWN_MERGED_PRS = new Set([964, 99, 97, 95, 2574]);

/* ─── Pre-computed Fallback Data ─── */
const FALLBACK_ORGS = [
    {
        ...TARGET_ORGS[0],
        items: [
            {
                id: 5382904302, type: 'pr', number: 412,
                title: "feat(cmd): add 'get' subcommand for build and buildrun resources",
                repo: 'shipwright-io/cli', url: 'https://github.com/shipwright-io/cli/pull/412', status: 'open',
            },
            {
                id: 5377305679, type: 'pr', number: 2341,
                title: 'fix: validate referenced volumes in PipelineRun executor before creation',
                repo: 'shipwright-io/build', url: 'https://github.com/shipwright-io/build/pull/2341', status: 'open',
            },
            {
                id: 5365924075, type: 'issue', number: 411,
                title: '[FEATURE] Add missing `get` and `update` subcommands for `build` and `buildrun`',
                repo: 'shipwright-io/cli', url: 'https://github.com/shipwright-io/cli/issues/411', status: 'open',
            },
            {
                id: 5331774475, type: 'pr', number: 409,
                title: 'fix(streamer): prevent skipPath from over-matching .git prefix',
                repo: 'shipwright-io/cli', url: 'https://github.com/shipwright-io/cli/pull/409', status: 'open',
            },
            {
                id: 5323150712, type: 'issue', number: 408,
                title: '[BUG] shp build upload incorrectly excludes real files whose names start with .git',
                repo: 'shipwright-io/cli', url: 'https://github.com/shipwright-io/cli/issues/408', status: 'open',
            },
        ],
    },
    {
        ...TARGET_ORGS[1],
        items: [
            {
                id: 13, type: 'pr', number: 964,
                title: 'Fix dropped headers on errStreamingClientConn',
                repo: 'connectrpc/connect-go', url: 'https://github.com/connectrpc/connect-go/pull/964', status: 'merged',
            },
            {
                id: 14, type: 'issue', number: 963,
                title: 'errStreamingClientConn Does Not Preserve Headers',
                repo: 'connectrpc/connect-go', url: 'https://github.com/connectrpc/connect-go/issues/963', status: 'closed',
            },
        ],
    },
    {
        ...TARGET_ORGS[2],
        items: [
            {
                id: 99, type: 'pr', number: 99,
                title: 'perf: eliminate redundant metadata aggregation on infinite scroll',
                repo: 'openstatusHQ/data-table-filters', url: 'https://github.com/openstatusHQ/data-table-filters/pull/99', status: 'merged',
            },
            {
                id: 98, type: 'issue', number: 98,
                title: 'Excessive Aggregation on Infinite Scroll (Heavy Network & CPU Load)',
                repo: 'openstatusHQ/data-table-filters', url: 'https://github.com/openstatusHQ/data-table-filters/issues/98', status: 'closed',
            },
            {
                id: 97, type: 'pr', number: 97,
                title: 'perf: Refactor groupChartData to O(n) mathematical spatial indexing',
                repo: 'openstatusHQ/data-table-filters', url: 'https://github.com/openstatusHQ/data-table-filters/pull/97', status: 'merged',
            },
            {
                id: 96, type: 'issue', number: 96,
                title: '⚡️ Performance: Refactor groupChartData timeline grouping from O(n*t) to O(n) and remove hardcoded levels',
                repo: 'openstatusHQ/data-table-filters', url: 'https://github.com/openstatusHQ/data-table-filters/issues/96', status: 'closed',
            },
            {
                id: 95, type: 'pr', number: 95,
                title: 'chore(light/api): rewrite stats/facets filter TODO into a NOTE',
                repo: 'openstatusHQ/data-table-filters', url: 'https://github.com/openstatusHQ/data-table-filters/pull/95', status: 'merged',
            },
            {
                id: 2595, type: 'issue', number: 2595,
                title: 'Unauthenticated file upload endpoint at /api/upload',
                repo: 'openstatusHQ/openstatus', url: 'https://github.com/openstatusHQ/openstatus/issues/2595', status: 'closed',
            },
            {
                id: 94, type: 'pr', number: 94,
                title: 'fix(light/api): skip /stats and /facets fetches during infinite scroll pagination',
                repo: 'openstatusHQ/data-table-filters', url: 'https://github.com/openstatusHQ/data-table-filters/pull/94', status: 'closed',
            },
            {
                id: 93, type: 'issue', number: 93,
                title: '🐎 Performance: Prevent redundant fetching of /stats and /facets during infinite scroll',
                repo: 'openstatusHQ/data-table-filters', url: 'https://github.com/openstatusHQ/data-table-filters/issues/93', status: 'closed',
            },
            {
                id: 2576, type: 'issue', number: 2576,
                title: 'UI: Add checkbox column to DataTableSkeleton to prevent layout shift',
                repo: 'openstatusHQ/openstatus', url: 'https://github.com/openstatusHQ/openstatus/issues/2576', status: 'closed',
            },
            {
                id: 2575, type: 'issue', number: 2575,
                title: 'perf(api): optimize status page queries using single SQL query with joins',
                repo: 'openstatusHQ/openstatus', url: 'https://github.com/openstatusHQ/openstatus/issues/2575', status: 'closed',
            },
            {
                id: 2574, type: 'pr', number: 2574,
                title: 'feat(dashboard): add github action code example to cli page',
                repo: 'openstatusHQ/openstatus', url: 'https://github.com/openstatusHQ/openstatus/pull/2574', status: 'merged',
            },
            {
                id: 2570, type: 'issue', number: 2570,
                title: 'feat(dashboard): add missing GitHub Action code example in CLI page',
                repo: 'openstatusHQ/openstatus', url: 'https://github.com/openstatusHQ/openstatus/issues/2570', status: 'closed',
            },
        ],
    },
    {
        ...TARGET_ORGS[3],
        items: [
            {
                id: 2197, type: 'pr', number: 2197,
                title: 'docs: Add comprehensive contributor setup guidelines and update README',
                repo: 'papermark/papermark', url: 'https://github.com/papermark/papermark/pull/2197', status: 'open',
            },
            {
                id: 2196, type: 'pr', number: 2196,
                title: 'Restore missing modules causing build failures',
                repo: 'papermark/papermark', url: 'https://github.com/papermark/papermark/pull/2196', status: 'open',
            },
            {
                id: 2195, type: 'issue', number: 2195,
                title: 'Title: Restore missing modules causing build failures',
                repo: 'papermark/papermark', url: 'https://github.com/papermark/papermark/issues/2195', status: 'open',
            },
            {
                id: 2194, type: 'issue', number: 2194,
                title: 'feat: Add "Rename" option to document list view',
                repo: 'papermark/papermark', url: 'https://github.com/papermark/papermark/issues/2194', status: 'open',
            },
        ],
    },
];

/* ─── Icons matching GitHub Primer Exact Styles ─── */
function PRIcon({ status }) {
    if (status === 'merged') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#8250df" style={{ flexShrink: 0 }}>
                <path d="M5.45 5.154A4.25 4.25 0 0 0 9.165 7.5h1.585a2.251 2.251 0 1 1 0 1.5H9.165A5.75 5.75 0 0 1 4 4.361V3.75a2.25 2.25 0 1 1 1.45 2.404ZM4.75 3a.75.75 0 1 0 0 1.5A.75.75 0 0 0 4.75 3Zm6.5 6.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                <path d="M12 3.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Zm-1.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        );
    }
    if (status === 'open') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#1f883d" style={{ flexShrink: 0 }}>
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h.5A3.5 3.5 0 0 1 14 6v6.628a2.251 2.251 0 1 1-1.5 0V6a2 2 0 0 0-2-2h-.5v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
            </svg>
        );
    }
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#cf222e" style={{ flexShrink: 0 }}>
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
            <path d="M8.22 4.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06Z" />
        </svg>
    );
}

function IssueIcon({ status }) {
    if (status === 'open') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#1f883d" style={{ flexShrink: 0 }}>
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
            </svg>
        );
    }
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#8250df" style={{ flexShrink: 0 }}>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm3.03 5.47-3.5 3.5-1.5-1.5a.75.75 0 1 0-1.06 1.06l2.03 2.03a.75.75 0 0 0 1.06 0l4.03-4.03a.75.75 0 1 0-1.06-1.06Z" />
        </svg>
    );
}

function ItemIcon({ type, status }) {
    return type === 'pr' ? <PRIcon status={status} /> : <IssueIcon status={status} />;
}

/* ─── Components ─── */
function OSSRow({ item }) {
    return (
        <div className="oss2-row">
            <div className="oss2-row-icon">
                <ItemIcon type={item.type} status={item.status} />
            </div>
            <a className="oss2-row-title" href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
            </a>
            <a className="oss2-row-repo" href={`https://github.com/${item.repo}`} target="_blank" rel="noopener noreferrer">
                {item.repo}
            </a>
        </div>
    );
}

function OrgBlock({ org, tab }) {
    const filtered = org.items.filter((item) => {
        if (tab === 'all') return true;
        if (tab === 'prs') return item.type === 'pr';
        if (tab === 'issues') return item.type === 'issue';
        return true;
    });

    if (filtered.length === 0) return null;

    const prCount = org.items.filter((i) => i.type === 'pr').length;
    const issueCount = org.items.filter((i) => i.type === 'issue').length;

    let badgeText = '';
    if (tab === 'all') badgeText = `${filtered.length} Contributions (${prCount} PR${prCount !== 1 ? 's' : ''}, ${issueCount} Issue${issueCount !== 1 ? 's' : ''})`;
    if (tab === 'prs') badgeText = `${prCount} Pull Request${prCount !== 1 ? 's' : ''}`;
    if (tab === 'issues') badgeText = `${issueCount} Issue${issueCount !== 1 ? 's' : ''}`;

    return (
        <div className="oss2-org">
            <div className="oss2-org-header">
                <div className="oss2-org-left">
                    <img className="oss2-org-avatar" src={org.avatar} alt={org.name} width={24} height={24} />
                    <a className="oss2-org-name" href={org.url} target="_blank" rel="noopener noreferrer">
                        {org.name}
                    </a>
                </div>
                <span className="oss2-org-badge">{badgeText}</span>
            </div>
            <div className="oss2-rows">
                {filtered.map((item) => (
                    <OSSRow key={item.id || `${item.repo}-${item.number}`} item={item} />
                ))}
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

export default function OSSPage() {
    const [tab, setTab] = useState('all');
    const [orgsData, setOrgsData] = useState(FALLBACK_ORGS);
    const [loading, setLoading] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(null);

    const fetchLiveItems = useCallback(async () => {
        setLoading(true);
        try {
            const username = 'mohit-bhandari45';
            let allItems = [];
            let page = 1;
            while (page <= 2) {
                const res = await fetch(`https://api.github.com/search/issues?q=author:${username}&per_page=100&page=${page}`);
                if (!res.ok) throw new Error(`GitHub API ${res.status}`);
                const data = await res.json();
                if (!data.items || data.items.length === 0) break;
                allItems.push(...data.items);
                if (allItems.length >= data.total_count) break;
                page++;
            }

            const parsedItems = allItems.map((item) => {
                const isPR = !!item.pull_request;
                const repo = item.repository_url.replace('https://api.github.com/repos/', '');
                let status = item.state;
                if (isPR) {
                    if (item.state === 'open') {
                        status = 'open';
                    } else if (item.pull_request?.merged_at || KNOWN_MERGED_PRS.has(item.number)) {
                        status = 'merged';
                    } else {
                        status = 'closed';
                    }
                }
                return {
                    id: item.id,
                    type: isPR ? 'pr' : 'issue',
                    number: item.number,
                    title: item.title,
                    repo: repo,
                    url: item.html_url,
                    status: status,
                    created_at: item.created_at,
                };
            });

            // Map into the exact 4 target orgs in order
            const updatedOrgs = TARGET_ORGS.map((orgConfig) => {
                const items = parsedItems.filter((item) => orgConfig.match(item.repo));
                return {
                    ...orgConfig,
                    items: items.length > 0 ? items : (FALLBACK_ORGS.find(f => f.key === orgConfig.key)?.items || []),
                };
            });

            setOrgsData(updatedOrgs);
            setIsLive(true);
            setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        } catch (err) {
            console.warn('GitHub API live fetch failed, using cached contribution data:', err.message);
            setIsLive(false);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchLiveItems();
    }, [fetchLiveItems]);

    // Calculate global totals
    const totalAll = orgsData.reduce((acc, org) => acc + org.items.length, 0);
    const totalPRs = orgsData.reduce((acc, org) => acc + org.items.filter((i) => i.type === 'pr').length, 0);
    const totalIssues = orgsData.reduce((acc, org) => acc + org.items.filter((i) => i.type === 'issue').length, 0);

    const TABS = [
        { key: 'all', label: `All (${totalAll})` },
        { key: 'prs', label: `Pull Requests (${totalPRs})` },
        { key: 'issues', label: `Issues (${totalIssues})` },
    ];

    return (
        <div className="shell">
            <div className="page-content">
                <section className="section">
                    <div className="container">
                        <div className="oss-header-row">
                            <div className="section-title" style={{ marginBottom: 0 }}>Open Source</div>
                            <div className="oss-live-meta">
                                <span className={`oss-live-badge ${isLive ? 'active' : ''}`}>
                                    <span className="live-dot" />
                                    {isLive ? `Live from GitHub ${lastUpdated ? `(${lastUpdated})` : ''}` : 'GitHub Synced'}
                                </span>
                                <button
                                    className={`oss-refresh-btn ${loading ? 'spinning' : ''}`}
                                    onClick={fetchLiveItems}
                                    title="Sync live data from GitHub"
                                    disabled={loading}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="oss-pill-tabs" style={{ marginTop: '24px' }}>
                            {TABS.map((t) => (
                                <button
                                    key={t.key}
                                    className={`oss-pill-tab${tab === t.key ? ' active' : ''}`}
                                    onClick={() => setTab(t.key)}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        {orgsData.map((org) => (
                            <OrgBlock key={org.key || org.name} org={org} tab={tab} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

