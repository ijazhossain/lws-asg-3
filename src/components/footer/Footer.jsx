export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#111827]/10 bg-[#FFF5E6]/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© 2026 BentoSpend • Smart Expense Tracker Assignment Template</p>
          <div className="flex items-center gap-4">
            <span>Design System: Bento Modular</span>
            <span className="w-1 h-1 rounded-full bg-[#6B7280]"></span>
            <span>Tailwind CSS v4</span>
          </div>
        </div>
      </footer>
  )
}