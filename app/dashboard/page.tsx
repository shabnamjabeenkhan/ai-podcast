'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AppSidebar } from 'main-ui/components/app-sidebar';
import { SidebarProvider } from 'main-ui/components/ui/sidebar';
import PaymentButtons from './_components/test-payment-button';

const mockPodcasts = [
  {
    id: 1,
    title: 'The AI Revolution',
    author: 'Jane Doe',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=256&h=256&q=80',
    description: 'Exploring the impact of artificial intelligence on society and the future.'
  },
  {
    id: 2,
    title: 'Startup Stories',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&q=80',
    description: 'Interviews with founders and lessons from building startups.'
  },
  {
    id: 3,
    title: 'Health & Wellness',
    author: 'Dr. Alice',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&h=256&q=80',
    description: 'Tips and science behind living a healthy, balanced life.'
  },
];

function PricePlansModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg p-8 max-w-xl min-w-[400px] w-full shadow-xl flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Choose a Plan</h2>
        <div className="flex flex-row gap-4 w-full mb-2 justify-center">
          <PaymentButtons />
        </div>
        <Button variant="outline" className="mt-6 w-full text-slate-900" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const [showPlans, setShowPlans] = useState(false);

  const filteredPodcasts = mockPodcasts.filter(podcast =>
    podcast.title.toLowerCase().includes(search.toLowerCase()) ||
    podcast.author.toLowerCase().includes(search.toLowerCase()) ||
    podcast.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-800 overflow-hidden">
        {/* Sidebar (md+) */}
        <div className="hidden md:block">
          <AppSidebar hasAccess={false} />
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-start h-screen w-full pt-16 px-4">
          {/* Logo */}
          <span className="text-2xl font-bold text-cyan-400 mb-6">Podclip</span>
          {/* Heading */}
          <h1 className="text-4xl font-bold text-white text-center mb-4">Browse Podcasts</h1>
          {/* Search Bar */}
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, author or topic"
            className="w-full max-w-md mb-8 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {/* Podcast List */}
          <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {filteredPodcasts.map(podcast => (
              <div key={podcast.id} className="bg-slate-900 rounded-lg p-4 flex flex-col items-center shadow">
                <img src={podcast.image} alt={podcast.title} className="w-24 h-24 rounded mb-4 object-cover" />
                <div className="font-bold text-white text-lg mb-1 text-center">{podcast.title}</div>
                <div className="text-slate-400 text-sm mb-2 text-center">by {podcast.author}</div>
                <div className="text-slate-300 text-sm mb-4 text-center">{podcast.description}</div>
                <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold" onClick={() => setShowPlans(true)}>
                  Start Summarising
                </Button>
              </div>
            ))}
            {filteredPodcasts.length === 0 && (
              <div className="col-span-full text-slate-400 text-center">No podcasts found.</div>
            )}
          </div>
          {/* Subtext */}
          <p className="text-slate-400 text-base text-center mb-4">
            To summarise a podcast, please choose a plan below.
          </p>
        </div>
        <PricePlansModal open={showPlans} onClose={() => setShowPlans(false)} />
      </div>
    </SidebarProvider>
  );
}