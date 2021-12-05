import type { LinksFunction } from "remix";
import { Link, Outlet, useLocation } from "remix";
import { Back, Search } from "~/components/icons";
import { productItemStylesUrl } from "~/components/product-item";
import { quantitySelectorStylesUrl } from "~/components/quantity-selector";
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
  const { state } = useLocation();
  return (
    <>
      <header>
        <div className="title">
          <Link to="..">
            <Back />
          </Link>
          <h1>{state?.title || "All Items"}</h1>
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
    </>
  );
}
