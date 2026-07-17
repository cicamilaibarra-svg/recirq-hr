"use client";

type WelcomeProps = {
  name: string;
  onNameChange: (value: string) => void;
  onContinue: () => void;
};

export default function Welcome({
  name,
  onNameChange,
  onContinue,
}: WelcomeProps) {
  return (
    <div className="text-center">

      <h1 className="text-4xl font-semibold mb-4">
        ☀️ Sunce
      </h1>

      <h2 className="text-2xl font-medium">
        Good morning!
      </h2>

      <p className="text-stone-500 mt-3 mb-8">
        What should we call you?
      </p>

      <input
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Your first name"
        className="w-full rounded-2xl border border-stone-300 p-4 mb-6 outline-none focus:border-amber-400"
      />

      <button
        type="button"
        onClick={onContinue}
        className="w-full rounded-2xl bg-amber-400 py-4 font-medium hover:bg-amber-500 transition"
      >
        Continue
      </button>

    </div>
  );
}