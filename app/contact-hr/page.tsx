import RequestForm from "@/components/contact/RequestForm";

export default function ContactHRPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12 px-6">
      <div className="mx-auto max-w-3xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-semibold">
            Contact HR
          </h1>

          <p className="mt-3 text-stone-500">
            Send a request, ask a question, or report an issue.
          </p>

        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

          <RequestForm />

        </div>

      </div>
    </main>
  );
}