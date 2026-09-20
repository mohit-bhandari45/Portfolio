/* Central content for the portfolio. Edit values here. */

export const LINKS = {
  email: 'mohitbhandari852@gmail.com',
  phone: '+919548352358',
  github: 'https://github.com/mohit-bhandari45',
  linkedin: 'https://www.linkedin.com/in/mohit-bhandari45',
  leetcode: 'https://leetcode.com/u/mohitbhandari852',
};

/* All projects — used on Home (subset) and full Projects page  */
export const FULL_STACK_PROJECTS = [
  {
    index: '01',
    name: 'Koder',
    type: 'Full-Stack',
    year: 'Jun – Jul 2025',
    desc: 'A scalable coding platform with a cloud-based editor, multi-language execution engine, challenge system, and real-time analytics — engineered for low-latency interactions under load.',
    points: [
      'Built a low-latency remote code execution engine using Docker and Node.js, safely isolating arbitrary user code and streaming output back to the client in milliseconds.',
      'Designed distributed Redis caching and optimized MongoDB aggregation pipelines, cutting query time by 60% and reducing database load under high-concurrency scenarios.',
      'Load-tested the platform using robust queuing mechanisms (BullMQ) to handle heavy bursts of simultaneous code submissions without dropping real-time updates.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'Passport.js', 'JWT'],
    github: 'https://github.com/mohit-bhandari45/Koder-Frontend',
  },
  {
    index: '02',
    name: 'Acrilc',
    type: 'Full-Stack',
    year: 'May 2025',
    desc: 'A social commerce platform that lets artists showcase portfolios and connect with fellow creators, built on a scalable, modular frontend architecture.',
    points: [
      'Secure authentication, real-time updates, and highly interactive UI components for smooth collaboration and high reliability during trials.',
      'Recognized by multiple IIT students and startup founders for an innovative, user-centric product with strong market potential.',
    ],
    stack: ['TypeScript', 'Next.js', 'shadcn/ui', 'Express', 'AWS', 'Redis'],
    github: 'https://github.com/mohit-bhandari45/Acrilc-Web',
  },
];

export const BACKEND_PROJECTS = [
  {
    index: '03',
    name: 'Reeling',
    type: 'Backend',
    year: '2026',
    desc: 'An asynchronous, high-throughput video processing service written in Go that handles concurrent video uploads, background job queuing, FFmpeg transcoding, and object storage delivery.',
    points: [
      'Architected a stateless, horizontally scalable Go API layer handling concurrent transcode jobs using NATS JetStream as a durable message broker for decoupling upload ingestion from CPU-intensive workloads.',
      'Engineered an asynchronous worker pool wrapping FFmpeg, optimizing processing time and supporting high-concurrency multi-rendition stream generation (HLS) with minimal latency.',
      'Utilized PostgreSQL (pgx/v5) for persistent transactional job state management and AWS S3 / MinIO for scalable delivery, maintaining 100% data consistency during worker crashes.',
      'Implemented idempotent execution logic and retry handlers, ensuring fault-tolerant processing of up to hundreds of concurrent large video payloads.'
    ],
    stack: ['Go', 'FFmpeg', 'PostgreSQL', 'NATS JetStream', 'AWS S3', 'Docker', 'REST API'],
    github: 'https://github.com/mohit-bhandari45/Reeling',
  },
  {
    index: '04',
    name: 'Diffie',
    type: 'Backend',
    year: '2026',
    desc: 'An installable GitHub App and interactive AI code reviewer that performs automated, incremental PR reviews, inline thread explanations, and real-time review pipeline tracking.',
    points: [
      'Built interactive GitHub slash commands (@diffie explain, @diffie review) with inline code thread replies, extracting file paths, line numbers, and diff hunks for context-aware code explanations.',
      'Engineered an incremental state-tracking engine using PostgreSQL (Supabase) and GitHub compareCommits API to isolate newly introduced bugs from resolved issues across commit pushes.',
      'Implemented an automatic multi-LLM fallback pipeline (Google Gemini 3.6 Flash failing over to Groq Llama 3.3 70B) to guarantee uninterrupted reviews during AI API rate limits.',
      'Architected an async queue pipeline using BullMQ, Upstash Redis, and Socket.IO for non-blocking webhook ingestion (200 OK) with live execution updates streamed to a Next.js web dashboard.',
    ],
    stack: ['Node.js', 'TypeScript', 'Google Gemini', 'Groq (Llama 3.3)', 'PostgreSQL', 'BullMQ', 'Redis', 'Socket.IO', 'Next.js'],
    github: 'https://github.com/mohit-bhandari45/Cody',
  },
  {
    index: '05',
    name: 'logfast',
    type: 'Backend',
    year: '2026',
    desc: 'A high-throughput, concurrent log stream analyzer and aggregator in Go that ingests, filters, and calculates real-time percentile metrics (p50, p95, p99) over multi-gigabyte log streams with zero heap allocations on the hot path.',
    points: [
      'Engineered a lock-free Fan-Out / Fan-In concurrency architecture scaling across CPU threads using worker pools and buffered channels, processing 28M+ log lines/sec at 1.98 GB/s disk read bandwidth.',
      'Eliminated heap allocations on the parsing path (0 B/op, 0 allocs/op) via custom zero-copy byte parsing and in-place ASCII digit conversion inside CPU registers, achieving sub-15ns parsing speeds.',
      'Implemented a memory-safe 64KB chunk streaming pipeline with backward newline scanning and tail-stitching to safely preserve log line integrity across chunk boundaries.',
      'Reduced Garbage Collection pauses to zero using sync.Pool buffer recycling (128KB) and bounded circular Ring Buffers, maintaining a flat memory footprint strictly under 18 MB across multi-gigabyte streams.',
      'Authored automated Go benchmark suites (go test -benchmem), mathematically verifying 3x speedups and 100% reduction in memory allocations over standard Go strconv pipelines.',
    ],
    stack: ['Go', 'Cobra CLI', 'Concurrency', 'Goroutines', 'Channels', 'sync.Pool', 'Ring Buffer', 'Benchmarks'],
    github: 'https://github.com/mohit-bhandari45/logfast',
  },
];

/* Projects shown on the home page (no type distinction) */
export const HOME_PROJECTS = [
  BACKEND_PROJECTS[0],    // Reeling
  FULL_STACK_PROJECTS[0], // Koder
];

export const SKILLS = [
  { title: 'Languages', items: ['Go', 'TypeScript', 'Python', 'Java', 'JavaScript'] },
  { title: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST APIs', 'gRPC'] },
  { title: 'Databases & Message Queues', items: ['PostgreSQL', 'Redis', 'MongoDB', 'NATS JetStream', 'BullMQ'] },
  { title: 'Cloud & Infrastructure', items: ['Docker', 'AWS S3', 'MinIO', 'Linux'] },
  { title: 'Architecture & Tools', items: ['System Design', 'FFmpeg', 'Git', 'GitHub CI/CD'] },
];

export const EXPERIENCE = [
  {
    role: 'Software Development Intern',
    org: 'Acorn Globus',
    meta: 'Feb 2025 – Jul 2025',
    loc: 'Remote',
    points: [
      'Integrated an AI form builder into the Formester platform, letting users preview AI-generated forms directly on-site without login.',
      'Built a form-resume reminder that automatically sends a resume link to submitters who abandon a form mid-way, improving completion rates.',
      'Implemented an "is-verified" conditional rule that dynamically shows or hides fields based on whether the submitter\'s email is verified.',
      'Created a custom embed configurator for personalizing embedded forms — configurable width, height, background color, and text color.',
    ],
  },
  {
    role: 'JavaScript Development Intern',
    org: 'W3 Dev',
    meta: 'Aug 2024 – Sep 2024',
    loc: 'Dehradun, Uttarakhand',
    points: [
      "Enhanced the AI chatbot's prompt-generation logic to deliver more accurate, relevant, and coherent responses.",
      'Built export-to-PDF functionality and integrated chart/graph visualizations for richer data representation in the chatbot.',
      'Implemented a complete chat-history system, letting users access and navigate previous conversations.',
    ],
  },
];

export const STATS = [
  { tag: 'LeetCode', num: '630+', label: 'Problems solved · 1549 global contest rating' },
  { tag: 'GeeksforGeeks', num: '889+', label: 'Coding score · 266 problems solved' },
  { tag: 'McKinsey', num: 'Selected', label: 'McKinsey Forward Learning Program' },
  { tag: 'CGPA', num: '9.1', label: 'B.Tech Computer Science, Uttaranchal University' },
];

export const FACTS = [
  ['Based in', 'Dehradun, Uttarakhand, India'],
  ['Status', 'CS Graduate'],
  ['Degree', 'B.Tech CS · CGPA 9.1'],
  ['Interests', 'Distributed Systems, Backend Engineering, Scalability'],
  ['Open to', 'Backend, Platform, and Distributed Systems roles'],
];

export const COURSEWORK = [
  'Data Structures', 'Algorithm Analysis', 'DBMS', 'Operating Systems',
  'Computer Networks', 'Artificial Intelligence', 'Computer Architecture', 'OOPS',
];

/* OSS contributions */
export const OSS = [
  {
    title: 'feat: add user profile endpoint',
    repo: 'mohit-bhandari45/open-contrib-1',
    repoUrl: 'https://github.com/mohit-bhandari45',
    desc: 'Contributed a user profile REST endpoint with validation and test coverage.',
    status: 'merged',
  },
];
