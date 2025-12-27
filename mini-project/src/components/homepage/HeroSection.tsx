import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero-img.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute z-10 h-full flex flex-col items-center justify-center text-center px-4 inset-0 gap-5 p-4">
        <h1 className="text-cream text-4xl md:text-5xl font-ribeye text-center text-shadow leading-tight">
          Great Time and Good Coffee <br />
          at the Retro Bean Cafe
        </h1>

        <p className="mt-4 text-cream font-tinos text-xl text-center">
          Your friendly neighborhood spot since 1990
        </p>

        <Link
          href="/menu"
          className="mt-6 inline-block bg-cream text-brown font-semibold font-young-serif px-6 py-3 rounded-full hover:bg-white transition"
        >
          {" "}
          OUR MENU{" "}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
