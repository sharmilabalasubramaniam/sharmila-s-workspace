import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="projects-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Real projects I've built"
          description="A selection of projects spanning web development, AI, and IoT — each with its own problem to solve."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i % 2} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/projects" variant="secondary">
            View all projects <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
