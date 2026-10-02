
export default function ToastNotification() {
  return (
    <div
        id="toastNotification"
        className="fixed bottom-6 right-6 z-50 hidden transform transition-all duration-300 max-w-md"
      >
        <div className="bg-[#111827] text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10">
          <span id="toastIcon" className="text-[#16A34A] text-lg">
            ✓
          </span>
          <p id="toastMessage" className="text-xs font-medium text-[#FFF5E6]">
            Notification message
          </p>
        </div>
      </div>
  )
}