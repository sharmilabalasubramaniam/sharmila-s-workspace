import { Brain, ChartBar as BarChart3, Code as Code2, Globe, Cog, ChartLine as LineChart } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import MotionDiv from '@/components/MotionDiv';

interface FocusArea {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const areas: FocusArea[] = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Building prototypes that use NLP, classification, and AI agents to solve real problems.',
    tags: ['NLP', 'Scikit-learn', 'AI Agents'],
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    description: 'Exploring data to find patterns, build models, and support better decisions.',
    tags: ['Pandas', 'NumPy', 'Python'],
  },
  {
    icon: Code2,
    title: 'Python Development',
    description: 'Writing clean Python for web apps, automation scripts, and data pipelines.',
    tags: ['Python', 'Flask', 'Scripting'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Creating fast, responsive websites with modern frameworks and clean design.',
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    icon: Cog,
    title: 'Automation',
    description: 'Automating repetitive tasks so you save time and reduce manual errors.',
    tags: ['Python', 'Scripts', 'Pipelines'],
  },
  {
    icon: LineChart,
    title: 'Data Visualization',
    description: 'Turning data into clear, interactive dashboards that tell a useful story.',
    tags: ['Charts', 'Dashboards', 'Streamlit'],
  },
];

export default function FocusAreas() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="focus-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Focus Areas"
          title="What I work with"
          description="A blend of web development and AI/data skills, applied to real projects."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <MotionDiv key={area.title} delay={i % 3} className="card card-hover group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border-soft bg-ink/50 text-accent-2 transition-colors group-hover:border-accent/40 group-hover:text-accent">
                <area.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-content">{area.title}</h3>
              <p className="mt-2 text-sm text-muted">{area.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
