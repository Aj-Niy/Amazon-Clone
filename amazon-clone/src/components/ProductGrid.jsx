import ProductCard from "./ProductCard";
import homeData from "../data/homeData";

export default function ProductGrid() {
  return (
    <div className="grid">
      {homeData.map((item, index) => (
        <ProductCard
          key={index}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}