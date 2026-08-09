import { Search, ClipboardList, Code as Code2, Rocket } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import MotionDiv from '@/components/MotionDiv';

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'We talk about your idea, goals, and audience. I listen carefully and ask clear questions.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Plan',
    description: 'I outline the scope, timeline, and deliverables so you know exactly what to expect.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description: 'I build your project with regular updates and check-ins, so you see progress as it happens.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'We review, test, and launch. You get a finished product plus guidance on what comes next.',
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="process-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title="How we'll work together"
          description="A simple, transparent process from first conversation to final launch."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <MotionDiv key={step.number} delay={i} className="relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+2.5rem)] right-[-1.5rem] top-8 hidden h-px bg-gradient-to-r from-accent/40 to-transparent md:block"
                  aria-hidden="true"
                />
              )}
              <div className="card card-hover text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                  <step.icon size={24} className="text-accent-2" />
                </div>
                <span className="font-display text-sm font-bold text-accent/60">{step.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-content">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
