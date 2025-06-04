# Podclip MVP – Common User Flows

## 1. User Registration & Authentication
1. User visits Podclip landing page
2. Clicks "Get Started"
3. Signs up with email/social login via Clerk
4. Lands on dashboard

## 2. Podcast Summarization (Upload or RSS)
1. User clicks "Summarize Podcast"
2. Uploads audio file or pastes RSS episode link
3. System processes audio (transcription, summarization, voice cloning)
4. User receives:
   - 5-10 min audio summary (original voices)
   - Written summary (key topics)

## 3. Export Written Summary to Notion
1. User clicks "Export to Notion"
2. Connects Notion account (OAuth)
3. Written summary is sent to user's Notion workspace

## 4. Payment Flow
1. User hits summary limit or chooses to upgrade
2. Selects plan (subscription or one-time)
3. Completes payment via Stripe Checkout
4. Access is updated (more summaries unlocked)

## 5. Podcaster Contact
1. Podcaster visits landing page
2. Clicks "Contact"
3. Fills out contact form
4. Team receives inquiry (email or dashboard)

---

No sharing, analytics, or podcaster dashboard flows in MVP. 