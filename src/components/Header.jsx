
import { useState } from "react";
import {
  House,
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "Kitchen", href: "/category/kitchen" },
    { name: "Cleaning", href: "/category/cleaning" },
    { name: "Bathroom", href: "/category/bathroom" },
    { name: "Laundry", href: "/category/laundry" },
    {
      name: "Home Organization",
      href: "/category/home-organization",
    },
    { name: "Home Decor", href: "/category/home-decor" },
    { name: "Offers", href: "/offers" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(
        search.trim()
      )}`;
    }
  };

  return (
    <header className="w-full bg-white text-black">
      {/* Announcement Bar */}
      <div className="flex min-h-[11px] items-center justify-center bg-[#88001f] px-2 py-1 text-center text-sm text-white sm:text-base md:text-[15px]">
        Welcome to Castra Households | Quality Essentials for Your Home
      </div>
      <div className="border-b border-gray-200">
        <div className="mx-auto flex min-h-[100px] max-w-[1600px] items-center justify-between gap-3 px-2 py-1 sm:px-4 lg:px-4">
        
          <a
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="Castra Households home"
          >
            <span className="flex h-[45px] w-[45px] items-center justify-center rounded-[11px] bg-[#88001f] text-white">
              <House size={31} strokeWidth={2} />
            </span>

            <span className="hidden whitespace-nowrap text-[15px] font-bold tracking-tight sm:block lg:text-[15px]">
              Castra Households
            </span>
          </a>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden h-[35px] min-w-0 max-w-[840px] flex-1 items-center gap-4 rounded-xl border border-[#dedede] bg-[#f9f8f7] px-5 md:flex lg:mx-3"
          >
            <Search
              size={20}
              className="shrink-0 text-black"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands and household essentials..."
              aria-label="Search products"
              className="min-w-0 flex-1 bg-transparent text-[18px] outline-none placeholder:text-[#98a0af]"
            />

            <button
              type="submit"
              className="shrink-0 font-bold text-[#88001f] transition-colors hover:text-[#590016]"
            >
              Search
            </button>
          </form>

          {/* Account and Cart */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <a
              href="/signin"
              className="flex items-center gap-2 text-[10px] font-semibold hover:text-[#88001f] sm:text-[15px]"
            >
              <UserRound size={25} strokeWidth={2} />
              <span className="hidden sm:inline">Sign In</span>
            </a>

            <a
              href="/cart"
              className="relative flex items-center"
              aria-label="Shopping cart, 0 items"
            >
              <ShoppingBag size={30} strokeWidth={2} />
              <span className="ml-2 flex h-[29px] min-w-[29px] items-center justify-center rounded-full bg-[#88001f] px-2 text-sm font-semibold text-white">
                0
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-1 hover:bg-gray-100 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={27} />
              ) : (
                <Menu size={27} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-3 px-4 pb-5 md:hidden"
        >
          <div className="flex h-12 flex-1 items-center gap-3 rounded-lg border border-gray-300 bg-[#f9f8f7] px-3">
            <Search size={22} className="shrink-0" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search household essentials..."
              aria-label="Search products"
              className="w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#88001f] px-4 py-3 text-sm font-semibold text-white"
          >
            Search
          </button>
        </form>
      </div>

      {/* Desktop Navigation */}
      <nav
        aria-label="Main navigation"
        className="hidden border-b border-gray-200 md:block"
      >
        <div className="mx-auto flex max-w-full items-center gap-3  px-9 lg:gap-6">
          {navLinks.map((link) => {
            const isOffer = link.name === "Offers";

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative flex h-[72px] shrink-0 items-center text-[16px] font-semibold transition-colors lg:text-[19px] ${
                  isOffer
                    ? "text-[#88001f] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#88001f]"
                    : "text-black hover:text-[#88001f]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-b border-gray-200 bg-white shadow-md md:hidden"
        >
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-gray-100 px-3 py-3 font-semibold transition-colors last:border-0 ${
                  link.name === "Offers"
                    ? "text-[#88001f]"
                    : "text-gray-800 hover:text-[#88001f]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
