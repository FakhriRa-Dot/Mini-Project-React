type MenuItemProps = {
  name: string;
  price: string;
  description: string;
  isFavorite?: boolean;
};

const MenuItem = ({
  name,
  price,
  description,
  isFavorite = false,
}: MenuItemProps) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-green font-tinos text-lg md:text-xl flex items-center gap-2">
          {name}
          {isFavorite && <i className="fa-solid fa-thumbs-up text-green"></i>}
        </p>
        <p className="font-semibold text-green font-tinos text-lg">{price}</p>
      </div>
      <p className="text-sand text-sm md:text-lg font-tinos">{description}</p>
    </div>
  );
};

export default MenuItem;
