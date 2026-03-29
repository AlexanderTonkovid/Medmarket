export type CategorySlug = "ppe" | "injection" | "dressing" | "general";

export interface Product {
  slug: string;
  category: CategorySlug;
  image: string | null;
}

export interface Category {
  slug: CategorySlug;
  image: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: "ppe",
    image: "/images/categories/ppe.png",
    products: [
      {
        slug: "latex_gloves",
        category: "ppe",
        image: "/images/products/latex_gloves.png",
      },
      {
        slug: "nitrile_gloves",
        category: "ppe",
        image: "/images/products/latex_gloves.png",
      },
      {
        slug: "vinyl_gloves",
        category: "ppe",
        image: "/images/products/latex_gloves.png",
      },
      {
        slug: "medical_masks",
        category: "ppe",
        image: "/images/products/medical_masks.png",
      },
      {
        slug: "respirators",
        category: "ppe",
        image: "/images/products/respirators.png",
      },
      {
        slug: "shoe_covers",
        category: "ppe",
        image: "/images/products/shoe_covers.png",
      },
      { slug: "caps", category: "ppe", image: "/images/products/caps.png" },
    ],
  },
  {
    slug: "injection",
    image: "/images/categories/injection.png",
    products: [
      {
        slug: "insulin_syringes",
        category: "injection",
        image: "/images/products/insulin_syringes.png",
      },
      {
        slug: "standard_syringes",
        category: "injection",
        image: "/images/products/insulin_syringes.png",
      },
      {
        slug: "janet_syringes",
        category: "injection",
        image: "/images/products/insulin_syringes.png",
      },
      {
        slug: "injection_needles",
        category: "injection",
        image: "/images/products/injection_needles.png",
      },
      {
        slug: "iv_catheters",
        category: "injection",
        image: "/images/products/iv_catheters.png",
      },
      {
        slug: "cavity_catheters",
        category: "injection",
        image: "/images/products/iv_catheters.png",
      },
      {
        slug: "infusion_sets",
        category: "injection",
        image: "/images/products/infusion_sets.png",
      },
    ],
  },
  {
    slug: "dressing",
    image: "/images/categories/dressing.png",
    products: [
      {
        slug: "bandages",
        category: "dressing",
        image: "/images/products/bandages.png",
      },
      {
        slug: "gauze",
        category: "dressing",
        image: "/images/products/gauze.png",
      },
      {
        slug: "cotton",
        category: "dressing",
        image: "/images/products/cotton.png",
      },
      {
        slug: "catgut",
        category: "dressing",
        image: "/images/products/catgut.png",
      },
      {
        slug: "nylon_suture",
        category: "dressing",
        image: "/images/products/catgut.png",
      },
      {
        slug: "plasters",
        category: "dressing",
        image: "/images/products/plasters.png",
      },
      {
        slug: "ready_dressings",
        category: "dressing",
        image: "/images/products/ready_dressings.png",
      },
    ],
  },
  {
    slug: "general",
    image: "/images/categories/general.png",
    products: [
      {
        slug: "disposable_sheets",
        category: "general",
        image: "/images/products/disposable_sheets.png",
      },
      {
        slug: "disposable_diapers",
        category: "general",
        image: "/images/products/disposable_diapers.png",
      },
      {
        slug: "spatulas",
        category: "general",
        image: "/images/products/spatulas.png",
      },
      {
        slug: "probes",
        category: "general",
        image: "/images/products/probes.png",
      },
      {
        slug: "analysis_containers",
        category: "general",
        image: "/images/products/analysis_containers.png",
      },
      {
        slug: "disposal_containers",
        category: "general",
        image: "/images/products/disposal_containers.png",
      },
    ],
  },
];
