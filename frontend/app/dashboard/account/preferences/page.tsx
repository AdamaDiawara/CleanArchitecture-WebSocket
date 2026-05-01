"use client";

import { useState } from "react";
import { useAuth } from "../../../auth/context/AuthContext";
import { getStoredAccessToken } from "../../../auth/services/tokenHelper";
import {
  updatePreferences,
  preferencesFromUser,
  DIET_LABELS,
  ALLERGY_LABELS,
  CUISINE_LABELS,
} from "../../../auth/services/preferencesService";
import type { AllergyType, CuisineType, DietType, UserPreferences } from "../../../auth/types";

const ALL_DIETS     = Object.keys(DIET_LABELS)    as DietType[];
const ALL_ALLERGIES = Object.keys(ALLERGY_LABELS) as AllergyType[];
const ALL_CUISINES  = Object.keys(CUISINE_LABELS) as CuisineType[];

export default function FoodPreferencesPage() {
  const { user, tokens, updateUser } = useAuth();

  const [preferences, setPreferences] = useState<UserPreferences>(() =>
    preferencesFromUser(user),
  );
  const [saving, setSaving] = useState(false);
  const [saved,  setSaved]  = useState(false);
  const [error,  setError]  = useState<string | null>(null);

  if (!user) return null;

  const handleDietChange = (diet: DietType) => {
    setPreferences((previous) => ({ ...previous, diet }));
    setSaved(false);
  };

  const toggleAllergy = (allergy: AllergyType) => {
    setPreferences((previous) => {
      const alreadySelected = previous.allergies.includes(allergy);
      return {
        ...previous,
        allergies: alreadySelected
          ? previous.allergies.filter((item) => item !== allergy)
          : [...previous.allergies, allergy],
      };
    });
    setSaved(false);
  };

  const toggleCuisine = (cuisine: CuisineType) => {
    setPreferences((previous) => {
      const alreadySelected = previous.cuisines.includes(cuisine);
      return {
        ...previous,
        cuisines: alreadySelected
          ? previous.cuisines.filter((item) => item !== cuisine)
          : [...previous.cuisines, cuisine],
      };
    });
    setSaved(false);
  };

  const handleSave = async () => {
    if (!tokens?.accessToken) return;
    setSaving(true);
    setError(null);
    setSaved(false);

    const result = await updatePreferences(preferences, tokens.accessToken);

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
    <div className="max-w-lg mx-auto space-y-6">

      {/* RÃ©gime alimentaire */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
          RÃ©gime alimentaire
        </h3>
        <div className="space-y-2">
          {ALL_DIETS.map((diet) => (
            <label
              key={diet}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition ${
                preferences.diet === diet
                  ? "border-orange-400 bg-orange-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="diet"
                value={diet}
                checked={preferences.diet === diet}
                onChange={() => handleDietChange(diet)}
                className="accent-orange-500"
              />
              <span className="text-sm text-slate-800">{DIET_LABELS[diet]}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Allergies et intolÃ©rances */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
          Allergies et intolÃ©rances
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          Ces informations sont utilisÃ©es pour filtrer les plats incompatibles.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {ALL_ALLERGIES.map((allergy) => {
            const isSelected = preferences.allergies.includes(allergy);
            return (
              <label
                key={allergy}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 cursor-pointer transition ${
                  isSelected
                    ? "border-red-300 bg-red-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleAllergy(allergy)}
                  className="accent-red-500"
                />
                <span className="text-sm text-slate-800">{ALLERGY_LABELS[allergy]}</span>
              </label>
            );
          })}
        </div>
      </section>

      {/* Cuisines prÃ©fÃ©rÃ©es */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
          Cuisines prÃ©fÃ©rÃ©es
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          SÃ©lectionnez les types de cuisine que vous apprÃ©ciez.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {ALL_CUISINES.map((cuisine) => {
            const isSelected = preferences.cuisines.includes(cuisine);
            return (
              <label
                key={cuisine}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 cursor-pointer transition ${
                  isSelected
                    ? "border-orange-400 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCuisine(cuisine)}
                  className="accent-orange-500"
                />
                <span className="text-sm text-slate-800">{CUISINE_LABELS[cuisine]}</span>
              </label>
            );
          })}
        </div>
      </section>

      {/* Bouton sauvegarder */}
      <div className="flex items-center gap-3 pb-6">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-700 disabled:opacity-50 transition"
        >
          {saving ? "Enregistrementâ€¦" : "Enregistrer mes prÃ©fÃ©rences"}
        </button>
        {saved  && <span className="text-sm text-emerald-600 font-semibold">âœ“ PrÃ©fÃ©rences enregistrÃ©es</span>}
        {error  && <span className="text-sm text-red-600 font-medium">{error}</span>}
      </div>

    </div>
  );
}
