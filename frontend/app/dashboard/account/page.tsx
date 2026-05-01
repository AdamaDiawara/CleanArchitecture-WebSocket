"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../auth/context/AuthContext";
import { uploadAvatar, getAvatarUrl } from "../../auth/services/userService";
import { getStoredAccessToken } from "../../auth/services/tokenHelper";

const ROLE_LABEL: Record<string, string> = {
  CLIENT:           "Client",
  RESTAURANT_OWNER: "Restaurateur",
  DRIVER:           "Livreur",
};

const cards = [
  {
    href:        "/dashboard/account/profile",
    title:       "Informations personnelles",
    description: "Nom, numéro de téléphone",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    href:        "/dashboard/account/preferences",
    title:       "Préférences alimentaires",
    description: "Régime, allergies, cuisines favorites",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    href:        "/dashboard/account/payment-methods",
    title:       "Moyens de paiement",
    description: "Cartes enregistrées via Stripe",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    href:        "/dashboard/account/security",
    title:       "Connexion et sécurité",
    description: "Mot de passe, vérification en deux étapes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    href:        "/dashboard/account/privacy",
    title:       "Confidentialité et données",
    description: "Gestion des données personnelles",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AccountPage() {
  const { user, tokens, updateUser } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((namePart) => namePart.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const memberSinceDate = new Date(user.created_at);
  const memberSince = Number.isNaN(memberSinceDate.getTime())
    ? "date inconnue"
    : memberSinceDate.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
    });

  const avatarUrl = getAvatarUrl(user.photo_url);

  const handleAvatarChange = async (file: File) => {
    if (!tokens?.accessToken) return;
    setUploading(true);
    setError(null);

    const result = await uploadAvatar(file, tokens.accessToken);

    if (result.ok && result.data) {
      updateUser(result.data);
    } else {
      setError(result.message ?? "Erreur lors de l'envoi");
    }
    setUploading(false);
  };

  return (
    <div className="max-w-xl space-y-6 mx-auto">
      {/* Avatar + identité */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center gap-5">
        {/* Avatar cliquable */}
        <div className="relative shrink-0 group">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="w-20 h-20 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-400"
            aria-label="Changer la photo de profil"
          >
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={user.name}
                width={80}
                height={80}                loading="eager"                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-orange-100 flex items-center justify-center">
                <span className="text-2xl font-black text-orange-600">{initials}</span>
              </div>
            )}
            {/* Overlay caméra au survol */}
            <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {uploading ? (
                <span className="text-white text-xs font-bold animate-pulse">…</span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </div>
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleAvatarChange(file);
              e.target.value = "";
            }}
          />
        </div>

        <div>
          <p className="text-xl font-bold text-slate-900">{user.name}</p>
          <p className="text-sm text-slate-500">{user.email}</p>
          <p className="text-xs text-slate-400 mt-1">
            {ROLE_LABEL[user.role] ?? user.role} · Membre depuis {memberSince}
          </p>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
          {!avatarUrl && !uploading && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-xs text-orange-600 font-semibold hover:underline mt-1 inline-block"
            >
              Ajouter une photo
            </button>
          )}
        </div>
      </section>

      {/* Cartes de navigation */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition group"
          >
            <span className="text-slate-400 group-hover:text-orange-500 transition">{card.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900">{card.title}</p>
              <p className="text-xs text-slate-400 mt-0.5">{card.description}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300 group-hover:text-slate-500 transition shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </section>
    </div>
  );
}
