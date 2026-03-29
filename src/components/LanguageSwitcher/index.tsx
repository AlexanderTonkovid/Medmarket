"use client";

import styled from "styled-components";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const LangButton = styled.button<{ $active: boolean }>`
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.textSecondary};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primaryDark : theme.colors.primaryLight};
    color: ${({ $active, theme }) =>
      $active ? theme.colors.white : theme.colors.primary};
  }
`;

const localeLabels: Record<Locale, string> = {
  uk: "UA",
  en: "EN",
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Wrapper>
      {(Object.entries(localeLabels) as [Locale, string][]).map(
        ([loc, label]) => (
          <LangButton
            key={loc}
            $active={loc === locale}
            onClick={() => switchLocale(loc)}
            aria-label={`Switch to ${label}`}
          >
            {label}
          </LangButton>
        ),
      )}
    </Wrapper>
  );
}
