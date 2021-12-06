import { useState } from "react";
import { Link } from "remix";
import type { HomeWidgetsResponse } from "~/api/home.server";
import { Caret } from "./icons";
import ProductItem from "./product-item";
import { QuantitySelector } from "./quantity-selector";

export { default as homeWidgetsStylesUrl } from "~/styles/home-widgets.css";

export function HomeWidgets(props: { data: HomeWidgetsResponse }) {
  const content = props.data.map((x) => {
    switch (x.type) {
      case "buy-again":
        return <BuyAgainWidget key={x.id} data={x} />;
      case "product-story":
        return <ProductStoryWidget key={x.id} data={x} />;
      case "offer-banner":
        return <OfferBannerWidget key={x.id} data={x} />;
      case "brand-collection":
        return <BrandCollectionWidget key={x.id} data={x} />;
      case "browse-category":
        return <BrowseCategoryWidget key={x.id} data={x} />;
      default:
        return null;
    }
  });

  return <>{content}</>;
}

export function BuyAgainWidget({
  data,
}: {
  data: Extract<HomeWidgetsResponse[0], { type: "buy-again" }>;
}) {
  return (
    <section className="buy-again-widget">
      <div className="header">
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <Link
          to={`/category/${data.type}?id=${data.id}&title=${data.title}`}
          prefetch="render"
          className="view-all"
        >
          View All <Caret style={{ transform: "rotate(-90deg)" }} />
        </Link>
      </div>
      <ol>
        {data.items.map((i, index) => {
          const [qty, setQty] = useState(index);
          const onPlus = () => setQty((q) => q + 1);
          const onMinus = () => setQty((q) => q - 1);
          const [selectedVariant, setVariant] = useState(i.variants[0]);

          return (
            <li key={i.id}>
              <ProductItem
                data={i}
                qty={qty}
                size="mini"
                onPlus={onPlus}
                onMinus={onMinus}
                variant={selectedVariant}
                setVariant={setVariant}
              />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
export function ProductStoryWidget({
  data,
}: {
  data: Extract<HomeWidgetsResponse[0], { type: "product-story" }>;
}) {
  return (
    <section className="product-story-widget">
      <div className="header">
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <Link
          to={`/category/${data.type}?id=${data.id}&title=${data.title}`}
          prefetch="render"
          className="view-all"
        >
          View All <Caret style={{ transform: "rotate(-90deg)" }} />
        </Link>
      </div>
      <ol>
        {data.items.map((x, index) => {
          const [qty, setQty] = useState(index);
          const onPlus = () => setQty((q) => q + 1);
          const onMinus = () => setQty((q) => q - 1);
          return (
            <li key={x.id}>
              <img
                height={148}
                width={240}
                src={x.imageUrl}
                alt={x.title + "\n" + x.description}
              />
              <QuantitySelector
                className="inline-quantity-button"
                value={qty}
                onPlus={onPlus}
                size="mini"
                onMinus={onMinus}
              />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
export function OfferBannerWidget({
  data,
}: {
  data: Extract<HomeWidgetsResponse[0], { type: "offer-banner" }>;
}) {
  return (
    <section className="offer-banner-widget">
      <ol>
        {data.items.map((x, index) => {
          const [qty, setQty] = useState(index);
          const onPlus = () => setQty((q) => q + 1);
          const onMinus = () => setQty((q) => q - 1);
          return (
            <li key={x.id}>
              <img
                height={192}
                width={144}
                src={x.imageUrl}
                alt={x.title + "\n" + x.description}
              />
              <QuantitySelector
                className="inline-quantity-button "
                value={qty}
                size="mini"
                onPlus={onPlus}
                onMinus={onMinus}
              />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
export function BrandCollectionWidget({
  data,
}: {
  data: Extract<HomeWidgetsResponse[0], { type: "brand-collection" }>;
}) {
  return (
    <section className="brand-collection-widget">
      <div className="header">
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <Link
          to={`/category/${data.type}?id=${data.id}&title=${data.title}`}
          prefetch="render"
          className="view-all"
        >
          View All <Caret style={{ transform: "rotate(-90deg)" }} />
        </Link>
      </div>
      <ol>
        {data.items.map((x, index) => (
          <li key={x.id}>
            <Link
              to={`/category/${data.type}?id=${data.id}&title=${data.title}`}
              prefetch="render"
            >
              <img src={x.imageUrl} alt={x.title + "\n" + x.description} />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function BrowseCategoryWidget({
  data,
}: {
  data: Extract<HomeWidgetsResponse[0], { type: "browse-category" }>;
}) {
  return (
    <section className="browse-category-widget">
      <h2>Browse by Category</h2>
      <Link
        to={`/category/${data.type}?id=${data.id}&title=${data.title}`}
        prefetch="render"
        title={data.title}
      >
        <img
          alt="Browse by Category"
          style={{ margin: "0 -16px", width: "calc(100% + 32px)" }}
          src="/img/category.png"
        />
      </Link>
    </section>
  );
}
