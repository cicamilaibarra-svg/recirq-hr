type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-5 py-3 font-medium transition-all duration-200";

  const styles = {
    primary:
      "bg-stone-900 text-white hover:opacity-90",
    secondary:
      "border border-stone-300 bg-white text-stone-900 hover:bg-stone-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}