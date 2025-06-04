# Podclip MVP – UI/UX Design (Dashboard)

## Main UI Components
- **Sidebar/Topbar:** Navigation (Dashboard, Summarize, Account, Contact)
- **Summarize Panel:**
  - Upload audio or paste RSS link
  - Progress indicator (processing/transcribing)
- **Summary List:**
  - List of past summaries (audio + written)
  - Export to Notion button
  - Usage counter (remaining summaries)
- **Payment/Upgrade Modal:**
  - Plan selection (subscription/one-time)
  - Stripe Checkout integration
- **Contact Form:**
  - For podcaster/business inquiries

## User Interactions
- Drag & drop or select audio file
- Paste RSS link (auto-parse episodes)
- Click to play audio summary
- Click to export written summary to Notion
- Upgrade flow triggered when limit reached
- Responsive feedback (loading, errors, success)

## Accessibility
- All actions keyboard-accessible
- Sufficient color contrast (WCAG AA)
- Alt text for icons/images
- Focus indicators for interactive elements
- ARIA labels for custom components

## Responsive Design
- Mobile-first layout (flex/column stacking)
- Collapsible sidebar/topbar on small screens
- Touch-friendly buttons and inputs
- Audio player adapts to screen size

---

**Diagram (Textual):**

[Sidebar/Topbar]
  ├── [Summarize Panel]
  ├── [Summary List]
  │     └── [Export to Notion]
  ├── [Payment/Upgrade Modal]
  └── [Contact Form]

Focus: Fast, distraction-free summarization and export. No social/sharing, no analytics in MVP. 