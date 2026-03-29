"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalScrollArea,
  ModalImageWrapper,
  ModalBody,
  ModalProductName,
  ModalProductDescription,
  ProductImagePlaceholder,
} from "./styles";

interface Props {
  image: string | null;
  name: string;
  description: string;
  onClose: () => void;
}

export default function ProductModal({
  image,
  name,
  description,
  onClose,
}: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalClose onClick={onClose} aria-label="Close">
          ✕
        </ModalClose>
        <ModalScrollArea>
          <ModalImageWrapper>
            {image ? (
              <Image
                src={image}
                alt={name}
                width={560}
                height={560}
                quality={90}
              />
            ) : (
              <ProductImagePlaceholder>🏥</ProductImagePlaceholder>
            )}
          </ModalImageWrapper>
          <ModalBody>
            <ModalProductName>{name}</ModalProductName>
            <ModalProductDescription>{description}</ModalProductDescription>
          </ModalBody>
        </ModalScrollArea>
      </ModalContent>
    </ModalOverlay>
  );
}
