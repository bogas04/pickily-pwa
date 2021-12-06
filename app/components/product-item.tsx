import React from "react";
import { HomeWidgetsResponse } from "~/api/home.server";
import { Bolt, Sunshine } from "./icons";
import { QuantitySelector, QuantitySelectorProps } from "./quantity-selector";

export { default as productItemStylesUrl } from "~/styles/product-item.css";

export default function ProductItem({
  data,
  qty,
  variant,
  onPlus,
  size,
  onMinus,
  setVariant,
  className,
}: {
  data: Extract<HomeWidgetsResponse[0], { type: "buy-again" }>["items"][0];
  qty: number;
  variant: {
    value: string;
    price: number;
    discountedPrice: number;
  };
  onPlus: VoidFunction;
  onMinus: VoidFunction;
  size: QuantitySelectorProps["size"];
  setVariant: React.Dispatch<
    React.SetStateAction<{
      value: string;
      price: number;
      discountedPrice: number;
    }>
  >;
  className?: string;
}) {
  if (size === "mini") {
    return (
      <section className={`product-item ${className}`}>
        <div className="product-item-img-wrapper">
          <img
            height={84}
            width={84}
            src={data.imageUrl}
            alt={`Picture of ${data.title}`}
          />
          <QuantitySelector
            value={qty}
            size={size}
            className="inline-quantity-button"
            onPlus={onPlus}
            onMinus={onMinus}
          />
        </div>
        <h3>{data.title}</h3>
        <select
          className="product-item-variant"
          onChange={(e) =>
            setVariant(
              data.variants.find((v) => v.value === e.currentTarget.value)!
            )
          }
        >
          {data.variants.map((v) => (
            <option value={v.value} selected={v.value === variant.value}>
              {v.value}
            </option>
          ))}
        </select>
        <div className="product-item-price">
          <strong>₹{variant.discountedPrice}</strong>
          <span>₹{variant.price}</span>
        </div>
        {data.tag === "instant" ? (
          <div className="product-item-tag">
            <Bolt style={{ height: 16, width: 16 }} /> Instant
          </div>
        ) : data.tag === "morning" ? (
          <div className="product-item-tag">
            <Sunshine style={{ height: 16, width: 16 }} /> By Morning
          </div>
        ) : null}
      </section>
    );
  }
  if (size === "normal") {
    return (
      <section className={`product-item-normal ${className}`}>
        <div className="product-item-img-wrapper">
          <img src={data.imageUrl} alt={`Picture of ${data.title}`} />
        </div>
        <h3>{data.title}</h3>
        {data.variants.length === 1 ? (
          <span className="product-item-variant">{data.variants[0].value}</span>
        ) : (
          <select
            className="product-item-variant"
            onChange={(e) =>
              setVariant(
                data.variants.find((v) => v.value === e.currentTarget.value)!
              )
            }
          >
            {data.variants.map((v) => (
              <option value={v.value} selected={v.value === variant.value}>
                {v.value}
              </option>
            ))}
          </select>
        )}
        <div className="product-item-price-wrapper">
          <div className="product-item-price">
            <strong>₹{variant.discountedPrice}</strong>
            <span>₹{variant.price}</span>
          </div>
          <QuantitySelector
            value={qty}
            size={size}
            className="inline-quantity-button"
            withOptions={data.variants.length > 1}
            onPlus={onPlus}
            onMinus={onMinus}
          />
        </div>
        {data.tag === "instant" ? (
          <div className="product-item-tag">
            <Bolt style={{ height: 16, width: 16 }} /> Instant
          </div>
        ) : data.tag === "morning" ? (
          <div className="product-item-tag">
            <Sunshine style={{ height: 16, width: 16 }} /> By Morning
          </div>
        ) : null}
      </section>
    );
  }

  return null;
}
