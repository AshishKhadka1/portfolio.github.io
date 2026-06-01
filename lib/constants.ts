import { Project, Skill, Certificate, NavItem } from './types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const skills: Skill[] = [
  {
    category: 'Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs', 'NLP', 'Computer Vision', 'Deep Learning'],
  },
  {
    category: 'Backend Development',
    skills: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Frontend Development',
    skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Web APIs', 'Framer Motion'],
  },
  {
    category: 'Data & DevOps',
    skills: ['NumPy', 'Pandas', 'Git', 'AWS', 'CI/CD', 'Linux', 'Cloud Architecture'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Advanced NLP Model Optimization',
    description: 'Optimized transformer models for production deployment with 40% latency reduction',
    longDescription: 'Built and fine-tuned large language models with novel optimization techniques. Implemented quantization and pruning strategies to reduce model size by 50% while maintaining 98% accuracy. Deployed on AWS infrastructure handling 10K+ daily requests.',
    image: '/projects/nlp-optimization.jpg',
    tags: ['Deep Learning', 'NLP', 'Production'],
    github: 'https://github.com',
    featured: true,
    technologies: ['PyTorch', 'Transformers', 'ONNX', 'AWS'],
  },
  {
    id: '2',
    title: 'Real-time Data Pipeline',
    description: 'Scalable streaming data architecture processing 1M+ events per second',
    longDescription: 'Designed and implemented a distributed streaming architecture using Kafka and Apache Spark. Created data validation and transformation pipelines with 99.99% uptime. Reduced data latency from 30s to <1s.',
    image: '/projects/data-pipeline.jpg',
    tags: ['Backend', 'Big Data', 'Infrastructure'],
    github: 'https://github.com',
    featured: true,
    technologies: ['Kafka', 'Apache Spark', 'Python', 'PostgreSQL'],
  },
  {
    id: '3',
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation system improving user engagement by 35%',
    longDescription: 'Developed collaborative filtering and content-based recommendation algorithms. Implemented A/B testing framework for continuous model improvement. Achieved 92% precision in recommendations.',
    image: '/projects/recommendation.jpg',
    tags: ['ML', 'Backend', 'Analytics'],
    github: 'https://github.com',
    featured: true,
    technologies: ['Python', 'FastAPI', 'Redis', 'PostgreSQL'],
  },
  {
    id: '4',
    title: 'Full-Stack ML Dashboard',
    description: 'Interactive dashboard for model monitoring and performance analysis',
    longDescription: 'Built comprehensive monitoring dashboard with real-time metrics visualization. Integrated model performance tracking, data drift detection, and automated alerting.',
    image: '/projects/ml-dashboard.jpg',
    tags: ['Full Stack', 'Data Viz', 'MLOps'],
    github: 'https://github.com',
    featured: false,
    technologies: ['React', 'Next.js', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: '5',
    title: 'Computer Vision Pipeline',
    description: 'Custom CNN for image classification achieving 96.5% accuracy',
    longDescription: 'Developed and trained custom convolutional neural networks for specialized image classification tasks. Implemented data augmentation and transfer learning strategies.',
    image: '/projects/cv-pipeline.jpg',
    tags: ['Deep Learning', 'Computer Vision', 'ML'],
    github: 'https://github.com',
    featured: false,
    technologies: ['TensorFlow', 'OpenCV', 'Python', 'AWS'],
  },
]

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Deep Learning Specialization',
    issuer: 'Coursera (Andrew Ng)',
    date: '2023',
    credentialUrl: 'https://coursera.org',
  },
  {
    id: '2',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://aws.amazon.com',
  },
  {
    id: '3',
    title: 'Data Engineering Nanodegree',
    issuer: 'Udacity',
    date: '2022',
    credentialUrl: 'https://udacity.com',
  },
  {
    id: '4',
    title: 'Kubernetes Developer Certification',
    issuer: 'Linux Foundation',
    date: '2022',
    credentialUrl: 'https://linuxfoundation.org',
  },
]

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Twitter', url: 'https://twitter.com' },
  { label: 'Email', url: 'mailto:hello@example.com' },
]
