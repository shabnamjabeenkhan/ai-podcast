# Podclip MVP – System Architecture (Mermaid.js)

```mermaid
graph TD
  A[User Browser]
  B[Next.js App (Vercel)]
  C[Supabase DB]
  D[Supabase Storage]
  E[OpenAI/Anthropic API]
  F[ElevenLabs API]
  G[Clerk Auth]
  H[Stripe Payments]
  I[Notion API]

  A -- UI/API Calls --> B
  B -- Auth --> G
  B -- DB Ops --> C
  B -- File Upload --> D
  B -- Summarize/Transcribe --> E
  B -- Voice Cloning --> F
  B -- Payments --> H
  B -- Notion Export --> I
  C -- Stores Metadata --> B
  D -- Stores Audio Files --> B
  H -- Webhooks --> B

  subgraph Infra
    B
    C
    D
  end
```

**Legend:**
- User interacts with Next.js app (hosted on Vercel)
- Auth via Clerk
- Data stored in Supabase (DB + Storage)
- AI APIs for summarization (OpenAI/Anthropic) and voice (ElevenLabs)
- Payments via Stripe
- Notion API for export 