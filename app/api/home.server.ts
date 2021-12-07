export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface BuyAgainWidget {
  type: "buy-again";
  id: string;
  title: string;
  description: string;
  items: {
    id: string;
    imageUrl: string;
    title: string;
    tag?: "instant" | "morning";
    variants: {
      value: string;
      price: number;
      discountedPrice: number;
    }[];
    discountPercentage: number;
  }[];
}

interface OfferBannerWidget {
  type: "offer-banner";
  id: string;
  items: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

interface BrowseCategoryWidget {
  type: "browse-category";
  id: string;
  title: string;
  items: {
    id: string;
    imageUrl: string;
    title: string;
  }[];
}

interface ProductStoryWidget {
  id: string;
  type: "product-story";
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    discountedPrice: number;
    discountPercentage: number;
  }[];
}

interface BrandCollectionWidget {
  id: string;
  type: "brand-collection";
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export type HomeWidgetsResponse = Array<
  | BuyAgainWidget
  | OfferBannerWidget
  | ProductStoryWidget
  | BrandCollectionWidget
  | BrowseCategoryWidget
>;

export async function getHomeWidgets(): Promise<HomeWidgetsResponse> {
  let id = 0;

  const buyAgain: BuyAgainWidget = {
    id: String(++id),
    type: "buy-again",
    title: "Buy It Again",
    description: "Your frequently bought items",
    items: [
      {
        id: "1",
        title: "Fresh Pomegranate",
        imageUrl: "/img/pomegranate.png",
        tag: "instant",
        discountPercentage: 25,
        variants: [
          { value: "5 Kg", price: 325, discountedPrice: 222 },
          { value: "1 Kg", price: 82, discountedPrice: 44 },
        ],
      },
      {
        id: "2",
        title: "Cherry",
        imageUrl: "/img/cherry.png",
        tag: "morning",
        discountPercentage: 25,
        variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
      },
      {
        id: "3",
        title: "Coconut",
        tag: "instant",
        imageUrl: "/img/coconut.png",
        discountPercentage: 25,
        variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
      },
      {
        id: "4",
        title: "Pear",
        imageUrl: "/img/pear.png",
        tag: "instant",
        discountPercentage: 25,
        variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
      },
      {
        id: "9",
        title: "Pumpkin",
        imageUrl: "/img/pumpkin.png",
        tag: "instant",
        discountPercentage: 25,
        variants: [
          { value: "5 Kg", price: 325, discountedPrice: 222 },
          { value: "1 Kg", price: 82, discountedPrice: 44 },
        ],
      },
      {
        id: "10",
        title: "Snake Gourd",
        imageUrl: "/img/snake.png",
        tag: "morning",
        discountPercentage: 25,
        variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
      },
      {
        id: "11",
        title: "Suji",
        tag: "instant",
        imageUrl: "/img/suji.png",
        discountPercentage: 25,
        variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
      },
      {
        id: "12",
        title: "Tea",
        imageUrl: "/img/tea.png",
        tag: "instant",
        discountPercentage: 25,
        variants: [
          { value: "5 Kg", price: 325, discountedPrice: 222 },
          { value: "2 Kg", price: 100, discountedPrice: 89 },
        ],
      },
    ],
  };

  const browseCategory: BrowseCategoryWidget = {
    type: "browse-category",
    id: String(++id),
    title: "Browse by Category",
    items: [
      {
        id: "1",
        title: "Fruits & Vegetables",
        imageUrl: "/img/cat-fruit-vegetables.png",
      },
      {
        id: "2",
        title: "Foodgrains, Oil & Masalas",
        imageUrl: "/img/cat-foodgrains-oil-masalas.png",
      },
      {
        id: "3",
        title: "Breakfast & Bakery",
        imageUrl: "/img/cat-breakfast-bakery.png",
      },
      {
        id: "4",
        title: "Dairy",
        imageUrl: "/img/cat-dairy.png",
      },
      {
        id: "5",
        title: "Snacks & Branded Food",
        imageUrl: "/img/cat-snacks-branded-food.png",
      },
      {
        id: "6",
        title: "Beverages",
        imageUrl: "/img/cat-beverages.png",
      },
      {
        id: "7",
        title: "Personal Care",
        imageUrl: "/img/cat-personal-care.png",
      },
    ],
  };

  const offerBanner: OfferBannerWidget = {
    type: "offer-banner",
    id: String(++id),
    items: [
      {
        id: "1",
        title: "BUMPER OFFER!",
        description: "5 kg Onion at the lower price",
        imageUrl: "/img/offer-onions.png",
      },
      {
        id: "2",
        title: "AMAZING DEALS!",
        description: "Get your greens at the cheapest rates",
        imageUrl: "/img/offer-greens.png",
      },
      {
        id: "3",
        title: "AMAZING DEALS!",
        description: "Get your greens at the cheapest rates",
        imageUrl: "/img/offer-potato.png",
      },
    ],
  };

  const productStory: ProductStoryWidget = {
    type: "product-story",
    id: String(++id),
    title: "Add a Twist",
    description: "Your frequently bought items",
    items: [
      {
        id: "1",
        title: "Freshness all around",
        description: "Get a breeze of sweet fragrance where ever you go!",
        imageUrl: "/img/product-freshness.png",
        price: 325,
        discountedPrice: 222,
        discountPercentage: 25,
      },
      {
        id: "2",
        title: "Winter snacks",
        description: "Pressure cook",
        imageUrl: "/img/product-winter.png",
        price: 325,
        discountedPrice: 222,
        discountPercentage: 25,
      },
    ],
  };

  const brandCollection: BrandCollectionWidget = {
    type: "brand-collection",
    id: String(++id),
    title: "Buy It Again",
    description: "Your frequently bought items",
    items: [
      {
        id: "1",
        title: "Mouth-watering fruit yogurts",
        description: "Buy 1 Get 1 Free",
        imageUrl: "img/collection-milky.png",
      },
      {
        id: "2",
        title: "Freshly Baked Breads",
        description: "UPTO 25% OFF",
        imageUrl: "img/collection-modern.png",
      },
      {
        id: "3",
        title: "Kellogs",
        description: "UPTO 25% OFF",
        imageUrl: "img/collection-kellogs.png",
      },
    ],
  };

  return [buyAgain, offerBanner, productStory, browseCategory, brandCollection];
}
