import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import FarmStory from '@/components/sections/FarmStory';
import SeasonalBreak from '@/components/sections/SeasonalBreak';
import DiningExperience from '@/components/sections/DiningExperience';
import MenuPreview from '@/components/sections/MenuPreview';
import KitchenStory from '@/components/sections/KitchenStory';
import CinematicBreak from '@/components/sections/CinematicBreak';
import GatheringsPreview from '@/components/sections/GatheringsPreview';
import JournalPreview from '@/components/sections/JournalPreview';
import VisitDetails from '@/components/sections/VisitDetails';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FarmStory />
      <SeasonalBreak />
      <DiningExperience />
      <MenuPreview />
      <KitchenStory />
      <CinematicBreak />
      <GatheringsPreview />
      <JournalPreview />
      <VisitDetails heading="Come and find us" />
    </>
  );
}
