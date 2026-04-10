"use client";

import styled from "styled-components";

export const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px 20px 16px;
  text-align: center;
`;

export const HeroInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 4px;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 800;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.5px;
`;

export const HeroSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 12px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroCta = styled.a`
  display: inline-block;
  padding: 10px 28px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
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
  cursor: pointer;

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

/* ===== Product Modal ===== */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  max-width: 860px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.25s ease;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const ModalScrollArea = styled.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`;

export const ModalInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 560px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ModalImageWrapper = styled.div`
  width: 340px;
  flex-shrink: 0;
  background: #f4f6f8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 0 0 12px;
  overflow: hidden;
  align-self: stretch;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 240px;
    border-radius: 0;
  }
`;

export const ModalBody = styled.div`
  padding: 28px 32px;
  flex: 1;
  overflow-y: auto;
  min-width: 0;
`;

export const ModalProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`;

export const ModalProductDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const ModalDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 16px 0;
`;

export const ModalProductsTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`;

export const ModalProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalProductItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.primaryLight};
`;

export const ModalProductArticle = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
`;

export const ModalProductItemName = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalNoProducts = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`;
