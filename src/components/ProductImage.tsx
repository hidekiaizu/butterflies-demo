"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure
      className={`relative overflow-hidden border border-black bg-white ${className}`}
    >
      {hasError ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full min-h-64 w-full items-center justify-center p-6 text-center text-xs font-bold uppercase leading-5 tracking-normal text-black"
        >
          Image pending
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
          onError={() => setHasError(true)}
        />
      )}
    </figure>
  );
}
