import { useEffect } from "react";
import type { LinksFunction } from "remix";
import stylesUrl from "~/styles/comparison.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stylesUrl,
  },
];

export default function AppComparison() {
  const playAll = (type: "startup" | "forward" | "backward") =>
    [...document.querySelectorAll("video")]
      .filter((x) => x.src.includes(type))
      .forEach((el) => el.play());

  const apps = ["react-native", "pwa", "flutter"];
  const types = ["startup", "forward", "backward"] as const;

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelectorAll("video")
        .forEach((v) =>
          v.insertAdjacentHTML(
            "beforebegin",
            `<span>${Number(v.duration).toFixed(2)} seconds</span>`
          )
        );
    }, 100);
  }, []);
  return (
    <div className="main-wrapper">
      <main>
        <h1>App Comparison</h1>
        <p>
          This page compares Pickily app partially built in PWA, ReactNative and
          Flutter flavours
        </p>
        {types.map((t) => (
          <>
            <h2>
              {t}
              <button onClick={() => playAll(t)}>Play All</button>
            </h2>
            <div className="wrapper">
              {apps.map((a) => (
                <div>
                  {a.split("-").join(" ")}
                  <video
                    id={`${a}-${t}`}
                    src={`/video/${a} ${t}.mp4`}
                    onClick={() => window.open(`/video/${a} ${t}.mp4`)}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </>
        ))}
      </main>
    </div>
  );
}
