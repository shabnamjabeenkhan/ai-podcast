'use client';
import { AppSidebar } from 'main-ui/components/app-sidebar';
import { SidebarProvider } from 'main-ui/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from 'main-ui/components/ui/progress';
import { CreditCard, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BillingPage() {
  // Mock data for now
  const used = 0;
  const total = 0;
  const hasMonthlyPlan = false; // set to true to show cancel button
  const paymentHistory = [];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-800 overflow-hidden">
        {/* Sidebar (md+) */}
        <div className="hidden md:block">
          <AppSidebar hasAccess={true} />
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-start h-screen w-full pt-16 px-4 pb-16 overflow-y-auto">
          <div className="w-full max-w-2xl flex flex-col gap-8">
            {/* Current Plan Card */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Billing</h1>
              <p className="text-slate-400 mb-8">Manage your subscription and usage</p>
              <Card className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-white">Current Plan</span>
                    <span className="ml-2 h-2 w-8 rounded bg-cyan-900" />
                  </div>
                  <div className="text-slate-400 mb-6">{hasMonthlyPlan ? 'Monthly Subscription (Active)' : 'No active subscription'}</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 font-medium">Total usage</span>
                    <span className="text-white font-bold">{used}/{total} summaries</span>
                  </div>
                  <Progress value={total === 0 ? 0 : (used / total) * 100} className="h-3 bg-slate-800" />
                  <div className="text-slate-500 text-sm mt-2">{used} summaries remaining</div>
                  {hasMonthlyPlan && (
                    <div className="flex justify-end mt-6">
                      <Button variant="destructive" className="flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        Cancel Plan
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            {/* Payment History Card */}
            <Card className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[220px]">
                <div className="flex items-center gap-2 mb-6 w-full">
                  <CreditCard className="h-6 w-6 text-white" />
                  <span className="text-2xl font-bold text-white">Payment History</span>
                </div>
                {paymentHistory.length === 0 ? (
                  <div className="flex flex-col items-center justify-center w-full">
                    <CreditCard className="h-16 w-16 text-slate-500 mb-4" />
                    <div className="text-slate-400 text-lg font-medium mb-1">No payment history available</div>
                    <div className="text-slate-500 text-sm">Payment history will appear here after your first purchase</div>
                  </div>
                ) : (
                  <div> {/* Render payment history table here in the future */} </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
} 