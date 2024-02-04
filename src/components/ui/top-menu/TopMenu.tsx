"use client";

import { titleFont } from "@/config/fonts";
import { useCartStore, useProductStore, useUiStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);

  const currentPath = usePathname();
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const setSearchText = useProductStore((state) => state.setSearchText);
  const searchText = useProductStore((state) => state.searchText);

  const [loaded, setLoaded] = useState(false);
  const [pathSearchAvailability, setPathSearchAvailability] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    setSearchText("");
    setShowSearchInput(false);
    const searchAvailablePaths = [
      "/",
      "/gender/women",
      "/gender/men",
      "/gender/kid",
    ];
    setPathSearchAvailability(searchAvailablePaths.includes(currentPath));
  }, [currentPath, setSearchText]);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div className="w-2/6">
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Jersey
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      <div className="w-2/6 hidden text-center md:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >
          Man
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >
          Women
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/kid"
        >
          Kids
        </Link>
      </div>

      <div className="w-2/6 text-right">
        <div className="flex items-center justify-end">
          <span className="mx-2">
            {pathSearchAvailability && (
              <>
                {showSearchInput ? (
                  <input
                    onChange={(e) => setSearchText(e.target.value)}
                    onMouseOut={() => setShowSearchInput(!(searchText === ""))}
                    className="bg-gray-200 rounded w-28 p-2 fade-in"
                    value={searchText}
                    type="text"
                    name="searchText"
                  />
                ) : (
                  <IoSearchOutline
                    className="w-5 h-5 fade-in"
                    onMouseOver={() => setShowSearchInput(true)}
                  />
                )}
              </>
            )}
          </span>
          <Link
            href={totalItemsInCart === 0 && loaded ? "/empty" : "/cart"}
            className="mx-2"
          >
            <div className="relative">
              {loaded && totalItemsInCart > 0 && (
                <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-800 text-white">
                  {totalItemsInCart}
                </span>
              )}
              <IoCartOutline className="w-5 h-5" />
            </div>
          </Link>

          <button
            onClick={openMenu}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};
