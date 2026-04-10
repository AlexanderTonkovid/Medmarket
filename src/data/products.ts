export type DirectionSlug =
  | "ppe"
  | "injection"
  | "dressing"
  | "general"
  | "respiratory"
  | "catheters_urology"
  | "surgical"
  | "test_tubes";

export interface Product {
  slug: string;
  article: string;
  image: string | null;
}

export interface Category {
  slug: string;
  image: string | null;
  products: Product[];
}

export interface Direction {
  slug: DirectionSlug;
  categories: Category[];
}

export const directions: Direction[] = [
  {
    slug: "ppe",
    categories: [
      {
        slug: "nitrile_gloves",
        image: "/images/products/latex_gloves.png",
        products: [{ slug: "nm_f001", article: "NM-F001", image: null }],
      },
      {
        slug: "surgical_gloves",
        image: "/images/products/latex_gloves.png",
        products: [{ slug: "nm_f003", article: "NM-F003", image: null }],
      },
      {
        slug: "latex_gloves",
        image: "/images/products/latex_gloves.png",
        products: [{ slug: "nm_f002", article: "", image: null }],
      },
      {
        slug: "vinyl_gloves",
        image: "/images/products/latex_gloves.png",
        products: [{ slug: "nm_f004", article: "", image: null }],
      },
      {
        slug: "medical_masks",
        image: "/images/products/medical_masks.png",
        products: [{ slug: "nm_f005", article: "", image: null }],
      },
      {
        slug: "respirators",
        image: "/images/products/respirators.png",
        products: [{ slug: "nm_f007", article: "", image: null }],
      },
      {
        slug: "shoe_covers",
        image: "/images/products/shoe_covers.png",
        products: [{ slug: "nm_f008", article: "", image: null }],
      },
      {
        slug: "caps",
        image: "/images/products/caps.png",
        products: [{ slug: "nm_f009", article: "", image: null }],
      },
    ],
  },
  {
    slug: "injection",
    categories: [
      {
        slug: "standard_syringes",
        image: "/images/products/insulin_syringes.png",
        products: [{ slug: "nm_b001", article: "NM-B001", image: null }],
      },
      {
        slug: "insulin_syringes",
        image: "/images/products/insulin_syringes.png",
        products: [{ slug: "nm_b005", article: "NM-B005", image: null }],
      },
      {
        slug: "tuberculin_syringes",
        image: "/images/products/tuberculin_syringes.png",
        products: [{ slug: "nm_b004", article: "NM-B004", image: null }],
      },
      {
        slug: "janet_syringes",
        image: "/images/products/insulin_syringes.png",
        products: [{ slug: "nm_b002", article: "", image: null }],
      },
      {
        slug: "injection_needles",
        image: "/images/products/injection_needles.png",
        products: [{ slug: "nm_b003", article: "", image: null }],
      },
      {
        slug: "iv_catheters",
        image: "/images/products/iv_catheters.png",
        products: [{ slug: "nm_b006", article: "", image: null }],
      },
      {
        slug: "cavity_catheters",
        image: "/images/products/cavity_catheters.png",
        products: [{ slug: "nm_b007", article: "", image: null }],
      },
      {
        slug: "infusion_sets",
        image: "/images/products/infusion_sets.png",
        products: [{ slug: "nm_b012", article: "NM-B012", image: null }],
      },
      {
        slug: "blood_transfusion_sets",
        image: "/images/products/blood_transfusion_sets.png",
        products: [{ slug: "nm_b015", article: "NM-B015", image: null }],
      },
      {
        slug: "scalp_vein_sets",
        image: "/images/products/scalp_vein_sets.png",
        products: [{ slug: "nm_b016", article: "NM-B016", image: null }],
      },
      {
        slug: "infusion_pumps",
        image: "/images/products/infusion_pumps.png",
        products: [{ slug: "nm_b022", article: "NM-B022", image: null }],
      },
    ],
  },
  {
    slug: "dressing",
    categories: [
      {
        slug: "bandages",
        image: "/images/products/bandages.png",
        products: [{ slug: "nm_e002", article: "NM-E002", image: null }],
      },
      {
        slug: "gauze",
        image: "/images/products/gauze.png",
        products: [{ slug: "nm_e001", article: "NM-E001", image: null }],
      },
      {
        slug: "cotton",
        image: "/images/products/cotton.png",
        products: [{ slug: "nm_e010", article: "NM-E010", image: null }],
      },
      {
        slug: "non_woven_swabs",
        image: "/images/products/non_woven_swabs.png",
        products: [{ slug: "nm_e005", article: "NM-E005", image: null }],
      },
      {
        slug: "catgut",
        image: "/images/products/catgut.png",
        products: [{ slug: "nm_e003", article: "NM-E003", image: null }],
      },
      {
        slug: "nylon_suture",
        image: "/images/products/catgut.png",
        products: [{ slug: "nm_e004", article: "NM-E004", image: null }],
      },
      {
        slug: "plasters",
        image: "/images/products/plasters.png",
        products: [{ slug: "nm_e006", article: "NM-E006", image: null }],
      },
      {
        slug: "ready_dressings",
        image: "/images/products/ready_dressings.png",
        products: [{ slug: "nm_e007", article: "NM-E007", image: null }],
      },
    ],
  },
  {
    slug: "general",
    categories: [
      {
        slug: "disposable_sheets",
        image: "/images/products/disposable_sheets.png",
        products: [{ slug: "nm_g001", article: "NM-G001", image: null }],
      },
      {
        slug: "disposable_diapers",
        image: "/images/products/disposable_diapers.png",
        products: [{ slug: "nm_g002", article: "NM-G002", image: null }],
      },
      {
        slug: "spatulas",
        image: "/images/products/spatulas.png",
        products: [{ slug: "nm_g003", article: "NM-G003", image: null }],
      },
      {
        slug: "probes",
        image: "/images/products/probes.png",
        products: [{ slug: "nm_g004", article: "NM-G004", image: null }],
      },
      {
        slug: "analysis_containers",
        image: "/images/products/analysis_containers.png",
        products: [{ slug: "nm_g005", article: "NM-G005", image: null }],
      },
      {
        slug: "disposal_containers",
        image: "/images/products/disposal_containers.png",
        products: [{ slug: "nm_g006", article: "NM-G006", image: null }],
      },
    ],
  },
  {
    slug: "respiratory",
    categories: [
      {
        slug: "oxygen_masks",
        image: "/images/products/oxygen_masks.png",
        products: [
          { slug: "nm_a001", article: "NM-A001", image: null },
          { slug: "nm_a006", article: "NM-A006", image: null },
        ],
      },
      {
        slug: "nebulizer_masks",
        image: "/images/products/nebulizer_masks.png",
        products: [{ slug: "nm_a002", article: "NM-A002", image: null }],
      },
      {
        slug: "nasal_cannulas",
        image: "/images/products/nasal_cannulas.png",
        products: [{ slug: "nm_a005", article: "NM-A005", image: null }],
      },
      {
        slug: "tracheostomy_masks",
        image: "/images/products/tracheostomy_masks.png",
        products: [{ slug: "nm_a007", article: "NM-A007", image: null }],
      },
      {
        slug: "manual_resuscitators",
        image: "/images/products/manual_resuscitators.png",
        products: [{ slug: "nm_a012", article: "NM-A012", image: null }],
      },
      {
        slug: "guedel_airways",
        image: "/images/products/guedel_airways.png",
        products: [{ slug: "nm_c027", article: "NM-C027", image: null }],
      },
      {
        slug: "laryngeal_masks",
        image: "/images/products/laryngeal_masks.png",
        products: [{ slug: "nm_c029", article: "NM-C029", image: null }],
      },
    ],
  },
  {
    slug: "catheters_urology",
    categories: [
      {
        slug: "foley_catheters",
        image: "/images/products/foley_catheters.png",
        products: [
          { slug: "nm_c001", article: "NM-C001", image: null },
          { slug: "nm_c002", article: "NM-C002", image: null },
        ],
      },
      {
        slug: "nelaton_catheters",
        image: "/images/products/nelaton_catheters.png",
        products: [{ slug: "nm_c042", article: "NM-C042", image: null }],
      },
      {
        slug: "urine_bags",
        image: "/images/products/urine_bags.png",
        products: [
          { slug: "nm_d001", article: "NM-D001", image: null },
          { slug: "nm_d002", article: "NM-D002", image: null },
        ],
      },
      {
        slug: "urine_meters",
        image: "/images/products/urine_meters.png",
        products: [{ slug: "nm_d005", article: "NM-D005", image: null }],
      },
    ],
  },
  {
    slug: "surgical",
    categories: [
      {
        slug: "surgical_blades",
        image: "/images/products/surgical_blades.png",
        products: [{ slug: "nm_f006", article: "NM-F006", image: null }],
      },
    ],
  },
  {
    slug: "test_tubes",
    categories: [
      {
        slug: "vacuum_tubes",
        image: "/images/products/vacuum_tubes.png",
        products: [{ slug: "tt_vacuum", article: "", image: null }],
      },
      {
        slug: "conical_centrifuge_tubes",
        image: "/images/products/conical_centrifuge_tubes.png",
        products: [{ slug: "tt_conical", article: "", image: null }],
      },
      {
        slug: "glass_test_tubes",
        image: "/images/products/glass_test_tubes.png",
        products: [{ slug: "tt_glass", article: "", image: null }],
      },
      {
        slug: "screw_cap_tubes",
        image: "/images/products/screw_cap_tubes.png",
        products: [{ slug: "tt_screw_cap", article: "", image: null }],
      },
      {
        slug: "specimen_containers",
        image: "/images/products/specimen_containers.png",
        products: [{ slug: "tt_specimen", article: "", image: null }],
      },
      {
        slug: "microcentrifuge_tubes",
        image: "/images/products/microcentrifuge_tubes.png",
        products: [{ slug: "tt_microcentrifuge", article: "", image: null }],
      },
      {
        slug: "pcr_tubes",
        image: "/images/products/pcr_tubes.png",
        products: [{ slug: "tt_pcr", article: "", image: null }],
      },
      {
        slug: "coagulation_tubes",
        image: "/images/products/coagulation_tubes.png",
        products: [{ slug: "tt_coagulation", article: "", image: null }],
      },
    ],
  },
];
