import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  json,
  Outlet,
  useLocation,
  useLoaderData,
  useParams,
  useSearchParams,
} from "remix";
import type { LoaderFunction } from "remix";
import {
  Category,
  CategoryItem,
  getCategories,
  getCategoryItems,
} from "~/api/category.server";
import { sleep } from "~/api/home.server";
import ProductItem from "~/components/product-item";
import { AnimatePresence } from "framer-motion";
import { DeferRender } from "~/components/defer-render";

// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async ({ params, request }) => {
  // mock API latency
  await sleep(100);
  const { data: categories } = await getCategories();
  const { data: items } = await getCategoryItems(
    new URL(request.url).searchParams.get("category") as string
  );
  return json({ categories, items });
};

export default function Category() {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { categories, items } =
    useLoaderData<{ categories: Category[]; items: CategoryItem[] }>();

  const { state: currentState } = useLocation();
  const navigate = useNavigate();
  const updateCategory = (category: string) =>
    setSearchParams(
      {
        ...Object.fromEntries(searchParams.entries()),
        category,
      },
      { replace: true, state: currentState }
    );

  useEffect(() => {
    if (typeof searchParams.get("category") !== "string") {
      updateCategory("0");
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
              <button onClick={() => updateCategory(String(index))}>
                <img src={c.imageUrl} />
                {c.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div className="content">
        <DeferRender>
          {chunks.map((items, chunkIndex) => (
            <div className="items-row" key={chunkIndex}>
              {(items.filter(Boolean) as CategoryItem[]).map((i, index) => {
                const [qty, setQty] = useState(0);
                const prefetch =
                  i.variants.length > 1
                    ? `options?item=${JSON.stringify(i)}`
                    : null;
                const onPlus = () => {
                  if (prefetch) {
                    navigate(prefetch);
                    return;
                  }
                  return setQty((q) => q + 1);
                };
                const onMinus = () => setQty((q) => q - 1);
                const [selectedVariant, setVariant] = useState(i.variants[0]);

                return (
                  <React.Fragment key={i.id}>
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
                    {prefetch ? <Link to={prefetch} prefetch="render" /> : null}
                  </React.Fragment>
                );
              })}
            </div>
          ))}
        </DeferRender>
      </div>
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </div>
  );
}
