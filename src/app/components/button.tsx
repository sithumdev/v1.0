import clsx from "clsx";

type IButton = {
  children: React.ReactNode;
  isActive?: boolean;
  css?: string;
};

export default function Button({ children, isActive = false, css }: IButton) {
  return (
    <button
      type="button"
      className={clsx(
        "border rounded-full px-6 py-4 transition-colors duration-500",
        isActive
          ? "bg-black border-black text-white hover:bg-transparent hover:text-black"
          : "hover:bg-black hover:border-black hover:text-white",
        css
      )}
    >
      {children}
    </button>
  );
}
