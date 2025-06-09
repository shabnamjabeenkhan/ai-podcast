'use client';
import { AppSidebar } from 'main-ui/components/app-sidebar';
import { SidebarProvider } from 'main-ui/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const mockPodcasts = [
  {
    id: 1,
    title: 'The AI Revolution',
    image: 'https://placehold.co/64x64?text=AI',
    description: 'Exploring the impact of AI on society and the future.',
  },
  {
    id: 2,
    title: 'Startup Stories',
    image: 'https://placehold.co/64x64?text=SS',
    description: 'Founders share their journeys and lessons learned.',
  },
  {
    id: 3,
    title: 'Health & Wellness',
    image: 'https://placehold.co/64x64?text=HW',
    description: 'Tips and science for a healthier life.',
  },
];

const mockSummary = {
  summary: 'This is a mock summary of the selected podcast episode. It covers the main points and key takeaways, providing a concise overview for the listener.',
  takeaways: [
    'Key insight 1',
    'Key insight 2',
    'Key insight 3',
  ],
  snippets: [
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      label: 'Intro highlight',
    },
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      label: 'Key moment',
    },
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      label: 'Closing thought',
    },
  ],
};

export default function SummarisePodcastPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null as null | typeof mockPodcasts[0]);
  const [showSummary, setShowSummary] = useState(false);

  const filtered = mockPodcasts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-800 overflow-hidden">
        {/* Sidebar (md+) */}
        <div className="hidden md:block">
          <AppSidebar hasAccess={true} />
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-start h-screen w-full pt-16 px-4 pb-16 overflow-y-auto">
          <div className="w-full max-w-2xl flex flex-col gap-8">
            <h1 className="text-3xl font-bold text-white mb-4">Summarise a Podcast</h1>
            {/* Search Bar */}
            <Input
              placeholder="Search for a podcast by name or topic..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-slate-900 border-slate-700 text-white mb-2"
            />
            {/* Podcast List */}
            {!selected && (
              <div className="flex flex-col gap-4">
                {filtered.length === 0 && (
                  <div className="text-slate-400 text-center">No podcasts found.</div>
                )}
                {filtered.map(podcast => (
                  <Card key={podcast.id} className="bg-slate-900 border border-slate-700 rounded-lg flex flex-row items-center gap-4 p-4">
                    <img src={podcast.image} alt={podcast.title} className="h-16 w-16 rounded object-cover" />
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">{podcast.title}</div>
                      <div className="text-slate-400 text-sm mb-2">{podcast.description}</div>
                    </div>
                    <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded" onClick={() => { setSelected(podcast); setShowSummary(false); }}>
                      Summarise
                    </Button>
                  </Card>
                ))}
              </div>
            )}
            {/* Summary Preview */}
            {selected && (
              <Card className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={selected.image} alt={selected.title} className="h-14 w-14 rounded object-cover" />
                  <div>
                    <div className="font-bold text-white text-lg">{selected.title}</div>
                    <div className="text-slate-400 text-sm">{selected.description}</div>
                  </div>
                </div>
                {!showSummary ? (
                  <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded mb-2" onClick={() => setShowSummary(true)}>
                    Generate Summary
                  </Button>
                ) : (
                  <>
                    <div className="mb-3">
                      <div className="font-semibold text-white mb-1">Audio Snippets</div>
                      <div className="flex flex-col gap-3 mb-2">
                        {mockSummary.snippets.map((snippet, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <audio controls className="w-48 bg-slate-800">
                              <source src={snippet.url} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                            <span className="text-slate-300 text-sm">{snippet.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="font-semibold text-white mb-1">Summary</div>
                      <div className="text-slate-300 text-sm mb-2">{mockSummary.summary}</div>
                    </div>
                    <div className="mb-3">
                      <div className="font-semibold text-white mb-1">Key Takeaways</div>
                      <ul className="list-disc list-inside text-slate-300 text-sm">
                        {mockSummary.takeaways.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>
                    <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded" onClick={() => { setSelected(null); setShowSummary(false); }}>
                      Send to My Summaries
                    </Button>
                  </>
                )}
                <Button variant="ghost" className="mt-4 text-slate-400 hover:text-cyan-400" onClick={() => { setSelected(null); setShowSummary(false); }}>
                  Back to search
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
} 