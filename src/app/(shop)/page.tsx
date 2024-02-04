export const revalidate = 60;

import { getProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getProductsWithImages();

  if (page > totalPages) {
    redirect("/");
  }

  return (
    <>
      <Title title="Shop" subtitle="All the products" className="mb-2" />

      <ProductGrid products={products} page={page} />
    </>
  );
}
