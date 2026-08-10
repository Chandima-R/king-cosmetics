import type { Product } from "@/types/products/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Aloe Vera Herbal Face Wash",
        slug: "aloe-vera-herbal-face-wash",
        category: "Skin Care",
        price: 1850,
        currency: "LKR",

        images: [
            {
                id: 1,
                src: "/images/products/product1.png",
                alt: "Aloe Vera Herbal Face Wash front view",
            },
            {
                id: 2,
                src: "/images/products/product1.png",
                alt: "Aloe Vera Herbal Face Wash side view",
            },
            {
                id: 3,
                src: "/images/products/product1.png",
                alt: "Aloe Vera Herbal Face Wash back view",
            },
            {
                id: 4,
                src: "/images/products/product1.png",
                alt: "Aloe Vera Herbal Face Wash ingredients",
            },
        ],

        size: "100 ml",

        shortDescription:
            "A gentle herbal face wash enriched with aloe vera to cleanse, refresh and support naturally healthy-looking skin.",

        fullDescription: [
            "Aloe Vera Herbal Face Wash is carefully formulated to remove everyday dirt, excess oil and impurities without leaving the skin feeling excessively dry.",
            "The gentle formula combines aloe vera with selected herbal ingredients to leave the skin feeling fresh, clean and comfortable after every wash.",
            "It is suitable for regular use as part of a simple morning and evening skincare routine.",
        ],

        benefits: [
            {
                id: 1,
                text: "Gently removes dirt, impurities and excess surface oil.",
            },
            {
                id: 2,
                text: "Helps leave the skin feeling clean, soft and refreshed.",
            },
            {
                id: 3,
                text: "Supports the skin’s natural moisture balance.",
            },
            {
                id: 4,
                text: "Suitable for daily morning and evening cleansing.",
            },
            {
                id: 5,
                text: "Contains carefully selected herbal ingredients.",
            },
        ],

        ingredients: [
            {
                id: 1,
                text: "Aloe vera extract",
            },
            {
                id: 2,
                text: "Purified water",
            },
            {
                id: 3,
                text: "Natural cleansing agents",
            },
            {
                id: 4,
                text: "Herbal botanical extracts",
            },
            {
                id: 5,
                text: "Skin-conditioning ingredients",
            },
        ],

        howToUse: [
            {
                id: 1,
                text: "Wet your face with clean water.",
            },
            {
                id: 2,
                text: "Apply a small amount of face wash onto your palm.",
            },
            {
                id: 3,
                text: "Gently massage over the face using circular motions.",
            },
            {
                id: 4,
                text: "Avoid direct contact with the eye area.",
            },
            {
                id: 5,
                text: "Rinse thoroughly and gently pat the skin dry.",
            },
        ],

        suitableFor: [
            {
                id: 1,
                text: "Normal skin",
            },
            {
                id: 2,
                text: "Combination skin",
            },
            {
                id: 3,
                text: "Oily skin",
            },
            {
                id: 4,
                text: "Men and women",
            },
        ],

        precautions: [
            {
                id: 1,
                text: "For external use only.",
            },
            {
                id: 2,
                text: "Avoid direct contact with eyes.",
            },
            {
                id: 3,
                text: "Do not apply to irritated, injured or broken skin.",
            },
            {
                id: 4,
                text: "Keep out of reach of children.",
            },
        ],

        allergyWarnings: [
            {
                id: 1,
                text: "Review the ingredient list before use if you have known skin allergies.",
            },
            {
                id: 2,
                text: "Perform a patch test before first use.",
            },
            {
                id: 3,
                text: "Stop using the product if irritation or discomfort occurs.",
            },
        ],

        storageInstructions: [
            {
                id: 1,
                text: "Store in a cool and dry place.",
            },
            {
                id: 2,
                text: "Keep away from direct sunlight and excessive heat.",
            },
            {
                id: 3,
                text: "Keep the container tightly closed when not in use.",
            },
        ],

        featured: false,
        inStock: true,
    },
    {
        id: 2,
        name: "Neem Purifying Face Wash",
        slug: "neem-purifying-face-wash",
        category: "Skin Care",
        price: 1950,
        currency: "LKR",

        images: [
            {
                id: 1,
                src: "/images/products/product2.png",
                alt: "Neem Purifying Face Wash front view",
            },
            {
                id: 2,
                src: "/images/products/neem-face-wash/side.png",
                alt: "Neem Purifying Face Wash side view",
            },
            {
                id: 3,
                src: "/images/products/neem-face-wash/back.png",
                alt: "Neem Purifying Face Wash back view",
            },
            {
                id: 4,
                src: "/images/products/neem-face-wash/ingredients.png",
                alt: "Neem Purifying Face Wash ingredients",
            },
        ],

        size: "100 ml",

        shortDescription:
            "A refreshing neem face wash that deeply cleanses and helps maintain clear, healthy-looking skin.",

        fullDescription: [
            "Neem Purifying Face Wash is formulated with natural neem extracts to remove dirt, excess oil and everyday impurities.",
            "Its gentle cleansing formula leaves the skin feeling fresh and comfortable without over-drying.",
            "Ideal for daily use as part of your skincare routine.",
        ],

        benefits: [
            { id: 1, text: "Helps remove excess oil and dirt." },
            { id: 2, text: "Leaves skin feeling fresh and clean." },
            { id: 3, text: "Supports healthy-looking skin." },
            { id: 4, text: "Suitable for everyday cleansing." },
            { id: 5, text: "Enriched with herbal neem extract." },
        ],

        ingredients: [
            { id: 1, text: "Neem extract" },
            { id: 2, text: "Purified water" },
            { id: 3, text: "Natural cleansing agents" },
            { id: 4, text: "Herbal botanical extracts" },
            { id: 5, text: "Skin conditioning ingredients" },
        ],

        howToUse: [
            { id: 1, text: "Wet your face with clean water." },
            { id: 2, text: "Apply a small amount to your palm." },
            { id: 3, text: "Massage gently using circular motions." },
            { id: 4, text: "Avoid contact with eyes." },
            { id: 5, text: "Rinse thoroughly with water." },
        ],

        suitableFor: [
            { id: 1, text: "Oily skin" },
            { id: 2, text: "Combination skin" },
            { id: 3, text: "Teenagers and adults" },
            { id: 4, text: "Daily use" },
        ],

        precautions: [
            { id: 1, text: "For external use only." },
            { id: 2, text: "Avoid contact with eyes." },
            { id: 3, text: "Do not use on broken skin." },
            { id: 4, text: "Keep out of reach of children." },
        ],

        allergyWarnings: [
            { id: 1, text: "Patch test before first use." },
            { id: 2, text: "Discontinue use if irritation occurs." },
            { id: 3, text: "Read ingredients before use if you have allergies." },
        ],

        storageInstructions: [
            { id: 1, text: "Store in a cool, dry place." },
            { id: 2, text: "Avoid direct sunlight." },
            { id: 3, text: "Keep container tightly closed." },
        ],

        featured: true,
        inStock: true,
    },

    {
        id: 3,
        name: "Vitamin C Glow Serum",
        slug: "vitamin-c-glow-serum",
        category: "Skin Care",
        price: 3250,
        currency: "LKR",

        images: [
            {
                id: 1,
                src: "/images/products/product1.png",
                alt: "Vitamin C Glow Serum front view",
            },
            {
                id: 2,
                src: "/images/products/vitamin-c-serum/side.png",
                alt: "Vitamin C Glow Serum side view",
            },
            {
                id: 3,
                src: "/images/products/vitamin-c-serum/back.png",
                alt: "Vitamin C Glow Serum back view",
            },
            {
                id: 4,
                src: "/images/products/vitamin-c-serum/ingredients.png",
                alt: "Vitamin C Glow Serum ingredients",
            },
        ],

        size: "30 ml",

        shortDescription:
            "Lightweight Vitamin C serum that helps brighten and refresh tired-looking skin. Vitamin C serum that helps",

        fullDescription: [
            "Vitamin C Glow Serum is a lightweight skincare serum formulated to support a brighter complexion.",
            "Its fast-absorbing texture leaves the skin feeling soft without a greasy finish.",
            "Suitable for daily morning or evening skincare routines.",
        ],

        benefits: [
            { id: 1, text: "Helps brighten dull-looking skin." },
            { id: 2, text: "Supports an even-looking complexion." },
            { id: 3, text: "Lightweight and fast absorbing." },
            { id: 4, text: "Leaves skin feeling soft." },
            { id: 5, text: "Suitable for daily skincare." },
        ],

        ingredients: [
            { id: 1, text: "Vitamin C" },
            { id: 2, text: "Aloe Vera extract" },
            { id: 3, text: "Glycerin" },
            { id: 4, text: "Purified water" },
            { id: 5, text: "Botanical extracts" },
        ],

        howToUse: [
            { id: 1, text: "Cleanse your face." },
            { id: 2, text: "Apply 2-3 drops onto the skin." },
            { id: 3, text: "Massage gently until absorbed." },
            { id: 4, text: "Follow with moisturizer." },
            { id: 5, text: "Use sunscreen during daytime." },
        ],

        suitableFor: [
            { id: 1, text: "Normal skin" },
            { id: 2, text: "Dry skin" },
            { id: 3, text: "Combination skin" },
            { id: 4, text: "Adults" },
        ],

        precautions: [
            { id: 1, text: "Avoid contact with eyes." },
            { id: 2, text: "External use only." },
            { id: 3, text: "Do not apply on damaged skin." },
            { id: 4, text: "Keep away from children." },
        ],

        allergyWarnings: [
            { id: 1, text: "Patch test before use." },
            { id: 2, text: "Stop use if irritation develops." },
            { id: 3, text: "Read ingredients before use." },
        ],

        storageInstructions: [
            { id: 1, text: "Store below 30°C." },
            { id: 2, text: "Protect from sunlight." },
            { id: 3, text: "Close bottle tightly after use." },
        ],

        featured: true,
        inStock: true,
    },

    {
        id: 4,
        name: "Coconut Nourishing Hair Oil",
        slug: "coconut-nourishing-hair-oil",
        category: "Hair Care",
        price: 2250,
        currency: "LKR",

        images: [
            {
                id: 1,
                src: "/images/products/product2.png",
                alt: "Coconut Hair Oil front view",
            },
            {
                id: 2,
                src: "/images/products/coconut-hair-oil/side.png",
                alt: "Coconut Hair Oil side view",
            },
            {
                id: 3,
                src: "/images/products/coconut-hair-oil/back.png",
                alt: "Coconut Hair Oil back view",
            },
            {
                id: 4,
                src: "/images/products/coconut-hair-oil/ingredients.png",
                alt: "Coconut Hair Oil ingredients",
            },
        ],

        size: "200 ml",

        shortDescription:
            "Natural coconut hair oil formulated to nourish and strengthen your hair.",

        fullDescription: [
            "Coconut Nourishing Hair Oil combines natural coconut oil with herbal extracts to support healthy-looking hair.",
            "Its lightweight formula helps keep hair soft, manageable and naturally shiny.",
            "Suitable for regular hair care routines.",
        ],

        benefits: [
            { id: 1, text: "Helps nourish dry hair." },
            { id: 2, text: "Supports stronger-looking hair." },
            { id: 3, text: "Leaves hair soft and manageable." },
            { id: 4, text: "Suitable for regular use." },
            { id: 5, text: "Contains natural coconut oil." },
        ],

        ingredients: [
            { id: 1, text: "Virgin Coconut Oil" },
            { id: 2, text: "Herbal extracts" },
            { id: 3, text: "Vitamin E" },
            { id: 4, text: "Natural fragrance" },
            { id: 5, text: "Conditioning agents" },
        ],

        howToUse: [
            { id: 1, text: "Apply a small amount onto the scalp." },
            { id: 2, text: "Massage gently for several minutes." },
            { id: 3, text: "Leave for at least 30 minutes." },
            { id: 4, text: "Wash with shampoo if preferred." },
            { id: 5, text: "Use regularly for best results." },
        ],

        suitableFor: [
            { id: 1, text: "Dry hair" },
            { id: 2, text: "Normal hair" },
            { id: 3, text: "Men and women" },
            { id: 4, text: "All hair types" },
        ],

        precautions: [
            { id: 1, text: "For external use only." },
            { id: 2, text: "Avoid contact with eyes." },
            { id: 3, text: "Keep away from children." },
            { id: 4, text: "Do not swallow." },
        ],

        allergyWarnings: [
            { id: 1, text: "Check ingredients before use." },
            { id: 2, text: "Perform a patch test." },
            { id: 3, text: "Discontinue use if irritation occurs." },
        ],

        storageInstructions: [
            { id: 1, text: "Store in a cool, dry place." },
            { id: 2, text: "Keep away from direct sunlight." },
            { id: 3, text: "Close the cap after every use." },
        ],

        featured: true,
        inStock: true,
    },
    {
  id: 5,
  name: "Herbal Anti Hair Fall Shampoo",
  slug: "herbal-anti-hair-fall-shampoo",
  category: "Hair Care",
  price: 2450,
  currency: "LKR",

  images: [
    {
      id: 1,
      src: "/images/products/product1.png",
      alt: "Herbal Anti Hair Fall Shampoo front view",
    },
    {
      id: 2,
      src: "/images/products/herbal-shampoo/side.png",
      alt: "Herbal Anti Hair Fall Shampoo side view",
    },
    {
      id: 3,
      src: "/images/products/herbal-shampoo/back.png",
      alt: "Herbal Anti Hair Fall Shampoo back view",
    },
    {
      id: 4,
      src: "/images/products/herbal-shampoo/ingredients.png",
      alt: "Herbal Anti Hair Fall Shampoo ingredients",
    },
  ],

  size: "250 ml",

  shortDescription:
    "A nourishing herbal shampoo formulated to gently cleanse the scalp and support healthier-looking hair.",

  fullDescription: [
    "Herbal Anti Hair Fall Shampoo combines herbal extracts with gentle cleansing ingredients for everyday hair care.",
    "Its refreshing formula removes excess oil and impurities while helping hair feel soft and manageable.",
    "Suitable for regular use on all hair types.",
  ],

  benefits: [
    { id: 1, text: "Gently cleanses hair and scalp." },
    { id: 2, text: "Helps reduce excess oil build-up." },
    { id: 3, text: "Leaves hair soft and refreshed." },
    { id: 4, text: "Suitable for regular use." },
    { id: 5, text: "Enriched with herbal botanical extracts." },
  ],

  ingredients: [
    { id: 1, text: "Aloe Vera Extract" },
    { id: 2, text: "Neem Extract" },
    { id: 3, text: "Herbal botanical extracts" },
    { id: 4, text: "Natural cleansing agents" },
    { id: 5, text: "Vitamin B5" },
  ],

  howToUse: [
    { id: 1, text: "Wet hair thoroughly." },
    { id: 2, text: "Apply an adequate amount of shampoo." },
    { id: 3, text: "Massage gently into the scalp." },
    { id: 4, text: "Rinse thoroughly with clean water." },
    { id: 5, text: "Repeat if necessary." },
  ],

  suitableFor: [
    { id: 1, text: "All hair types" },
    { id: 2, text: "Men and women" },
    { id: 3, text: "Daily hair care" },
    { id: 4, text: "Dry and oily scalp" },
  ],

  precautions: [
    { id: 1, text: "For external use only." },
    { id: 2, text: "Avoid direct contact with eyes." },
    { id: 3, text: "Keep away from children." },
    { id: 4, text: "Do not swallow." },
  ],

  allergyWarnings: [
    { id: 1, text: "Patch test recommended before first use." },
    { id: 2, text: "Discontinue use if irritation develops." },
    { id: 3, text: "Review ingredient list if sensitive to herbs." },
  ],

  storageInstructions: [
    { id: 1, text: "Store in a cool, dry place." },
    { id: 2, text: "Avoid direct sunlight." },
    { id: 3, text: "Keep bottle tightly closed." },
  ],

  featured: true,
  inStock: true,
},

{
  id: 6,
  name: "Natural Herbal Conditioner",
  slug: "natural-herbal-conditioner",
  category: "Hair Care",
  price: 2350,
  currency: "LKR",

  images: [
    {
      id: 1,
      src: "/images/products/product1.png",
      alt: "Natural Herbal Conditioner front view",
    },
    {
      id: 2,
      src: "/images/products/herbal-conditioner/side.png",
      alt: "Natural Herbal Conditioner side view",
    },
    {
      id: 3,
      src: "/images/products/herbal-conditioner/back.png",
      alt: "Natural Herbal Conditioner back view",
    },
    {
      id: 4,
      src: "/images/products/herbal-conditioner/ingredients.png",
      alt: "Natural Herbal Conditioner ingredients",
    },
  ],

  size: "250 ml",

  shortDescription:
    "A lightweight herbal conditioner that helps leave hair smooth, soft and easy to manage.",

  fullDescription: [
    "Natural Herbal Conditioner nourishes hair after every wash while helping reduce dryness.",
    "Its creamy formula helps improve softness and manageability without weighing hair down.",
    "Suitable for regular use after shampooing.",
  ],

  benefits: [
    { id: 1, text: "Helps soften hair." },
    { id: 2, text: "Improves manageability." },
    { id: 3, text: "Supports healthy-looking shine." },
    { id: 4, text: "Suitable for everyday use." },
    { id: 5, text: "Contains natural herbal extracts." },
  ],

  ingredients: [
    { id: 1, text: "Aloe Vera Extract" },
    { id: 2, text: "Coconut Oil" },
    { id: 3, text: "Vitamin E" },
    { id: 4, text: "Herbal botanical extracts" },
    { id: 5, text: "Hair conditioning ingredients" },
  ],

  howToUse: [
    { id: 1, text: "Use after shampooing." },
    { id: 2, text: "Apply evenly to damp hair." },
    { id: 3, text: "Leave for 2–3 minutes." },
    { id: 4, text: "Rinse thoroughly." },
    { id: 5, text: "Use regularly for best results." },
  ],

  suitableFor: [
    { id: 1, text: "Dry hair" },
    { id: 2, text: "Damaged hair" },
    { id: 3, text: "Normal hair" },
    { id: 4, text: "All hair types" },
  ],

  precautions: [
    { id: 1, text: "For external use only." },
    { id: 2, text: "Avoid eye contact." },
    { id: 3, text: "Keep away from children." },
    { id: 4, text: "Do not ingest." },
  ],

  allergyWarnings: [
    { id: 1, text: "Read ingredient list carefully." },
    { id: 2, text: "Patch test before first use." },
    { id: 3, text: "Stop use if irritation occurs." },
  ],

  storageInstructions: [
    { id: 1, text: "Store below 30°C." },
    { id: 2, text: "Avoid excessive heat." },
    { id: 3, text: "Keep cap tightly closed." },
  ],

  featured: false,
  inStock: true,
},

{
  id: 7,
  name: "Aloe Moisturizing Body Lotion",
  slug: "aloe-moisturizing-body-lotion",
  category: "Body Care",
  price: 2550,
  currency: "LKR",

  images: [
    {
      id: 1,
      src: "/images/products/product1.png",
      alt: "Aloe Moisturizing Body Lotion front view",
    },
    {
      id: 2,
      src: "/images/products/body-lotion/side.png",
      alt: "Aloe Moisturizing Body Lotion side view",
    },
    {
      id: 3,
      src: "/images/products/body-lotion/back.png",
      alt: "Aloe Moisturizing Body Lotion back view",
    },
    {
      id: 4,
      src: "/images/products/body-lotion/ingredients.png",
      alt: "Aloe Moisturizing Body Lotion ingredients",
    },
  ],

  size: "300 ml",

  shortDescription:
    "A lightweight body lotion enriched with Aloe Vera to help keep skin feeling soft and hydrated.",

  fullDescription: [
    "Aloe Moisturizing Body Lotion provides daily hydration for dry and normal skin.",
    "Its fast-absorbing formula leaves the skin feeling smooth without a greasy finish.",
    "Perfect for everyday body care.",
  ],

  benefits: [
    { id: 1, text: "Helps maintain skin moisture." },
    { id: 2, text: "Leaves skin feeling soft." },
    { id: 3, text: "Fast-absorbing formula." },
    { id: 4, text: "Suitable for everyday use." },
    { id: 5, text: "Contains Aloe Vera extract." },
  ],

  ingredients: [
    { id: 1, text: "Aloe Vera Extract" },
    { id: 2, text: "Shea Butter" },
    { id: 3, text: "Vitamin E" },
    { id: 4, text: "Glycerin" },
    { id: 5, text: "Skin conditioning ingredients" },
  ],

  howToUse: [
    { id: 1, text: "Apply to clean, dry skin." },
    { id: 2, text: "Massage gently until absorbed." },
    { id: 3, text: "Focus on dry areas." },
    { id: 4, text: "Use daily." },
    { id: 5, text: "Reapply as needed." },
  ],

  suitableFor: [
    { id: 1, text: "Dry skin" },
    { id: 2, text: "Normal skin" },
    { id: 3, text: "Men and women" },
    { id: 4, text: "Daily body care" },
  ],

  precautions: [
    { id: 1, text: "For external use only." },
    { id: 2, text: "Avoid contact with eyes." },
    { id: 3, text: "Do not apply to broken skin." },
    { id: 4, text: "Keep away from children." },
  ],

  allergyWarnings: [
    { id: 1, text: "Patch test recommended." },
    { id: 2, text: "Stop use if irritation occurs." },
    { id: 3, text: "Review ingredients before use if sensitive." },
  ],

  storageInstructions: [
    { id: 1, text: "Store in a cool and dry place." },
    { id: 2, text: "Protect from direct sunlight." },
    { id: 3, text: "Close the cap after use." },
  ],

  featured: false,
  inStock: true,
},
{
  id: 8,
  name: "Aloe Moisturizing Body Lotion",
  slug: "aloe-moisturizing-body-lotion",
  category: "Body Care",
  price: 2550,
  currency: "LKR",

  images: [
    {
      id: 1,
      src: "/images/products/product1.png",
      alt: "Aloe Moisturizing Body Lotion front view",
    },
    {
      id: 2,
      src: "/images/products/body-lotion/side.png",
      alt: "Aloe Moisturizing Body Lotion side view",
    },
    {
      id: 3,
      src: "/images/products/body-lotion/back.png",
      alt: "Aloe Moisturizing Body Lotion back view",
    },
    {
      id: 4,
      src: "/images/products/body-lotion/ingredients.png",
      alt: "Aloe Moisturizing Body Lotion ingredients",
    },
  ],

  size: "300 ml",

  shortDescription:
    "A lightweight body lotion enriched with Aloe Vera to help keep skin feeling soft and hydrated.",

  fullDescription: [
    "Aloe Moisturizing Body Lotion provides daily hydration for dry and normal skin.",
    "Its fast-absorbing formula leaves the skin feeling smooth without a greasy finish.",
    "Perfect for everyday body care.",
  ],

  benefits: [
    { id: 1, text: "Helps maintain skin moisture." },
    { id: 2, text: "Leaves skin feeling soft." },
    { id: 3, text: "Fast-absorbing formula." },
    { id: 4, text: "Suitable for everyday use." },
    { id: 5, text: "Contains Aloe Vera extract." },
  ],

  ingredients: [
    { id: 1, text: "Aloe Vera Extract" },
    { id: 2, text: "Shea Butter" },
    { id: 3, text: "Vitamin E" },
    { id: 4, text: "Glycerin" },
    { id: 5, text: "Skin conditioning ingredients" },
  ],

  howToUse: [
    { id: 1, text: "Apply to clean, dry skin." },
    { id: 2, text: "Massage gently until absorbed." },
    { id: 3, text: "Focus on dry areas." },
    { id: 4, text: "Use daily." },
    { id: 5, text: "Reapply as needed." },
  ],

  suitableFor: [
    { id: 1, text: "Dry skin" },
    { id: 2, text: "Normal skin" },
    { id: 3, text: "Men and women" },
    { id: 4, text: "Daily body care" },
  ],

  precautions: [
    { id: 1, text: "For external use only." },
    { id: 2, text: "Avoid contact with eyes." },
    { id: 3, text: "Do not apply to broken skin." },
    { id: 4, text: "Keep away from children." },
  ],

  allergyWarnings: [
    { id: 1, text: "Patch test recommended." },
    { id: 2, text: "Stop use if irritation occurs." },
    { id: 3, text: "Review ingredients before use if sensitive." },
  ],

  storageInstructions: [
    { id: 1, text: "Store in a cool and dry place." },
    { id: 2, text: "Protect from direct sunlight." },
    { id: 3, text: "Close the cap after use." },
  ],

  featured: false,
  inStock: true,
},
{
  id: 9,
  name: "Aloe Moisturizing Body Lotion",
  slug: "aloe-moisturizing-body-lotion",
  category: "Body Care",
  price: 2550,
  currency: "LKR",

  images: [
    {
      id: 1,
      src: "/images/products/product1.png",
      alt: "Aloe Moisturizing Body Lotion front view",
    },
    {
      id: 2,
      src: "/images/products/body-lotion/side.png",
      alt: "Aloe Moisturizing Body Lotion side view",
    },
    {
      id: 3,
      src: "/images/products/body-lotion/back.png",
      alt: "Aloe Moisturizing Body Lotion back view",
    },
    {
      id: 4,
      src: "/images/products/body-lotion/ingredients.png",
      alt: "Aloe Moisturizing Body Lotion ingredients",
    },
  ],

  size: "300 ml",

  shortDescription:
    "A lightweight body lotion enriched with Aloe Vera to help keep skin feeling soft and hydrated.",

  fullDescription: [
    "Aloe Moisturizing Body Lotion provides daily hydration for dry and normal skin.",
    "Its fast-absorbing formula leaves the skin feeling smooth without a greasy finish.",
    "Perfect for everyday body care.",
  ],

  benefits: [
    { id: 1, text: "Helps maintain skin moisture." },
    { id: 2, text: "Leaves skin feeling soft." },
    { id: 3, text: "Fast-absorbing formula." },
    { id: 4, text: "Suitable for everyday use." },
    { id: 5, text: "Contains Aloe Vera extract." },
  ],

  ingredients: [
    { id: 1, text: "Aloe Vera Extract" },
    { id: 2, text: "Shea Butter" },
    { id: 3, text: "Vitamin E" },
    { id: 4, text: "Glycerin" },
    { id: 5, text: "Skin conditioning ingredients" },
  ],

  howToUse: [
    { id: 1, text: "Apply to clean, dry skin." },
    { id: 2, text: "Massage gently until absorbed." },
    { id: 3, text: "Focus on dry areas." },
    { id: 4, text: "Use daily." },
    { id: 5, text: "Reapply as needed." },
  ],

  suitableFor: [
    { id: 1, text: "Dry skin" },
    { id: 2, text: "Normal skin" },
    { id: 3, text: "Men and women" },
    { id: 4, text: "Daily body care" },
  ],

  precautions: [
    { id: 1, text: "For external use only." },
    { id: 2, text: "Avoid contact with eyes." },
    { id: 3, text: "Do not apply to broken skin." },
    { id: 4, text: "Keep away from children." },
  ],

  allergyWarnings: [
    { id: 1, text: "Patch test recommended." },
    { id: 2, text: "Stop use if irritation occurs." },
    { id: 3, text: "Review ingredients before use if sensitive." },
  ],

  storageInstructions: [
    { id: 1, text: "Store in a cool and dry place." },
    { id: 2, text: "Protect from direct sunlight." },
    { id: 3, text: "Close the cap after use." },
  ],

  featured: false,
  inStock: true,
},
{
  id: 10,
  name: "Aloe Moisturizing Body Lotion",
  slug: "aloe-moisturizing-body-lotion",
  category: "Body Care",
  price: 2550,
  currency: "LKR",

  images: [
    {
      id: 1,
      src: "/images/products/product1.png",
      alt: "Aloe Moisturizing Body Lotion front view",
    },
    {
      id: 2,
      src: "/images/products/body-lotion/side.png",
      alt: "Aloe Moisturizing Body Lotion side view",
    },
    {
      id: 3,
      src: "/images/products/body-lotion/back.png",
      alt: "Aloe Moisturizing Body Lotion back view",
    },
    {
      id: 4,
      src: "/images/products/body-lotion/ingredients.png",
      alt: "Aloe Moisturizing Body Lotion ingredients",
    },
  ],

  size: "300 ml",

  shortDescription:
    "A lightweight body lotion enriched with Aloe Vera to help keep skin feeling soft and hydrated.",

  fullDescription: [
    "Aloe Moisturizing Body Lotion provides daily hydration for dry and normal skin.",
    "Its fast-absorbing formula leaves the skin feeling smooth without a greasy finish.",
    "Perfect for everyday body care.",
  ],

  benefits: [
    { id: 1, text: "Helps maintain skin moisture." },
    { id: 2, text: "Leaves skin feeling soft." },
    { id: 3, text: "Fast-absorbing formula." },
    { id: 4, text: "Suitable for everyday use." },
    { id: 5, text: "Contains Aloe Vera extract." },
  ],

  ingredients: [
    { id: 1, text: "Aloe Vera Extract" },
    { id: 2, text: "Shea Butter" },
    { id: 3, text: "Vitamin E" },
    { id: 4, text: "Glycerin" },
    { id: 5, text: "Skin conditioning ingredients" },
  ],

  howToUse: [
    { id: 1, text: "Apply to clean, dry skin." },
    { id: 2, text: "Massage gently until absorbed." },
    { id: 3, text: "Focus on dry areas." },
    { id: 4, text: "Use daily." },
    { id: 5, text: "Reapply as needed." },
  ],

  suitableFor: [
    { id: 1, text: "Dry skin" },
    { id: 2, text: "Normal skin" },
    { id: 3, text: "Men and women" },
    { id: 4, text: "Daily body care" },
  ],

  precautions: [
    { id: 1, text: "For external use only." },
    { id: 2, text: "Avoid contact with eyes." },
    { id: 3, text: "Do not apply to broken skin." },
    { id: 4, text: "Keep away from children." },
  ],

  allergyWarnings: [
    { id: 1, text: "Patch test recommended." },
    { id: 2, text: "Stop use if irritation occurs." },
    { id: 3, text: "Review ingredients before use if sensitive." },
  ],

  storageInstructions: [
    { id: 1, text: "Store in a cool and dry place." },
    { id: 2, text: "Protect from direct sunlight." },
    { id: 3, text: "Close the cap after use." },
  ],

  featured: false,
  inStock: true,
},
];

export function getProductBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
}