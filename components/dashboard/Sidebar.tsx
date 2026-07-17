export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-stone-200 bg-white p-6">

      <h1 className="mb-10 text-2xl font-semibold text-stone-900">
        ☀️ Sunce
      </h1>

      <nav className="space-y-2">

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-stone-100">
          🏠 Home
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-stone-100">
          👥 People
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-stone-100">
          💬 Cases
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-stone-100">
          📅 Meetings
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-stone-100">
          📄 Policies
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-stone-100">
          🔔 Notifications
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-stone-100">
          ⚙️ Settings
        </button>

      </nav>

    </aside>
  );
}