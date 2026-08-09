import type { MetadataRoute } from 'next';

// TODO_ADD_DOMAIN — replace with your real domain
const SITE_URL = 'https://lumora-studio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/projects/tinimini-ecommerce',
    '/projects/citizenshield-ai',
    '/projects/momentum-productivity-agent',
    '/projects/mine-guard-iot-drone',
    '/skills',
    '/services',
    '/journey',
    '/contact',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/projects' || route === '/contact' ? 0.9 : route === '/services' ? 0.8 : 0.6,
  }));
}
