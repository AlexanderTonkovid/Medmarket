import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { categories } from "@/data/products";
import CategorySection from "@/components/Catalog/CategorySection";
import CatalogBlock from "@/components/Catalog/CatalogBlock";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

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
