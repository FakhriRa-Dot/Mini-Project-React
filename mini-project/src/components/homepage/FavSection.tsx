import FavoriteCard from "./FavCard";

const favorites = [
  {
    image: "/assets/coffe-latte.jpg",
    title: "Caffe Latte",
    description: "Classic milk coffee with a soft and creamy taste.",
  },
  {
    image: "/assets/matcha-latte.jpg",
    title: "Matcha Latte",
    description: "Earthy aroma with a gentle sweetness.",
  },
  {
    image: "/assets/toast.jpg",
    title: "Toast",
    description: "Crispy outside, soft inside.",
  },
];

const FavoritesSection = () => {
  return (
    <section className="bg-cream py-20">
      <h2 className="text-center text-3xl font-extrabold font-open-sans text-brown mb-14">
        FAVORITES
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {favorites.map((item, index) => (
          <FavoriteCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FavoritesSection;
