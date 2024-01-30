"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { currencyFormat } from "../../../../../utils/currencyFormat";
import { useAddressStore, useCartStore } from "@/store";
import { redirect } from "next/navigation";

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);
  const address = useAddressStore((state) => state.address);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading....</p>;
  }

  if (productsInCart.length === 0 || address.address === "") {
    redirect("/");
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <span>
              {product.size} - {product.title} ({product.quantity})
            </span>
            <p className="font-bold">
              {currencyFormat(product.price * product.quantity)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
