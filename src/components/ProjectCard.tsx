import Link from 'next/link';
import { Github, ArrowRight } from 'lucide-react';
import { type Project } from '@/data/projects';
import MotionDiv from '@/components/MotionDiv';

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <MotionDiv delay={delay} className="card card-hover group flex flex-col overflow-hidden p-0">
      {/* Image placeholder */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border-soft bg-ink/40">
        <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-2/10" aria-hidden="true" />
        <span className="relative font-display text-2xl font-bold text-muted/40">
          {project.title}
        </span>
        <span className="absolute left-4 top-4 tag border-accent/30 bg-accent/10 text-accent-2">
          {project.category}
        </span>
        <span
          className={`absolute right-4 top-4 tag ${
            project.status === 'Completed'
              ? 'border-green-500/30 bg-green-500/10 text-green-400'
              : project.status === 'In Progress'
                ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400'
                : 'border-blue-500/30 bg-blue-500/10 text-blue-400'
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-content">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="btn-primary flex-1"
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study <ArrowRight size={15} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-muted transition-colors hover:border-accent/50 hover:text-content"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </MotionDiv>
  );
}
