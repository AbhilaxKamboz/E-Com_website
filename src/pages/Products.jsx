import { useEffect, useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  // FILTER STATES
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  // PAGINATION STATES
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  // FILTER + SORT
  let filteredProducts = productsData
    .filter(p => category === "all" || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // RESET PAGE ON FILTER CHANGE
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort, itemsPerPage]);

  // PAGINATION
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Explore Products
      </h1>

      {/* FILTER BAR */}
      <div className="
        bg-white shadow-md rounded-xl p-4 mb-10
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4
      ">

        {/* SEARCH */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full outline-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <select
          className="border rounded-lg px-3 py-2"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* SORT */}
        <select
          className="border rounded-lg px-3 py-2"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        {/* ITEMS PER PAGE */}
        <select
          className="border rounded-lg px-3 py-2"
          value={itemsPerPage}
          onChange={e => setItemsPerPage(Number(e.target.value))}
        >
          <option value={4}>4 / page</option>
          <option value={8}>8 / page</option>
          <option value={12}>12 / page</option>
          <option value={16}>16 / page</option>
        </select>

        {/* CLEAR */}
        <button
          onClick={clearFilters}
          className="
            border border-red-500 text-red-500
            rounded-lg px-4 py-2
            hover:bg-red-500 hover:text-white
            transition
          "
        >
          Clear
        </button>
      </div>

      {/* PRODUCTS GRID */}
      {paginatedProducts.length > 0 ? (
        <>
          <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-8
          ">
            {paginatedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mt-12">

              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
                className="px-4 py-2 border rounded-lg
                           disabled:opacity-40 hover:bg-gray-100"
              >
                ← Prev
              </button>

              {/* PAGE NUMBERS (MAX 5 SHOWN) */}
              {[...Array(totalPages)]
                .slice(
                  Math.max(0, currentPage - 3),
                  Math.min(totalPages, currentPage + 2)
                )
                .map((_, i) => {
                  const page =
                    Math.max(1, currentPage - 2) + i;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 border rounded-lg
                        ${currentPage === page
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"}`}
                    >
                      {page}
                    </button>
                  );
                })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
                className="px-4 py-2 border rounded-lg
                           disabled:opacity-40 hover:bg-gray-100"
              >
                Next →
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-xl">😕 No products found</p>
          <p className="mt-2 text-sm">Try changing filters</p>
        </div>
      )}
    </div>
  );
}
