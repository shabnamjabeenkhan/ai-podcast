"use client";
import { AppSidebar } from "main-ui/components/app-sidebar";
import { SidebarProvider } from "main-ui/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const mockSummary = {
  summary:
    "This is a mock summary of the selected podcast episode. It covers the main points and key takeaways, providing a concise overview for the listener.",
  takeaways: ["Key insight 1", "Key insight 2", "Key insight 3"],
  snippets: [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      label: "Intro highlight",
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      label: "Key moment",
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      label: "Closing thought",
    },
  ],
};

export default function SummarisePodcastPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<any | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `/api/search-podcasts?q=${encodeURIComponent(search)}`
    );
    const data = await res.json();
    setResults(data.podcasts);
    setLoading(false);
  }

  async function handleShowEpisodes(podcast: any) {
    setLoading(true);
    setSelected(podcast);
    setShowSummary(false);
    setShowEpisodes(true);
    setSelectedEpisode(null);
    console.log('Podcast ID:', podcast.id);
    const res = await fetch(`/api/podcast-episodes?id=${podcast.id}`);
    const data = await res.json();
    console.log('Episodes API response:', data);
    setEpisodes(data.episodes);
    setLoading(false);
  }

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
            <h1 className="text-3xl font-bold text-white mb-4">
              Search & Discover
            </h1>
            {/* Search Bar */}
            <form onSubmit={handleSearch}>
              <Input
                placeholder="Search for a podcast by name or topic..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-900 border-slate-700 text-white mb-2"
              />
            </form>
            {/* Podcast List */}
            {!selected && (
              <div className="flex flex-col gap-4">
                {loading && (
                  <div className="text-slate-400 text-center">Loading...</div>
                )}
                {!loading && results.length === 0 && (
                  <div className="text-slate-400 text-center">
                    No podcasts found.
                  </div>
                )}
                {results.map((podcast: any) => (
                  console.log(podcast),
                  <Card
                    key={podcast.id}
                    className="bg-slate-900 border border-slate-700 rounded-lg flex flex-row items-center gap-4 p-4"
                  >
                    <img
                      src={podcast.image || podcast.thumbnail}
                      alt={podcast.title_original || podcast.title}
                      className="h-16 w-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        {podcast.title_original || podcast.title}
                        <p>Total Episodes: {podcast.total_episodes} </p>
                        
                      </div>
                      <div className="text-slate-400 text-sm mb-2">
                        {/* {podcast.description_original || podcast.description} */}
                      </div>
                    </div>
                    <Button
                      className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded"
                      onClick={() => handleShowEpisodes(podcast)}
                    >
                      Select episodes
                    </Button>
                  </Card>
                ))}
              </div>
            )}
            {selected && !showEpisodes && (
              <Card className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-14 w-14 rounded object-cover"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">
                      {selected.title}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {selected.description}
                    </div>
                  </div>
                </div>
                {!showSummary ? (
                  <Button
                    className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded mb-2"
                    onClick={() => setShowSummary(true)}
                  >
                    Generate Summary
                  </Button>
                ) : (
                  <>
                    <div className="mb-3">
                      <div className="font-semibold text-white mb-1">
                        Audio Snippets
                      </div>
                      <div className="flex flex-col gap-3 mb-2">
                        {mockSummary.snippets.map((snippet, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <audio controls className="w-48 bg-slate-800">
                              <source src={snippet.url} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                            <span className="text-slate-300 text-sm">
                              {snippet.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="font-semibold text-white mb-1">
                        Summary
                      </div>
                      <div className="text-slate-300 text-sm mb-2">
                        {mockSummary.summary}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="font-semibold text-white mb-1">
                        Key Takeaways
                      </div>
                      <ul className="list-disc list-inside text-slate-300 text-sm">
                        {mockSummary.takeaways.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded"
                      onClick={() => {
                        setSelected(null);
                        setShowSummary(false);
                      }}
                    >
                      Send to My Summaries
                    </Button>
                  </>
                )}
                <Button
                  variant="ghost"
                  className="mt-4 text-slate-400 hover:text-cyan-400"
                  onClick={() => {
                    setShowEpisodes(false);
                    setSelected(null);
                    setEpisodes([]);
                    setShowSummary(false);
                  }}
                >
                  Back to podcasts
                </Button>
              </Card>
            )}
            {showEpisodes && !selectedEpisode && (
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-white mb-2">Episodes</h2>
                {loading && <div className="text-slate-400 text-center">Loading episodes...</div>}
                {!loading && episodes.length === 0 && (
                  <div className="text-slate-400 text-center">No episodes found.</div>
                )}
                {episodes.map((ep: any) => (
                  <Card
                    key={ep.id}
                    className="bg-slate-900 border border-slate-700 rounded-lg flex flex-col p-4"
                  >
                    <div className=" flex-row gap-4">
                      <img
                        src={ep.image || ep.thumbnail}
                        alt={ep.title}
                        className=" w-28 h-28 rounded object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-white text-lg p-4">{ep.title}</div>
                        {/* <div className="text-slate-400 text-sm mb-2">{ep.description}</div> */}
                        {/* <audio controls className="w-full my-2">
                          <source src={ep.audio} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio> */}
                      </div>
                    </div>
                    <Button
                      className="mt-4 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-4 py-2 rounded"
                      onClick={() => setSelectedEpisode(ep)}
                    >
                      Listen
                    </Button>
                  </Card>
                ))}
                <Button
                  variant="ghost"
                  className="mt-4 text-slate-400 hover:text-cyan-400"
                  onClick={() => {
                    setShowEpisodes(false);
                    setSelected(null);
                    setEpisodes([]);
                    setShowSummary(false);
                  }}
                >
                  Back to podcasts
                </Button>
              </div>
            )}
            {selectedEpisode && (
              <Card className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={selectedEpisode.image || selectedEpisode.thumbnail} alt={selectedEpisode.title} className="h-14 w-14 rounded object-cover w-28 h-28" />
                  <div>
                    <div className="font-bold text-white text-lg">{selectedEpisode.title}</div>
                    {/* <div className="text-slate-400 text-sm">{selectedEpisode.description}</div> */}
                  </div>
                </div>
                {/* Full episode audio player */}
                <audio controls className="w-full my-4 pt-4">
                  <source src={selectedEpisode.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                {/* Add your summarization/clip UI here */}
                <Button variant="ghost" className="mt-4 text-slate-400 hover:text-cyan-400" onClick={() => setSelectedEpisode(null)}>
                  Back to episodes
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
