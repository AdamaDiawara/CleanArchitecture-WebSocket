"use client";

export function OrderTimeline({ status, hasDriver }: { status: string; hasDriver: boolean }) {
  const currentIndex = (() => {
    if (status === "confirmed" && !hasDriver)  return 1;
    if (status === "confirmed" && hasDriver)   return 3;
    if (status === "prepared"  && !hasDriver)  return 1;
    if (status === "prepared"  && hasDriver)   return 3;
    if (status === "delivering")               return 5;
    if (status === "delivered")                return 8;
    return 0;
  })();

  const steps = [
    "Acceptée", "En préparation", "Livreur assigné", "Vers restaurant",
    "Récupérée", "Vers vous", "En livraison", "Livrée",
  ];

  const progressPct = currentIndex >= steps.length
    ? 100
    : (currentIndex / (steps.length - 1)) * 100;

  return (
    <div className="px-5 pt-4 pb-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Suivi de commande</p>
      <div className="relative">
        <div className="absolute top-3.5 left-3.5 right-3.5 h-1 bg-slate-200 rounded-full" />
        <div
          className="absolute top-3.5 left-3.5 h-1 bg-orange-500 rounded-full transition-all duration-500"
          style={{ width: `calc(${progressPct}% * (100% - 28px) / 100)` }}
        />
        <div className="relative flex justify-between">
          {steps.map((label, i) => {
            const isDone    = i < currentIndex;
            const isCurrent = i === currentIndex;
            return (
              <div key={i} className="flex flex-col items-center gap-2" style={{ width: "12.5%" }}>
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                  isDone    ? "bg-orange-500 border-orange-500" :
                  isCurrent ? "bg-white border-orange-500 ring-2 ring-orange-200" :
                              "bg-white border-slate-300"
                }`}>
                  {isDone ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : isCurrent ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                  )}
                </div>
                <p className={`text-center leading-tight ${isDone || isCurrent ? "text-slate-800 font-semibold" : "text-slate-400 font-medium"}`}
                  style={{ fontSize: "10px" }}>
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
