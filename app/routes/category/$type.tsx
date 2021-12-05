import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "remix";
import { HomeWidgetsResponse } from "~/api/home.server";
import ProductItem from "~/components/product-item";

export default function Category() {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (typeof searchParams.get("category") !== "string") {
      setSearchParams(
        {
          ...Object.fromEntries(searchParams.entries()),
          category: "0",
        },
        { replace: true }
      );
    }
  }, []);

  const categories = [
    { title: "Frequently Bought", imageUrl: "/img/tata-salt.png" },
    { title: "Best Sellers", imageUrl: "/img/ashirward-atta.png" },
    { title: "Atta & flour", imageUrl: "/img/mtr-mirchi.png" },
    { title: "Rice & Rice Products", imageUrl: "/img/sugar.png" },
    { title: "Oil & Ghee", imageUrl: "/img/ghee.png" },
    { title: "Dal & Pulses", imageUrl: "/img/dal.png" },
    { title: "Spices, Masalas & Pastes", imageUrl: "/img/tata-salt.png" },
  ];

  type Item = Extract<
    HomeWidgetsResponse[0],
    { type: "buy-again" }
  >["items"][0];
  const items: Item[] = [
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

  const chunks = items.reduce<[Item, Item?][]>((acc, item, index) => {
    index % 2 === 0 ? acc.push([item]) : acc[acc.length - 1].push(item);
    return acc;
  }, []);

  return (
    <div className="section">
      <div className="sidebar">
        <ol>
          {categories.map((c, index) => (
            <li
              key={c.title}
              className={
                searchParams.get("category") === String(index) ? "selected" : ""
              }
            >
              <button
                onClick={() =>
                  setSearchParams(
                    {
                      ...Object.fromEntries(searchParams.entries()),
                      category: String(index),
                    },
                    { replace: true }
                  )
                }
              >
                <img src={c.imageUrl} />
                {c.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div className="content">
        {chunks.map((items) => (
          <div className="items-row">
            {(items.filter(Boolean) as Item[]).map((i, index) => {
              const [qty, setQty] = useState(0);
              const onPlus = () => setQty((q) => q + 1);
              const onMinus = () => setQty((q) => q - 1);
              const [selectedVariant, setVariant] = useState(i.variants[0]);

              return (
                <ProductItem
                  data={i}
                  variant={selectedVariant}
                  setVariant={setVariant}
                  onPlus={onPlus}
                  onMinus={onMinus}
                  qty={qty}
                  size="normal"
                  className="category-product-item"
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
