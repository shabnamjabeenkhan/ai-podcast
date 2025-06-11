// app/api/podcast-episodes/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const podcastId = searchParams.get('id');
  if (!podcastId) return NextResponse.json({ episodes: [] });

  const res = await fetch(
    `https://listen-api.listennotes.com/api/v2/podcasts/${podcastId}`,
    {
      headers: {
        "X-ListenAPI-Key": process.env.LISTENNOTES_API_KEY!,
      } as HeadersInit,
    }
  );
  const data = await res.json();
  return NextResponse.json({ episodes: data.episodes || [] });
}