import { useEffect, useState } from "react";
import { json, useLoaderData, useParams, useSearchParams } from "remix";
import type { LoaderFunction } from "remix";
import {
  Category,
  CategoryItem,
  getCategories,
  getCategoryItems,
} from "~/api/category.server";
import { sleep } from "~/api/home.server";
import ProductItem from "~/components/product-item";

// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async ({ params }) => {
  // mock API latency
  await sleep(100);
  const { data: categories } = await getCategories();
  const { data: items } = await getCategoryItems(String(params.id));
  return json({ categories, items });
};

export default function Category() {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { categories, items } =
    useLoaderData<{ categories: Category[]; items: CategoryItem[] }>();

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

  const chunks = items.reduce<[CategoryItem, CategoryItem?][]>(
    (acc, item, index) => {
      index % 2 === 0 ? acc.push([item]) : acc[acc.length - 1].push(item);
      return acc;
    },
    []
  );

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
            {(items.filter(Boolean) as CategoryItem[]).map((i, index) => {
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
