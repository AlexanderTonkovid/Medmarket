"use client";

import styled from "styled-components";
import { useTranslations } from "next-intl";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 48px 0 24px;
  margin-top: 80px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
`;

const Column = styled.div`
  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 16px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.8;
  }
`;

const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 0.82rem;
`;

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Inner>
        <Grid>
          <Column>
            <Logo>
              ⚕️ Med<span>Market</span>
            </Logo>
            <p>{t("address")}</p>
            <p>{t("workingHours")}</p>
          </Column>
          <Column>
            <h3>MedMarket</h3>
            <p>
              © {year} MedMarket. {t("rights")}.
            </p>
          </Column>
        </Grid>
        <Bottom>
          © {year} MedMarket. {t("rights")}.
        </Bottom>
      </Inner>
    </FooterWrapper>
  );
}
