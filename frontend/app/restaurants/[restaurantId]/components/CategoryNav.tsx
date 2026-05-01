import type { MenuCategoryDto } from "../../../auth/services/menu/menuService";

export function CategoryNav({
  categories,
  activeCategory,
  onScroll,
}: {
  categories: MenuCategoryDto[];
  activeCategory: string | null;
  onScroll: (categoryId: string) => void;
}) {
  if (categories.length === 0) return null;

  return (
    <div className="sticky top-0 z-30 bg-white border-b border-slate-100 overflow-x-auto">
      <div className="flex gap-1 px-4 py-2">
        {categories.map((category) => (
          <button key={category.id} type="button" onClick={() => onScroll(category.id)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              activeCategory === category.id ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
