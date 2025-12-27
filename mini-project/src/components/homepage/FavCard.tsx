type FavoriteCardProps = {
  image: string;
  title: string;
  description: string;
};

const FavoriteCard = ({ image, title, description }: FavoriteCardProps) => {
  return (
    <div className="text-center">
      <img
        src={image}
        className="w-50 h-50 mx-auto rounded-full object-cover mb-6"
      />
      <h3 className="text-xl font-semibold font-tinos text-brown mb-2">
        {title}
      </h3>
      <p className="text-brown/80 font-tinos">{description}</p>
    </div>
  );
};

export default FavoriteCard;
