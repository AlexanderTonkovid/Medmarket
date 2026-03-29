export type CategorySlug = "ppe" | "injection" | "dressing" | "general";

export interface Product {
  slug: string;
  category: CategorySlug;
  icon: string;
}

export interface Category {
  slug: CategorySlug;
  icon: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: "ppe",
    icon: "🛡️",
    products: [
      { slug: "latex_gloves", category: "ppe", icon: "🧤" },
      { slug: "nitrile_gloves", category: "ppe", icon: "🧤" },
      { slug: "vinyl_gloves", category: "ppe", icon: "🧤" },
      { slug: "medical_masks", category: "ppe", icon: "😷" },
      { slug: "respirators", category: "ppe", icon: "😷" },
      { slug: "shoe_covers", category: "ppe", icon: "🥿" },
      { slug: "caps", category: "ppe", icon: "🧢" },
    ],
  },
  {
    slug: "injection",
    icon: "💉",
    products: [
      { slug: "insulin_syringes", category: "injection", icon: "💉" },
      { slug: "standard_syringes", category: "injection", icon: "💉" },
      { slug: "janet_syringes", category: "injection", icon: "💉" },
      { slug: "injection_needles", category: "injection", icon: "📌" },
      { slug: "iv_catheters", category: "injection", icon: "🔧" },
      { slug: "cavity_catheters", category: "injection", icon: "🔧" },
      { slug: "infusion_sets", category: "injection", icon: "🩸" },
    ],
  },
  {
    slug: "dressing",
    icon: "🩹",
    products: [
      { slug: "bandages", category: "dressing", icon: "🩹" },
      { slug: "gauze", category: "dressing", icon: "🧻" },
      { slug: "cotton", category: "dressing", icon: "☁️" },
      { slug: "catgut", category: "dressing", icon: "🧵" },
      { slug: "nylon_suture", category: "dressing", icon: "🧵" },
      { slug: "plasters", category: "dressing", icon: "🩹" },
      { slug: "ready_dressings", category: "dressing", icon: "🩹" },
    ],
  },
  {
    slug: "general",
    icon: "🏥",
    products: [
      { slug: "disposable_sheets", category: "general", icon: "🛏️" },
      { slug: "disposable_diapers", category: "general", icon: "🛏️" },
      { slug: "spatulas", category: "general", icon: "🥄" },
      { slug: "probes", category: "general", icon: "🔬" },
      { slug: "analysis_containers", category: "general", icon: "🫙" },
      { slug: "disposal_containers", category: "general", icon: "🗑️" },
    ],
  },
];
