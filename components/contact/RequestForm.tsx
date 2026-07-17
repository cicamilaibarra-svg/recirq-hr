"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RequestForm() {
  const router = useRouter();

  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(false);
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Form submitted");

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyId: "d9561118-37a9-4f5e-91ab-524e0889bc19",
          employeeName: "Demo Employee",
          employeeEmail: updates ? email : null,
          anonymous: false,
          type,
          subject,
          description: message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit request.");
      }

      router.push(`/contact-hr/success?reference=${data.reference}`);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        alert(error.message);
      } else {
        setErrorMessage("Something went wrong.");
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block mb-2 font-medium">
          What do you need help with?
        </label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="w-full rounded-2xl border border-stone-300 p-4"
        >
          <option value="">Choose an option</option>
          <option value="Question">Question</option>
          <option value="Request">Request</option>
          <option value="Issue">Issue</option>
          <option value="Suggestion">Suggestion</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Subject
        </label>

        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full rounded-2xl border border-stone-300 p-4"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Tell us more
        </label>

        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full rounded-2xl border border-stone-300 p-4"
        />
      </div>

      <div className="rounded-2xl bg-stone-100 p-5">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={updates}
            onChange={() => setUpdates(!updates)}
          />

          <span>I'd like email updates about this request.</span>
        </label>

        {updates && (
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-2xl border border-stone-300 p-4"
          />
        )}
      </div>

      {errorMessage && (
        <div className="rounded-2xl bg-red-100 p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-amber-400 py-4 font-medium hover:bg-amber-500 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}