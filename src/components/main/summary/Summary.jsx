import { useContext } from "react";
import { TransactionContext } from "../../../context";

export default function Summary() {
  const totalBudget=4000;
  const { transactions } = useContext(TransactionContext);
  const totalExpenses = transactions.reduce((total, transaction) => {
    const expenseAmount = Number(transaction.amount);
    return total + expenseAmount;
  }, 0);
  const spentPercentage=(totalExpenses/totalBudget)*100
  const remaining=totalBudget-totalExpenses;
  const now=new Date();
  const year= now.getFullYear();
  const currentMonth= now.getMonth();
  const currentDate=now.getDate();
  const totalDaysInMonth=new Date(year,currentMonth+1,0).getDate();
 const remainingDays=totalDaysInMonth-currentDate;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="bg-white rounded-3xl p-6 border border-[#111827]/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FAD4C0]/40 rounded-full blur-2xl pointer-events-none"></div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Total Expense
            </span>
            <span className="p-2 rounded-xl bg-[#FFF5E6] text-[#D97706]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </div>
          <div
            className="text-3xl font-extrabold font-mono text-[#111827] tracking-tight"
            id="totalExpenseDisplay"
          >
            $
            {totalExpenses.toLocaleString("en-us", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-[#111827]/5 flex items-center justify-between text-xs text-[#6B7280]">
          <span className="flex items-center gap-1 text-[#16A34A] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            Dynamic Live Calc
          </span>
          <span>This Month</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-[#111827]/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Total Entries
            </span>
            <span className="p-2 rounded-xl bg-[#80A1C1]/15 text-[#80A1C1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
          </div>
          <div
            className="text-3xl font-extrabold font-mono text-[#111827] tracking-tight"
            id="totalEntriesDisplay"
          >
            {transactions.length} Items
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-[#111827]/5 flex items-center justify-between text-xs text-[#6B7280]">
          <span>Active in list</span>
          <span className="font-medium text-[#111827]" id="filteredCountNotice">
            Showing all items
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FAD4C0]/40 rounded-3xl p-6 border border-[#111827]/10 shadow-sm hover:shadow-md transition-shadow lg:col-span-2 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Monthly Budget Target
            </span>
            <h3 className="text-xl font-bold text-[#111827] mt-0.5">
              $4,000.00 Limit
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#6B7280]">Remaining</span>
            <p
              className="text-lg font-bold font-mono text-[#16A34A]"
              id="budgetRemainingDisplay"
            >
              ${remaining.toLocaleString("en-us",{
                minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center justify-between text-xs font-medium text-[#111827] mb-1.5">
            <span>Spent: {spentPercentage.toFixed(1)}%</span>
            <span>Limit: $4,000.00</span>
          </div>
          <div className="w-full bg-white/70 h-3 rounded-full overflow-hidden p-0.5 border border-[#111827]/10">
            <div
              id="budgetProgressBar"
              className="bg-[#111827] h-full rounded-full transition-all duration-500"
              style={{width:`${spentPercentage}%`}}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#6B7280] pt-2 border-t border-[#111827]/10">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span> Healthy
            spending pace
          </span>
          <span className="font-medium">{remainingDays} Days Left</span>
        </div>
      </div>
    </section>
  );
}
