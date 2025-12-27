import {
  coffeeMenu,
  lightBitesMenu,
  nonCoffeeMenu,
} from "@/components/menupage/MenuData";
import MenuSection from "@/components/menupage/MenuSection";

export default function MenuPage() {
  return (
    <main className="mt-16 mx-auto px-0 lg:px-16">
      <div className="bg-cream mx-auto p-8">
        <h1 className="text-4xl font-extrabold font-green font-open-sans mb-2 mt-4">
          OUR MENU
        </h1>
        <p className="text-lg text-sand font-young-serif mb-6">
          Good Eats & Tasty Treats
        </p>

        <MenuSection title="Coffee-Based Drinks" items={coffeeMenu} />
        <MenuSection title="Non-Coffee Drinks" items={nonCoffeeMenu} />
        <MenuSection title="Light Bites" items={lightBitesMenu} />
      </div>
    </main>
  );
}
