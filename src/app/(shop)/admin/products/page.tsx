export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getProductsWithImages } from "@/actions";
import { Pagination, ProductImage, Title } from "@/components";
import { currencyFormat } from "@/utils";

import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function ProductsMaintenancePage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const startIndex = (page - 1) * 12;
  const endIndex = startIndex + 12;

  const { products, totalPages } = await getProductsWithImages();

  const paginatedProducts =
    products.length > 12 ? products.slice(startIndex, endIndex) : products;

  if (page > totalPages) {
    redirect("/admin/products");
  }

  return (
    <>
      <Title title="Product maintenance" />

      <div className="flex justify-end mb-5">
        <Link href="/admin/product/new" className="btn-primary">
          New Product
        </Link>
      </div>

      <div className="mb-10 block overflow-x-auto whitespace-nowrap">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Image
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Title
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Price
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Gender
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Stock
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Sizes
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Link href={`/product/${product.slug}`}>
                    <ProductImage
                      src={product.ProductImage[0]?.url}
                      width={80}
                      height={80}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </Link>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <Link
                    href={`/admin/product/${product.slug}`}
                    className="hover:underline"
                  >
                    {product.title}
                  </Link>
                </td>
                <td className="text-sm font-bold text-gray-900 px-6 py-4 whitespace-nowrap">
                  {currencyFormat(product.price)}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {product.gender}
                </td>
                <td className="text-sm font-bold text-gray-900 px-6 py-4 whitespace-nowrap">
                  {product.inStock}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {product.sizes.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination totalPages={totalPages} />
    </>
  );
}
