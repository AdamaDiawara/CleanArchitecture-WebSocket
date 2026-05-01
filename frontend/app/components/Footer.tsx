export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-3 shrink-0">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>© {year} EcoEats — Livraison éco-responsable</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          Système opérationnel
        </span>
      </div>
    </footer>
  );
}
