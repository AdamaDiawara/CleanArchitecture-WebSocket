"use client";

import type { AuthFormData, AuthMode } from "../types";

type AuthFormProps = {
  mode: AuthMode;
  setMode: (mode: AuthMode) => void;
  formData: AuthFormData;
  updateField: (field: keyof AuthFormData, value: string) => void;
  loading: boolean;
  message: string;
  runAuth: () => Promise<void>;
};

export default function AuthForm({
  mode,
  setMode,
  formData,
  updateField,
  loading,
  message,
  runAuth,
}: AuthFormProps) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur md:p-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
        EcoEats Auth Console
      </p>
      <h1 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
        Cote Frontend: Authentification
      </h1>

      <div className="mb-5 inline-flex rounded-xl border border-slate-300 bg-slate-100 p-1">
        <button
          onClick={() => setMode("register")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            mode === "register" ? "bg-white text-slate-900 shadow" : "text-slate-600"
          }`}
        >
          Inscription
        </button>
        <button
          onClick={() => setMode("login")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            mode === "login" ? "bg-white text-slate-900 shadow" : "text-slate-600"
          }`}
        >
          Connexion
        </button>
      </div>

      <div className="grid gap-3">
        {mode === "register" && (
          <input
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Nom"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-300 focus:ring"
          />
        )}
        <input
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="Email"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-300 focus:ring"
        />
        {mode === "register" && (
          <input
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="Telephone"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-300 focus:ring"
          />
        )}
        <input
          type="password"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
          placeholder="Mot de passe"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-300 focus:ring"
        />
      </div>

      <button
        onClick={runAuth}
        disabled={loading}
        className="mt-5 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700 disabled:opacity-50"
      >
        {loading ? "Chargement..." : mode === "register" ? "Creer le compte" : "Se connecter"}
      </button>

      <p className="mt-4 rounded-lg bg-slate-900 px-4 py-3 text-sm text-slate-100">{message}</p>
    </section>
  );
}
