"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Direction, Category } from "@/data/products";
import ProductModal from "./ProductModal";
import {
  CategoryBlock,
  CategoryHeader,
  CategoryTitle,
  CategoryDescription,
  ProductGrid,
  ProductCard,
  ProductImageWrapper,
  ProductImagePlaceholder,
  ProductInfo,
  ProductName,
  ProductDescription,
} from "./styles";

interface Props {
  direction: Direction;
}

export default function CategorySection({ direction }: Props) {
  const tDir = useTranslations(`catalog.directions.${direction.slug}`);
  const tCats = useTranslations("categories");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  return (
    <CategoryBlock>
      <CategoryHeader>
        <CategoryTitle>{tDir("title")}</CategoryTitle>
      </CategoryHeader>
      <CategoryDescription>{tDir("description")}</CategoryDescription>

      <ProductGrid>
        {direction.categories.map((cat) => {
          const name = tCats(`${cat.slug}.name`);
          const desc = tCats(`${cat.slug}.description`);

          return (
            <ProductCard
              key={cat.slug}
              onClick={() => setSelectedCategory(cat)}
            >
              <ProductImageWrapper>
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={name}
                    width={480}
                    height={480}
                    quality={80}
                  />
                ) : (
                  <ProductImagePlaceholder>🏥</ProductImagePlaceholder>
                )}
              </ProductImageWrapper>
              <ProductInfo>
                <ProductName>{name}</ProductName>
                <ProductDescription>
                  {desc.length > 100 ? desc.slice(0, 100) + "…" : desc}
                </ProductDescription>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductGrid>

      {selectedCategory && (
        <ProductModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </CategoryBlock>
  );
}
