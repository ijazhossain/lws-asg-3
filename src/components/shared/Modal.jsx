import { useContext } from "react";
import { ModalToggleContext } from "../../context";

export default function Modal() {
   const {modalOpen,setModalOpen}=useContext(ModalToggleContext)
    
  return (
  
<div className="min-h-screen bg-[#FAFAF7] text-[#111827] flex flex-col font-sans">

  <div id="expenseModal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-[#111827]/50 backdrop-blur-xs transition-opacity duration-200">
    <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#111827]/15 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">

   
      <div className="flex items-center justify-between pb-4 border-b border-[#111827]/10 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FFF5E6] text-[#111827] flex items-center justify-center border border-[#111827]/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827]" id="modalTitle">Add New Expense</h3>
            <p className="text-xs text-[#6B7280]" id="modalSubtitle">Enter details to record this transaction</p>
          </div>
        </div>
        <button
          onClick={()=>setModalOpen(!modalOpen)}
          className="w-8 h-8 rounded-xl bg-[#FFF5E6] hover:bg-[#FAD4C0] text-[#111827] flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div id="formValidationError" className="hidden mb-4 p-3 rounded-2xl bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626] text-xs font-medium flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span id="formErrorMessage">Please fill in all required fields.</span>
      </div>

     
      <form id="expenseForm" className="space-y-4">
        <input type="hidden" id="editExpenseId" value="" />

    
        <div>
          <label htmlFor="expenseTitle" className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
            Expense Title <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="text"
            id="expenseTitle"
            placeholder="e.g. Grocery shopping, House rent, Electricity bill"
            className="w-full px-4 py-2.5 bg-[#FFF5E6]/40 border border-[#111827]/15 rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#80A1C1] focus:bg-white transition-all"
            required
          />
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
          <div>
            <label htmlFor="expenseAmount" className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
              Amount ($) <span className="text-[#DC2626]">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#6B7280] font-mono text-sm font-semibold">$</span>
              <input
                type="number"
                id="expenseAmount"
                step="0.01"
                min="0.01"
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-2.5 bg-[#FFF5E6]/40 border border-[#111827]/15 rounded-xl text-sm font-mono text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#80A1C1] focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          
          <div>
            <label htmlFor="expenseCategory" className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
              Category <span className="text-[#DC2626]">*</span>
            </label>
            <div className="relative">
              <select
                id="expenseCategory"
                className="w-full appearance-none px-4 py-2.5 bg-[#FFF5E6]/40 border border-[#111827]/15 rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#80A1C1] focus:bg-white transition-all cursor-pointer"
                required
              >
                <option value="" disabled selected>Select category</option>
                <option value="Food">🍱 Food</option>
                <option value="Rent">🏠 Rent</option>
                <option value="Entertainment">🎬 Entertainment</option>
                <option value="Medical">💊 Medical</option>
                <option value="Utilities">⚡ Utilities</option>
                <option value="Shopping">🛍️ Shopping</option>
                <option value="Education">📚 Education</option>
                <option value="Other">✨ Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#111827]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      
        <div>
          <label htmlFor="expenseDate" className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
            Date <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="date"
            id="expenseDate"
            className="w-full px-4 py-2.5 bg-[#FFF5E6]/40 border border-[#111827]/15 rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#80A1C1] focus:bg-white transition-all"
            required
          />
        </div>

        
        <div>
          <label htmlFor="expenseNote" className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
            Note / Description <span className="text-xs font-normal text-[#6B7280] lowercase">(optional)</span>
          </label>
          <textarea
            id="expenseNote"
            rows="2"
            placeholder="Add brief details about this expense..."
            className="w-full px-4 py-2 bg-[#FFF5E6]/40 border border-[#111827]/15 rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#80A1C1] focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

       
        <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#111827]/10">
          <button
            type="button"
             onClick={()=>setModalOpen(!modalOpen)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-[#111827] bg-[#FFF5E6] hover:bg-[#FAD4C0]/40 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            id="submitExpenseBtn"
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-[#111827] bg-[#FAD4C0] hover:bg-[#f5c0a7] active:scale-[0.98] transition-all shadow-sm border border-[#111827]/10 cursor-pointer"
          >
            Save Expense
          </button>
        </div>
      </form>

    </div>
  </div>
</div>
  )
}