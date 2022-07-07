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
  "amazon.mp4",
  "bigbasket.mp4",
  "slack.mp4",
  "udaan.mp4",
  "flipkart.mp4",
  "blinkit.mp4",
  "swiggy.mp4",
  // "udaan lite.mp4",
  "ajio.mp4",
  "notion.mp4",
];

const quarters = [
  ["jfm-2022", "JFM 2022"],
  ["amj-2022", "AMJ 2022"],
].reverse();

export default function AppComparison() {
  const [quarter, setQuarter] = useState(quarters[0]);

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
        <select
          onChange={(e) => {
            const selectedQuarter = quarters.find(
              (q) => q[0] === e.currentTarget.value
            );
            if (selectedQuarter) {
              setQuarter(selectedQuarter);
            }
          }}
        >
          {quarters.map(([key, title]) => (
            <option key={key} value={key}>
              {title}
            </option>
          ))}
        </select>
        <p>
          This page compares app startup times of{" "}
          {apps.map((x) => x.replace(".mp4", "")).join(", ")}
        </p>
        <>
          <h2>
            <button onClick={() => playAll()}>Play All</button>
          </h2>
          <div className="wrapper" style={{ alignItems: "flex-start" }}>
            {apps.map((a) => {
              const videoPath = `/video/startup-${quarter[0]}/${a}`;
              return (
                <div key={videoPath}>
                  {a.replace(".mp4", "")}
                  {time[a] ? <span>{time[a]} seconds</span> : null}
                  <video
                    id={`${a}`}
                    src={videoPath}
                    onClick={() => window.open(videoPath)}
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
              );
            })}
          </div>
        </>
      </main>
    </div>
  );
}
