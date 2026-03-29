"use client";

import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const HeroInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const HeroIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  opacity: 0.9;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroCta = styled.a`
  display: inline-block;
  padding: 14px 36px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
  }
`;

/* ===== Catalog Section ===== */

export const CatalogSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 64px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  text-align: center;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    margin: 12px auto 0;
  }
`;

/* ===== Category Block ===== */

export const CategoryBlock = styled.article`
  margin-bottom: 64px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const CategoryImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 24px;
`;

/* ===== Product Grid (cards with images) ===== */

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`;

export const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.borderLight};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProductImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProductInfo = styled.div`
  padding: 14px 16px;
`;

export const ProductName = styled.h4`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

export const ProductDescription = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;
