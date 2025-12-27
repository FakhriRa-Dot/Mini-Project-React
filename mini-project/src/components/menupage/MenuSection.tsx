import MenuItem from "./MenuItem";

type Menu = {
  name: string;
  price: string;
  description: string;
  isFavorite?: boolean;
};

type MenuSectionProps = {
  title: string;
  items: Menu[];
};

const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <section className="mt-10">
      <h3 className="font-bold font-open-sans text-xl md:text-2xl mb-3">
        {title}
      </h3>
      <hr className="border-t border-sand mb-4" />

      <div className="space-y-6">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
