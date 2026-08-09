export interface Service {
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  idealClient: string;
}

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Portfolio Websites',
    description:
      'A clean, professional portfolio that showcases your work and helps you stand out to clients, recruiters, and collaborators.',
    deliverables: ['Custom design', 'Responsive layout', 'Contact form', 'SEO basics'],
    idealClient: 'Students, freelancers, and developers building their personal brand.',
  },
  {
    icon: 'Building2',
    title: 'Business Websites',
    description:
      'A modern website for your small business that communicates what you do and makes it easy for customers to reach you.',
    deliverables: ['Multi-page site', 'Service pages', 'Contact integration', 'Mobile-first design'],
    idealClient: 'Small businesses and startups needing a professional online presence.',
  },
  {
    icon: 'Rocket',
    title: 'Landing Pages',
    description:
      'A fast, focused landing page designed to promote a product, event, or idea and drive visitor action.',
    deliverables: ['Single-page design', 'Clear CTA', 'Fast load speed', 'Responsive layout'],
    idealClient: 'Creators and teams launching a product, campaign, or event.',
  },
  {
    icon: 'Brain',
    title: 'AI & Data Prototypes',
    description:
      'A working prototype that demonstrates an AI or data idea — from text classification to a simple prediction dashboard.',
    deliverables: ['Prototype build', 'Data pipeline', 'Simple interface', 'Documentation'],
    idealClient: 'Students, researchers, and teams exploring AI or data ideas.',
  },
];

export const homeServices: Service[] = services.slice(0, 4);
