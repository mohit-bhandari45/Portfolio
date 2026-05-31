/* Central content for the portfolio. Edit values here. */

export const LINKS = {
  email: 'mohitbhandari852@gmail.com',
  phone: '+919548352358',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  leetcode: 'https://leetcode.com/',
  gfg: 'https://www.geeksforgeeks.org/',
};

export const PROJECTS = [
  {
    index: '01', name: 'Koder', type: 'Full-Stack Platform', year: 'Jun – Jul 2025',
    desc: 'A scalable coding platform with a cloud-based editor, multi-language execution engine, challenge system, and real-time analytics — engineered for low-latency interactions under load.',
    points: [
      'Distributed Redis caching and optimized MongoDB aggregation pipelines cut query time and reduced server load under high-concurrency workloads.',
      "Load-tested with simulated concurrent users to ensure stable real-time updates and consistent performance under peak traffic",
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'Passport.js', 'JWT'],
    link: { label: 'Code', href: 'https://github.com/', icon: 'Github' },
  },
  {
    index: '02', name: 'Acrilc', type: 'Social Commerce', year: 'May 2025',
    desc: 'A social commerce platform that lets artists showcase portfolios and connect with fellow creators, built on a scalable, modular frontend architecture.',
    points: [
      'Secure authentication, real-time updates, and highly interactive UI components for smooth collaboration and high reliability during trials.',
      'Recognized by multiple IIT students and startup founders for an innovative, user-centric product with strong market potential.',
    ],
    stack: ['TypeScript', 'Next.js', 'shadcn/ui', 'Express', 'AWS', 'Redis'],
    link: { label: 'Code', href: 'https://github.com/', icon: 'Github' },
  },
];

export const SKILLS = [
  { icon: 'Code', title: 'Languages', violet: true, items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Go'] },
  { icon: 'Layout', title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { icon: 'Layers', title: 'Backend & APIs', items: ['Node.js', 'Express.js', 'Flask'] },
  { icon: 'Database', title: 'Databases', items: ['MongoDB', 'MySQL'] },
  { icon: 'Terminal', title: 'DevOps & Tools', items: ['Docker', 'GitHub CI/CD', 'AWS', 'Git', 'Postman', 'VS Code'] },
  { icon: 'CheckSquare', title: 'Testing & OS', items: ['Mocha', 'Chai', 'Linux', 'Windows'] },
];

export const EXPERIENCE = [
  {
    role: 'Software Development Intern', org: 'Acorn Globus',
    meta: 'Jan 2025 – Present', loc: 'Remote',
    points: [
      'Integrated an AI form builder into the Formester platform, letting users preview AI-generated forms directly on-site without login.',
      'Built a form-resume reminder that automatically sends a resume link to submitters who abandon a form mid-way, improving completion rates.',
      'Implemented an "is-verified" conditional rule that dynamically shows or hides fields based on whether the submitter\'s email is verified.',
      'Created a custom embed configurator for personalizing embedded forms — configurable width, height, background color, and text color.',
    ],
  },
  {
    role: 'JavaScript Development Intern', org: 'W3 Dev',
    meta: 'Aug 2024 – Sep 2024', loc: 'Dehradun, Uttarakhand',
    points: [
      "Enhanced the AI chatbot's prompt-generation logic to deliver more accurate, relevant, and coherent responses.",
      'Built export-to-PDF functionality and integrated chart/graph visualizations for richer data representation in the chatbot.',
      'Implemented a complete chat-history system, letting users access and navigate previous conversations.',
    ],
  },
];

export const STATS = [
  { icon: 'Code', tag: 'LeetCode', num: '630', unit: '+ solved', label: 'Problems solved with a 1549 global contest rating.' },
  { icon: 'Gear', tag: 'GeeksforGeeks', num: '889', unit: '+ score', label: 'Coding score with 266 problems solved.' },
  { icon: 'Star', tag: 'Selected', num: 'McKinsey', unit: '', label: 'Selected for the prestigious McKinsey Forward Learning Program.' },
  { icon: 'Cap', tag: 'Academics', num: '9.1', unit: '/ 10 CGPA', label: 'B.Tech Computer Science, Uttaranchal University.' },
];

export const FACTS = [
  ['Based in', 'Dehradun, Uttarakhand, India'],
  ['Currently', 'SDE Intern · Acorn Globus'],
  ['Degree', 'B.Tech CS · CGPA 9.1'],
  ['Graduating', 'August 2026'],
  ['LeetCode', '630+ solved · 1549 rating'],
  ['Open to', 'Full-time SDE roles · 2026'],
];

export const COURSEWORK = [
  'Data Structures', 'Algorithm Analysis', 'DBMS', 'Operating Systems',
  'Computer Networks', 'Artificial Intelligence', 'Computer Architecture', 'OOPS',
];
