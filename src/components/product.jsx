
import { useState } from "react";
import { Heart } from "lucide-react";
import Hero from "./hero";

const products = [
  {
    id: 1,
    category: "KITCHEN",
    name: "Stainless Steel Cookware",
    price: 4200,
    image:
       "https://images.unsplash.com/photo-1584990347449-a9f6c6f7d8d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "HOME ORGANIZATION",
    name: "Pantry Glass Jars",
    price: 1850,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "BATHROOM",
    name: "Everyday Bath Towels",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "LAUNDRY",
    name: "Woven Laundry Basket",
    price: 2950,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Product() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const addToCart = (product) => {
    setCart((previous) => [...previous, product]);
  };

  return (
    <>
    <Hero/>
    <div className="bg-[#f8f7f5] px-2 py-4 sm:px-5 lg:px-20">

      {/* Catalogue introduction */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-[#666666] sm:text-base">
          Sample catalogue · illustrative product names and prices, not verified stock.
        </p>

        <span className="text-sm font-medium text-[#88001f]">
          Cart ({cart.length})
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-3">

        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-[20px] border border-gray-200 bg-white"
          >

            {/* Product Image */}
            <div className="group relative h-[90px] overflow-hidden sm:h-[270px]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-95"
              />

              {/* Favorite Button */}
              <button
                type="button"
                onClick={() => toggleFavorite(product.id)}
                aria-label={
                  favorites.includes(product.id)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
                className="absolute right-2 top-2 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-170"
              >
                <Heart
                  size={20}
                  fill={
                    favorites.includes(product.id)
                      ? "#88001f"
                      : "none"
                  }
                  color={
                    favorites.includes(product.id)
                      ? "#88001f"
                      : "#111111"
                  }
                />
              </button>
            </div>

            {/* Product Details */}
            <div className="flex min-h-[10px] flex-col p-3">

              <p className="mb-1 text-sm tracking-[0.1em] text-[#666666]">
                {product.category}
              </p>

              <h2 className="min-h-[35px] text-xl font-semibold tracking-tight text-black">
                {product.name}
              </h2>

              <p className="mb-1 mt-auto pt-1 text-[22px] font-bold text-[#88001f]">
                KES {product.price.toLocaleString("en-KE")}
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-[1fr_1fr] gap-1">
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="rounded-xl bg-[#88001f] px-1 py-1 text-sm font-bold text-white transition-colors hover:bg-[#650018]"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="rounded-xl border border-gray-400 px-2 py-2 text-sm font-semibold text-black transition-colors hover:border-[#88001f] hover:text-[#88001f]"
                >
                  Quick View
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-2"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.name}
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-45 w-67 object-cover"
            />

            <div className="p-4">
              <p className="text-sm tracking-widest text-[#88001f]">
                {selectedProduct.category}
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {selectedProduct.name}
              </h2>

              <p className="mt-2 text-xl font-bold text-[#88001f]">
                KES {selectedProduct.price.toLocaleString("en-KE")}
              </p>

              <button
                type="button"
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="mt-1 w-full rounded-xl bg-[#88001f] px-3 py-2 font-bold text-white hover:bg-[#650018]"
              >
                Add to Cart
              </button>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="mt-3 w-full rounded-xl border border-gray-300 px-5 py-3 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
 

    </>
  );
}
