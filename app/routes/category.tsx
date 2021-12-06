import type { LinksFunction } from "remix";
import { Link, Outlet, useSearchParams } from "remix";
import { Back, Search } from "~/components/icons";
import { productItemStylesUrl } from "~/components/product-item";
import { quantitySelectorStylesUrl } from "~/components/quantity-selector";
import { ScreenTransition } from "~/components/ScreenTransition";
import styles from "~/styles/category.css";

// https://remix.run/api/conventions#links
export let links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: quantitySelectorStylesUrl,
  },
  {
    rel: "stylesheet",
    href: productItemStylesUrl,
  },
];

export default function () {
  const [sp] = useSearchParams();

  const title = sp.get("title");
  return (
    <ScreenTransition>
      <header>
        <div className="title">
          <Link to="..">
            <Back />
          </Link>
          <h1>{title || "All Items"}</h1>
        </div>
        <div>
          <button className="search">
            <Search />
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ScreenTransition>
  );
}
