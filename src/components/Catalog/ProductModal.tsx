"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Category } from "@/data/products";
import {
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalScrollArea,
  ModalImageWrapper,
  ModalBody,
  ModalProductName,
  ModalProductDescription,
  ModalDivider,
  ModalProductsTitle,
  ModalProductList,
  ModalProductItem,
  ModalProductArticle,
  ModalProductItemName,
  ModalNoProducts,
  ProductImagePlaceholder,
} from "./styles";

interface Props {
  category: Category;
  onClose: () => void;
}

export default function ProductModal({ category, onClose }: Props) {
  const tCat = useTranslations("categories");
  const tProd = useTranslations("products");
  const tCommon = useTranslations("common");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const name = tCat(`${category.slug}.name`);
  const desc = tCat(`${category.slug}.description`);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalClose onClick={onClose} aria-label="Close">
          ✕
        </ModalClose>
        <ModalScrollArea>
          <ModalImageWrapper>
            {category.image ? (
              <Image
                src={category.image}
                alt={name}
                width={560}
                height={560}
                quality={90}
              />
            ) : (
              <ProductImagePlaceholder>🏥</ProductImagePlaceholder>
            )}
          </ModalImageWrapper>
          <ModalBody>
            <ModalProductName>{name}</ModalProductName>
            <ModalProductDescription>{desc}</ModalProductDescription>

            <ModalDivider />

            {category.products.length > 0 ? (
              <>
                <ModalProductsTitle>{tCommon("products")}</ModalProductsTitle>
                <ModalProductList>
                  {category.products.map((p) => (
                    <ModalProductItem key={p.slug}>
                      {p.article && (
                        <ModalProductArticle>{p.article}</ModalProductArticle>
                      )}
                      <ModalProductItemName>
                        {tProd(`${p.slug}.name`)}
                      </ModalProductItemName>
                    </ModalProductItem>
                  ))}
                </ModalProductList>
              </>
            ) : (
              <ModalNoProducts>{tCommon("noProducts")}</ModalNoProducts>
            )}
          </ModalBody>
        </ModalScrollArea>
      </ModalContent>
    </ModalOverlay>
  );
}
