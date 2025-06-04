# Podclip MVP – Product Requirements Document (PRD)

## Introduction
Podclip solves the problem of information overload in podcasts by providing concise, AI-generated summaries. The vision is to help users quickly extract value from long-form audio content without losing the essence or speaker identity.

## Objectives & Goals
- Enable users to consume podcast content efficiently
- Deliver high-quality, speaker-preserving audio summaries
- Provide actionable written summaries with key topics
- Seamless Notion export for personal knowledge management

## Target Users & Roles
- **Primary Users:**
  - Casual podcast listeners
  - Knowledge workers, students, researchers
  - Content creators, professionals (journalists, analysts)
- **Roles:**
  - End User: Upload/link podcast, receive summaries
  - Podcaster: Contact form only (no dashboard in MVP)

## Core Features for MVP
1. **Podcast Summarization:**
   - Upload or link (RSS) a podcast episode
   - Generate a 5-10 min audio summary in original voices
2. **Written Summary & Notion Export:**
   - AI-generated written summary with key topics
   - Export written summary to Notion

## Future Scope
- Social sharing of summaries
- Podcaster dashboard & analytics
- More export formats (PDF, email)
- Advanced search & categorization
- Multi-language support

## User Journey
1. User signs up/logs in
2. Uploads or links a podcast episode
3. Receives audio + written summary
4. Exports written summary to Notion
5. (Optional) Contacts Podclip for podcaster services

## Tech Stack
- **Frontend:** Next.js (App Router), Tailwind, Shadcn UI
- **Backend:** Node.js, Supabase (DB & storage)
- **AI:** OpenAI/Anthropic for summarization, ElevenLabs for voice cloning
- **Auth:** Clerk
- **Payments:** Stripe
- **Integrations:** Notion API (for export)
- **Infra:** Vercel (hosting), Bun (package manager) 