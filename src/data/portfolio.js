import { FaLinkedin } from 'react-icons/fa';
import {
  FiBookOpen,
  FiBriefcase,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiGlobe,
  FiLayers,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';

export const profile = {
  name: 'Sarada Prasanna Satapathy',
  headline:
    'Practice Director, Education Services @ Veeva Systems | Ex Pegasystems | Pega Certified Lead System Architect',
  tagline:
    'Enabling global workforce excellence through scalable learning ecosystems, curriculum innovation and industry-academia partnerships.',
  email: 'profs_sarada@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/saradapsatapathy/',
  company: 'https://education.veeva.com',
  location: 'Hyderabad, Telangana, India'
};

export const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Expertise', to: 'skills' },
  { label: 'Impact', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Awards', to: 'achievements' },
  { label: 'Education', to: 'education' },
  { label: 'Links', to: 'profiles' },
  { label: 'Contact', to: 'contact' }
];

export const stats = [
  { value: 29, suffix: '+', label: 'Years in IT and education services' },
  { value: 20000, suffix: '+', label: 'Professionals empowered globally' },
  { value: 70, suffix: '%', label: 'Placement rate for certified engineers' },
  { value: 2, prefix: '$', suffix: 'M+', label: 'Program revenue generated' }
];

export const skillGroups = [
  {
    title: 'Education Leadership',
    icon: FiBookOpen,
    items: [
      { name: 'Curriculum Strategy', icon: FiLayers },
      { name: 'Training Management', icon: FiUsers },
      { name: 'Educator Enablement', icon: FiBookOpen },
      { name: 'Program Execution', icon: FiTarget },
      { name: 'Learning Operations', icon: FiTool }
    ]
  },
  {
    title: 'Ecosystem Growth',
    icon: FiGlobe,
    items: [
      { name: 'Industry-Academia Partnerships', icon: FiGlobe },
      { name: 'Partner Development', icon: FiBriefcase },
      { name: 'Customer Success Enablement', icon: FiTrendingUp },
      { name: 'Talent Upskilling', icon: FiUsers },
      { name: 'Sales Pipeline Management', icon: FiTrendingUp }
    ]
  },
  {
    title: 'Platforms & Domains',
    icon: FiCpu,
    items: [
      { name: 'Veeva Education Services', icon: FiCloud },
      { name: 'Life Sciences Enablement', icon: FiDatabase },
      { name: 'Pega Platform', icon: FiCpu },
      { name: 'CRM and BPM', icon: FiLayers },
      { name: 'Oracle, Java and J2EE', icon: FiTool }
    ]
  },
  {
    title: 'AI, Cloud & Learning Tech',
    icon: FiCloud,
    items: [
      { name: 'Prompt Engineering', icon: FiCpu },
      { name: 'Chain-of-Thought Prompting', icon: FiLayers },
      { name: 'Prompt Patterns', icon: FiTarget },
      { name: 'Large Language Models', icon: FiCloud },
      { name: 'AWS Core Services', icon: FiCloud }
    ]
  }
];

export const projects = [
  {
    title: 'Veeva Education Services Practice',
    technologies: ['Veeva', 'Life Sciences', 'Customer Enablement', 'Partner Training'],
    description:
      'Leading Education Services in India to empower customers and partners across drug development and commercial life sciences activities.',
    features: [
      'Quality, Regulatory, Safety and Clinical Operations training',
      'Data, go-to-market and CRM enablement',
      'GCC and partner community awareness',
      'Life sciences ecosystem collaboration'
    ],
    achievement: 'Driving education-led product adoption and partner engagement for Veeva customers.',
    accent: '#0078D4'
  },
  {
    title: 'Pega Global University Program',
    technologies: ['Pega Platform', 'University Enablement', 'Faculty Development', 'Certification'],
    description:
      'Directed Pega flagship university initiatives that built a scalable talent pipeline for the Pega ecosystem.',
    features: [
      'Enabled 1000 to 1500 day-one-ready certified talent every year',
      'Faculty development and Train-the-Trainer programs',
      'University curriculum modernization year over year',
      'Global recognition for India program model'
    ],
    achievement: 'Empowered 20,000+ professionals with 70% placement rate for certified engineers.',
    accent: '#0EA5E9'
  },
  {
    title: 'Technical Enablement Transformation',
    technologies: ['Virtual Training', 'Hybrid Delivery', 'LMS', 'Curriculum Development'],
    description:
      'Managed large-scale learning delivery transitions during pandemic and post-pandemic phases without losing program continuity.',
    features: [
      'Classroom to 100% virtual delivery',
      'Virtual proctored certification exams',
      'Hybrid placement drives and course delivery',
      'LMS, documentation and internal consultant enablement'
    ],
    achievement: 'Built resilient delivery operations across customers, partners, universities and internal teams.',
    accent: '#50E6FF'
  },
  {
    title: 'SQL Star Competency Management',
    technologies: ['Java', 'J2EE', 'Oracle DBA', 'Cognos', 'LMS'],
    description:
      'Led competency development, technical curriculum design and corporate training at SQL Star International.',
    features: [
      'Trained 15,000+ students in India and abroad',
      'Designed 2 Years in 2 Months curriculum for Infosys Mysore',
      'Implemented LMS across 8 knowledge centers',
      'Delivered training needs analysis and faculty assessment'
    ],
    achievement: 'Built long-running technical capability programs for academia and enterprise clients.',
    accent: '#2563EB'
  }
];

export const certifications = [
  'Certified Lead System Architect',
  'Certified Senior System Architect',
  'Certified System Architect',
  'Certified System Architect 7.1',
  'Prompt Engineering for ChatGPT',
  'Introduction to AWS for Non-Engineers: 3 Core Services'
];

export const achievements = [
  {
    title: 'Employee Achievement Award',
    detail: 'Recognized for sustained performance and contribution to technical enablement.'
  },
  {
    title: 'Technical Guru',
    detail: 'Awarded for deep platform knowledge, instruction quality and mentor impact.'
  },
  {
    title: 'Pole Star of UAP',
    detail: 'Recognized for leadership in the University Academic Program.'
  },
  {
    title: "Pega Chairman's Award",
    detail: 'Honored for high-impact contribution within Pegasystems.'
  },
  {
    title: 'Social Change Makers by NASSCOM India',
    detail: 'Recognized for social impact through workforce and education enablement.'
  }
];

export const education = [
  {
    institution: 'S C S College, Puri',
    program: 'Zoology Honors, Chemistry and Botany',
    period: '1992 - 1995',
    result: 'Graduated 1995'
  },
  {
    institution: 'DAV Public School, Bhubaneswar',
    program: 'School Education',
    period: 'Earlier Education',
    result: 'DAV Public School BBSR'
  }
];

export const codingProfiles = [
  {
    name: 'LinkedIn',
    href: profile.linkedin,
    icon: FaLinkedin,
    label: 'Professional profile and experience'
  },
  {
    name: 'Veeva Education',
    href: profile.company,
    icon: FiExternalLink,
    label: 'Education services ecosystem'
  }
];
