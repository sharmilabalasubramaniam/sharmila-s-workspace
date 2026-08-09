export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  problem: string;
  goal: string;
  technologies: string[];
  features: string[];
  lessons: string[];
  futureImprovements: string[];
  github?: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
}

export const projects: Project[] = [
  {
    slug: 'tinimini-ecommerce',
    title: 'Tinimini Ecommerce',
    category: 'Web Development',
    summary:
      'A lightweight ecommerce platform with product browsing, cart management, and a clean checkout flow.',
    description:
      'Tinimini is a compact ecommerce web application built to provide a smooth shopping experience with product listings, cart functionality, and order flow. It focuses on clean UI and responsive design.',
    problem:
      'Small businesses need a simple, affordable online store that customers can use easily without technical friction.',
    goal:
      'Build a responsive ecommerce front-end with product browsing, cart management, and a checkout flow that works well on both mobile and desktop.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Product listing with filtering and search',
      'Cart add, update, and remove functionality',
      'Responsive product detail pages',
      'Simple checkout flow with order summary',
    ],
    lessons: [
      'Practiced component-based architecture and state management for cart logic',
      'Learned how to structure reusable UI components for product cards and layouts',
      'Gained experience with responsive design patterns for ecommerce',
    ],
    futureImprovements: [
      'Add user authentication and order history',
      'Integrate a real payment gateway',
      'Implement an admin dashboard for product management',
    ],
    github: 'https://github.com/sharmilabalasubramaniam',
    status: 'Completed',
  },
  {
    slug: 'citizenshield-ai',
    title: 'CitizenShield AI',
    category: 'AI & Machine Learning',
    summary:
      'An AI-powered citizen safety assistant that analyzes reports and categorizes urgency using natural language processing.',
    description:
      'CitizenShield AI is a prototype that uses natural language processing to analyze citizen-submitted safety reports, classify them by urgency, and route them appropriately. It aims to make safety reporting faster and more organized.',
    problem:
      'Citizen safety reports often come in unstructured formats, making it difficult to prioritize and route them efficiently.',
    goal:
      'Create an AI assistant that reads citizen reports, classifies urgency, and helps organize responses.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Flask'],
    features: [
      'Natural language report analysis and classification',
      'Urgency scoring based on keywords and sentiment',
      'Category tagging for routing to relevant departments',
      'Simple web interface for submitting and viewing reports',
    ],
    lessons: [
      'Gained hands-on experience with NLP preprocessing and text classification',
      'Learned how to design a simple Flask web interface for an ML model',
      'Practiced thinking about real-world impact when designing AI features',
    ],
    futureImprovements: [
      'Train on a larger, more diverse dataset for better accuracy',
      'Add multi-language support for broader accessibility',
      'Integrate with real municipal reporting systems',
    ],
    github: 'https://github.com/sharmilabalasubramaniam',
    status: 'Prototype',
  },
  {
    slug: 'momentum-productivity-agent',
    title: 'Momentum Productivity Agent',
    category: 'AI & Machine Learning',
    summary:
      'A smart productivity assistant that helps users plan tasks, set priorities, and stay focused with AI-suggested schedules.',
    description:
      'Momentum is an AI productivity agent designed to help users organize their daily tasks, set priorities, and receive suggestions for managing their time effectively. It combines task management with intelligent scheduling hints.',
    problem:
      'Many people struggle with task prioritization and time management, especially when juggling multiple responsibilities.',
    goal:
      'Build an AI agent that suggests task priorities and helps users create a focused daily plan.',
    technologies: ['Python', 'AI Agents', 'NLP', 'Streamlit'],
    features: [
      'Task input with priority levels and deadlines',
      'AI-suggested daily schedule based on task urgency and effort',
      'Focus mode with task reminders',
      'Progress tracking with daily summaries',
    ],
    lessons: [
      'Explored how AI agents can reason about task prioritization',
      'Practiced building interactive interfaces with Streamlit',
      'Learned about balancing automation with user control in productivity tools',
    ],
    futureImprovements: [
      'Add calendar integration for real-time scheduling',
      'Implement learning from user habits to improve suggestions',
      'Build a mobile-friendly version',
    ],
    github: 'https://github.com/sharmilabalasubramaniam',
    status: 'In Progress',
  },
  {
    slug: 'mine-guard-iot-drone',
    title: 'Mine Guard IoT Drone',
    category: 'IoT & Automation',
    summary:
      'An IoT drone monitoring system that detects hazardous conditions in mining areas using sensor data and alerts.',
    description:
      'Mine Guard is an IoT-based drone monitoring prototype that collects sensor data from mining environments to detect hazardous conditions such as gas leaks or temperature spikes, and triggers alerts for safety teams.',
    problem:
      'Mining environments pose serious safety risks, and real-time monitoring of hazardous conditions is difficult with traditional methods.',
    goal:
      'Design an IoT monitoring system that uses drone-mounted sensors to detect and alert on hazardous conditions in mining areas.',
    technologies: ['Python', 'IoT', 'Sensors', 'Data Visualization'],
    features: [
      'Sensor data collection for gas, temperature, and humidity',
      'Threshold-based hazard detection and alerting',
      'Real-time data dashboard for monitoring teams',
      'Historical data logging for trend analysis',
    ],
    lessons: [
      'Gained experience with IoT sensor integration and data pipelines',
      'Learned about threshold-based alerting systems and edge cases',
      'Practiced building a real-time monitoring dashboard',
    ],
    futureImprovements: [
      'Add predictive analytics for early hazard forecasting',
      'Integrate autonomous drone path planning',
      'Implement SMS and email alert delivery',
    ],
    github: 'https://github.com/sharmilabalasubramaniam',
    status: 'Prototype',
  },
];
