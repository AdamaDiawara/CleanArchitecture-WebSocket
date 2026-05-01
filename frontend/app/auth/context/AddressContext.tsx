"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "ecoeats_addresses";

export type SavedAddress = {
  id:         string;
  label:      string;
  street:     string;
  postalCode: string;
  city:       string;
  isDefault:  boolean;
};

type AddressContextValue = {
  addresses:       SavedAddress[];
  activeAddress:   SavedAddress | null;
  setActiveId:     (id: string) => void;
  addAddress:      (label: string, street: string, postalCode: string, city: string) => void;
  removeAddress:   (id: string) => void;
};

const AddressContext = createContext<AddressContextValue | null>(null);

export function AddressProvider({ children }: { children: React.ReactNode }) {
  const [addresses,  setAddresses]  = useState<SavedAddress[]>([]);
  const [activeId,   setActiveId]   = useState<string | null>(null);
  const [hydrated,   setHydrated]   = useState(false);

  /* ── Chargement depuis localStorage ── */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: SavedAddress[] = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAddresses(parsed);
          /* L'adresse active par défaut est toujours la première (isDefault) */
          setActiveId(parsed.find((a) => a.isDefault)?.id ?? parsed[0].id);
        }
      }
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  /* ── Persistance ── */
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses));
  }, [addresses, hydrated]);

  const activeAddress = addresses.find((a) => a.id === activeId) ?? addresses[0] ?? null;

  const addAddress = useCallback((label: string, street: string, postalCode: string, city: string) => {
    const newAddr: SavedAddress = {
      id:         `addr-${Date.now()}`,
      label:      label.trim() || "Adresse",
      street:     street.trim(),
      postalCode: postalCode.trim(),
      city:       city.trim(),
      isDefault:  false,
    };
    setAddresses((prev) => {
      /* La première adresse ajoutée devient la principale */
      if (prev.length === 0) newAddr.isDefault = true;
      const updated = [...prev, newAddr];
      return updated;
    });
    setActiveId(newAddr.id);
  }, []);

  const removeAddress = useCallback((id: string) => {
    setAddresses((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      /* Si on supprime la principale, la nouvelle première devient principale */
      if (updated.length > 0 && !updated.some((a) => a.isDefault)) {
        updated[0] = { ...updated[0], isDefault: true };
      }
      return updated;
    });
    setActiveId((prev) => (prev === id ? null : prev));
  }, []);

  return (
    <AddressContext.Provider value={{ addresses, activeAddress, setActiveId, addAddress, removeAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export function useAddresses() {
  const ctx = useContext(AddressContext);
  if (!ctx) throw new Error("useAddresses doit être utilisé dans AddressProvider");
  return ctx;
}
