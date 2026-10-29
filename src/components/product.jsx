
import React, { useState } from "react";
import { Heart, ShoppingCart, Tag } from "lucide-react";

/*
  These are sample products and prices.
  Replace the image URLs with your actual product photos when available.
*/

const products = [
  {
    id: 1,
    name: "Elegant Home Storage",
    category: "Home Organization",
    originalPrice: 2500,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Everyday Bath Towels",
    category: "Bathroom",
    originalPrice: 1800,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Kitchen Cleaning Cloths",
    category: "Cleaning",
    originalPrice: 1200,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Modern Kitchen Essentials",
    category: "Kitchen",
    originalPrice: 3200,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Soft Decorative Cushions",
    category: "Home Decor",
    originalPrice: 2000,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Home Storage Basket",
    category: "Home Organization",
    originalPrice: 1500,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Cleaning Essentials",
    category: "Cleaning",
    originalPrice: 1000,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Stylish Home Accessories",
    category: "Home Decor",
    originalPrice: 2800,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80",
  },
];

const fallbackImage =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">
      <rect width="100%" height="100%" fill="#f3f0ed"/>
      <text x="50%" y="47%" text-anchor="middle"
        font-family="Arial" font-size="24" fill="#777">
        Castra Households
      </text>
      <text x="50%" y="56%" text-anchor="middle"
        font-family="Arial" font-size="17" fill="#999">
        Product image unavailable
      </text>
    </svg>
  `);

function ProductCard({ product, onAddToCart }) {
  const [imageSrc, setImageSrc] = useState(product.image);
  const [isFavorite, setIsFavorite] = useState(false);

  const amountSaved = Math.round(
    product.originalPrice * (product.discount / 100)
  );

  const finalPrice = product.originalPrice - amountSaved;

  return (
    <article className="min-w-0 overflow-hidden border border-neutral-200 bg-white">
      {/* Product image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 sm:aspect-[4/3]">
        <img
          src={imageSrc}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onError={() => setImageSrc(fallbackImage)}
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
        />

        {/* Discount badge */}
        <span className="absolute left-2 top-2 bg-[#74152b] px-2 py-1 text-xs font-bold text-white">
          {product.discount}% OFF
        </span>

        {/* Wishlist button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={
            isFavorite ? "Remove from wishlist" : "Add to wishlist"
          }
          aria-pressed={isFavorite}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white"
        >
          <Heart
            size={17}
            fill={isFavorite ? "#74152b" : "none"}
            color={isFavorite ? "#74152b" : "#333333"}
          />
        </button>
      </div>

      {/* Product details */}
      <div className="p-3 sm:p-4">
        <p className="mb-1 text-[10px] uppercase tracking-wide text-neutral-500 sm:text-xs">
          {product.category}
        </p>

        <h3 className="mb-2 min-h-10 break-words text-sm font-medium text-neutral-900">
          {product.name}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-base font-bold text-[#74152b]">
            KES {finalPrice.toLocaleString("en-KE")}
          </span>

          <span className="text-xs text-neutral-500 line-through">
            KES {product.originalPrice.toLocaleString("en-KE")}
          </span>
        </div>

        <p className="mt-2 flex items-center gap-1 text-xs font-medium text-green-700">
          <Tag size={13} />
          You save KES {amountSaved.toLocaleString("en-KE")}
        </p>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-3 flex w-full items-center justify-center gap-2 bg-[#74152b] px-2 py-2.5 text-xs font-semibold text-white transition hover:bg-[#561020] sm:text-sm"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default function Product() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
    setMessage(`${product.name} added to your cart.`);
  };

  return (
    <main className="w-full bg-white text-neutral-900">
      <section
        id="offers"
        className="mx-auto max-w-7xl scroll-mt-6 px-3 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#74152b]">
              Special savings
            </p>

            <h1 className="text-2xl font-bold sm:text-3xl">
              Offers Available
            </h1>

            <p className="mt-2 max-w-xl text-sm text-neutral-500">
              Find quality household essentials at prices you will love.
            </p>
          </div>

          <span className="text-xs text-neutral-500">
            {products.length} products
          </span>
        </div>

        {message && (
          <div
            role="status"
            className="mb-4 flex flex-wrap items-center justify-between gap-2 border border-green-200 bg-green-50 p-3 text-sm text-green-800"
          >
            <span>{message}</span>
            <span>Cart items: {cart.length}</span>
            <button
              type="button"
              onClick={() => setMessage("")}
              className="font-semibold underline"
            >
              Dismiss
            </button>
          </div>
        )}

        <div
          id="products"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
