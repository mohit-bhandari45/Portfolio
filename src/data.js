/* Central content for the portfolio. Edit values here. */

export const LINKS = {
  email: 'mohitbhandari852@gmail.com',
  phone: '+919548352358',
  github: 'https://github.com/mohit-bhandari45',
  linkedin: 'https://www.linkedin.com/in/mohit-bhandari45',
  leetcode: 'https://leetcode.com/u/mohitbhandari852'
};

export const PROJECTS = [
  {
    index: '01', name: 'Koder', type: 'Full-Stack Platform', year: 'Jun – Jul 2025',
    desc: 'A scalable coding platform with a cloud-based editor, multi-language execution engine, challenge system, and real-time analytics — engineered for low-latency interactions under load.',
    points: [
      'Distributed Redis caching and optimized MongoDB aggregation pipelines cut query time and reduced server load under high-concurrency workloads.',
      'Load-tested with 100+ concurrent simulated users — stable real-time updates and consistent performance during peak traffic.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'JWT'],
    link: { label: 'Code', href: 'https://github.com/', icon: 'Github' },
  },
  {
    index: '02', name: 'Acrilc', type: 'Social Commerce', year: 'May 2025',
    desc: 'A social commerce platform that lets artists showcase portfolios and collaborate, built on a scalable, modular frontend architecture.',
    points: [
      'Secure authentication, real-time updates, and highly interactive UI components for a reliable, responsive experience.',
      'Recognized by multiple IIT students and startup founders for an innovative, user-centric product with strong market potential.',
    ],
    stack: ['TypeScript', 'Next.js', 'shadcn/ui', 'Express', 'AWS', 'Redis'],
    link: { label: 'Code', href: 'https://github.com/', icon: 'Github' },
  },
  {
    index: '03', name: 'Utility-Surge', type: 'Open Source · npm', year: 'Mar 2025',
    desc: 'A lightweight, dependency-free Node.js utility library with high-performance string manipulation and text encoding/decoding helpers for both server and browser.',
    points: [
      'Modular, API-ready utilities focused on performance, minimal bundle size, and maintainable structure.',
      'Unit-tested and documented — shipped v1.2.0 to npm for reliability and long-term maintainability.',
    ],
    stack: ['JavaScript', 'Node.js', 'npm', 'Mocha', 'Chai', 'Git'],
    link: { label: 'npm', href: 'https://www.npmjs.com/package/utility-surge', icon: 'Npm' },
  },
];

export const SKILLS = [
  { icon: 'Code', title: 'Languages', violet: true, items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Go'] },
  { icon: 'Layout', title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'shadcn/ui'] },
  { icon: 'Layers', title: 'Backend & APIs', items: ['Node.js', 'Express.js', 'Flask', 'BullMQ', 'JWT'] },
  { icon: 'Database', title: 'Databases', items: ['MongoDB', 'MySQL', 'Redis'] },
  { icon: 'Terminal', title: 'DevOps & Tools', items: ['Docker', 'GitHub CI/CD', 'AWS', 'Git', 'Postman', 'VS Code'] },
  { icon: 'CheckSquare', title: 'Testing & OS', items: ['Mocha', 'Chai', 'Linux', 'Windows'] },
];

export const STATS = [
  { icon: 'Code', tag: 'LeetCode', num: '630', unit: '+ solved', label: 'Problems solved with a 1549 global contest rating.' },
  { icon: 'Gear', tag: 'GeeksforGeeks', num: '889', unit: '+ score', label: 'Coding score with 266 problems solved.' },
  { icon: 'Star', tag: 'Selected', num: 'McKinsey', unit: '', label: 'Selected for the prestigious McKinsey Forward Learning Program.' },
  { icon: 'Cap', tag: 'Academics', num: '9.1', unit: '/ 10 CGPA', label: 'B.Tech Computer Science, Uttaranchal University.' },
];

export const FACTS = [
  ['Based in', 'Dehradun, Uttarakhand, India'],
  ['Focus', 'Full-stack web · Systems'],
  ['Degree', 'B.Tech CS · CGPA 9.1'],
  ['Graduating', 'August 2026'],
  ['LeetCode', '630+ solved · 1549 rating'],
  ['Open to', 'SDE / Full-stack roles'],
];

export const COURSEWORK = [
  'Data Structures', 'Algorithm Analysis', 'DBMS', 'Operating Systems',
  'Computer Networks', 'Artificial Intelligence', 'Computer Architecture', 'OOPS',
];
