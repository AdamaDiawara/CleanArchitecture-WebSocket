"use client";

import { useRouter } from "next/navigation";
import type { OrderSummary } from "../../../auth/services/orderService";

export function OrderSuccessScreen({ order, onClose }: { order: OrderSummary; onClose: () => void }) {
  const router = useRouter();
  const estimatedTime = new Date(order.estimatedAt).toLocaleTimeString("fr-FR", {
    hour: "2-digit", minute: "2-digit",
  });

  const handleContinue = () => {
    onClose();
    router.push("/dashboard/orders");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-sm text-center shadow-2xl">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-xl font-black text-slate-900">Commande confirmée !</h2>
        <p className="text-slate-500 text-sm mt-2">Votre commande a bien été enregistrée.</p>
        <div className="bg-slate-50 rounded-2xl p-4 mt-5 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">N° commande</span>
            <span className="font-mono font-bold text-xs">{order.id.slice(0, 8).toUpperCase()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Total</span>
            <span className="font-black">{order.total.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Livraison estimée</span>
            <span className="font-semibold">{estimatedTime}</span>
          </div>
        </div>
        <button type="button" onClick={handleContinue}
          className="mt-5 w-full bg-orange-600 text-white rounded-2xl py-3 text-sm font-bold hover:bg-orange-700 transition">
          Voir ma commande →
        </button>
      </div>
    </div>
  );
}
