import { useTranslations } from "next-intl";
import { categories } from "@/data/products";
import CategorySection from "@/components/Catalog/CategorySection";
import HeroBlock from "@/components/Catalog/HeroBlock";
import CatalogBlock from "@/components/Catalog/CatalogBlock";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <HeroBlock />
      <CatalogBlock>
        {categories.map((cat) => (
          <CategorySection key={cat.slug} category={cat} />
        ))}
      </CatalogBlock>
    </>
  );
}
