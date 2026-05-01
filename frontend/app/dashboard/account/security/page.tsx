"use client";

import { useState } from "react";

type Field = "current" | "next" | "confirm";

export default function AccountSecurityPage() {
  const [fields, setFields] = useState<Record<Field, string>>({
    current: "",
    next:    "",
    confirm: "",
  });
  const [visible, setVisible] = useState<Record<Field, boolean>>({
    current: false,
    next:    false,
    confirm: false,
  });
  const [error,   setError]   = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [saving,  setSaving]  = useState(false);

  const setFieldValue = (field: Field) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setFields((previousFields) => ({ ...previousFields, [field]: event.target.value }));
  const toggle = (field: Field) =>
    setVisible((previousVisibility) => ({ ...previousVisibility, [field]: !previousVisibility[field] }));

  const handleSubmit = async (submitEvent: React.FormEvent) => {
    submitEvent.preventDefault();
    setError(null);

    if (fields.next.length < 8) {
      setError("Le nouveau mot de passe doit comporter au moins 8 caractÃ¨res.");
      return;
    }
    if (fields.next !== fields.confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setSaving(true);
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 600));
    setSaving(false);
    setSuccess(true);
    setFields({ current: "", next: "", confirm: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  const EyeIcon = ({ show }: { show: boolean }) => show ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const renderPasswordField = ({ field, label }: { field: Field; label: string }) => (
    <div>
      <label className="block text-xs font-semibold text-slate-500 mb-1">{label}</label>
      <div className="relative">
        <input
          type={visible[field] ? "text" : "password"}
          value={fields[field]}
          onChange={setFieldValue(field)}
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <button
          type="button"
          onClick={() => toggle(field)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
        >
          <EyeIcon show={visible[field]} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
          Modifier le mot de passe
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderPasswordField({ field: "current", label: "Mot de passe actuel" })}
          {renderPasswordField({ field: "next", label: "Nouveau mot de passe" })}
          {renderPasswordField({ field: "confirm", label: "Confirmer le nouveau mot de passe" })}

          {error && (
            <p className="text-xs text-red-600 font-medium">{error}</p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-700 disabled:opacity-50 transition"
            >
              {saving ? "Enregistrementâ€¦" : "Modifier le mot de passe"}
            </button>
            {success && (
              <span className="text-sm text-emerald-600 font-semibold">âœ“ Mot de passe mis Ã  jour</span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

