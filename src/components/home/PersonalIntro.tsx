import { Sparkles } from 'lucide-react';
import { site } from '@/data/site';
import MotionDiv from '@/components/MotionDiv';

export default function PersonalIntro() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="intro-heading">
      <div className="container-page">
        <MotionDiv className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
            <Sparkles className="text-accent-2" size={24} />
          </div>
          <p className="section-eyebrow">Who I Am</p>
          <h2 id="intro-heading" className="mt-3 heading-lg">
            Hi, I&apos;m {site.name.split(' ')[0]}.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I&apos;m an AI &amp; Data Science enthusiast and freelance web developer based in Chennai,
            India. I build real projects that combine clean web design with practical AI and data
            solutions — and I&apos;m actively open to freelance work, collaborations, and internship
            opportunities where I can contribute and grow.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
