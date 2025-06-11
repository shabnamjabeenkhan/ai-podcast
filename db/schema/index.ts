// Main schema file that exports all tables
export * from './users';
export * from './payments';
export * from './subscriptions';
export * from './subscriptions_plans';
export * from './invoices';
export * from './refunds';

// Schema for AI Podcast Summarizer MVP

// --- USERS ---
// Supabase Auth manages users; reference by user_id (uuid)

// --- PODCASTS ---
export interface Podcast {
  id: string // uuid, primary key
  title: string
  description?: string
  rss_url?: string
  image_url?: string
  created_at: string // ISO timestamp
}

// --- EPISODES ---
export interface Episode {
  id: string // uuid, primary key
  podcast_id: string // uuid, foreign key -> podcasts.id
  title: string
  description?: string
  audio_url: string // ListenNotes audio URL
  duration?: number // seconds
  published_at?: string // ISO timestamp
  created_at: string // ISO timestamp
}

// --- SUMMARIES ---
export interface Summary {
  id: string // uuid, primary key
  episode_id: string // uuid, foreign key -> episodes.id
  user_id: string // uuid, foreign key -> auth.users.id
  text_summary: string
  key_takeaways: string[] // 5 bullet points
  segment_start?: number // seconds (for segment-based summary)
  segment_end?: number // seconds
  created_at: string // ISO timestamp
  notion_exported: boolean // has this summary been exported to Notion?
}

// --- CLIPS ---
export interface Clip {
  id: string // uuid, primary key
  summary_id: string // uuid, foreign key -> summaries.id
  user_id: string // uuid, foreign key -> auth.users.id
  episode_id: string // uuid, foreign key -> episodes.id
  start_time: number // seconds
  end_time: number // seconds
  audio_url: string // Supabase Storage path
  created_at: string // ISO timestamp
}

// --- PAYMENTS ---
export interface Payment {
  id: string // uuid, primary key
  user_id: string // uuid, foreign key -> auth.users.id
  type: 'subscription' | 'one_time'
  amount: number // in pence
  currency: string // e.g., 'GBP'
  status: 'pending' | 'completed' | 'failed'
  stripe_session_id?: string
  created_at: string // ISO timestamp
  expires_at?: string // ISO timestamp (for subscriptions)
}

// --- INDEXES (to be created in SQL migrations) ---
// CREATE INDEX ON episodes (podcast_id);
// CREATE INDEX ON summaries (user_id, episode_id);
// CREATE INDEX ON clips (user_id, episode_id);
// CREATE INDEX ON payments (user_id);

// --- RLS POLICIES (Supabase) ---
// For all user-owned tables (summaries, clips, payments):
// - Users can only select/insert/update/delete rows where user_id = auth.uid()
// For episodes/podcasts: read access is public, write access is admin only.

// --- FOREIGN KEYS & CASCADE ---
// - episodes.podcast_id REFERENCES podcasts(id) ON DELETE CASCADE
// - summaries.episode_id REFERENCES episodes(id) ON DELETE CASCADE
// - summaries.user_id REFERENCES auth.users(id) ON DELETE CASCADE
// - clips.summary_id REFERENCES summaries(id) ON DELETE CASCADE
// - clips.user_id REFERENCES auth.users(id) ON DELETE CASCADE
// - clips.episode_id REFERENCES episodes(id) ON DELETE CASCADE
// - payments.user_id REFERENCES auth.users(id) ON DELETE CASCADE

// --- NOTION EXPORT TRACKING ---
// - summaries.notion_exported: boolean flag
//   (could be extended to store Notion page ID if needed) 