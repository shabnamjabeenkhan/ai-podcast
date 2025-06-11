# Product Requirements Document (PRD): AI Podcast Summarizer MVP

## Introduction
**Problem Statement:** Podcast listeners are overwhelmed by long episodes and want quick, actionable insights. Existing tools are either too complex or lack high-quality summarization and clipping.

**Product Vision:** Deliver a simple, AI-powered tool for searching, summarizing, and clipping podcasts, focused on personal productivity and privacy.

## Objectives & Goals
- Enable users to quickly find and summarize podcast content
- Provide high-quality, concise audio and text outputs
- Ensure a frictionless, private, and cross-device experience

## Target Users & Roles
- **Primary Users:**
  - Podcast listeners
  - Knowledge workers, students, researchers
  - Content creators, professionals (journalists, analysts)
- **Registered Users:**
  - Search and select podcasts/episodes
  - Generate/download 30s audio clips (user-selected or AI-suggested)
  - Generate/export text summaries (full, key takeaways, segment-based)
  - Export text to Notion

## Core Features for MVP
1. **Podcast Search & Selection** (ListenNotes API)
2. **Summarization & Clip Generation**
   - 30s audio clips (user-selected or AI-suggested)
   - Text summaries (full, key takeaways, segment-based)
   - Download audio clips
   - Export text summaries to Notion

## Future Scope
- Support for additional podcast APIs
- Public sharing and collaboration features
- Advanced AI highlight detection
- More export/integration options

## User Journey
1. User signs up/logs in
2. Searches for a podcast/episode
3. Selects an episode
4. Chooses summarization option (full, segment, or custom)
5. Receives audio/text summary
6. Downloads or exports content

## Tech Stack
- **Frontend:** Next.js, React, Tailwind, Shadcn UI
- **Backend:** Next.js API routes/server actions, Supabase
- **AI/ML:** OpenAI, Gemini, or best-available LLM; OpenAI Whisper or AssemblyAI for transcription
- **Audio Processing:** ffmpeg (self-hosted) or 3rd-party API
- **Integrations:** ListenNotes API, Notion API
- **Auth & Storage:** Supabase Auth, Supabase Storage
- **Deployment:** Vercel or similar 