"use client";

import { useState } from "react";

import Welcome from "@/components/employee/Welcome";
import ActionGrid from "@/components/employee/ActionGrid";
import { company } from "@/lib/company";

export default function EmployeePage() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
        <div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">
          <Welcome
            name={name}
            onNameChange={setName}
            onContinue={() => {
              if (name.trim() !== "") {
                setStarted(true);
              }
            }}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
      <div className="w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">

        <h1 className="text-3xl font-semibold text-center">
          Good morning, {name}! ☀️
        </h1>

        <p className="mt-3 text-center text-stone-500">
          Welcome to {company.name}.
        </p>

        <div className="mt-10">
          <ActionGrid />
        </div>

      </div>
    </main>
  );
}