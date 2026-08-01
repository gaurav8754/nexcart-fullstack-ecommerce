
'use client'

import { TFilters } from "@/types"
import { Star, Trash } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


type TProps = {
    filters: TFilters
}

export default function FilterSidebar({ filters }: TProps) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()


    const clearAll = () => {
        router.push(pathname)
    }

    const updateFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())

        if (value) {
            params.set(key, value)
        } else {
            params.delete(key)
        }

        params.delete('page')
        router.push(`${pathname}?${params.toString()}`)
    }


    const activeFilters = Array.from(searchParams.keys()).filter(x => x !== 'sort' && x !== 'page').length

    const isActive = (key: string, value: string) => {
        return searchParams.get(key) === value
    }

    return (
        <div className="bg-surface border border-border rounded-xl p-5 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold">Filters</h2>
                {activeFilters > 0 && <button
                    onClick={clearAll}
                    className="flex items-center gap-1 text-xs text-error hover:underline">
                    <Trash size={16} /> Clear
                </button>}
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-text">Category</h3>
                <div className="flex flex-col gap-1.5">
                    {
                        filters.categories.map(category => (
                            <button
                                key={category}
                                onClick={() => updateFilter('category', isActive('category', category) ? '' : category)}
                                className={`text-left text-sm capitalize transition-colors ${isActive("category", category)
                                    ? "text-primary font-semibold"
                                    : "text-muted hover:text-text"
                                    }`}>
                                {category}
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-text">Brand</h3>
                <div className="flex flex-col gap-1.5">
                    {filters.brands.map((brand) => (
                        <button
                            key={brand}
                            onClick={() =>
                                updateFilter("brand", isActive("brand", brand) ? "" : brand)
                            }
                            className={`text-left text-sm capitalize transition-colors ${isActive("brand", brand)
                                ? "text-primary font-semibold"
                                : "text-muted hover:text-text"
                                }`}
                        >
                            {brand}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-text">Rating</h3>
                <div className="flex flex-col gap-1.5">
                    {filters.ratings.map((rating) => (
                        <button
                            key={rating}
                            onClick={() =>
                                updateFilter("rating", isActive("rating", String(rating)) ? "" : String(rating))
                            }
                            className={`flex items-center gap-1 text-sm transition-colors ${isActive("rating", String(rating))
                                ? "text-primary font-semibold"
                                : "text-muted hover:text-text"
                                }`}
                        >
                            <Star size={14} className="fill-warning text-warning" />
                            {rating} & above
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-text">Price Range</h3>
                <p className="text-xs text-muted">
                    ₹{filters.priceRange.min.toLocaleString("en-IN")} — ₹
                    {filters.priceRange.max.toLocaleString("en-IN")}
                </p>
                <div className="flex flex-col gap-1.5 mt-1">
                    <button
                        onClick={() =>
                            updateFilter("maxPrice", isActive("maxPrice", "5000") ? "" : "5000")
                        }
                        className={`text-left text-sm transition-colors ${isActive("maxPrice", "5000")
                            ? "text-primary font-semibold"
                            : "text-muted hover:text-text"
                            }`}
                    >
                        Under ₹5,000
                    </button>
                    <button
                        onClick={() =>
                            updateFilter("maxPrice", isActive("maxPrice", "20000") ? "" : "20000")
                        }
                        className={`text-left text-sm transition-colors ${isActive("maxPrice", "20000")
                            ? "text-primary font-semibold"
                            : "text-muted hover:text-text"
                            }`}
                    >
                        Under ₹20,000
                    </button>
                    <button
                        onClick={() =>
                            updateFilter("minPrice", isActive("minPrice", "50000") ? "" : "50000")
                        }
                        className={`text-left text-sm transition-colors ${isActive("minPrice", "50000")
                            ? "text-primary font-semibold"
                            : "text-muted hover:text-text"
                            }`}
                    >
                        Above ₹50,000
                    </button>
                </div>
            </div>

        </div>
    )
}