"use client";
import Link from "next/link";
import SideCart from "./sidecart";
import { useEffect, useState } from "react";
import Profile from "./profile";
import useMutation from "../../hooks/use-mutation";
import { deleteAuthentication } from "../../data/auth/authentications";
import { useCart } from "@app/client/data/state";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@app/client/data/globalState";
import { getWishList } from "@app/client/data/wishHandler";

export default function NavBar({ session, categories }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchQuery = useGlobalState((state) => state.searchQuery);
  const setSearchQuery = useGlobalState((state) => state.setSearchQuery);

  const change = useCart((state) => state.wishListLength);
  const [length, setLength] = useState(0);

  const route = useRouter();
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const { isMutating, startMutation } = useMutation();
  const cartData = useCart((state) => state.cartProducts);

  function setSearch(e) {
    setSearchQuery(e.target.value);
  }
  function handleClick() {
    route.push("/search");
  }
  useEffect(() => {
    const handleFavorite = async () => {
      const data = await getWishList();
      setLength(data.length);
    };
    handleFavorite();
  }, [change]);

  return (
    <nav className="sticky top-0 z-50 w-full flex flex-col shadow-md">
      {/* Top Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 px-4 py-3 bg-orange-50 w-full">
        {/* Logo */}
        <div className="font-extrabold text-pink-950 font-openSans text-xl lg:text-2xl order-1">
          <Link href="/dashboard" className="hover:opacity-80 transition-opacity">
            SSECOMMERCE
          </Link>
        </div>

        {/* Search Bar - Hidden on mobile, shown on tablet+ */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full lg:w-auto order-3 lg:order-2">
          <input
            type="text"
            className="flex-1 bg-gray-200 text-base border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-950 focus:border-transparent"
            placeholder="Search products..."
            value={searchQuery}
            name="searchQuery"
            onChange={(e) => setSearch(e)}
          />
          <select className="bg-gray-200 text-gray-700 border border-slate-200 rounded-md text-sm sm:text-base py-2 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-pink-950 focus:border-transparent">
            <option value="">All Categories</option>
            {categories.map((data) => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
          <button
            className="bg-pink-950 hover:bg-pink-900 text-white text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-950 focus:ring-offset-2 transition-colors"
            onClick={handleClick}
          >
            Search
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 lg:gap-6 order-2 lg:order-3">
          <div
            onMouseEnter={toggleProfile}
            onMouseLeave={toggleProfile}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <Link href="/profile" className="flex items-center">
              <Profile user={session} />
            </Link>
          </div>

          <div className="relative flex items-center justify-center cursor-pointer">
            <SideCart />
            {cartData && cartData.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-pink-800 text-white text-xs font-bold">
                {cartData.length}
              </div>
            )}
          </div>

          <Link href="/wishlist" className="relative flex items-center justify-center">
            <img src="/like.png" alt="Wishlist" className="h-5 w-5 sm:h-6 sm:w-6" />
            {length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-pink-800 text-white text-xs font-bold">
                {length}
              </div>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-pink-950 hover:bg-pink-50 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`bg-pink-950 w-full transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between px-4 py-2">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center capitalize">
            <Link
              href="/dashboard"
              className="text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-pink-900 transition-colors rounded-md lg:rounded-none text-center lg:text-left"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-pink-900 transition-colors rounded-md lg:rounded-none text-center lg:text-left"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-pink-900 transition-colors rounded-md lg:rounded-none text-center lg:text-left"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-pink-900 transition-colors rounded-md lg:rounded-none text-center lg:text-left"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-0 border-t lg:border-t-0 border-pink-800 lg:border-none pt-2 lg:pt-0">
            {session.error ? (
              <>
                <Link
                  href="/login"
                  className="text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-pink-900 transition-colors rounded-md lg:rounded-none text-center"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-pink-900 transition-colors rounded-md lg:rounded-none text-center"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                className="text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-pink-900 transition-colors rounded-md lg:rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() =>
                  startMutation(async () => {
                    await deleteAuthentication();
                  })
                }
                disabled={isMutating}
              >
                {isMutating ? "Logging out..." : "Log Out"}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
