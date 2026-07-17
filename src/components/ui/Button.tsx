import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 font-medium transition-all",
        variant === "primary"
          ? "bg-primary text-white hover:opacity-90"
          : "border border-primary text-primary hover:bg-primary hover:text-white",
        className
      )}
      {...props}
    />
  );
}