"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function KonamiCode() {
  const [, setKeys] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      setKeys((prev) => {
        const newKeys = [...prev, e.code].slice(-10);
        
        if (newKeys.join(",") === KONAMI_CODE.join(",")) {
          setActivated(true);
          setTimeout(() => setActivated(false), 4000);
          return [];
        }
        
        return newKeys;
      });
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {activated && (
        <>
          {/* Confetti */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-3 h-3 rounded-full z-[100] pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ["#ff0", "#f0f", "#0ff", "#f00", "#0f0", "#00f"][
                  Math.floor(Math.random() * 6)
                ],
              }}
              initial={{ top: -20, rotate: 0, opacity: 1 }}
              animate={{
                top: "110vh",
                rotate: Math.random() * 720 - 360,
                opacity: [1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "easeIn",
                delay: Math.random() * 0.5,
              }}
            />
          ))}
          
          {/* Secret Message */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[99] pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div className="bg-background/95 backdrop-blur-md border border-primary rounded-2xl p-8 text-center shadow-2xl">
              <p className="text-4xl mb-2">🎉</p>
              <p className="text-2xl font-bold text-primary">Easter egg found!</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
