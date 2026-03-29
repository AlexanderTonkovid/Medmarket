"use client";

import { useTranslations } from "next-intl";
import type { Category } from "@/data/products";
import {
  CategoryBlock,
  CategoryHeader,
  CategoryIcon,
  CategoryTitle,
  CategoryDescription,
  ProductTable,
  TableHeader,
  TableRow,
  ProductIcon,
  ProductName,
  ProductDescription,
} from "./styles";

interface Props {
  category: Category;
}

export default function CategorySection({ category }: Props) {
  const tCat = useTranslations(`catalog.categories.${category.slug}`);
  const tProducts = useTranslations(`products.${category.slug}`);
  const tCommon = useTranslations("common");

  return (
    <CategoryBlock>
      <CategoryHeader>
        <CategoryIcon role="img" aria-hidden="true">
          {category.icon}
        </CategoryIcon>
        <CategoryTitle>{tCat("title")}</CategoryTitle>
      </CategoryHeader>
      <CategoryDescription>{tCat("description")}</CategoryDescription>

      <ProductTable role="table" aria-label={tCat("title")}>
        <TableHeader role="row">
          <span></span>
          <span>{tCommon("product")}</span>
          <span>{tCommon("description")}</span>
        </TableHeader>
        {category.products.map((product) => (
          <TableRow key={product.slug} role="row">
            <ProductIcon role="img" aria-hidden="true">
              {product.icon}
            </ProductIcon>
            <ProductName>{tProducts(`${product.slug}.name`)}</ProductName>
            <ProductDescription>
              {tProducts(`${product.slug}.description`)}
            </ProductDescription>
          </TableRow>
        ))}
      </ProductTable>
    </CategoryBlock>
  );
}
