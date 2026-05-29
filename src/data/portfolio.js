import {
  FaAws,
  FaGithub,
  FaHackerrank,
  FaJava,
  FaLinkedin,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {
  SiC,
  SiCucumber,
  SiEclipseide,
  SiLeetcode,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPycharm
} from 'react-icons/si';
import { BsDatabaseFillGear } from 'react-icons/bs';
import { FiCloud, FiCode, FiDatabase, FiTool } from 'react-icons/fi';

export const profile = {
  name: 'Rajashree Satapathy',
  headline: 'Software Developer | Cloud Enthusiast | QA Automation Engineer',
  tagline: 'Building scalable applications using AWS, Azure, Java and modern testing frameworks.',
  email: 'satapathy.rajashree@gmail.com',
  phone: '+91 8978920676',
  linkedin: 'https://www.linkedin.com/in/rajashree-satapathy-73baa224a/',
  github: 'https://github.com/rajshree601',
  leetcode: 'https://leetcode.com/u/klu_2200031430/',
  hackerrank: 'https://www.hackerrank.com/profile/h2200031430'
};

export const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Education', to: 'education' },
  { label: 'Profiles', to: 'profiles' },
  { label: 'Contact', to: 'contact' }
];

export const stats = [
  { value: 8.55, suffix: ' CGPA', label: 'Academic performance', decimals: 2 },
  { value: 4, suffix: '+', label: 'Production-style projects' },
  { value: 5, suffix: '+', label: 'Certifications' },
  { value: 40000, prefix: 'INR ', suffix: '+', label: 'Annual cloud cost savings' }
];

export const skillGroups = [
  {
    title: 'Programming',
    icon: FiCode,
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
      { name: 'C', icon: SiC },
      { name: 'SQL', icon: BsDatabaseFillGear },
      { name: 'HTML', icon: FaReact },
      { name: 'CSS', icon: FaReact }
    ]
  },
  {
    title: 'Cloud',
    icon: FiCloud,
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: FiCloud },
      { name: 'Lambda', icon: FaAws },
      { name: 'API Gateway', icon: FiCloud },
      { name: 'DynamoDB', icon: FiDatabase },
      { name: 'S3', icon: FaAws },
      { name: 'Amplify', icon: FaAws }
    ]
  },
  {
    title: 'Automation',
    icon: FiTool,
    items: [
      { name: 'REST Assured', icon: FiTool },
      { name: 'Cucumber', icon: SiCucumber },
      { name: 'Postman', icon: SiPostman },
      { name: 'Maven', icon: FiTool }
    ]
  },
  {
    title: 'Databases & Tools',
    icon: FiDatabase,
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'DynamoDB', icon: FiDatabase },
      { name: 'Git', icon: FaGithub },
      { name: 'VS Code', icon: FiCode },
      { name: 'PyCharm', icon: SiPycharm },
      { name: 'Eclipse', icon: SiEclipseide }
    ]
  }
];

export const projects = [
  {
    title: 'Serverless Chat Application',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Amplify'],
    description:
      'Developed a real-time chat application using serverless architecture for scalability and cost efficiency.',
    features: [
      'Real-time messaging',
      'Event-driven architecture',
      'Auto-scaling',
      'Serverless deployment',
      'Reduced infrastructure management'
    ],
    achievement: 'Saved approximately INR 40,000+ annually in operational costs.',
    accent: '#0078D4'
  },
  {
    title: 'Precision API BDD Automation Framework',
    technologies: ['Java', 'REST Assured', 'Cucumber', 'Maven', 'Postman'],
    description:
      'Built a complete API automation framework supporting CRUD validation, reporting, logging and automated execution.',
    features: ['API automation', 'CRUD validation', 'Reporting', 'Logging', 'Postman integration'],
    accent: '#0EA5E9'
  },
  {
    title: 'Tourism & Hospitality Management System',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    description:
      'Developed a web platform for tourist accommodations, reservations and attraction management.',
    features: [
      'Booking management',
      'Accommodation management',
      'Reservation tracking',
      'Backend integration'
    ],
    accent: '#50E6FF'
  },
  {
    title: 'Movie Ticket Booking System',
    technologies: ['C', 'Data Structures'],
    description:
      'Console-based ticket booking and cancellation platform with scheduling and seat management.',
    features: ['Ticket booking', 'Ticket cancellation', 'Seat management', 'Scheduling'],
    accent: '#2563EB'
  }
];

export const certifications = [
  'NPTEL Introduction to Algorithms and Analysis',
  'HackerRank Problem Solving Basic',
  'Claude 101',
  'ServiceNow Virtual Internship',
  'SIP Abacus Grandmaster'
];

export const achievements = [
  {
    title: 'Research Paper Accepted',
    detail: 'Cloud-Native Architecture for Scalable and Secure Retail Applications'
  },
  { title: 'Capture The Flag Competition', detail: 'Secured 3rd Rank' },
  { title: '24 Hour Hackathon', detail: 'Built and presented under rapid delivery constraints' },
  { title: 'Flutter Workshop', detail: 'Google Developer Student Club' }
];

export const education = [
  {
    institution: 'KL University',
    program: 'B.Tech Computer Science and Engineering Honors',
    period: '2022 - 2026',
    result: 'CGPA: 8.55'
  },
  {
    institution: 'Resonance',
    program: 'Intermediate MPC',
    period: '2020 - 2022',
    result: '75%'
  },
  {
    institution: 'DAV Public School',
    program: 'CBSE',
    period: '2010 - 2020',
    result: '84%'
  }
];

export const codingProfiles = [
  { name: 'GitHub', href: profile.github, icon: FaGithub, label: 'Source code and projects' },
  { name: 'LeetCode', href: profile.leetcode, icon: SiLeetcode, label: 'Problem solving profile' },
  { name: 'HackerRank', href: profile.hackerrank, icon: FaHackerrank, label: 'Coding certifications' },
  { name: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin, label: 'Professional network' }
];
