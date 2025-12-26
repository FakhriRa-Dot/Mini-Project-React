import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mt-16 mx-auto px-0 lg:px-16">
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

      <section className="bg-cream py-20">
        <h2 className="text-center text-3xl font-bold text-brown mb-14 tracking-wide">
          FAVORITES
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="text-center">
            <img
              src="/assets/coffe-latte.jpg"
              className="w-50 h-50 mx-auto rounded-full object-cover mb-6"
            />
            <h3 className="text-xl font-semibold font-tinos text-brown mb-2">
              Caffe Latte
            </h3>
            <p className="text-brown/80 font-tinos">
              Classic milk coffee with a soft and creamy taste.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/assets/matcha-latte.jpg"
              className="w-50 h-50 mx-auto rounded-full object-cover mb-6"
            />
            <h3 className="text-xl font-semibold font-tinos text-brown mb-2">
              Matcha Latte
            </h3>
            <p className="text-brown/80 font-tinos">
              Earthy aroma with a gentle sweetness.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/assets/toast.jpg"
              className="w-50 h-50 mx-auto rounded-full object-cover mb-6"
            />
            <h3 className="text-xl font-semibold font-tinos text-brown mb-2">
              Toast
            </h3>
            <p className="text-brown/80 font-tinos">
              Crispy outside, soft inside.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-brown mb-16 tracking-wide">
            OUR STORY
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/assets/our-story.jpg"
              className="w-full md:w-[45%] h-87.5 rounded-2xl object-cover shadow-lg"
            />

            <p className="text-brown text-lg font-tinos leading-relaxed md:max-w-[55%]">
              "The Retro Bean Cafe was founded in 1990 as a small neighborhood
              coffee spot with a simple mission: to bring people together
              through great coffee and warm conversations. Inspired by classic
              café culture, we combine a cozy retro atmosphere with carefully
              selected coffee beans and handcrafted beverages." <br />
              <br />
              "Over the years, The Retro Bean Cafe has become a place where
              stories are shared, friendships are built, and moments are enjoyed
              at a slower pace. Whether you come for your morning coffee, an
              afternoon break, or a relaxing evening, we welcome you to feel at
              home and enjoy every sip."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
