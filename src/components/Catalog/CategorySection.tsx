"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Category, Product } from "@/data/products";
import ProductModal from "./ProductModal";
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
  const [selectedProduct, setSelectedProduct] = useState<{
    image: string | null;
    name: string;
    description: string;
  } | null>(null);

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
            <ProductCard
              key={product.slug}
              onClick={() =>
                setSelectedProduct({
                  image: product.image,
                  name,
                  description: desc,
                })
              }
            >
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

      {selectedProduct && (
        <ProductModal
          image={selectedProduct.image}
          name={selectedProduct.name}
          description={selectedProduct.description}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </CategoryBlock>
  );
}
