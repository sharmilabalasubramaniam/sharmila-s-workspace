import { MessageCircle, Smartphone, Layers, HeartHandshake } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import MotionDiv from '@/components/MotionDiv';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: MessageCircle,
    title: 'Fast Communication',
    description:
      'Quick, clear replies throughout the project. You always know what is happening and what comes next.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description:
      'Every site is designed for mobile first, then scaled up. Your visitors get a great experience on any device.',
  },
  {
    icon: Layers,
    title: 'Modern Tech Stack',
    description:
      'Built with current tools like Next.js, React, Tailwind CSS, and Python so your project is fast and maintainable.',
  },
  {
    icon: HeartHandshake,
    title: 'Honest Collaborative Process',
    description:
      'No jargon or surprises. I explain choices clearly, welcome your feedback, and keep the process transparent.',
  },
];

export default function WhyLumora() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="why-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Lumora"
          title="Why work with Lumora Studio"
          description="A straightforward, dependable process designed to make your project smooth from start to finish."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <MotionDiv key={reason.title} delay={i} className="card card-hover group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border-soft bg-ink/50 text-accent-2 transition-colors group-hover:border-accent/40 group-hover:text-accent">
                <reason.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-content">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted">{reason.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
