'use client';
import { AppSidebar } from 'main-ui/components/app-sidebar';
import { SidebarProvider } from 'main-ui/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const mockSummaries = [
  {
    id: 1,
    title: 'The AI Revolution',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    summary: 'This episode explores the rapid advancements in AI, its impact on society, and what the future may hold for technology and humanity.',
    takeaways: [
      'AI is transforming multiple industries.',
      'Ethical considerations are crucial for future development.',
      'Continuous learning is key to staying relevant.'
    ],
    date: '2024-06-01',
  },
  {
    id: 2,
    title: 'Startup Stories',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    summary: 'Founders share their journeys, challenges, and lessons learned from building startups.',
    takeaways: [
      'Resilience is key for founders.',
      'Learning from failure is essential.',
      'Networking accelerates growth.'
    ],
    date: '2024-06-02',
  },
];

export default function MySummariesPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-800 overflow-hidden">
        {/* Sidebar (md+) */}
        <div className="hidden md:block">
          <AppSidebar hasAccess={true} />
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-start h-screen w-full pt-16 px-4 pb-16 overflow-y-auto">
          <h1 className="text-3xl font-bold text-white text-center mb-8">My Summaries</h1>
          <div className="w-full max-w-2xl flex flex-col gap-4 mb-8">
            <div className="flex w-full justify-end">
              <a href="/upload" className="w-full sm:w-auto">
                <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded transition-colors w-full sm:w-auto">
                  Create New Summary
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full max-w-2xl flex flex-col gap-8">
            {mockSummaries.map((summary) => (
              <div key={summary.id} className="bg-slate-900 rounded-lg p-6 shadow">
                <div className="font-bold text-white text-lg mb-2">{summary.title}</div>
                <audio controls className="w-full mb-3">
                  <source src={summary.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="flex items-center gap-2 mb-3">
                  <a href={summary.audio} download className="inline-flex items-center px-2 py-1 bg-slate-700 hover:bg-cyan-400 hover:text-slate-900 text-slate-300 rounded text-xs font-medium transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Download Audio
                  </a>
                </div>
                <div className="mb-3">
                  <div className="font-semibold text-white mb-1">Summary</div>
                  <div className="text-slate-300 text-sm">{summary.summary}</div>
                </div>
                <div className="mb-3">
                  <div className="font-semibold text-white mb-1">Key Takeaways</div>
                  <ul className="list-disc list-inside text-slate-300 text-sm">
                    {summary.takeaways.map((takeaway, i) => (
                      <li key={i}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-500 text-xs">Summarized: {summary.date}</span>
                  <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-3 py-1 rounded transition-colors text-sm">Export to Notion</Button>
                </div>
              </div>
            ))}
            {mockSummaries.length === 0 && (
              <div className="text-slate-400 text-center">No summaries found.</div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
} 