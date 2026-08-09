import {
  Globe,
  Building2,
  Rocket,
  Brain,
  ArrowRight,
  Check,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { homeServices } from '@/data/services';
import SectionHeading from '@/components/SectionHeading';
import MotionDiv from '@/components/MotionDiv';
import Button from '@/components/Button';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Building2,
  Rocket,
  Brain,
};

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="services-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="How I can help you"
          description="Beginner-friendly freelance services designed to get you online and working smarter."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <MotionDiv key={service.title} delay={i} className="card card-hover group flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border-soft bg-ink/50 text-accent-2 transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-content">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted/70">
                  <span className="font-medium text-muted">Ideal for:</span> {service.idealClient}
                </p>
              </MotionDiv>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" variant="secondary">
            Discuss Your Idea <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
