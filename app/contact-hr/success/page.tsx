"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function RequestSuccessPage() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
      <div className="w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-10 shadow-sm text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-3xl font-semibold">
          Request Submitted
        </h1>

        <p className="mt-4 text-stone-600">
          Thank you. Your request has been received and will be reviewed shortly.
        </p>

        <div className="mt-8 rounded-2xl bg-stone-100 p-6">

          <p className="text-sm text-stone-500">
            Reference Number
          </p>

          <p className="mt-2 text-2xl font-bold tracking-wider">
            {reference ?? "Unavailable"}
          </p>

        </div>

        <p className="mt-6 text-sm text-stone-500">
          If you submitted your request as a guest, save this reference number to track your request.
        </p>

        <Link
          href="/employee"
          className="mt-8 inline-block rounded-2xl bg-amber-400 px-8 py-4 font-medium transition hover:bg-amber-500"
        >
          Return Home
        </Link>

      </div>
    </main>
  );
}