"use client";

import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";
import { useProductStore } from "@/store";
import { Pagination } from "@/components";

interface Props {
  products: Product[];
  page: number;
}

export const ProductGrid = ({ products, page }: Props) => {
  const searchText = useProductStore((state) => state.searchText);
  const startIndex = (page - 1) * 12;
  const endIndex = startIndex + 12;

  const productsFiltered =
    searchText === ""
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLocaleLowerCase())
        );

  const paginatedProducts =
    productsFiltered.length > 12
      ? productsFiltered.slice(startIndex, endIndex)
      : productsFiltered;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
        {productsFiltered.length > 0 ? (
          <>
            {paginatedProducts.map((product) => (
              <ProductGridItem product={product} key={product.slug} />
            ))}
          </>
        ) : (
          <h1>Sorry, could not find any products with the name {searchText}</h1>
        )}
      </div>
      {productsFiltered.length > 0 && (
        <Pagination totalPages={Math.ceil(productsFiltered.length / 12)} />
      )}
    </>
  );
};
