"use client";

import { useCart } from "../auth/context/CartContext";
import { useAuth } from "../auth/context/AuthContext";
import { CheckoutModal } from "../restaurants/[restaurantId]/components/CheckoutModal";
import { OrderSuccessScreen } from "../restaurants/[restaurantId]/components/OrderSuccessScreen";

export function GlobalCheckoutOverlay() {
  const { cart, cartTotal, restaurant, showCheckout, setShowCheckout, orderSuccess, onOrderSuccess, clearSuccess } = useCart();
  const { tokens } = useAuth();

  if (showCheckout && restaurant) {
    return (
      <CheckoutModal
        cart={cart}
        cartTotal={cartTotal}
        restaurant={restaurant}
        accessToken={tokens?.accessToken ?? null}
        onClose={() => setShowCheckout(false)}
        onSuccess={onOrderSuccess}
      />
    );
  }

  if (orderSuccess) {
    return <OrderSuccessScreen order={orderSuccess} onClose={clearSuccess} />;
  }

  return null;
}
