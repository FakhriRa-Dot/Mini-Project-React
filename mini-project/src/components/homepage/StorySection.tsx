const StorySection = () => {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold font-open-sans text-brown mb-16">
          OUR STORY
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/assets/our-story.jpg"
            className="w-full h-87.5 md:w-[45%] rounded-2xl object-cover shadow-lg"
          />

          <p className="text-brown text-lg font-tinos leading-relaxed md:max-w-[55%]">
            "The Retro Bean Cafe was founded in 1990 as a small neighborhood
            coffee spot with a simple mission: to bring people together through
            great coffee and warm conversations. Inspired by classic café
            culture, we combine a cozy retro atmosphere with carefully selected
            coffee beans and handcrafted beverages." <br />
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
  );
};

export default StorySection;
