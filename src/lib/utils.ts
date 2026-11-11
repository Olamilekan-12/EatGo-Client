import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Amounts are stored in kobo (100 kobo = ₦1). Shows e.g. ₦3,500 or ₦3,500.50.
export function formatNaira(kobo: number) {
  return `₦${(kobo / 100).toLocaleString("en-NG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
