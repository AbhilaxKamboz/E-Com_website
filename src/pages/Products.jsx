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

  // FILTER + SORT LOGIC
  let filteredProducts = productsData
    .filter(product =>
      category === "all" ? true : product.category === category
    )
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  // RESET PAGE WHEN FILTER CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort, itemsPerPage]);

  // PAGINATION LOGIC
  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

  // CLEAR FILTERS
  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("");
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore Products
      </h1>

      {/* FILTER BAR */}
      <div className="bg-white shadow-md rounded-xl p-4 mb-10
                      flex flex-col md:flex-row gap-4 items-center">

        {/* SEARCH */}
        <div className="flex items-center border rounded-lg px-3 py-2
                        w-full md:w-1/4">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <select
          className="border rounded-lg px-3 py-2 w-full md:w-1/6"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* SORT */}
        <select
          className="border rounded-lg px-3 py-2 w-full md:w-1/6"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        {/* CLEAR */}
        <button
          onClick={clearFilters}
          className="border border-red-500 text-red-500
                     px-4 py-2 rounded-lg
                     hover:bg-red-500 hover:text-white transition"
        >
          Clear Filter
        </button>
        </div>
        {/* ITEMS PER PAGE */}
        <select
          className="border rounded-lg px-3 py-2 w-25 md:w-1/6 "
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={4}>4 / page</option>
          <option value={8}>8 / page</option>
          <option value={12}>12 / page</option>
          <option value={16}>16 / page</option>
        </select>

      {/* PRODUCTS GRID */}
      {paginatedProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2
                          md:grid-cols-3 lg:grid-cols-4 gap-8">
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
            <div className="flex justify-center items-center gap-2 mt-12">

              {/* PREV */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
                className="px-4 py-2 border rounded-lg
                           disabled:opacity-40 hover:bg-gray-100"
              >
                ← Prev
              </button>

              {/* PAGE NUMBERS */}
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
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

              {/* NEXT */}
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
