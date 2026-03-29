"use client";

import { useTranslations } from "next-intl";
import { CatalogSection, SectionTitle } from "./styles";

export default function CatalogBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("catalog");

  return (
    <CatalogSection id="catalog">
      <SectionTitle>{t("title")}</SectionTitle>
      {children}
    </CatalogSection>
  );
}
