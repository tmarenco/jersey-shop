"use client";

import { logout } from "@/actions";
import { useUiStore } from "@/store";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);

  const { data: session } = useSession();

  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";

  const onLogout = () => {
    localStorage.clear();
    logout();
  };

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMenu}
        />

        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {isAuthenticated && (
          <>
            <Link
              href="/profile"
              onClick={closeMenu}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
            >
              <IoPersonOutline size={30} />
              <span className="ml-3 text-xl">Profile</span>
            </Link>

            <Link
              href="/orders"
              onClick={closeMenu}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Orders</span>
            </Link>
          </>
        )}

        {isAuthenticated && (
          <button
            onClick={onLogout}
            className="flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Log Out</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
            onClick={closeMenu}
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Log In</span>
          </Link>
        )}

        {isAdmin && (
          <>
            <div className="w-full h-px bg-gray-200 my-10" />

            <Link
              href="/admin/products"
              onClick={closeMenu}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
            >
              <IoShirtOutline size={30} />
              <span className="ml-3 text-xl">Products</span>
            </Link>

            <Link
              href="/admin/orders"
              onClick={closeMenu}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Orders</span>
            </Link>

            <Link
              href="/admin/users"
              onClick={closeMenu}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded tansition-all"
            >
              <IoPersonOutline size={30} />
              <span className="ml-3 text-xl">Users</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
