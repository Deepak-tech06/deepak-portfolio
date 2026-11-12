/**
 * Central portfolio data for Deepak's portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Keep details grounded in the resume and linked public repositories.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Deepak B V', displayName: 'Deepak', firstName: 'DEEPAK', seriesTag: 'THE SERIES', originalLabel: 'A DEEPAK ORIGINAL',
  role: 'Full-Stack Developer', tagline: ['Full-Stack Developer', 'AI Integration', 'Web Development'],
  intro: 'BCA graduate and full-stack developer intern building responsive web applications with React, TypeScript, Node.js and PostgreSQL, and connecting them to REST APIs and Python-based AI services.',
  location: 'Bengaluru, India', email: 'deepake4d@gmail.com', phone: '+91 7975439195',
  links: { linkedin: 'https://www.linkedin.com/in/deepak-b-v/', github: 'https://github.com/Deepak-tech06' },
  resumePdf: '/assets/Deep.pdf',
  portrait: { src: '/assets/portrait-720.webp', srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w', alt: 'Portrait of Deepak' },
  interests: ['Full-Stack Development', 'AI Integration', 'Data Analytics', 'Visual Design'],
};

export const education = [
  { school: 'RNS First Grade College', place: 'Bengaluru, India', degree: 'Bachelor of Computer Applications (BCA)', period: '2023 – 2026' },
  { school: 'Jnana Sweekar PU College (Deeksha)', place: 'Bengaluru, India', degree: 'Pre-University Course (PUC)', period: '2021 – 2023' },
];

export const experience = [
  { company: 'Cynaris Solutions Pvt. Ltd.', role: 'Full-Stack Developer Intern', place: 'Bengaluru, India', period: 'Nov 2025 – Dec 2025', points: [
    'Developed four frontend pages for a full-stack internship management platform using React.',
    'Implemented authentication, invitation workflows and admin features with Node.js and Express.js.',
    'Worked with six database models using Sequelize for application data management.',
    'Contributed to a platform integrating React, Express.js and PostgreSQL through Supabase.',
    'Collaborated on project development and version control using Git and GitHub.',
  ] },
];
export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  { id: 'careerforge-ai', title: 'CareerForge AI', year: '2026', genre: 'AI • Career Assistant',
    logline: 'An AI career assistant bringing skill analysis, career matching and personalized learning into one platform.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL', 'FastAPI', 'Resend'],
    build: ['Building a full-stack AI platform for career guidance, resume building, skill gap analysis and learning development.', 'Connecting a Next.js frontend to NestJS APIs and PostgreSQL, with Python/FastAPI services powering AI features.'],
    features: ['Career and skill analysis', 'AI-assisted career guidance', 'Resume and learning tools', 'Full-stack web architecture'], metrics: [],
    github: 'https://github.com/Deepak-tech06/careerforge-ai', palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' }, motif: 'shield' },
  { id: 'cynaris-internship-platform', title: 'Cynaris Internship Platform', year: '2026', genre: 'Full-Stack • Internship Management',
    logline: 'An internship management system connecting student and admin workflows, assignments, invitations and notifications.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'JWT'],
    build: ['Built a platform for managing internship workflows between administrators and students.', 'Connected a React frontend to an Express backend and PostgreSQL with authentication and real-time notifications.'],
    features: ['Admin and student workflows', 'Invite-based registration', 'Assignment tracking', 'Real-time notifications'], metrics: [],
    github: 'https://github.com/Deepak-tech06/cynaris-internship-platform', palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'tenants' },
  { id: 'cynaris-ai', title: 'Cynaris AI Enterprise Website', year: '2025', genre: 'Web • Enterprise',
    logline: 'A responsive multi-page company website for AI, data and cloud solutions.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    build: ['Created responsive layouts, navigation and dropdown menus for a multi-page company website.', 'Published the website on Vercel.'],
    features: ['Responsive design', 'Multi-page navigation', 'Dropdown menus', 'Live website'], metrics: [],
    github: 'https://github.com/Deepak-tech06/cynaris-ai', palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' }, motif: 'flow' },
  { id: 'sewing-machine-service', title: 'Sewing Machine Services', year: '2026', genre: 'Web • Local Services',
    logline: 'A service website helping customers explore sewing machine repairs, sales and doorstep service.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Router'],
    build: ['Designed service listings and direct call or WhatsApp contact paths for a local sewing machine mechanic.', 'Built a responsive interface with theme support and an interactive service location map.'],
    features: ['Repair and machine sales listings', 'Doorstep and workshop services', 'Direct call and WhatsApp links', 'Service location map'], metrics: [],
    github: 'https://github.com/Deepak-tech06/reliable-sewing-machine-service', palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' }, motif: 'flow' },
  { id: 'power-bi-sales-analysis', title: 'Power BI Sales Analysis', year: '2025', genre: 'Data • Business Intelligence',
    logline: 'A sales analysis project turning cleaned sales and customer data into actionable dashboards.',
    stack: ['Power BI', 'Data Cleaning', 'Data Visualization'],
    build: ['Cleaned and modeled sales and customer data.', 'Created dashboards to surface sales insights.'],
    features: ['Sales analysis', 'Customer analysis', 'Interactive dashboards'], metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' }, motif: 'tenants' },];
export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  { id: 'bca', title: 'BCA Graduate', org: 'RNS First Grade College', detail: 'Bachelor of Computer Applications, Bengaluru.', laurel: 'Education' },
  { id: 'internship', title: 'Full-Stack Intern', org: 'Cynaris Solutions Pvt. Ltd.', detail: 'Built frontend pages, backend workflows and data integrations for an internship management platform.', laurel: 'Nov – Dec 2025' },
  { id: 'careerforge', title: 'CareerForge AI', org: 'AI Career Assistant', detail: 'Building a career guidance platform with AI services, skill analysis and learning support.', laurel: '2026 – Present' },
  { id: 'design-system', title: 'Fest Branding', org: 'AAROHI Fest', detail: 'Designed posters, brochures, certificates, tickets and sponsor backdrops with a consistent visual identity.', laurel: 'Design' },
];
export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Google', name: 'Google Analytics – Great Learning (2023)' },
  { issuer: 'Cisco', name: 'Introduction to Cybersecurity (2025)' },
  { issuer: 'Infosys Springboard', name: 'Python Fundamentals (2025)' },
  { issuer: 'Infosys Springboard', name: 'Microsoft Power BI (2025)' },
];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  { id: 'programming', title: 'Programming', subtitle: 'Languages and programming fundamentals', skills: [{ name: 'Python', mono: 'Py' }, { name: 'JavaScript', mono: 'Js' }, { name: 'TypeScript', mono: 'Ts' }, { name: 'Java', mono: 'Jv' }, { name: 'C', mono: 'C' }, { name: 'C++', mono: 'C+' }] },
  { id: 'frontend', title: 'Frontend', subtitle: 'Frameworks and interface libraries', skills: [{ name: 'React', mono: 'Re' }, { name: 'Next.js', mono: 'Nx' }, { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }, { name: 'Tailwind CSS', mono: 'Tw' }, { name: 'MUI', mono: 'Mu' }] },
  { id: 'backend', title: 'Backend', subtitle: 'Server-side development and APIs', skills: [{ name: 'Node.js', mono: 'No' }, { name: 'Express.js', mono: 'Ex' }, { name: 'NestJS', mono: 'Ns' }, { name: 'FastAPI', mono: 'Fa' }, { name: 'PHP', mono: 'Ph' }] },
  { id: 'database', title: 'Database', subtitle: 'Databases and data access', skills: [{ name: 'PostgreSQL', mono: 'Pg' }, { name: 'MySQL', mono: 'My' }, { name: 'MongoDB', mono: 'Mg' }, { name: 'Supabase', mono: 'Sb' }, { name: 'Prisma', mono: 'Pr' }] },
  { id: 'ai-data', title: 'AI & Data', subtitle: 'Intelligent systems and analytics', skills: [{ name: 'Machine Learning', mono: 'ML' }, { name: 'Generative AI', mono: 'AI' }, { name: 'Python', mono: 'Py' }, { name: 'Power BI', mono: 'Bi' }, { name: 'Google Analytics', mono: 'GA' }] },
  { id: 'tools-cloud', title: 'Tools & Cloud', subtitle: 'Development tools and cloud platforms', skills: [{ name: 'Git', mono: 'Gt' }, { name: 'GitHub', mono: 'GH' }, { name: 'Docker', mono: 'Dk' }, { name: 'Postman', mono: 'Pm' }, { name: 'Vercel', mono: 'Ve' }, { name: 'Render', mono: 'Rn' }, { name: 'n8n', mono: 'n8' }] },
  { id: 'productivity', title: 'Productivity', subtitle: 'Microsoft Office tools', skills: [{ name: 'Microsoft Word', mono: 'Wd' }, { name: 'Microsoft Excel', mono: 'Ex' }, { name: 'Microsoft PowerPoint', mono: 'Ppt' }] },
  { id: 'branding-design', title: 'Branding & Design', subtitle: 'Visual identity and promotional design', skills: [{ name: 'Brand Identity', mono: 'Id' }, { name: 'Poster Design', mono: 'Po' }, { name: 'Promotional Design', mono: 'Pd' }, { name: 'Canva', mono: 'Ca' }, { name: 'CapCut', mono: 'Cc' }] },
];
/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  React: ['Cynaris Internship Platform', 'CareerForge AI'],
  TypeScript: ['CareerForge AI', 'Sewing Machine Services'],
  'Next.js': ['CareerForge AI'],
  'Node.js': ['Cynaris Internship Platform', 'CareerForge AI'],
  Python: ['CareerForge AI'],
  NestJS: ['CareerForge AI'],
  'Express.js': ['Cynaris Internship Platform'],
  FastAPI: ['CareerForge AI'],
  PostgreSQL: ['Cynaris Internship Platform', 'CareerForge AI'],
  Supabase: ['Cynaris Internship Platform'],
  Git: ['Public project repositories'],
  GitHub: ['Public project repositories'],
  'Power BI': ['Microsoft Power BI certification'],
  'Google Analytics': ['Google Analytics certification'],
  'Generative AI': ['CareerForge AI'],
  'Brand Identity': ['AAROHI Fest branding'],
  'Poster Design': ['AAROHI Fest posters and promotional materials'],
  'Promotional Design': ['AAROHI Fest brochures, certificates, tickets and sponsor backdrops'],
  Canva: ['AAROHI Fest branding and design'],
  CapCut: ['Design and basic video editing'],
};
export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: '2021 – 2023', synopsis: 'Pre-University studies at Jnana Sweekar PU College (Deeksha).', episodes: [{ code: 'S01 E01', title: 'The PUC Years', description: 'Completed Pre-University Course in Bengaluru.', tags: ['PUC', 'Bengaluru'], runtime: '2021 – 2023', palette: amber }] },
  { number: 2, title: 'Building the Base', period: '2023 – 2026', synopsis: 'Bachelor of Computer Applications at RNS First Grade College.', episodes: [{ code: 'S02 E01', title: 'The BCA Graduate', description: 'Studied computer applications, programming and web development in Bengaluru.', tags: ['BCA', 'Programming', 'Web'], runtime: '2023 – 2026', palette: violet }] },
  { number: 3, title: 'First Industry Experience', period: 'Nov – Dec 2025', synopsis: 'Full-stack development internship at Cynaris Solutions Pvt. Ltd.', episodes: [{ code: 'S03 E01', title: 'The Intern', description: 'Built React pages and implemented authentication, invitation and admin workflows for an internship platform.', tags: ['React', 'Node.js', 'Express.js'], runtime: 'Nov – Dec 2025', palette: ocean }, { code: 'S03 E02', title: 'The Integration', description: 'Worked with Sequelize models and helped connect the application to PostgreSQL through Supabase.', tags: ['Sequelize', 'PostgreSQL', 'Supabase'], runtime: 'Cynaris Solutions', palette: jade }] },
  { number: 4, title: 'Building Products', period: '2025 – Present', synopsis: 'Web products across career guidance, enterprise websites and full-stack services.', episodes: [{ code: 'S04 E01', title: 'The Career Builder', description: 'CareerForge AI brings career assistance, skill analysis and learning support together.', tags: ['Next.js', 'TypeScript', 'AI'], runtime: '2026 – Present', palette: crimson }, { code: 'S04 E02', title: 'The Product Maker', description: 'Cynaris AI and the internship platform combine responsive web experiences with practical workflows.', tags: ['React', 'Node.js', 'Web'], runtime: '2025 – 2026', palette: amber }] },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Education', title: 'BCA', detail: 'RNS First Grade College', palette: amber },
  { label: 'AI Career Assistant', title: 'CareerForge AI', detail: 'Career guidance and skill analysis', palette: crimson },
  { label: 'Internship Platform', title: 'Cynaris', detail: 'Full-stack workflow product', palette: ocean },
  { label: 'Enterprise Website', title: 'Cynaris AI', detail: 'Responsive multi-page site', palette: violet },
  { label: 'Service Website', title: 'Sewing Services', detail: 'Local service information and contact', palette: jade },
  { label: 'Data Analytics', title: 'Power BI', detail: 'Sales analysis and dashboards', palette: amber },
  { label: 'AI Tools', title: 'Claude + Gemini', detail: 'AI integration and prompt engineering', palette: crimson },
  { label: 'Frontend', title: 'React + TypeScript', detail: 'Responsive web applications', palette: ocean },
  { label: 'Internship', title: 'Cynaris Solutions', detail: 'Full-stack developer intern', palette: jade },
  { label: 'Design', title: 'AAROHI Fest', detail: 'Branding and promotional materials', palette: violet },
];
/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'BCA Graduate', lines: ['RNS First Grade College', 'Bengaluru · 2023 – 2026'] },
  { kicker: 'Skills', title: 'Full-stack web.', lines: ['React · TypeScript · Next.js · Node.js · NestJS', 'PostgreSQL · Supabase · Prisma · FastAPI'], chips: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'] },
  { kicker: 'Experience', title: 'Cynaris Solutions', lines: ['Full-Stack Developer Intern', 'Bengaluru · November – December 2025'] },
  { kicker: 'Projects', title: 'Building products', lines: ['CareerForge AI — AI career assistant', 'Cynaris Internship Platform — full-stack workflows', 'Cynaris AI — enterprise website'] },
  { kicker: 'Data & AI', title: 'Make data useful.', lines: ['Power BI · data cleaning · data visualization', 'AI integration · prompt engineering · Claude · Gemini'] },
  { kicker: 'Creative', title: 'Design systems', lines: ['AAROHI fest branding and promotional design', 'Canva · CapCut'] },
];
export type ProfileId = 'deepak' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'deepak',
      name: 'Deepak',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Resume, achievements & skills first',
      color: '#4cc9ff',
      order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    },
    {
      id: 'developer',
      name: 'Developer',
      blurb: 'Projects, stack & GitHub first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
      id: 'creative',
      name: 'Creative',
      blurb: 'The story arc & highlights first',
      color: '#ffb547',
      order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
