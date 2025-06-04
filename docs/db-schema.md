# Podclip MVP – Database Schema

## 1. users
- **Fields:**
  - id (PK, serial)
  - created_time (timestamp, default now)
  - email (unique, not null)
  - first_name, last_name, gender, profile_image_url (optional)
  - user_id (unique, not null, CUID)
- **Indexes:**
  - email (unique)
  - user_id (unique)
- **RLS:**
  - Users can only access their own row
- **Notes:**
  - No direct subscription field (handled via join)

## 2. podcast_summaries
- **Fields:**
  - id (PK, serial)
  - user_id (FK → users.user_id, not null, on delete cascade)
  - original_audio_url (text, not null)
  - summary_audio_url (text, not null)
  - written_summary (text, not null)
  - notion_exported (boolean, default false)
  - created_time (timestamp, default now)
- **Indexes:**
  - user_id
  - created_time
- **RLS:**
  - Users can only access their own summaries

## 3. payments
- **Fields:**
  - id (PK, serial)
  - created_time (timestamp, default now)
  - stripe_id (not null)
  - email (not null)
  - amount (not null)
  - payment_time, payment_date (not null)
  - currency (not null)
  - user_id (FK → users.user_id, not null, on delete cascade)
  - customer_details (text)
  - payment_intent (not null)
- **Indexes:**
  - user_id
  - stripe_id
- **RLS:**
  - Users can only access their own payments

## 4. subscriptions
- **Fields:**
  - id (PK, serial)
  - created_time (timestamp, default now)
  - subscription_id (not null)
  - stripe_user_id (not null)
  - status (not null)
  - start_date (not null)
  - end_date (nullable)
  - plan_id (FK → subscription_plans.plan_id, not null)
  - default_payment_method_id (nullable)
  - email (not null)
  - user_id (FK → users.user_id, not null, on delete cascade)
- **Indexes:**
  - user_id
  - subscription_id
- **RLS:**
  - Users can only access their own subscriptions

## 5. subscription_plans
- **Fields:**
  - id (PK, serial)
  - created_time (timestamp, default now)
  - plan_id (unique, not null)
  - name (not null)
  - description (not null)
  - amount (not null)
  - currency (not null)
  - interval (not null, e.g. 'month', 'one-time')
- **Indexes:**
  - plan_id (unique)
- **RLS:**
  - Public read

## 6. invoices
- **Fields:**
  - id (PK, serial)
  - created_time (timestamp, default now)
  - invoice_id (not null)
  - subscription_id (FK → subscriptions.subscription_id, nullable for one-time)
  - amount_paid (not null)
  - amount_due (nullable)
  - currency (not null)
  - status (not null)
  - email (not null)
  - user_id (FK → users.user_id, not null, on delete cascade)
- **Indexes:**
  - user_id
  - invoice_id
- **RLS:**
  - Users can only access their own invoices

## 7. refunds
- **Fields:**
  - id (PK, serial)
  - created_time (timestamp, default now)
  - payment_id (FK → payments.id, not null, on delete cascade)
  - user_id (FK → users.user_id, not null, on delete cascade)
  - refund_id (not null)
  - amount (not null)
  - currency (not null)
  - refund_date (timestamp, not null)
  - status (not null)
  - reason (text, optional)
  - metadata (text, optional)
- **Indexes:**
  - user_id
  - refund_id
- **RLS:**
  - Users can only access their own refunds

---

**Pricing Model:**
- Both subscription and one-time payment models are supported (hybrid).
- No fields/tables for sharing, podcaster dashboards, or analytics in MVP.

**General RLS Policy:**
- All user data is row-level secured by user_id.
- Admins can access all data (future scope). 