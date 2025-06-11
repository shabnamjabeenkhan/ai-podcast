# Technical Design Doc (TDD): AI Podcast Summarizer MVP

## Overview
This document outlines the technical approach, recommended libraries, and 3rd-party providers for the MVP features.

---

## 1. Podcast Search & Selection
- **API:** ListenNotes API
  - Rationale: Best-in-class podcast search, robust metadata, easy integration, generous free tier for development.
- **Integration:** REST API via server actions (Next.js)
- **Libraries:**
  - `axios` or native `fetch` for API calls

---

## 2. Audio Clip Generation (30s Clips)
- **User-selected segment:**
  - UI: Range/time picker for user to select start/end
  - Backend: Download original audio from ListenNotes URL, extract segment
- **AI-suggested highlights:**
  - Use LLM to analyze transcript and suggest timestamps
- **Audio Processing:**
  - **Option 1:** `ffmpeg` (self-hosted, via Node.js child process)
    - Pros: Full control, no extra cost, works with most audio formats
    - Cons: Needs server resources, cold starts on serverless
  - **Option 2:** 3rd-party API (e.g., AssemblyAI, Deepgram, or custom cloud function)
    - Pros: Offloads processing, scalable
    - Cons: Extra cost, API limits
  - **Recommendation:** Start with `ffmpeg` for MVP, switch to API if scaling issues arise
- **Storage:** Supabase Storage bucket (`audioclips`)

---

## 3. Text Summarization & Key Takeaways
- **LLM Providers:**
  - **Option 1:** OpenAI GPT-4 (or GPT-3.5 for cost)
  - **Option 2:** Gemini (Google)
  - **Option 3:** Perplexity (for web context)
  - **Recommendation:** Use OpenAI for MVP (best docs, reliability, quality)
- **Integration:** Server action calls LLM API with transcript or episode description
- **Libraries:**
  - `openai` npm package or direct REST API

---

## 4. Transcript Generation
- **Providers:**
  - **Option 1:** OpenAI Whisper API
    - Pros: High accuracy, supports many languages
    - Cons: Requires audio upload, some cost
  - **Option 2:** AssemblyAI
    - Pros: Fast, robust, extra features (topic detection, etc.)
    - Cons: Slightly higher cost
  - **Recommendation:** Use OpenAI Whisper for MVP (integrates well with OpenAI stack)
- **Integration:** Upload audio segment to Whisper, receive transcript

---

## 5. Notion Export
- **API:** Notion API (official)
- **Integration:**
  - OAuth for user connection
  - Export summaries as Notion pages/blocks
- **Libraries:**
  - `@notionhq/client`

---

## 6. User Accounts & Auth
- **Provider:** Supabase Auth
  - Rationale: Seamless integration with Supabase DB/storage, supports social/email login

---

## 7. Payments
- **Provider:** Stripe
  - Dual pricing: subscription (recurring) and one-time payment
  - Use Stripe Checkout for simplicity
- **Libraries:**
  - `stripe` npm package

---

## 8. Frontend/UI
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, Shadcn UI
- **State Management:** React Query (for async data)
- **Mobile/Desktop:** Responsive design with Tailwind

---

## 9. Storage & Database
- **DB:** Supabase Postgres
- **File Storage:** Supabase Storage (audio clips)

---

## 10. Deployment
- **Platform:** Vercel (preferred for Next.js)
- **Package Manager:** Bun

---

## 11. Monitoring & Error Tracking
- **Optional:** Sentry, LogRocket, or Vercel Analytics

---

## 12. Accessibility & UX
- Use semantic HTML, keyboard navigation, and color contrast best practices
- Test with screen readers

---

## 13. Future Integrations
- Additional podcast APIs (Spotify, Apple, etc.)
- More export options (PDF, email, etc.) 