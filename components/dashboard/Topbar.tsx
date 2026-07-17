export default function Topbar() {
  return (
    <header className="mb-8 flex items-center justify-between border-b border-stone-200 pb-6">
      <div>
        <h1 className="text-3xl font-semibold text-stone-900">
          Good morning, Camila ☀️
        </h1>

        <p className="mt-2 text-stone-500">
          Welcome back to Sunce.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl border border-stone-200 px-4 py-2 hover:bg-stone-100">
          🌐 English
        </button>

        <button className="rounded-full bg-stone-900 px-4 py-2 text-white">
          CI
        </button>
      </div>
    </header>
  );
}