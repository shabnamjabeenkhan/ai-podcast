# User Flows: AI Podcast Summarizer MVP

---

## 1. Sign Up / Login
- User visits the app
- Clicks "Sign Up" or "Login"
- Enters email/password (or uses social login)
- Verifies email (if required)
- Gains access to dashboard

---

## 2. Podcast Search & Selection
- User enters a search term in the podcast search bar
- App queries ListenNotes API and displays results
- User browses and selects a podcast
- App displays list of episodes for the selected podcast
- User selects an episode to view details

---

## 3. Generate & Download Audio Clip (User-Selected)
- On episode detail page, user sees audio player and waveform/timeline
- User selects a 30-second segment (start/end) using a range picker
- Clicks "Generate Clip"
- Backend processes and creates the audio snippet
- User is notified when the clip is ready
- User can play and download the 30s audio clip

---

## 4. Generate & Download Audio Clip (AI-Suggested)
- On episode detail page, user clicks "AI Suggest Clip"
- App analyzes transcript and suggests a highlight segment
- User reviews the suggested 30s clip
- User can play and download the AI-suggested audio clip

---

## 5. Generate & Export Text Summary (Full Episode)
- On episode detail page, user clicks "Summarize Episode"
- Backend transcribes audio (if needed) and generates a paragraph summary
- User views the summary
- User can export the summary to Notion

---

## 6. Generate & Export Key Takeaways (Bullet Points)
- On episode detail page, user clicks "Key Takeaways"
- Backend generates 5 bullet-point key takeaways
- User views the takeaways
- User can export them to Notion

---

## 7. Generate & Export Segment-Based Summary
- User selects a segment of the episode (start/end)
- Clicks "Summarize Segment"
- Backend transcribes and summarizes the selected segment
- User views the segment summary (with timestamps)
- User can export the segment summary to Notion

---

## 8. Payment (Subscription or One-Time)
- User navigates to "Upgrade" or "Pricing"
- Chooses between £5.99/month subscription or £29.99 one-time payment
- App redirects to Stripe Checkout
- User completes payment
- App updates user's access level

---

## 9. Notion Export
- User clicks "Export to Notion" on any summary or takeaways
- If not connected, user is prompted to connect Notion account (OAuth)
- App exports the content to user's Notion workspace
- User receives confirmation of successful export

---

No sharing, analytics, or podcaster dashboard flows in MVP. 