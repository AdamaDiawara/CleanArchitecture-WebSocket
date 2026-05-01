"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      <Header onMenuClick={() => setOpen((isOpen) => !isOpen)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Backdrop */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 z-30"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Sidebar coulissante */}
        <Sidebar isOpen={open} onClose={() => setOpen(false)} />

        {/* Contenu principal */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto w-full max-w-3xl">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
