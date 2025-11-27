import arcade from '../assets/arcade.jpg'
import cloud from '../assets/cloud.jpg'
import duolingo from '../assets/duolingo.jpg'
import krishi from '../assets/image.png'
import farmer from '../assets/farmer.png'
import heroPortrait from '../assets/profile.jpg'
import googleCert from '../assets/googlecloud.jpg'
import googleCyberCert from '../assets/googcer.jpg'
import nxtwaveCert from '../assets/nxtwave.jpg'
import yuktaCert from '../assets/yukta.jpg'
import eduCert from '../assets/edu.jpg'
import vitCert from '../assets/vit.jpg'
import robotImg from '../assets/robot.png'
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiOpenjdk,
  SiC,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si'
import { FaBrain, FaRobot } from 'react-icons/fa'

export const heroContent = {
  greeting: "Hi, I'm Dharani V",
  roles: [
    'AI/ML Engineer',
    'Deep Learning Explorer',
    'Full-Stack Developer',
  ],
  description:
    'A curious, forward-thinking Full-Stack Developer and emerging AI enthusiast, dedicated to crafting refined, efficient, and visually elegant digital experiences.',
  ctaPrimary: {
    label: 'Download Resume',
    href: '/resume/dharani_resume.pdf',
  },
  ctaSecondary: {
    label: "Let's Connect",
    href: '/contact',
  },
  location: 'Kallakurichi, India',
  heroImage: heroPortrait,
  bio: 'A highly curious and driven second-year B.E. CSE student at KSR College of Engineering, with a profound fascination for Generative AI and a strong commitment to full-stack development.',
}

export const statsContent = [
  {
    label: 'Years in Tech',
    value: '1',
    description: 'Building & Learning',
  },
  {
    label: 'Projects Completed',
    value: '3',
    description: 'AI & Full-Stack',
  },
  {
    label: 'Languages Mastered',
    value: '3+',
    description: 'Python, Java, C, JS, HTML, CSS',
  },
  {
    label: 'Technologies',
    value: '5+',
    description: 'React, ML Frameworks & More',
  },
]

export const aboutContent = {
  bio: 'I’m a passionate full-stack developer exploring the world of AI, focusing on LLMs, prompt engineering, and building intelligent, modern digital experiences.',
  details: [
    { label: 'Date of Birth', value: '30 Nov 2006' },
    { label: 'College', value: 'KSR College of Engineering, Thiruchengode' },
    { label: 'Program', value: 'B.E Computer Science & Engineering (2nd Year)' },
    { label: 'Focus', value: 'AI, ML, Deep Learning, Full-Stack' },
  ],
  highlights: [
    'Exploring advanced prompt engineering techniques to design precise, reliable, and context-aware interactions with AI models.',
    'Deepening my understanding of Large Language Models by exploring their architecture, training workflows, fine-tuning techniques, and real-world applications.',
  ],
}

export const timelineContent = [
  {
    period: '2025 — Present',
    title: 'GenAI & Deep Learning Explorer',
    description:
      'Building prototypes that combine LLMs, computer vision, and conversational UX for education and agriculture.',
  },
  {
    period: '2023 — Present',
    title: 'B.E CSE, KSR College of Engineering',
    description:
      'Maintaining strong academic performance while leading student projects focused on AI adoption and web innovation.',
  },
  {
    period: '2022 — 2023',
    title: 'Full-Stack Foundations',
    description:
      'Shipped responsive web experiences with semantic HTML, modern CSS, and React component systems.',
  },
]

export const spotlightContent = [
  {
    title: 'Project Intelligence',
    description: 'Research-backed AI tools and full-stack stacks designed for real users.',
    to: '/projects',
    action: 'Explore Projects',
  },
  {
    title: 'Resume & Achievements',
    description: 'Recognized for completing industry-standard challenges and expanding my technical abilities through hands-on learning.',
    to: '/resume',
    action: 'View Resume',
  },
  {
    title: 'Collaborate',
    description: 'Open to internships, joint research, and community initiatives.',
    to: '/contact',
    action: 'Contact Dharani',
  },
]

export const skillsContent = [
  { name: 'Python', icon: SiPython, level: 'Expert', category: 'Core' },
  { name: 'Java', icon: SiOpenjdk, level: 'Advanced', category: 'Core' },
  { name: 'C', icon: SiC, level: 'Advanced', category: 'Core' },
  { name: 'HTML5', icon: SiHtml5, level: 'Advanced', category: 'UI' },
  { name: 'CSS3', icon: SiCss3, level: 'Advanced', category: 'UI' },
  { name: 'JavaScript', icon: SiJavascript, level: 'Advanced', category: 'UI' },
  { name: 'React', icon: SiReact, level: 'Advanced', category: 'UI' },
  { name: 'TensorFlow', icon: SiTensorflow, level: 'Intermediate', category: 'AI' },
  { name: 'PyTorch', icon: SiPytorch, level: 'Intermediate', category: 'AI' },
  { name: 'GenAI', icon: FaRobot, level: 'Exploring', category: 'AI' },
  { name: 'Cognitive Systems', icon: FaBrain, level: 'Exploring', category: 'AI' },
]

export const areasOfInterest = [
  {
    title: 'Generative AI',
    description: 'Exploring LLMs, prompt engineering, and AI-powered applications',
    color: '#FF6B6B',
  },
  {
    title: 'Deep Learning',
    description: 'Neural networks, computer vision, and model optimization',
    color: '#4ECDC4',
  },
  {
    title: 'Web Development',
    description: 'Building responsive, modern, and user-centric web experiences',
    color: '#45B7D1',
  },
  {
    title: 'Machine Learning',
    description: 'Data analysis, predictive modeling, and intelligent systems',
    color: '#FFA07A',
  },
  {
    title: 'Cloud Computing',
    description: 'Scalable architectures and serverless deployments',
    color: '#98D8C8',
  },
  {
    title: 'AI Ethics',
    description: 'Responsible AI development and ethical considerations',
    color: '#F7B731',
  },
]

export const projectContent = [
  {
    title: 'Krishi Sakthi: Vercel Farmer Resource Hub',
    description:
      'A multilingual web hub that centralizes agronomy best practices, weather-aware advisories, and AI-powered recommendations to help farmers make confident decisions.',
    stack: ['React', 'Vercel', 'API Integrations'],
    live: 'https://krishi-sakhi-smoky.vercel.app',
    code: 'https://github.com/DHARANIVIP',
    image: krishi,
  },
  {
    title: 'Krishi Sakthi Q&A on Streamlit',
    description:
      'Conversational assistant built with Streamlit that answers Kerala farmer queries using curated datasets, knowledge retrieval, and lightweight language models.',
    stack: ['Streamlit', 'Python'],
    live: 'https://krishi-sakhi-innovix-yp7whczthex5zaachik6gu.streamlit.app',
    code: 'https://github.com/DHARANIVIP/krishi-sakhi',
    image: farmer,
  },

  {
    title: 'Nexus AI Chatbot',
    description:
      'An intelligent AI-powered chatbot built with advanced natural language processing to provide seamless conversational experiences and smart assistance.',
    stack: ['React', 'AI/ML', 'Vercel'],
    live: 'https://nexus-ai-rosy.vercel.app',
    code: 'https://github.com/DHARANIVIP',
    image: robotImg,
  },
]

export const galleryContent = [
  {
    title: 'Google Arcade Challenge',
    description: 'Leveling up my cloud expertise to unlock the Legend Tier and the 2025 Arcade swag collection.',
    image: arcade,
  },
  {
    title: '',
    description: 'Sharing insights on GenAI adoption with peers at KSR College.',
    image: cloud,
  },
  {
    title: 'Streamlit Launch',
    description: 'Deploying the farmer helpdesk MVP to gather feedback quickly.',
    image: duolingo,
  },
]

export const certificateContent = [
  {
    title: 'Yukta Symposium',
    issuer: 'PSGItech',
    year: '2024',
    description: 'Technical symposium participation and achievement.',
    image: yuktaCert,
  },

  {
    title: 'Full-Stack Web Development',
    issuer: 'NXT Wave',
    year: '2024',
    description: 'Built responsive applications covering HTML, CSS, JavaScript, and React ecosystems.',
    image: nxtwaveCert,
  },
  {
    title: 'Google Arcade Game',
    issuer: 'Google Cloud Skills Boost',
    year: '2025',
    description: 'Earned the Google Cloud Certificate of Excellence by completing Arcade challenges, skill badges, and labs, achieving the Ranger Tier with outstanding performance.',
    image: googleCert,
  },
  {
    title: 'Google Solution Achievements',
    issuer: 'Google',
    year: '2024',
    description: 'Proud to receive the Google Solution Challenge Certificate for contributing an innovative, AI-driven idea focused on solving real-world problems.',
    image: googleCyberCert,
  },
  {
    title: 'Educational Achievement',
    issuer: 'Educational Institution',
    year: '2024',
    description: 'Recognition for outstanding academic performance and contribution to educational initiatives.',
    image: eduCert,
  },
  {
    title: 'VIT Technical Symposium',
    issuer: 'VIT University',
    year: '2024',
    description: 'Participated in technical symposium showcasing innovative projects and technical expertise.',
    image: vitCert,
  },
]
export const resumeContent = {
  summary:
    'Highlights coursework in Data Structures, Probability, and AI fundamentals alongside hands-on deployments for farmer enablement. Includes project impact, leadership roles, and technical proficiencies.',
  fileUrl: '/resume/dharani_resume.pdf',
}

export const contactContent = {
  email: 'vvdharani58@gmail.com',
  location: 'Kallakurichi, India',
  availability: 'Open to internships, collaborations, and research partnerships.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/DHARANIVIP' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dharani-v' },
    { label: 'Twitter', url: 'https://x.com/' },
  ],
}



