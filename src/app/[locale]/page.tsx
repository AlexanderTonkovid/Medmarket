import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { directions } from "@/data/products";
import CategorySection from "@/components/Catalog/CategorySection";
import CatalogBlock from "@/components/Catalog/CatalogBlock";
import HeroBlock from "@/components/Catalog/HeroBlock";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <HeroBlock />
      <CatalogBlock>
        {directions.map((dir) => (
          <CategorySection key={dir.slug} direction={dir} />
        ))}
      </CatalogBlock>
    </>
  );
}
