import { useContext } from "react";
import { ModalToggleContext } from "../../context";

export default function AddExpenseBtn() {
  const { setModalOpen } = useContext(ModalToggleContext);
  const handleToggle = () => {
    setModalOpen(true);
  };
  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center gap-2 bg-[#FAD4C0] hover:bg-[#f5c0a7] active:scale-[0.98] text-[#111827] px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm border border-[#111827]/10 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      <span>Add Expense</span>
    </button>
  );
}
