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
      'Distributed Redis caching and optimized MongoDB aggregation pipelines cut query time and reduced server load under high-concurrency workloads.',
      'Load-tested with simulated concurrent users to ensure stable real-time updates and consistent performance under peak traffic.',
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
    name: 'Cody',
    type: 'Backend',
    year: '2025',
    desc: 'An AI-powered PR review bot that automatically reviews pull requests on GitHub. Webhook-driven, queue-based architecture ensures fast GitHub responses while LLM analysis runs in the background.',
    points: [
      'HMAC-SHA256 signature verification on every webhook event prevents forged requests from triggering the bot.',
      'BullMQ + Redis decouples the webhook receiver from slow LLM calls; Socket.IO dashboard provides live job-status visibility.',
    ],
    stack: ['Node.js', 'TypeScript', 'Express', 'BullMQ', 'Redis', 'Socket.IO', 'GitHub API'],
    github: 'https://github.com/mohit-bhandari45/Cody',
  },
  {
    index: '04',
    name: 'Backend Ledger',
    type: 'Backend',
    year: '2025',
    desc: 'A robust backend API system designed for secure ledger management and financial data consistency.',
    points: [
      'Developed core ledger logic to safely record and process transactions.',
      'Implemented secure data handling and integration endpoints for client systems.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/mohit-bhandari45/backend-ledger1',
  },
];

/* Projects shown on the home page (no type distinction) */
export const HOME_PROJECTS = [
  FULL_STACK_PROJECTS[0], // Koder
  BACKEND_PROJECTS[0],    // Cody
];

export const SKILLS = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Go'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { title: 'Backend & APIs', items: ['Node.js', 'Express.js', 'Flask'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL'] },
  { title: 'DevOps & Tools', items: ['Docker', 'GitHub CI/CD', 'AWS', 'Git', 'Postman'] },
  { title: 'Testing & OS', items: ['Mocha', 'Chai', 'Linux', 'Windows'] },
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
  ['Currently', 'CS Student'],
  ['Degree', 'B.Tech CS · CGPA 9.1'],
  ['Graduating', 'August 2026'],
  ['LeetCode', '630+ solved · 1549 rating'],
  ['Open to', 'Full-time SDE roles · 2026'],
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
