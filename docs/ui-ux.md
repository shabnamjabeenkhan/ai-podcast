# UI/UX Design: AI Podcast Summarizer MVP

---

## 1. Main App Structure
- **Header:**
  - Logo, navigation (Dashboard, Pricing, Account)
  - Login/Logout button
- **Main Content:**
  - Podcast search bar
  - Podcast/episode list
  - Episode detail view (audio, summaries, actions)
- **Footer:**
  - Minimal, with links to privacy, terms, support

---

## 2. Key UI Components
- **Podcast Search Bar:**
  - Prominent at top of dashboard
  - Autocomplete/search suggestions
- **Podcast/Episode List:**
  - Card/list view with podcast artwork, title, and episode count
  - Click podcast to view episodes
  - Click episode to view details
- **Episode Detail View:**
  - Audio player (with waveform/timeline)
  - Range picker for selecting 30s segment
  - "Generate Clip" and "AI Suggest Clip" buttons
  - Summary display (paragraph, bullet points, segment summary)
  - Export to Notion and Download buttons
- **Payment Modal/Page:**
  - Simple pricing options (subscription, one-time)
  - Stripe Checkout integration
- **Notifications:**
  - Toasts for success/error (clip ready, export complete, etc.)

---

## 3. Main User Interactions & Flows
- Search for podcasts/episodes
- Select episode to view details
- Play episode audio
- Select or accept suggested segment for 30s clip
- Generate/download audio clip
- Generate/view text summary and key takeaways
- Export summaries to Notion
- Upgrade via payment modal

---

## 4. Accessibility Considerations
- Semantic HTML for all interactive elements
- Keyboard navigation for all controls (search, player, range picker, buttons)
- Sufficient color contrast for text/buttons
- ARIA labels for custom components (audio player, range picker)
- Focus indicators for all actionable elements
- Test with screen readers

---

## 5. Responsive Design Approach
- Mobile-first layout using Tailwind CSS
- Collapsible navigation on mobile
- Stacked layout for lists and detail views on small screens
- Audio player and controls adapt to screen size
- Touch-friendly controls for range picker and buttons

---

## 6. Visual Style
- Clean, minimal, and modern (inspired by productivity tools)
- Consistent use of primary/secondary colors and accent
- Clear, readable typography
- Subtle hover/focus effects for interactivity 