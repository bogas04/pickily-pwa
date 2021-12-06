import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { useLoaderData, json } from "remix";
import { HomeWidgetsResponse, sleep } from "~/api/home.server";
import { getHomeWidgets } from "~/api/home.server";
import { Footer, footerStylesUrl } from "~/components/footer";
import { HomeWidgets, homeWidgetsStylesUrl } from "~/components/home-widgets";
import { Bolt, Caret, FreeDelivery, Search } from "~/components/icons";
import { productItemStylesUrl } from "~/components/product-item";
import { quantitySelectorStylesUrl } from "~/components/quantity-selector";
import styles from "~/styles/index.css";
import { createDomMotionComponent } from "framer-motion";
import { ScreenTransition } from "~/components/ScreenTransition";
const MotionDiv = createDomMotionComponent("div");

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Pickily",
    description: "Welcome to remix!",
  };
};

// https://remix.run/api/conventions#links
export let links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: footerStylesUrl,
  },
  {
    rel: "stylesheet",
    href: quantitySelectorStylesUrl,
  },
  {
    rel: "stylesheet",
    href: productItemStylesUrl,
  },
  {
    rel: "stylesheet",
    href: homeWidgetsStylesUrl,
  },
  {
    rel: "stylesheet",
    href: styles,
  },
];

// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  // mock API latency
  await sleep(100);
  const data = await getHomeWidgets();
  return json(data);
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<HomeWidgetsResponse>();

  return (
    <ScreenTransition>
      <header className="index-header">
        <div className="index-header-heading">
          <div>
            <Bolt style={{ marginRight: 12 }} />
            <div>
              <h1>Instant in 15 mins</h1>
              <button>
                To Home <Caret />
              </button>
            </div>
          </div>
          <div>
            <FreeDelivery />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <form>
            <input
              className="index-search"
              type="search"
              name="query"
              placeholder="Search veggies, groceries or medicines"
            />
            <Search style={{ position: "absolute", top: 13, left: 13 }} />
          </form>
        </div>
      </header>
      <main className="index-main">
        <HomeWidgets data={data} />
      </main>
      <Footer />
    </ScreenTransition>
  );
}
