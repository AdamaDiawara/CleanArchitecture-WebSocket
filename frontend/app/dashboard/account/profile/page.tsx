"use client";

import { useState } from "react";
import { useAuth } from "../../../auth/context/AuthContext";
import { updateProfile } from "../../../auth/services/userService";
import { getStoredAccessToken } from "../../../auth/services/tokenHelper";

export default function AccountProfilePage() {
  const { user, tokens, refresh, updateUser } = useAuth();

  const [name,  setName]  = useState(user?.name  ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [saving,  setSaving]  = useState(false);
  const [saved,   setSaved]   = useState(false);
  const [error,   setError]   = useState<string | null>(null);

  if (!user) return null;

  const handleSubmit = async (submitEvent: React.FormEvent) => {
    submitEvent.preventDefault();
    if (!tokens?.accessToken) return;
    setSaving(true);
    setError(null);
    setSaved(false);

    let token = tokens.accessToken;
    let result = await updateProfile({ name, phone }, token);

    if (!result.ok && result.message?.toLowerCase().includes("token")) {
      const refreshed = await refresh();
      if (refreshed) {
        token = getStoredAccessToken() ?? token;
        result = await updateProfile({ name, phone }, token);
      }
    }

    if (result.ok && result.data) {
      updateUser(result.data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      setError(result.message ?? "Erreur lors de la mise Ã  jour");
    }
    setSaving(false);
  };

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
          Informations personnelles
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Nom complet</label>
            <input
              type="text"
              value={name}
              onChange={(changeEvent) => setName(changeEvent.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Adresse e-mail</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm text-slate-400 cursor-not-allowed"
            />
            <p className="text-xs text-slate-400 mt-1">L&apos;adresse e-mail ne peut pas Ãªtre modifiÃ©e.</p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">TÃ©lÃ©phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(changeEvent) => setPhone(changeEvent.target.value)}
              placeholder="+33 6 xx xx xx xx"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-700 disabled:opacity-50 transition"
            >
              {saving ? "Enregistrementâ€¦" : "Enregistrer"}
            </button>
            {saved && (
              <span className="text-sm text-emerald-600 font-semibold">âœ“ Modifications enregistrÃ©es</span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

