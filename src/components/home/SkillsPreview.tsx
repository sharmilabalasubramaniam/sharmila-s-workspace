import { skillGroups, learningSkills } from '@/data/skills';
import SectionHeading from '@/components/SectionHeading';
import MotionDiv from '@/components/MotionDiv';
import { BookOpen } from 'lucide-react';

export default function SkillsPreview() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="skills-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I use"
          description="Grouped by area — these are the tools I reach for when building projects."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <MotionDiv key={group.category} delay={i % 2} className="card">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-bold text-content">{group.category}</h3>
                <span className="text-xs text-muted">{group.label}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Currently learning */}
        <MotionDiv delay={0} className="mt-6 card">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-accent-2" />
            <h3 className="font-display text-lg font-bold text-content">Currently learning</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {learningSkills.map((skill) => (
              <span
                key={skill}
                className="tag border-accent-2/30 bg-accent-2/5 text-accent-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
