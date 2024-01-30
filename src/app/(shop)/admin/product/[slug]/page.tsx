import { getLeagues, getProductBySlug } from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProductForm } from "./ui/ProductForm";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const [product, leagues] = await Promise.all([
    getProductBySlug(slug),
    getLeagues(),
  ]);

  if (!product && slug !== "new") {
    redirect("/admin/products");
  }

  const title = slug === "new" ? "New Product" : "Edit product";

  return (
    <>
      <Title title={title} />
      <ProductForm product={product ?? {}} leagues={leagues} />
    </>
  );
}
