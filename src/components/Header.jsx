
import React, { useState } from "react";
import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
  Phone,
} from "lucide-react";

const categories = [
  "All Products",
  "Kitchen",
  "Cleaning",
  "Bathroom",
  "Laundry",
  "Home Organization",
  "Offers",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    window.location.href = `/?search=${encodeURIComponent(query)}#products`;
  };

  const getLink = (category) => {
    if (category === "Offers") return "/#offers";
    if (category === "All Products") return "/#products";

    return `/?category=${encodeURIComponent(category)}#products`;
  };

  return (
    <header className="w-full bg-white text-neutral-900">
      {/* Announcement bar */}
      <div className="bg-[#74152b] px-3 py-2 text-center text-xs text-white sm:text-sm">
        Discover quality essentials for your home at Castra Households.
      </div>

      {/* Main header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:gap-8">
        <a href="/" className="shrink-0">
          <span className="block text-xl font-bold tracking-tight sm:text-2xl">
            Castra
          </span>
          <span className="block text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Households
          </span>
        </a>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="hidden min-w-0 max-w-xl flex-1 md:flex"
        >
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search household products..."
            aria-label="Search products"
            className="min-w-0 flex-1 border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-[#74152b]"
          />
          <button
            type="submit"
            aria-label="Search"
            className="bg-[#74152b] px-5 text-white transition hover:bg-[#561020]"
          >
            <Search size={19} />
          </button>
        </form>

        {/* Account and cart */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="/sign-in"
            className="hidden items-center gap-2 text-sm hover:text-[#74152b] sm:flex"
          >
            <UserRound size={20} />
            <span>Sign In</span>
          </a>

          <a
            href="/cart"
            aria-label="Shopping cart"
            className="flex items-center gap-2 hover:text-[#74152b]"
          >
            <ShoppingBag size={22} />
            <span className="hidden text-sm sm:inline">Cart</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-1 md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <form
        onSubmit={handleSearch}
        className="flex px-4 pb-4 md:hidden"
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search household products..."
          aria-label="Search products"
          className="min-w-0 flex-1 border border-neutral-300 px-3 py-2.5 text-sm outline-none focus:border-[#74152b]"
        />
        <button
          type="submit"
          aria-label="Search"
          className="bg-[#74152b] px-4 text-white"
        >
          <Search size={18} />
        </button>
      </form>

      {/* Desktop navigation */}
      <nav className="hidden border-y border-neutral-200 md:block">
        <div className="mx-auto flex max-w-9xl items-center justify-center gap-7 px-9 lg:gap-12">
          {categories.map((category) => (
            <a
              key={category}
              href={getLink(category)}
              className={`whitespace-nowrap py-4 text-sm transition hover:text-[#74152b] ${
                category === "Offers"
                  ? "font-bold text-[#74152b]"
                  : "text-neutral-700"
              }`}
            >
              {category}
            </a>
          ))}

          <a
            href="/#contact"
            className="whitespace-nowrap py-4 text-sm text-neutral-700 hover:text-[#74152b]"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-y border-neutral-200 bg-white px-4 py-3 md:hidden">
          {categories.map((category) => (
            <a
              key={category}
              href={getLink(category)}
              onClick={() => setMenuOpen(false)}
              className={`block border-b border-neutral-100 py-3 text-sm ${
                category === "Offers"
                  ? "font-bold text-[#74152b]"
                  : "text-neutral-700"
              }`}
            >
              {category}
            </a>
          ))}

          <a
            href="/sign-in"
            className="flex items-center gap-2 py-3 text-sm"
          >
            <UserRound size={17} />
            Sign In
          </a>

          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 py-3 text-sm"
          >
            <Phone size={17} />
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
