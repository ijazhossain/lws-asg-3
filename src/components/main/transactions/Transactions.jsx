import { useContext } from "react";
import {
  ModalToggleContext,
  NewTransactionContext,
  TransactionContext,
} from "../../../context";
import { toast } from "react-toastify";

export default function Transactions() {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const { setModalOpen } = useContext(ModalToggleContext);
  const { setNewTransaction } = useContext(NewTransactionContext);
  const handelEdit = (transaction) => {
    setModalOpen(true);
    setNewTransaction(transaction);
  };
  const handleDelete = (transactionId) => {
     
    setTransactions([
      ...transactions.filter((transaction) => transaction.id !== transactionId),
    ]);
    toast.success("Wow so easy!");
   
  };
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-[#111827]">
            Transactions & Records
          </h2>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#80A1C1]/20 text-[#111827]">
            {transactions.length} Records
          </span>
        </div>
        <div className="text-xs text-[#6B7280]">
          Click pencil to edit, trash to delete
        </div>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-[#111827]/10 shadow-xs hover:shadow-md hover:border-[#80A1C1]/50 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
              <div
                className={`w-12 h-12 rounded-2xl  border flex items-center justify-center text-xl shrink-0 
                    ${transaction.category === "Shopping" && "bg-emerald-50 border-emerald-200"}
                    ${transaction.category === "Entertainment" && "bg-purple-100  border-purple-200"}
                    ${transaction.category === "Medical" && "bg-red-50 border-red-200"}
                    ${transaction.category === "Utilities" && "bg-emerald-50 border-emerald-200"}
                    ${transaction.category === "Food" && "bg-[#FAD4C0]/40  border-[#FAD4C0]"}
                    ${transaction.category === "Rent" && "bg-[#80A1C1]/20  border-[#80A1C1]/40"}
                    ${transaction.category === "Education" && "bg-sky-50 border-sky-200"}
                    ${transaction.category === "Other" && "bg-slate-100 border-slate-200"}
                    `}
              >
                {transaction.category === "Shopping" && <span>🛍️</span>}
                {transaction.category === "Entertainment" && <span>🎬</span>}
                {transaction.category === "Medical" && <span>💊</span>}
                {transaction.category === "Utilities" && <span>⚡</span>}
                {transaction.category === "Food" && <span>🍱</span>}
                {transaction.category === "Rent" && <span>🏠</span>}
                {transaction.category === "Education" && <span>📚</span>}
                {transaction.category === "Other" && <span>✨</span>}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#111827] truncate">
                    {transaction.title}
                  </h4>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold 
                    ${transaction.category === "Shopping" && "bg-emerald-50 text-[#16A34A] border border-emerald-200"}
                    ${transaction.category === "Entertainment" && "bg-purple-100 text-purple-900 border border-purple-200"}
                    ${transaction.category === "Medical" && "bg-red-50 text-[#DC2626] border border-red-200"}
                    ${transaction.category === "Utilities" && "bg-amber-50 text-[#D97706] border border-amber-200"}
                    ${transaction.category === "Food" && "bg-[#FAD4C0]/40 text-[#111827] border border-[#FAD4C0]"}
                    ${transaction.category === "Rent" && "bg-[#80A1C1]/20 text-[#111827] border border-[#80A1C1]/40"}
                    ${transaction.category === "Education" && "bg-sky-50 text-[#0284C7] border border-sky-200"}
                    ${transaction.category === "Other" && "bg-slate-100 text-[#475569] border border-slate-200"}
                    `}
                  >
                    {transaction.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                  <span className="flex items-center gap-1">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(transaction.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </span>
                  <span className="hidden sm:inline-block truncate max-w-xs">
                    • {transaction.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#111827]/5">
              <div className="text-left sm:text-right">
                <span className="text-base sm:text-lg font-bold font-mono text-[#111827] tracking-tight">
                  ${transaction.amount}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  title="Edit Expense"
                  className="p-2 rounded-xl bg-[#FFF5E6] hover:bg-[#FAD4C0] text-[#111827] border border-[#111827]/10 transition-colors cursor-pointer"
                  onClick={() => handelEdit(transaction)}
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => handleDelete(transaction.id)}
                  className="p-2 rounded-xl bg-[#FFF5E6] hover:bg-[#DC2626]/15 hover:text-[#DC2626] text-[#111827] border border-[#111827]/10 transition-colors cursor-pointer"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        id="emptyListState"
        className="hidden bg-white rounded-3xl p-12 text-center border border-dashed border-[#111827]/20"
      >
        <img
          src="assets/empty-state.svg"
          alt="Empty state"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h3 className="text-lg font-bold text-[#111827]">List is empty!</h3>
        <p className="text-sm text-[#6B7280] max-w-sm mx-auto mt-1 mb-6">
          You haven't added any expense entries yet. Start tracking your budget
          by recording your first expense.
        </p>
        <a
          href="modal.html"
          className="inline-flex items-center gap-2 bg-[#FAD4C0] hover:bg-[#f5c0a7] text-[#111827] px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Add First Expense</span>
        </a>
      </div>

      <div
        id="notFoundState"
        className="hidden bg-white rounded-3xl p-12 text-center border border-[#111827]/10"
      >
        <img
          src="assets/not-found.svg"
          alt="Not found"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h3 className="text-lg font-bold text-[#111827]">Not Found</h3>
        <p
          className="text-sm text-[#6B7280] max-w-sm mx-auto mt-1 mb-6"
          id="notFoundReason"
        >
          No expense transactions matched your search query or filter criteria.
        </p>
        <button
          id="clearSearchFilterBtn"
          className="inline-flex items-center gap-2 bg-[#FFF5E6] hover:bg-[#FAD4C0] text-[#111827] border border-[#111827]/15 px-4 py-2 rounded-xl font-semibold text-xs transition-all cursor-pointer"
        >
          <span>Clear Search & Filters</span>
        </button>
      </div>
    </section>
  );
}
