'use client';
import { AppSidebar } from 'main-ui/components/app-sidebar';
import { SidebarProvider } from 'main-ui/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from 'main-ui/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const mockSummary = {
  title: 'The AI Revolution',
  audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  summary: 'This episode explores the rapid advancements in AI, its impact on society, and what the future may hold for technology and humanity.',
  takeaways: [
    'AI is transforming multiple industries.',
    'Ethical considerations are crucial for future development.',
    'Continuous learning is key to staying relevant.'
  ],
  date: '2024-06-01',
};

const plan = {
  name: 'Monthly Plan',
  used: 3,
  total: 10,
};

export default function PaidDashboard() {
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
            {/* Plan & Progress */}
            <Card className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg">
              <CardContent className="p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-white">{plan.name}</span>
                  <span className="text-slate-400 text-sm">{plan.used}/{plan.total} summaries used</span>
                </div>
                <Progress value={(plan.used / plan.total) * 100} className="h-3 bg-slate-800" />
              </CardContent>
            </Card>
            {/* Most Recent Summary */}
            <Card className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg">
              <CardContent className="p-6">
                <div className="font-bold text-white text-lg mb-2">Most Recent Summary</div>
                <div className="font-semibold text-white mb-1">{mockSummary.title}</div>
                <audio controls className="w-full mb-3">
                  <source src={mockSummary.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="flex items-center gap-2 mb-3">
                  <a href={mockSummary.audio} download className="inline-flex items-center px-2 py-1 bg-slate-700 hover:bg-cyan-400 hover:text-slate-900 text-slate-300 rounded text-xs font-medium transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Download Audio
                  </a>
                </div>
                <div className="mb-3">
                  <div className="font-semibold text-white mb-1">Summary</div>
                  <div className="text-slate-300 text-sm">{mockSummary.summary}</div>
                </div>
                <div className="mb-3">
                  <div className="font-semibold text-white mb-1">Key Takeaways</div>
                  <ul className="list-disc list-inside text-slate-300 text-sm">
                    {mockSummary.takeaways.map((takeaway, i) => (
                      <li key={i}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-slate-500 text-xs">Summarized: {mockSummary.date}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}