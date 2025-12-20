import { NextResponse } from "next/server";

const LASTFM_API_KEY = process.env.LASTFM_API_KEY || "35287ae0ab8e26350c297568c14a6e56";
const LASTFM_USERNAME = process.env.LASTFM_USERNAME || "diocata";

interface LastFmTrack {
  name: string;
  artist: { "#text": string };
  album: { "#text": string };
  image: { "#text": string; size: string }[];
  url: string;
  "@attr"?: { nowplaying: string };
}

interface LastFmResponse {
  recenttracks: {
    track: LastFmTrack[] | LastFmTrack;
  };
}

export async function GET() {
  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    return NextResponse.json(
      { isPlaying: false, error: "Last.fm not configured" },
      { status: 200 }
    );
  }

  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`,
      { next: { revalidate: 30 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from Last.fm");
    }

    const data: LastFmResponse = await response.json();
    const tracks = data.recenttracks?.track;
    const track = Array.isArray(tracks) ? tracks[0] : tracks;

    if (!track) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = track["@attr"]?.nowplaying === "true";
    const albumArt = track.image.find((img) => img.size === "large")?.["#text"] || 
                     track.image[track.image.length - 1]?.["#text"] || "";

    return NextResponse.json({
      isPlaying,
      title: track.name,
      artist: track.artist["#text"],
      album: track.album["#text"],
      albumArt,
      url: track.url,
    });
  } catch {
    return NextResponse.json(
      { isPlaying: false, error: "Failed to fetch track" },
      { status: 200 }
    );
  }
}
