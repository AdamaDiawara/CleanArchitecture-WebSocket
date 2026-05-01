"use client";

import type { AuthTokens, User } from "../types";

type SessionPanelProps = {
  tokens:  AuthTokens | null;
  me:      User | null;
  loading: boolean;
  loadMe:  () => Promise<void>;
  logout:  () => void;
};

const shortToken = (token: string | null): string => {
  if (!token) return "-";
  if (token.length < 24) return token;
  return `${token.slice(0, 14)}...${token.slice(-10)}`;
};

export default function SessionPanel({ tokens, me, loading, loadMe, logout }: SessionPanelProps) {
  return (
    <section className="rounded-3xl border border-black/10 bg-slate-950 p-6 text-slate-100 shadow-xl md:p-8">
      <h2 className="mb-4 text-xl font-extrabold">Session</h2>

      <div className="space-y-3 text-sm">
        <p>
          <span className="font-semibold text-slate-300">Access:</span> {shortToken(tokens?.accessToken ?? null)}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button onClick={loadMe} disabled={loading}
          className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-50">
          GET /me
        </button>
        <button onClick={logout} disabled={loading}
          className="rounded-lg bg-rose-600 px-3 py-2 text-xs font-bold text-white hover:bg-rose-700 disabled:opacity-50">
          Déconnexion
        </button>
      </div>

      <h3 className="mt-6 mb-2 text-sm font-bold uppercase tracking-widest text-slate-400">Utilisateur courant</h3>
      <pre className="max-h-64 overflow-auto rounded-xl border border-slate-800 bg-slate-900 p-3 text-xs leading-5 text-emerald-300">
        {JSON.stringify(me, null, 2)}
      </pre>
    </section>
  );
}
