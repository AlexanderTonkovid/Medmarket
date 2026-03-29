"use client";

import { CatalogSection } from "./styles";

export default function CatalogBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CatalogSection id="catalog">{children}</CatalogSection>;
}
