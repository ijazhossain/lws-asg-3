export default function CategoryFilter() {
  return (
     <section className="bg-white rounded-3xl p-5 sm:p-6 border border-[#111827]/10 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="block md:hidden w-full">
              <div className="relative">
                <input
                  type="text"
                  id="mobileSearchInput"
                  placeholder="Search expenses by title..."
                  className="w-full pl-10 pr-10 py-2 bg-[#FFF5E6]/60 border border-[#111827]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#80A1C1]"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6B7280]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none"
              id="categoryFilterContainer"
            >
              <button
                data-category="All"
                className="filter-pill active px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#111827] text-white transition-all cursor-pointer shadow-sm"
              >
                All Categories
              </button>
              <button
                data-category="Food"
                className="filter-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] transition-all cursor-pointer border border-[#111827]/10"
              >
                🍱 Food
              </button>
              <button
                data-category="Rent"
                className="filter-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] transition-all cursor-pointer border border-[#111827]/10"
              >
                🏠 Rent
              </button>
              <button
                data-category="Entertainment"
                className="filter-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] transition-all cursor-pointer border border-[#111827]/10"
              >
                🎬 Entertainment
              </button>
              <button
                data-category="Medical"
                className="filter-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] transition-all cursor-pointer border border-[#111827]/10"
              >
                💊 Medical
              </button>
              <button
                data-category="Utilities"
                className="filter-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] transition-all cursor-pointer border border-[#111827]/10"
              >
                ⚡ Utilities
              </button>
              <button
                data-category="Shopping"
                className="filter-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] transition-all cursor-pointer border border-[#111827]/10"
              >
                🛍️ Shopping
              </button>
              <button
                data-category="Other"
                className="filter-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] transition-all cursor-pointer border border-[#111827]/10"
              >
                ✨ Other
              </button>
            </div>

            <div className="flex items-center gap-3 self-end lg:self-auto">
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <span className="font-medium whitespace-nowrap">Sort by:</span>
                <div className="relative">
                  <select
                    id="sortBySelect"
                    className="appearance-none bg-[#FFF5E6] border border-[#111827]/15 text-[#111827] text-xs font-semibold rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-[#80A1C1] cursor-pointer"
                  >
                    <option value="date-desc">Date: Newest First</option>
                    <option value="date-asc">Date: Oldest First</option>
                    <option value="amount-desc">Amount: High to Low</option>
                    <option value="amount-asc">Amount: Low to High</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#111827]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                id="resetFiltersBtn"
                title="Reset filters and sorting"
                className="p-2 rounded-xl bg-[#FFF5E6] hover:bg-[#FAD4C0]/50 text-[#111827] border border-[#111827]/10 transition-all cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
  )
}