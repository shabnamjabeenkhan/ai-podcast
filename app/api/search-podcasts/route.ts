// app/api/search-podcasts/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');
  if (!query) return NextResponse.json({ podcasts: [] });

  const res = await fetch(
    `https://listen-api.listennotes.com/api/v2/search?q=${encodeURIComponent(query)}&type=podcast`,
    {
      headers: {
        'X-ListenAPI-Key': process.env.LISTENNOTES_API_KEY!,
      },
    }
  );
  const data = await res.json();
  return NextResponse.json({ podcasts: data.results });
}