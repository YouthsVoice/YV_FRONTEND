import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramStats from '@/components/programs/ProgramStats'
import FeaturedPrograms from '@/components/programs/FeaturedPrograms';
import AllPrograms from '@/components/programs/AllPrograms';
import ImpactAreas from '@/components/programs/ImpactAreas';
import ProgramStories from '@/components/programs/ProgramStories';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramStats />
      <FeaturedPrograms />
      <AllPrograms />
      <ImpactAreas />
      <ProgramStories />
      <ProgramsCTA />
    </>
  );
}