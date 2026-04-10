"use client";

import { useTranslations } from "next-intl";
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
} from "./styles";

export default function HeroBlock() {
  const t = useTranslations("hero");

  return (
    <HeroSection>
      <HeroInner>
        <HeroTitle>⚕️ {t("title")}</HeroTitle>
        <HeroSubtitle>{t("subtitle")}</HeroSubtitle>
        <HeroCta
          href="#catalog"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            document
              .getElementById("catalog")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("cta")}
        </HeroCta>
      </HeroInner>
    </HeroSection>
  );
}
