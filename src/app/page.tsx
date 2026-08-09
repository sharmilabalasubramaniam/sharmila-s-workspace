import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { site } from '@/data/site';
import Button from '@/components/Button';

export default function HomePage() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-accent" aria-hidden="true" />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/50 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Open to freelance projects
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {site.location}
            </span>
          </div>

          <h1 className="heading-xl">
            Build modern websites and{' '}
            <span className="text-gradient">intelligent digital solutions.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{site.subheadline}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/projects">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="secondary">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Placeholder note — full home page content coming in Stage 3 */}
      <div className="container-page relative mt-20">
        <div className="rounded-2xl border border-border-soft bg-surface/40 p-6 text-center text-sm text-muted">
          Full home page sections (Why Lumora, Focus Areas, Featured Projects, Services Preview, Work
          Process, Final CTA) will be built in the next stage.
          <Link href="/contact" className="ml-2 text-accent-2 hover:text-accent">
            Visit the contact page →
          </Link>
        </div>
      </div>
    </section>
  );
}
