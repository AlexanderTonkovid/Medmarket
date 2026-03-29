import { categories } from "@/data/products";
import CategorySection from "@/components/Catalog/CategorySection";
import CatalogBlock from "@/components/Catalog/CatalogBlock";

export default function HomePage() {
  return (
    <>
      <CatalogBlock>
        {categories.map((cat) => (
          <CategorySection key={cat.slug} category={cat} />
        ))}
      </CatalogBlock>
    </>
  );
}
