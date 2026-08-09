import Hero from '@/components/home/Hero';
import PersonalIntro from '@/components/home/PersonalIntro';
import WhyLumora from '@/components/home/WhyLumora';
import FocusAreas from '@/components/home/FocusAreas';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsPreview from '@/components/home/SkillsPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import WorkProcess from '@/components/home/WorkProcess';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PersonalIntro />
      <WhyLumora />
      <FocusAreas />
      <FeaturedProjects />
      <SkillsPreview />
      <ServicesPreview />
      <WorkProcess />
      <FinalCTA />
    </>
  );
}
