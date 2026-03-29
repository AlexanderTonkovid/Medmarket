"use client";

import styled from "styled-components";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Phone = styled.a`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
`;

export default function Header() {
  const t = useTranslations("header");

  return (
    <HeaderWrapper>
      <Nav>
        <Logo href="/">
          ⚕️ Med<span>Market</span>
        </Logo>
        <RightSection>
          <Phone href="tel:+380000000000">{t("phone")}</Phone>
          <LanguageSwitcher />
        </RightSection>
      </Nav>
    </HeaderWrapper>
  );
}
