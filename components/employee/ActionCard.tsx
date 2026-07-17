import Link from "next/link";

type ActionCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ActionCard({
  icon,
  title,
  description,
}: ActionCardProps) {
  let href = "#";

  if (title === "Contact HR") href = "/contact-hr";
  if (title === "Call HR Now") href = "/call";
  if (title === "Ask Sunce") href = "/ask";
  if (title === "Company Policies") href = "/policies";

  return (
    <Link href={href}>
      <div className="rounded-3xl border border-stone-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-md cursor-pointer">

        <div className="flex items-start gap-4">

          <div className="text-3xl">
            {icon}
          </div>

          <div>

            <h3 className="text-lg font-semibold">
              {title}
            </h3>

            <p className="mt-1 text-sm text-stone-500">
              {description}
            </p>

          </div>

        </div>

      </div>
    </Link>
  );
}