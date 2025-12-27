import {
  HeroSection,
  FavoritesSection,
  StorySection,
} from "@/components/homepage";

export default function HomePage() {
  return (
    <main className="mt-16 mx-auto px-0 lg:px-16">
      <HeroSection />
      <FavoritesSection />
      <StorySection />
    </main>
  );
}
