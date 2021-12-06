import { HomeWidgetsResponse } from "./home.server";

export type Category = {
  id: string;
  title: string;
  imageUrl: string;
};
export type CategoryItem = Extract<
  HomeWidgetsResponse[0],
  { type: "buy-again" }
>["items"][0];

export async function getCategoryItems(id: string) {
  const items: CategoryItem[] = [
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
      id: "5",
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
      id: "6",
      title: "Cherry",
      imageUrl: "/img/cherry.png",
      tag: "morning",
      discountPercentage: 25,
      variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
    },
    {
      id: "7",
      title: "Coconut",
      tag: "instant",
      imageUrl: "/img/coconut.png",
      discountPercentage: 25,
      variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
    },
    {
      id: "8",
      title: "Pear",
      imageUrl: "/img/pear.png",
      tag: "instant",
      discountPercentage: 25,
      variants: [{ value: "5 Kg", price: 325, discountedPrice: 222 }],
    },
  ];

  return { data: items };
}

export async function getCategories() {
  const categories = [
    { id: "1", title: "Frequently Bought", imageUrl: "/img/tata-salt.png" },
    { id: "2", title: "Best Sellers", imageUrl: "/img/ashirward-atta.png" },
    { id: "3", title: "Atta & flour", imageUrl: "/img/mtr-mirchi.png" },
    { id: "4", title: "Rice & Rice Products", imageUrl: "/img/sugar.png" },
    { id: "5", title: "Oil & Ghee", imageUrl: "/img/ghee.png" },
    { id: "6", title: "Dal & Pulses", imageUrl: "/img/dal.png" },
    {
      id: "7",
      title: "Spices, Masalas & Pastes",
      imageUrl: "/img/tata-salt.png",
    },
  ];

  return { data: categories };
}
