import React, { useState, useEffect } from "react";

export function DeferRender({ children }: { children: React.ReactNode }) {
  const [defer, setDefer] = useState(() =>
    typeof window === "undefined" ? true : false
  );

  useEffect(() => {
    setDefer(true);
  }, []);

  if (!defer) {
    return null;
  }
  return <>{children}</>;
}
