"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      {/* Track */}
      <div className="w-1.5 h-32 bg-muted rounded-full overflow-hidden">
        {/* Progress */}
        <motion.div
          className="w-full bg-primary rounded-full origin-top"
          style={{ scaleY, height: "100%" }}
        />
      </div>
    </div>
  );
}
