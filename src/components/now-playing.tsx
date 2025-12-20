"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music } from "lucide-react";
import Image from "next/image";

interface NowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumArt?: string;
  url?: string;
}

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/now-playing");
        const json = await res.json();
        setData(json);
      } catch {
        setData({ isPlaying: false });
      }
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data || (!data.isPlaying && !data.title)) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 bg-card/80 backdrop-blur-md border border-border rounded-full p-2 pr-4 shadow-lg hover:bg-card transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Album Art or Icon */}
        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
          {data.albumArt ? (
            <Image
              src={data.albumArt}
              alt={data.album || "Album art"}
              fill
              className="object-cover"
            />
          ) : (
            <Music className="h-5 w-5 text-muted-foreground" />
          )}
          {data.isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-white rounded-full"
                    animate={{ height: [4, 12, 4] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Track Info */}
        <div className="text-left max-w-[150px]">
          <p className="text-xs text-muted-foreground">
            {data.isPlaying ? "Now Playing" : "Last Played"}
          </p>
          <p className="text-sm font-medium truncate">{data.title}</p>
        </div>
      </motion.button>

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-0 mb-2 bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl min-w-[280px]"
          >
            <div className="flex gap-4">
              {/* Large Album Art */}
              <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                {data.albumArt ? (
                  <Image
                    src={data.albumArt}
                    alt={data.album || "Album art"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <Music className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Track Details */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">
                  {data.isPlaying ? "Now Playing" : "Last Played"}
                </p>
                <p className="font-semibold truncate">{data.title}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {data.artist}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {data.album}
                </p>
              </div>
            </div>

            {/* Link to Last.fm */}
            {data.url && (
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-xs text-center text-muted-foreground hover:text-primary transition-colors"
              >
                View on Last.fm
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
