export default function Search() {
  return (
   <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <input
              type="text"
              id="headerSearchInput"
              placeholder="Search expenses by title..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#111827]/15 rounded-xl text-sm text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#80A1C1] focus:border-transparent transition-all shadow-sm"
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
            <button
              id="clearHeaderSearch"
              className="hidden absolute inset-y-0 right-0 pr-3 flex items-center text-[#6B7280] hover:text-[#111827]"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
  )
}