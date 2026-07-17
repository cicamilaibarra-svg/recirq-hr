"use client";

import { useState } from "react";

export default function RequestForm() {
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-8">

      <div>

        <label className="block mb-2 font-medium">
          What do you need help with?
        </label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-2xl border border-stone-300 p-4"
        >
          <option value="">Choose an option</option>
          <option>Question</option>
          <option>Request</option>
          <option>Issue</option>
          <option>Suggestion</option>
        </select>

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Subject
        </label>

        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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

          <span>
            I'd like email updates about this request.
          </span>

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

      <button
        className="w-full rounded-2xl bg-amber-400 py-4 font-medium hover:bg-amber-500 transition"
      >
        Submit Request
      </button>

    </div>
  );
}