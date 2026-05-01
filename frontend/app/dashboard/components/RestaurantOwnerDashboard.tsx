"use client";

import { useRouter } from "next/navigation";
import { IconStore, IconPackage } from "../../components/Icons";

export function RestaurantOwnerDashboard({ userName }: { userName: string }) {
  const router = useRouter();
  return (
    <div className="max-w-2xl space-y-6 mx-auto">
      <div>
        <p className="text-2xl font-black text-slate-900">Bonjour, {userName.split(" ")[0]}</p>
        <p className="text-slate-500 text-sm mt-1">Gérez vos établissements et vos menus.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => router.push("/dashboard/restaurants")}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 text-left hover:border-orange-200 hover:shadow-md transition group">
          <span className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition">
            <IconStore className="h-5 w-5" />
          </span>
          <p className="font-bold text-slate-900 mt-3 group-hover:text-orange-600 transition">Mes restaurants</p>
          <p className="text-xs text-slate-500 mt-0.5">Gérer les établissements</p>
        </button>
        <button onClick={() => router.push("/dashboard/orders")}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 text-left hover:border-orange-200 hover:shadow-md transition group">
          <span className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition">
            <IconPackage className="h-5 w-5" />
          </span>
          <p className="font-bold text-slate-900 mt-3 group-hover:text-orange-600 transition">Commandes</p>
          <p className="text-xs text-slate-500 mt-0.5">Commandes en cours</p>
        </button>
      </div>
    </div>
  );
}
