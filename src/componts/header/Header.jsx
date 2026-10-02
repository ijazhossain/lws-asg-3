import AddExpenseBtn from "./AddExpenseBtn";
import BrandLogo from "./BrandLogo";
import Search from "./Search";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#FFF5E6]/90 backdrop-blur-md border-b border-[#111827]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <BrandLogo />
        <Search />
        <AddExpenseBtn />
      </div>
    </header>
  );
}
