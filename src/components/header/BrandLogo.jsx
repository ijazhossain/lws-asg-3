import Logo from "../../assets/logo.svg"
export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#111827] flex items-center justify-center shadow-sm p-1.5">
            <img
              src={Logo}
              alt="BentoSpend Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight text-[#111827]">
                Bento<span className="text-[#80A1C1]">Spend</span>
              </h1>
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#FAD4C0] text-[#111827] rounded-full">
                v1.0
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">Expense & Budget Manager</p>
          </div>
        </div>
  )
}