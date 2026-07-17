import RequestForm from "@/components/contact/RequestForm";

export default function ContactHRPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-12 flex justify-center">

      <div className="w-full max-w-3xl rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">

        <h1 className="text-3xl font-semibold">
          Contact HR
        </h1>

        <p className="mt-3 text-stone-500">
          Complete the form below and we'll review your request as soon as possible.
        </p>

        <div className="mt-10">

          <RequestForm />

        </div>

      </div>

    </main>
  );
}