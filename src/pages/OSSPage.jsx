import { useState } from 'react';
import { LINKS } from '../data.js';

/* ─── Live-accurate data (last verified: 2026-08-27) ─── */
const ORGS = [
    {
        name: 'OpenStatus HQ',
        handle: 'openstatusHQ',
        url: 'https://github.com/openstatusHQ',
        avatar: 'https://avatars.githubusercontent.com/openstatusHQ',
        items: [
            /* ── openstatusHQ/openstatus ── */
            {
                type: 'pr', number: 2574,
                title: 'feat(dashboard): add github action code example to cli page',
                repo: 'openstatusHQ/openstatus',
                repoUrl: 'https://github.com/openstatusHQ/openstatus',
                url: 'https://github.com/openstatusHQ/openstatus/pull/2574',
                status: 'merged', // merged by mxkaske
            },
            {
                type: 'issue', number: 2595,
                title: 'Unauthenticated file upload endpoint at /api/upload',
                repo: 'openstatusHQ/openstatus',
                repoUrl: 'https://github.com/openstatusHQ/openstatus',
                url: 'https://github.com/openstatusHQ/openstatus/issues/2595',
                status: 'closed',
            },
            {
                type: 'issue', number: 2576,
                title: 'UI: Add checkbox column to DataTableSkeleton to prevent layout shift',
                repo: 'openstatusHQ/openstatus',
                repoUrl: 'https://github.com/openstatusHQ/openstatus',
                url: 'https://github.com/openstatusHQ/openstatus/issues/2576',
                status: 'closed',
            },
            {
                type: 'issue', number: 2575,
                title: 'perf(api): optimize status page queries using single SQL query with joins',
                repo: 'openstatusHQ/openstatus',
                repoUrl: 'https://github.com/openstatusHQ/openstatus',
                url: 'https://github.com/openstatusHQ/openstatus/issues/2575',
                status: 'closed',
            },
            {
                type: 'issue', number: 2570,
                title: 'feat(dashboard): add missing GitHub Action code example in CLI page',
                repo: 'openstatusHQ/openstatus',
                repoUrl: 'https://github.com/openstatusHQ/openstatus',
                url: 'https://github.com/openstatusHQ/openstatus/issues/2570',
                status: 'closed',
            },

            /* ── openstatusHQ/data-table-filters ── */
            {
                type: 'pr', number: 99,
                title: 'perf: eliminate redundant metadata aggregation on infinite scroll',
                repo: 'openstatusHQ/data-table-filters',
                repoUrl: 'https://github.com/openstatusHQ/data-table-filters',
                url: 'https://github.com/openstatusHQ/data-table-filters/pull/99',
                status: 'open', // still open / under review
            },
            {
                type: 'pr', number: 97,
                title: 'perf: Refactor groupChartData to O(n) mathematical spatial indexing',
                repo: 'openstatusHQ/data-table-filters',
                repoUrl: 'https://github.com/openstatusHQ/data-table-filters',
                url: 'https://github.com/openstatusHQ/data-table-filters/pull/97',
                status: 'merged', // merged
            },
            {
                type: 'pr', number: 95,
                title: 'chore(light/api): rewrite stats/facets filter TODO into a NOTE',
                repo: 'openstatusHQ/data-table-filters',
                repoUrl: 'https://github.com/openstatusHQ/data-table-filters',
                url: 'https://github.com/openstatusHQ/data-table-filters/pull/95',
                status: 'merged', // merged by mxkaske
            },
            {
                type: 'pr', number: 94,
                title: 'fix(light/api): skip /stats and /facets fetches during infinite scroll pagination',
                repo: 'openstatusHQ/data-table-filters',
                repoUrl: 'https://github.com/openstatusHQ/data-table-filters',
                url: 'https://github.com/openstatusHQ/data-table-filters/pull/94',
                status: 'closed', // closed (superseded), not merged
            },
            {
                type: 'issue', number: 98,
                title: 'Excessive Aggregation on Infinite Scroll (Heavy Network & CPU Load)',
                repo: 'openstatusHQ/data-table-filters',
                repoUrl: 'https://github.com/openstatusHQ/data-table-filters',
                url: 'https://github.com/openstatusHQ/data-table-filters/issues/98',
                status: 'open', // PR #99 pending
            },
            {
                type: 'issue', number: 96,
                title: 'Performance: Refactor groupChartData timeline grouping from O(n*t) to O(n)',
                repo: 'openstatusHQ/data-table-filters',
                repoUrl: 'https://github.com/openstatusHQ/data-table-filters',
                url: 'https://github.com/openstatusHQ/data-table-filters/issues/96',
                status: 'closed', // closed
            },
            {
                type: 'issue', number: 93,
                title: 'Performance: Prevent redundant fetching of /stats and /facets during infinite scroll',
                repo: 'openstatusHQ/data-table-filters',
                repoUrl: 'https://github.com/openstatusHQ/data-table-filters',
                url: 'https://github.com/openstatusHQ/data-table-filters/issues/93',
                status: 'closed',
            },
        ],
    },
    {
        name: 'ConnectRPC',
        handle: 'connectrpc',
        url: 'https://github.com/connectrpc',
        avatar: 'https://avatars.githubusercontent.com/connectrpc',
        items: [
            {
                type: 'pr', number: 964,
                title: 'Fix dropped headers on errStreamingClientConn',
                repo: 'connectrpc/connect-go',
                repoUrl: 'https://github.com/connectrpc/connect-go',
                url: 'https://github.com/connectrpc/connect-go/pull/964',
                status: 'open',
            },
            {
                type: 'issue', number: 963,
                title: 'errStreamingClientConn Does Not Preserve Headers',
                repo: 'connectrpc/connect-go',
                repoUrl: 'https://github.com/connectrpc/connect-go',
                url: 'https://github.com/connectrpc/connect-go/issues/963',
                status: 'open',
            },
        ],
    },
    {
        name: 'OpenFGA',
        handle: 'openfga',
        url: 'https://github.com/openfga',
        avatar: 'https://avatars.githubusercontent.com/openfga',
        items: [
            {
                type: 'pr', number: 3275,
                title: 'fix: enforce deadline on sql tuple iterator to prevent goroutine leaks',
                repo: 'openfga/openfga',
                repoUrl: 'https://github.com/openfga/openfga',
                url: 'https://github.com/openfga/openfga/pull/3275',
                status: 'open',
            },
        ],
    },
];

/* ─── PR icon (git-merge style) ─── */
function PRIcon({ status }) {
    if (status === 'merged') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
                <path fill="#8b5cf6" d="M5.45 5.154A4.25 4.25 0 0 0 9.165 7.5h1.585a2.251 2.251 0 1 1 0 1.5H9.165A5.75 5.75 0 0 1 4 4.361V3.75a2.25 2.25 0 1 1 1.45 2.404ZM4.75 3a.75.75 0 1 0 0 1.5A.75.75 0 0 0 4.75 3Zm6.5 6.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                <path fill="#8b5cf6" d="M12 3.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Zm-1.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        );
    }
    if (status === 'open') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#16a34a" style={{ flexShrink: 0 }}>
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h.5A3.5 3.5 0 0 1 14 6v6.628a2.251 2.251 0 1 1-1.5 0V6a2 2 0 0 0-2-2h-.5v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
            </svg>
        );
    }
    // closed (not merged)
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#6b7280" style={{ flexShrink: 0 }}>
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
            <path d="M8.22 4.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06Z" />
        </svg>
    );
}

/* ─── Issue icon (circle style matching GitHub) ─── */
function IssueIcon({ status }) {
    if (status === 'open') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#16a34a" style={{ flexShrink: 0 }}>
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
            </svg>
        );
    }
    // closed — purple filled circle with checkmark
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
            <path fill="#8b5cf6" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm3.03 5.47-3.5 3.5-1.5-1.5a.75.75 0 1 0-1.06 1.06l2.03 2.03a.75.75 0 0 0 1.06 0l4.03-4.03a.75.75 0 1 0-1.06-1.06Z" />
        </svg>
    );
}

function ItemIcon({ type, status }) {
    return type === 'pr' ? <PRIcon status={status} /> : <IssueIcon status={status} />;
}

/* ─── Row ─── */
function OSSRow({ item }) {
    return (
        <div className="oss2-row">
            <div className="oss2-row-icon">
                <ItemIcon type={item.type} status={item.status} />
            </div>
            <a className="oss2-row-title" href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
            </a>
            <a className="oss2-row-repo" href={item.repoUrl} target="_blank" rel="noopener noreferrer">
                {item.repo}
            </a>
        </div>
    );
}

/* ─── Org block ─── */
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

    let badge = '';
    if (tab === 'all') badge = `${filtered.length} contributions`;
    if (tab === 'prs') badge = `${prCount} Pull Request${prCount !== 1 ? 's' : ''}`;
    if (tab === 'issues') badge = `${issueCount} Issue${issueCount !== 1 ? 's' : ''}`;

    return (
        <div className="oss2-org">
            <div className="oss2-org-header">
                <div className="oss2-org-left">
                    <img className="oss2-org-avatar" src={org.avatar} alt={org.name} width={22} height={22} />
                    <a className="oss2-org-name" href={org.url} target="_blank" rel="noopener noreferrer">
                        {org.name}
                    </a>
                </div>
                <span className="oss2-org-badge">{badge}</span>
            </div>
            <div className="oss2-rows">
                {filtered.map((item) => (
                    <OSSRow key={`${item.type}-${item.number}`} item={item} />
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

const TABS = [
    { key: 'all', label: 'All' },
    { key: 'issues', label: 'Issues' },
    { key: 'prs', label: 'Pull Requests' },
];

export default function OSSPage() {
    const [tab, setTab] = useState('all');

    return (
        <div className="shell">
            <div className="page-content">
                <section className="section">
                    <div className="container">
                        <div className="section-title">Open Source</div>
                        <div className="oss2-tabs">
                            {TABS.map((t) => (
                                <button
                                    key={t.key}
                                    className={`oss2-tab${tab === t.key ? ' oss2-tab--active' : ''}`}
                                    onClick={() => setTab(t.key)}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>
                        {ORGS.map((org) => (
                            <OrgBlock key={org.handle} org={org} tab={tab} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
