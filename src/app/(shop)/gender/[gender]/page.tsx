export const revalidate = 60;

import { getProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { capitalizeFirstLetter } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

const labels: Record<string, string> = {
  men: "Men",
  women: "Women",
  kid: "Kid",
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const gender = params.gender;
  const validGender = labels[gender];

  return {
    title: validGender ? capitalizeFirstLetter(gender) : "Not Found",
    description: validGender
      ? `${capitalizeFirstLetter(gender)} products`
      : "404 - Not Found",
  };
}

export default async function GenderPage({ params, searchParams }: Props) {
  const { gender } = params;

  if (!labels[gender]) {
    redirect("/");
  }

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products } = await getProductsWithImages();

  const productsFiltered = products.filter(
    (product) => product.gender === gender
  );

  const totalPagesFiltered = Math.ceil(productsFiltered.length / 12);

  if (page > totalPagesFiltered) {
    redirect(`/gender/${gender}`);
  }

  return (
    <>
      <Title
        title={`${(labels as any)[gender]} Products`}
        subtitle={`All the ${labels[gender]} Products`}
        className="mb-2"
      />

      <ProductGrid products={productsFiltered} page={page} />
    </>
  );
}
