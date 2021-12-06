import React from "react";
import { AnimatePresence, createDomMotionComponent } from "framer-motion";
import { DeferRender } from "./defer-render";
const MotionDiv = createDomMotionComponent("div");

export function ScreenTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <MotionDiv
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        exit={{ x: 20 }}
        transition={{ type: "tween", duration: 0.25 }}
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
}
