import { formatNaira } from "@/lib/utils";
import type { MenuItem as MenuItemType } from "../types";
import { Plus } from "lucide-react";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <button
      type="button"
      onClick={addToCart}
      className="group flex w-full items-center justify-between gap-4 rounded-2xl border bg-white p-5 text-left shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <span className="min-w-0">
        <span className="block truncate text-lg font-bold">{menuItem.name}</span>
        <span className="mt-1 block font-semibold text-primary">
          {formatNaira(menuItem.price)}
        </span>
      </span>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-mint text-primary transition group-hover:bg-primary group-hover:text-white">
        <Plus size={20} strokeWidth={3} />
      </span>
    </button>
  );
};

export default MenuItem;
