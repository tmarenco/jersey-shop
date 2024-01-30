"use client";
import { titleFont } from "@/config/fonts";

interface Props {
  stock: number;
}

export const StockLabel = ({ stock }: Props) => {
  return (
    <>
      {stock <= 0 ? (
        <h1
          className={`${titleFont.className} antialiased font-bold text-lg text-red-400`}
        >
          Out of Stock
        </h1>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
