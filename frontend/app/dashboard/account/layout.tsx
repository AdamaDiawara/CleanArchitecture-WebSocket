"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard/account",              label: "Accueil" },
  { href: "/dashboard/account/profile",      label: "Informations personnelles" },
  { href: "/dashboard/account/preferences",    label: "Préférences alimentaires" },
  { href: "/dashboard/account/payment-methods", label: "Moyens de paiement" },
  { href: "/dashboard/account/security",     label: "Sécurité" },
  { href: "/dashboard/account/privacy",      label: "Confidentialité et données" },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex gap-0 min-h-full">
      {/* Nav gauche */}
      <nav className="w-56 shrink-0 border-r border-slate-100 pr-2 pt-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-3 text-sm font-medium rounded-xl transition mb-0.5 ${
              pathname === item.href
                ? "bg-slate-100 text-slate-900 font-semibold"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Contenu */}
      <div className="flex-1 pl-8 pt-2">
        {children}
      </div>
    </div>
  );
}
