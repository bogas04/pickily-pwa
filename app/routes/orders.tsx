import type { LinksFunction } from "remix";
import { Footer, footerStylesUrl } from "~/components/footer";

export let links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: footerStylesUrl,
  },
];
export default function () {
  return (
    <>
      <h1>Orders Page WIP</h1>
      <main style={{ flexGrow: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        aut.
      </main>
      <Footer />
    </>
  );
}
