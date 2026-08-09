import { MessageCircle, Github, FileText } from 'lucide-react';
import { site } from '@/data/site';
import MotionDiv from '@/components/MotionDiv';
import Button from '@/components/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="container-page">
        <MotionDiv className="relative overflow-hidden rounded-3xl border border-border-soft bg-surface/40 p-8 text-center md:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-radial-accent" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-heading" className="heading-lg">
              Have an idea worth exploring?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Whether it&apos;s a freelance project, a collaboration, an internship opportunity, or just
              a digital idea you want to talk through — I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact">
                <MessageCircle size={16} /> Start a Conversation
              </Button>
              <Button href={site.github} variant="secondary" external ariaLabel="View GitHub profile">
                <Github size={16} /> View GitHub
              </Button>
              <Button href={site.resume} variant="secondary" external ariaLabel="Download resume">
                <FileText size={16} /> Download Resume
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
