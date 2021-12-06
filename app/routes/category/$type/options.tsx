import { useState } from "react";
import { useNavigate, useSearchParams } from "remix";
import type { LinksFunction } from "remix";
import stylesUrl from "~/styles/category-options.css";
import { CategoryItem } from "~/api/category.server";
import { QuantitySelector } from "~/components/quantity-selector";
import { Bolt } from "~/components/icons";
import { createDomMotionComponent } from "framer-motion";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

const MotionImage = createDomMotionComponent("img");
const MotionDiv = createDomMotionComponent("div");

export default function Options() {
  const [sp] = useSearchParams();
  const item: CategoryItem = JSON.parse(sp.get("item") as string);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="category-options-overlay"
        onClick={() => navigate("..")}
      />
      <MotionDiv
        className="category-options"
        initial={{ top: "100%" }}
        transition={{ duration: 0.25 }}
        animate={{ top: "auto" }}
      >
        <div className="header">
          <MotionImage
            src={item.imageUrl}
            height={48}
            width={48}
            layoutId={`photo-${item.id}`}
            transition={{ delay: 0.05 }}
          />
          <div>
            <h6>Available Options for</h6>
            <h5>{item.title}</h5>
          </div>
        </div>
        <ol>
          {item.variants.map((v) => {
            const [qty, setQty] = useState(0);
            const onPlus = () => {
              return setQty((q) => q + 1);
            };
            const onMinus = () => setQty((q) => q - 1);
            return (
              <li key={v.value}>
                <div className="value">
                  {v.value}
                  <div className="tag">
                    <Bolt style={{ height: 16, width: 16 }} /> Just in 10 mins
                  </div>
                </div>
                <div className="price">
                  <strong>₹{v.price}</strong>
                  <QuantitySelector
                    value={qty}
                    size="normal"
                    onPlus={onPlus}
                    onMinus={onMinus}
                  />
                </div>
              </li>
            );
          })}
        </ol>
        <button className="done">Done</button>
      </MotionDiv>
    </>
  );
}
