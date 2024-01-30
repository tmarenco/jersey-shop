"use client";

import { getStockBySlug } from "@/actions";
import { QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };
    addProductToCart(cartProduct);

    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };

  useEffect(() => {
    const getStock = async () => {
      const inStock = await getStockBySlug(product.slug);
      setStock(inStock);
      setIsLoading(false);
    };
    getStock();
  }, [product]);

  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}
        >
          &nbsp;
        </h1>
      ) : (
        <>
          <StockLabel stock={stock} />

          {stock > 0 && (
            <>
              {posted && !size && (
                <p className="mt-2 text-red-500 fade-in">
                  You must select a size*
                </p>
              )}
              <SizeSelector
                selectedSize={size}
                availableSizes={product.sizes}
                onSizeChanged={setSize}
              />

              <QuantitySelector
                quantity={quantity}
                onQuantityChanged={setQuantity}
              />
              <button onClick={addToCart} className="btn-primary my-5">
                Add to cart
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
