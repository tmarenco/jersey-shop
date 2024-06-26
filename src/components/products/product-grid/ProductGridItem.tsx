"use client";

import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props): any => {
  const getImageUrl = (index: number) => {
    return product.images[index].startsWith("http")
      ? product.images[index]
      : `/products/${product.images[index]}`;
  };

  const [displayImage, setDisplayImage] = useState(getImageUrl(0));

  return (
    <div
      className="flex justify-center"
      style={{
        height: "75vh",
      }}
    >
      <div className="rounded-md overflow-hidden fade-in w-full">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={`${displayImage}`}
            alt={product.title}
            style={{ height: "80%", width: "100%" }}
            className="w-full rounded"
            width={500}
            height={500}
            onMouseEnter={() => setDisplayImage(getImageUrl(1))}
            onMouseLeave={() => setDisplayImage(getImageUrl(0))}
          />
        </Link>

        <div className="p-4 flex flex-col">
          <Link
            className="hover:text-blue-600"
            href={`/product/${product.slug}`}
          >
            {product.title}
          </Link>
          <span className="font-bold">${product.price}</span>
        </div>
      </div>
    </div>
  );
};
