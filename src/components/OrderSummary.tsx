import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { ShoppingBag, X } from "lucide-react";
import { formatNaira } from "@/lib/utils";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const subtotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    return formatNaira(subtotal + restaurant.deliveryPrice);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-2xl font-extrabold tracking-tight">
          <span>Your order</span>
          <span className="text-primary">{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {cartItems.length === 0 && (
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-brand-chip px-4 py-6 text-center text-sm text-muted-foreground">
            <ShoppingBag size={24} />
            Your cart is empty. Tap + on a menu item to add it.
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2">
              <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-brand-mint px-2 text-xs font-bold text-primary">
                {item.quantity}
              </span>
              <span className="truncate">{item.name}</span>
            </span>
            <span className="flex shrink-0 items-center gap-2 font-semibold">
              {formatNaira(item.price * item.quantity)}
              <button
                type="button"
                aria-label={`Remove ${item.name}`}
                onClick={() => removeFromCart(item)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-chip text-muted-foreground hover:bg-red-100 hover:text-red-600"
              >
                <X size={14} strokeWidth={3} />
              </button>
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Delivery</span>
          <span className="font-semibold">
            {formatNaira(restaurant.deliveryPrice)}
          </span>
        </div>
      </CardContent>
    </>
  );
};

export default OrderSummary;
