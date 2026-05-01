"use client";

import { useAuth } from "../../auth/context/AuthContext";
import type { UserRole } from "../../auth/types";

const ROLE_LABEL: Record<UserRole, string> = {
  CLIENT:           "Client",
  RESTAURANT_OWNER: "Restaurant",
  DRIVER:           "Livreur",
  ADMIN:            "Administrateur",
};

const ROLE_COLOR: Record<UserRole, string> = {
  CLIENT:           "bg-orange-100 text-orange-700",
  RESTAURANT_OWNER: "bg-emerald-100 text-emerald-700",
  DRIVER:           "bg-blue-100 text-blue-700",
  ADMIN:            "bg-slate-200 text-slate-800",
};

export default function ProfilePage() {
  const { user } = useAuth();
  if (!user) return null;

  const memberSinceDate = new Date(user.created_at);
  const memberSince = Number.isNaN(memberSinceDate.getTime())
    ? "date inconnue"
    : memberSinceDate.toLocaleDateString("fr-FR", {
      day: "numeric", month: "long", year: "numeric",
    });

  return (
    <div className="max-w-xl mx-auto">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
            <span className="text-xl font-black text-orange-600">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">{user.name}</h2>
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${ROLE_COLOR[user.role]}`}>
              {ROLE_LABEL[user.role]}
            </span>
          </div>
        </div>

        <dl className="space-y-3 text-sm">
          {[
            { label: "Email",         value: user.email },
            { label: "Téléphone",     value: user.phone },
            {
              label: "Membre depuis",
              value: memberSince,
            },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-4 py-2 border-b border-slate-50 last:border-0">
              <dt className="text-slate-500 w-36 shrink-0">{label}</dt>
              <dd className="text-slate-900 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
