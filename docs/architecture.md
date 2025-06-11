# System Architecture: AI Podcast Summarizer MVP

```mermaid
graph TD
  User["User (Web/Mobile)"]
  FE["Next.js Frontend (React, Tailwind, Shadcn UI)"]
  API["API / Server Actions (Next.js)"]
  DB["Supabase DB"]
  Auth["Supabase Auth"]
  Storage["Supabase Storage (Audio Clips)"]
  LN["ListenNotes API"]
  LLM["OpenAI / LLM (Summarization)"]
  Whisper["Whisper / AssemblyAI (Transcription)"]
  Stripe["Stripe (Payments)"]
  Notion["Notion API (Export)"]

  User -- UI Interactions --> FE
  FE -- Calls / Data --> API
  API -- Auth / User Data --> Auth
  API -- Podcast Search/Meta --> LN
  API -- DB Reads/Writes --> DB
  API -- Audio Upload/Download --> Storage
  API -- Payment Flow --> Stripe
  API -- Notion Export --> Notion
  API -- Summarize Text --> LLM
  API -- Transcribe Audio --> Whisper
  API -- Returns Data/Results --> FE
  FE -- Shows Results --> User

  subgraph External APIs
    LN
    LLM
    Whisper
    Stripe
    Notion
  end

  subgraph Supabase
    DB
    Auth
    Storage
  end
```

---

- All user actions flow through the Next.js frontend and server actions.
- Supabase handles authentication, database, and audio storage.
- ListenNotes provides podcast search and episode metadata.
- OpenAI/LLM and Whisper/AssemblyAI handle summarization and transcription.
- Stripe manages payments (subscription/one-time).
- Notion API is used for exporting summaries. 