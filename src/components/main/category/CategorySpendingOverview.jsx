import { useContext } from "react";
import { TransactionContext } from "../../../context";

export default function CategorySpendingOverview() {
  const { transactions } = useContext(TransactionContext);

  const foodExpenses = transactions
    .filter((transaction) => transaction.category === "Food")
    .reduce((total, transaction) => {
      return total + Number(transaction.amount);
    }, 0);
  const rentExpenses = transactions
    .filter((transaction) => transaction.category === "Rent")
    .reduce((total, transaction) => {
      return total + Number(transaction.amount);
    }, 0);
  const entertainmentExpenses = transactions
    .filter((transaction) => transaction.category === "Entertainment")
    .reduce((total, transaction) => {
      return total + Number(transaction.amount);
    }, 0);
  const medicalExpenses = transactions
    .filter((transaction) => transaction.category === "Medical")
    .reduce((total, transaction) => {
      return total + Number(transaction.amount);
    }, 0);
  const utilitiesExpenses = transactions
    .filter((transaction) => transaction.category === "Utilities")
    .reduce((total, transaction) => {
      return total + Number(transaction.amount);
    }, 0);
  const shoppingExpenses = transactions
    .filter((transaction) => transaction.category === "Shopping")
    .reduce((total, transaction) => {
      return total + Number(transaction.amount);
    }, 0);
  const categories = [
    {
      id: crypto.randomUUID(),
      title: "🍱 Food",
      expense: foodExpenses,
    },
    {
      id: crypto.randomUUID(),
      title: "🏠 Rent",
      expense: rentExpenses,
    },
    {
      id: crypto.randomUUID(),
      title: " 🎬 Entertainment",
      expense: entertainmentExpenses,
    },
    {
      id: crypto.randomUUID(),
      title: "💊 Medical",
      expense: medicalExpenses,
    },

    {
      id: crypto.randomUUID(),
      title: "⚡ Utilities",
      expense: utilitiesExpenses,
    },
    {
      id: crypto.randomUUID(),
      title: "🛍️ Shopping",
      expense: shoppingExpenses,
    },
  ];

  return (
    <section className="bg-white rounded-3xl p-6 border border-[#111827]/10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-base font-bold text-[#111827]">
            Category Spending Overview
          </h2>
          <p className="text-xs text-[#6B7280]">
            Real-time dynamic category distribution
          </p>
        </div>
        <div className="text-xs font-semibold text-[#80A1C1] bg-[#80A1C1]/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
          Updated with State
        </div>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between"
          >
            <span className="text-xs text-[#6B7280] font-medium">
              {category.title}
            </span>
            <span
              className="text-sm font-bold font-mono text-[#111827] mt-1"
              id="cat-food-total"
            >
              $
              {category.expense.toLocaleString("en-us", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
