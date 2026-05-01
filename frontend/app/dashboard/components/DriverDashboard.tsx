"use client";

import { useRouter } from "next/navigation";
import { IconBicycle, IconWallet } from "../../components/Icons";

export function DriverDashboard({ userName }: { userName: string }) {
  const router = useRouter();
  return (
    <div className="max-w-2xl space-y-6 mx-auto">
      <div>
        <p className="text-2xl font-black text-slate-900">Bonjour, {userName.split(" ")[0]}</p>
        <p className="text-slate-500 text-sm mt-1">Prêt pour vos livraisons ?</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => router.push("/dashboard/deliveries")}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 text-left hover:border-orange-200 hover:shadow-md transition group">
          <span className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition">
            <IconBicycle className="h-5 w-5" />
          </span>
          <p className="font-bold text-slate-900 mt-3 group-hover:text-orange-600 transition">Livraisons</p>
          <p className="text-xs text-slate-500 mt-0.5">Courses disponibles</p>
        </button>
        <button onClick={() => router.push("/dashboard/earnings")}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 text-left hover:border-orange-200 hover:shadow-md transition group">
          <span className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition">
            <IconWallet className="h-5 w-5" />
          </span>
          <p className="font-bold text-slate-900 mt-3 group-hover:text-orange-600 transition">Gains</p>
          <p className="text-xs text-slate-500 mt-0.5">Historique des revenus</p>
        </button>
      </div>
    </div>
  );
}
