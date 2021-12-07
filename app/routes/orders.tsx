import type { LinksFunction } from "remix";
import { Footer, footerStylesUrl } from "~/components/footer";
import { ScreenTransition } from "~/components/ScreenTransition";

export let links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: footerStylesUrl,
  },
];
export default function () {
  return (
    <>
      <main style={{ flexGrow: 1, padding: 16 }}>
        <ScreenTransition>
          <h1>Orders Page WIP</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          aut.
        </ScreenTransition>
      </main>
      <Footer />
    </>
  );
}
