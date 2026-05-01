import Image from "next/image";
import { buildImageUrl } from "../../../auth/services/http";
import { IconFood, IconStar, IconBicycle, IconClock } from "../../../components/Icons";
import type { RestaurantDto as RestaurantResponseDto } from "../../../auth/services/restaurantService";

export function RestaurantHeader({ restaurant }: { restaurant: RestaurantResponseDto }) {
  return (
    <>
      <div className="relative h-52 bg-slate-200 overflow-hidden">
        {restaurant.logoUrl ? (
          <Image src={buildImageUrl(restaurant.logoUrl!)} alt={restaurant.name}
            fill sizes="100vw" className="object-cover" loading="eager" priority />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <IconFood className="h-16 w-16" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h1 className="text-2xl font-black">{restaurant.name}</h1>
          <p className="text-sm text-white/80">{restaurant.cuisineType}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 px-4 py-3 border-b border-slate-100 text-sm text-slate-600 overflow-x-auto">
        {restaurant.ratingAvg && (
          <span className="font-semibold text-slate-900 shrink-0 flex items-center gap-1">
            <IconStar className="h-4 w-4 text-amber-400" filled /> {restaurant.ratingAvg.toFixed(1)}
          </span>
        )}
        <span className="shrink-0 flex items-center gap-1">
          <IconBicycle className="h-4 w-4" /> {restaurant.deliveryFee.toFixed(2)} € livraison
        </span>
        <span className="shrink-0 flex items-center gap-1">
          <IconClock className="h-4 w-4" /> {restaurant.prepTimeMin} min
        </span>
        {!restaurant.isActive && (
          <span className="ml-auto shrink-0 rounded-full bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1">Fermé</span>
        )}
      </div>
    </>
  );
}
