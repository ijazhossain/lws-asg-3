import AddExpenseBtn from "../../header/AddExpenseBtn";

export default function EmptyList() {
  return (
     <div
          className=" bg-white rounded-3xl p-12 text-center border border-dashed border-[#111827]/20 flex items-center justify-between flex-col"
        >
          <img
            src="assets/empty-state.svg"
            alt="Empty state"
            className="w-32 h-32 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#111827]">List is empty!</h3>
          <p className="text-sm text-[#6B7280] max-w-sm mx-auto mt-1 mb-6">
            You haven't added any expense entries yet. Start tracking your
            budget by recording your first expense.
          </p>
         <AddExpenseBtn/>
        </div>
  )
}