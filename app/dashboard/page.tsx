import { redirect } from "next/navigation"
// TODO: Implement this import based on your project structure
import { getUserSubscriptionStatus } from "@/lib/supabase"
import PaywalledDashboardClient from "./PaywalledDashboardClient"

export default async function DashboardPage() {
  const { isPaid } = await getUserSubscriptionStatus()
  if (isPaid) {
    redirect("/dashboard/paidDashboard")
  }
  return <PaywalledDashboardClient />
}