import Link from "next/link";
import {
  IoAddCircleOutline,
  IoPeopleOutline,
  IoPersonSharp,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export default function AdminPage() {
  return (
    <div className="grid justify-around">
      <Link
        href="/admin/users"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
      >
        <IoPeopleOutline size={100} />
        <span className="ml-3 text-xl">Users</span>
      </Link>
      <Link
        href="/admin/orders"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
      >
        <IoTicketOutline size={100} />
        <span className="ml-3 text-xl">Orders</span>
      </Link>
      <Link
        href="/admin/products"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
      >
        <IoShirtOutline size={100} />
        <span className="ml-3 text-xl">Products</span>
      </Link>
      <Link
        href="/admin/product/new"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
      >
        <IoAddCircleOutline size={100} />
        <span className="ml-3 text-xl">New Product</span>
      </Link>
    </div>
  );
}
