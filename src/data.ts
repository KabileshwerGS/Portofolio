import { Project, SkillCategory, EducationItem } from './types';

export const personalInfo = {
  name: 'Kabileshwer G. S',
  role: 'Computer Science & Engineering Student | Full-Stack Web Developer',
  tagline: 'Building scalable and responsive web applications using modern web technologies.',
  location: 'Erode, Tamil Nadu, India',
  email: 'Kabileshwer2604@gmail.com',
  phone: '+91 9363512632',
  linkedin: 'https://www.linkedin.com/in/kabileshwergs',
  github: 'https://github.com/KabileshwerGS',
  about: `Highly motivated Computer Science and Engineering student with a strong interest in designing scalable, efficient, and user-focused web applications. Passionate about transforming ideas into practical digital solutions through modern full-stack development technologies and structured problem-solving approaches. Experienced in developing responsive frontend interfaces, building backend application logic, managing database systems, and creating clean development workflows using technologies such as React.js, Node.js, Express.js, MongoDB, Python, HTML, and CSS. Focused on writing maintainable code, improving application performance, and continuously learning modern software engineering practices. Driven by curiosity to explore real-world technical challenges and develop reliable software solutions that combine functionality, performance, and clean user experience.`,
  ncc: {
    title: 'NCC Air Wing',
    wing: 'National Cadet Corps - Air Wing Cadet',
    description: `Alongside technical development, active participation in NCC Air Wing has strengthened discipline, leadership, teamwork, communication skills, time management, and the ability to perform effectively in high-responsibility environments while maintaining consistency and professionalism.`,
    achievements: [
      'Developed strong discipline and punctuality from rigorous training camps.',
      'Gained essential leadership qualities by organizing team drills and coordinating group tasks.',
      'Refined communication and crisis-handling skills under challenging environments.',
      'Built physical fitness, mental resilience, and structural responsibility representing the Air Wing.'
    ]
  }
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85, icon: 'NodeIcon' },
      { name: 'Express.js', level: 85, icon: 'ExpressIcon' },
      { name: 'REST API Development', level: 90, icon: 'ApiIcon' }
    ]
  },
  {
    title: 'Databases & Programming',
    skills: [
      { name: 'MongoDB', level: 80, icon: 'MongoIcon' },
      { name: 'MySQL', level: 75, icon: 'MysqlIcon' },
      { name: 'Python', level: 80, icon: 'PythonIcon' },
      { name: 'C', level: 85, icon: 'CIcon' },
      { name: 'C++', level: 85, icon: 'CppIcon' },
      { name: 'Problem Solving', level: 85, icon: 'ProblemIcon' }
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 90, icon: 'GitIcon' },
      { name: 'GitHub', level: 95, icon: 'GithubIcon' },
      { name: 'VS Code', level: 95, icon: 'VscodeIcon' },
      { name: 'AntiGravity', level: 95, icon: 'AntiGravityIcon' },
      { name: 'Vercel', level: 90, icon: 'VercelIcon' },
      { name: 'Render', level: 85, icon: 'RenderIcon' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'vyara-hr',
    title: 'Vyara HR',
    category: 'Full-Stack',
    description: 'A comprehensive human resources portal designed to automate onboarding, leave management, and payroll processes.',
    longDescription: 'Vyara HR is a high-performance Human Resource management system built to modernize company operations. It automates employee profile setup, tracks structural leave requests with dynamic multi-tier manager approvals, generates automated detailed payslip reports, and monitors individual performance scores.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'HR Analytics', 'Role-Based Access'],
    features: [
      'Role-based access controls for employees, managers, and HR administrators.',
      'Interactive request portals for leave application and digital document submissions.',
      'Automated payroll calculation ledger referencing active attendance logs.',
      'Graphical HR analytics tracking employee retention rates and leave metrics using interactive widgets.'
    ],
    techUsed: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT Authentication', 'Mongoose', 'Tailwind CSS'],
    githubUrl: 'https://github.com/KabileshwerGS',
    highlights: ['Automated Payroll Engine', 'Leave Request Workflows', 'Manager Approval Rails']
  },
  {
    id: 'trader-management-system',
    title: 'Trader Management System',
    category: 'Full-Stack',
    description: 'A highly responsive merchant coordinator for real-time inventory tracking, billings, and revenue bookkeeping.',
    longDescription: 'Trader Management System serves as a centralized platform for wholesale commercial merchants. It streamlines customer account ledgers, executes live stock tracking with warning flags for low reserves, compiles printable dynamic invoice documents, and aggregates total monthly sales analytics.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Inventory Tracking', 'Financial Bookkeeping'],
    features: [
      'Live stock status tracking tables with automatic visual boundary warnings for raw materials.',
      'Interactive billing portal compiling item selections, pricing tiers, and tax margins instantly.',
      'Printable and downloadable PDF receipt generation engine with digital signature placeholders.',
      'Revenue analytics charting expenses, total profits, and top-selling commodities over custom time offsets.'
    ],
    techUsed: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL Databases', 'Sequelize ORM', 'Recharts'],
    githubUrl: 'https://github.com/KabileshwerGS',
    highlights: ['Real-Time Inventory Alerts', 'Dynamic Receipt Compilation', 'Revenue Visualizer Panels']
  }
];

export const educationData: EducationItem[] = [
  {
    institution: 'K.S. Rangasamy College of Technology',
    degree: 'BE Computer Science & Engineering',
    period: '2024 - Present',
    score: 'CGPA: 8.05',
    details: [
      'Focusing on Computer Architecture, Database Management, Algorithms, and Software Engineering principles.',
      'Actively involved in technical clubs, building and coordinating developer events and hackathons.',
      'Working on real-world projects applying full-stack web development with node and database integration.'
    ],
    activities: ['Technical Symposium Organizer', 'NCC Air Wing Club Representative', 'Coding Coordinator']
  },
  {
    institution: 'Secondary Schooling Certificate (10th Standard)',
    degree: 'General Education Curriculum',
    period: 'Graduated 2022',
    score: 'Score: 79%',
    details: [
      'Acquired fundamental competencies in Mathematics, Science, and Technical Drawing.',
      'Engaged heavily in extracurricular athletics, public speaking, and team leadership events.',
      'Laid down strong programming fundamentals through foundational computer applications curriculum.'
    ],
    activities: ['School Sports Captain', 'State Science Fair Participant']
  }
];
