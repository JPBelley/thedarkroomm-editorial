import Hero from "./components/Hero";
import Collections from "./components/Collections";
import ValueProps from "./components/ValueProps";
import FeaturedCollection from "./components/FeaturedCollection";
import Messaging from "./components/Messaging";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-px h-16 bg-outline-variant" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-surface min-h-screen">
      <Hero />
      <SectionDivider />
      <Collections />
      <ValueProps />
      <SectionDivider />
      <FeaturedCollection />
      <Messaging />
    </main>
  );
}
