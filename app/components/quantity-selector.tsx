import { Minus, Plus } from "./icons";

export { default as quantitySelectorStylesUrl } from "~/styles/quantity-selector.css";

export interface QuantitySelectorProps {
  value: number;
  size: "mini" | "normal";
  max?: number;
  min?: number;
  disabled?: boolean;
  onPlus: VoidFunction;
  onMinus: VoidFunction;
  withOptions?: boolean;
  className?: string;
}

export function QuantitySelector(props: QuantitySelectorProps) {
  if (props.value === 0) {
    if (props.size === "mini") {
      return (
        <div className={`quantity-button ${props.className}`.trim()}>
          <button onClick={() => props.onPlus()} aria-label="Add 1 more">
            <Plus />
          </button>
        </div>
      );
    }
    return (
      <div className={`quantity-button-normal ${props.className}`.trim()}>
        <button onClick={() => props.onPlus()}>
          ADD
          <Plus />
        </button>
        {props.withOptions ? (
          <div className="quantity-selector-options">View Options</div>
        ) : null}
      </div>
    );
  }

  if (props.size === "mini") {
    return (
      <div
        className={`quantity-button quantity-button-expanded ${props.className}`.trim()}
      >
        <button onClick={() => props.onMinus()} aria-label="Reduce by one">
          <Minus />
        </button>
        {props.value}
        <button onClick={() => props.onPlus()} aria-label="Add 1 more">
          <Plus />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`quantity-button-normal quantity-button-expanded ${props.className}`.trim()}
    >
      <button onClick={() => props.onMinus()} aria-label="Reduce by one">
        <Minus />
      </button>
      {props.value}
      <button onClick={() => props.onPlus()} aria-label="Add 1 more">
        <Plus />
      </button>
    </div>
  );
}
