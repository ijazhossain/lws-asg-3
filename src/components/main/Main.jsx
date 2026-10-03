import CategoryFilter from "./category/CategoryFilter";
import CategorySpendingOverview from "./category/CategorySpendingOverview";
import Summary from "./summary/Summary";
import Transactions from "./transactions/Transactions";

export default function Main() {
  
  return (
    <>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Summary/>
        <CategorySpendingOverview />
        <CategoryFilter/>
        <Transactions/>
      </main>
      
    </>
  );
}
