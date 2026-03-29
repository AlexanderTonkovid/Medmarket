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

const TopBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  padding: 6px 0;
`;

const TopBarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.fast};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width ${({ theme }) => theme.transitions.normal};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      &::after {
        width: 100%;
      }
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Phone = styled.a`
  font-weight: 600;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
`;

export default function Header() {
  const t = useTranslations("header");

  return (
    <HeaderWrapper>
      <TopBar>
        <TopBarInner>
          <span>{t("phone")}</span>
          <LanguageSwitcher />
        </TopBarInner>
      </TopBar>
      <Nav>
        <Logo href="/">
          ⚕️ Med<span>Market</span>
        </Logo>
        <NavLinks>
          <NavLink>
            <a href="/">{t("home")}</a>
          </NavLink>
          <NavLink>
            <a href="#catalog">{t("catalog")}</a>
          </NavLink>
          <NavLink>
            <a href="#about">{t("about")}</a>
          </NavLink>
          <NavLink>
            <a href="#contacts">{t("contacts")}</a>
          </NavLink>
        </NavLinks>
        <RightSection>
          <Phone href="tel:+380000000000">{t("phone")}</Phone>
        </RightSection>
      </Nav>
    </HeaderWrapper>
  );
}
