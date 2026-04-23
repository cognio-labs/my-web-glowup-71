import { useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ClickableImage({ src, alt, className = "", width, height }: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:brightness-110 transition-all duration-300 ${className}`}
        loading="lazy"
        width={width}
        height={height}
        onClick={() => setIsOpen(true)}
      />
      <ImageLightbox src={src} alt={alt} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
