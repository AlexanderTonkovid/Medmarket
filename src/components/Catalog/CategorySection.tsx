"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Category } from "@/data/products";
import {
  CategoryBlock,
  CategoryHeader,
  CategoryImage,
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
  category: Category;
}

export default function CategorySection({ category }: Props) {
  const tCat = useTranslations(`catalog.categories.${category.slug}`);
  const tProducts = useTranslations(`products.${category.slug}`);

  return (
    <CategoryBlock>
      <CategoryHeader>
        <CategoryTitle>{tCat("title")}</CategoryTitle>
      </CategoryHeader>
      <CategoryDescription>{tCat("description")}</CategoryDescription>

      <ProductGrid>
        {category.products.map((product) => {
          const name = tProducts(`${product.slug}.name`);
          const desc = tProducts(`${product.slug}.description`);

          return (
            <ProductCard key={product.slug}>
              <ProductImageWrapper>
                {product.image ? (
                  <Image
                    src={product.image}
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
                <ProductDescription>{desc}</ProductDescription>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductGrid>
    </CategoryBlock>
  );
}
