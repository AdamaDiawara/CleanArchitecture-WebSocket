import Image from "next/image";
import { buildImageUrl } from "../../../auth/services/http";
import { IconFood, IconStar } from "../../../components/Icons";
import type { MenuItemDto } from "../../../auth/services/menu/menuService";

export function MenuItemCard({ item, onSelect }: { item: MenuItemDto; onSelect: () => void }) {
  const photoUrl = item.photoUrl ? buildImageUrl(item.photoUrl) : null;
  return (
    <button type="button" onClick={onSelect}
      className="w-full flex items-start gap-4 rounded-2xl border border-slate-100 p-4 hover:border-slate-300 hover:shadow-sm transition bg-white text-left">
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-bold text-slate-900">{item.name}</p>
          <span className="text-sm font-black text-slate-900 shrink-0">{item.price.toFixed(2)} €</span>
        </div>
        {item.isPopular && (
          <span className="flex items-center gap-1 text-xs text-amber-600 font-semibold mt-0.5">
            <IconStar className="h-3.5 w-3.5 text-amber-400" filled /> Populaire
          </span>
        )}
        {item.description && (
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
        )}
        {item.options.length > 0 && (
          <p className="text-xs text-slate-400 mt-1">Personnalisable</p>
        )}
        {item.dailyStock !== null && item.dailyStock <= 5 && item.dailyStock > 0 && (
          <p className="text-xs text-amber-600 font-semibold mt-1">
            Plus que {item.dailyStock} disponible{item.dailyStock > 1 ? "s" : ""}
          </p>
        )}
      </div>
      {photoUrl ? (
        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative bg-slate-100">
          <Image src={photoUrl} alt={item.name} fill sizes="96px" className="object-cover" />
        </div>
      ) : (
        <div className="w-24 h-24 rounded-xl shrink-0 bg-slate-100 flex items-center justify-center text-slate-300">
          <IconFood className="h-8 w-8" />
        </div>
      )}
    </button>
  );
}
