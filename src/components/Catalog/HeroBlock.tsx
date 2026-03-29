"use client";

import { useTranslations } from "next-intl";
import {
  HeroSection,
  HeroInner,
  HeroIcon,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
} from "./styles";

export default function HeroBlock() {
  const t = useTranslations("hero");

  return (
    <HeroSection>
      <HeroInner>
        <HeroIcon>🏥</HeroIcon>
        <HeroTitle>{t("title")}</HeroTitle>
        <HeroSubtitle>{t("subtitle")}</HeroSubtitle>
        <HeroCta href="#catalog">{t("cta")}</HeroCta>
      </HeroInner>
    </HeroSection>
  );
}
