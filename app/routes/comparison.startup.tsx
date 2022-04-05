import { useEffect, useState } from "react";
import type { LinksFunction } from "remix";
import stylesUrl from "~/styles/comparison.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stylesUrl,
  },
];
const apps = [
  "Amazon.mp4",
  "Bigbasket.mp4",
  "Slack.mp4",
  "udaan native.mp4",
  "Flipkart.mp4",
  "Blinkit.mp4",
  "swiggy.mp4",
  "udaan lite.mp4",
  "Ajio.mp4",
  "notion.mp4",
];

export default function AppComparison() {
  const [time, setTime] = useState(() =>
    Object.fromEntries(apps.map((x) => [x, 0]))
  );
  const [ended, setEnded] = useState(() =>
    Object.fromEntries(apps.map((x) => [x, false]))
  );

  const playAll = () =>
    [...document.querySelectorAll("video")].forEach((el) => el.play());

  return (
    <div className="main-wrapper">
      <main>
        <h1>App Startup Comparison</h1>
        <p>
          This page compares app startup times of{" "}
          {apps.map((x) => x.replace(".mp4", "")).join(", ")}
        </p>
        <>
          <h2>
            <button onClick={() => playAll()}>Play All</button>
          </h2>
          <div className="wrapper" style={{ alignItems: "flex-start" }}>
            {apps.map((a) => (
              <div>
                {a.replace(".mp4", "")}
                {time[a] ? <span>{time[a]} seconds</span> : null}
                <video
                  id={`${a}`}
                  src={`/video/startup/${a}`}
                  onClick={() => window.open(`/video/startup/${a}`)}
                  onEnded={() => setEnded((t) => ({ ...t, [a]: true }))}
                  onLoadedData={(e) => {
                    const v = e.currentTarget;
                    setTime((t) => ({
                      ...t,
                      [a]: Number(Number(v.duration).toFixed(2)),
                    }));
                  }}
                  height={375}
                />
                {ended[a] ? <h2>✅</h2> : null}
              </div>
            ))}
          </div>
        </>
      </main>
    </div>
  );
}
