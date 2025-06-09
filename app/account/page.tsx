'use client';
import { AppSidebar } from 'main-ui/components/app-sidebar';
import { SidebarProvider } from 'main-ui/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { User } from 'lucide-react';

export default function AccountPage() {
  // Mock user data
  const user = {
    name: 'Jane Doe',
    email: 'jane@example.com',
  };
  const [form, setForm] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ current: '', new: '', confirm: '' });
      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  }

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
            {/* Profile Card */}
            <Card className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg">
              <CardContent className="p-8 flex items-center gap-6">
                <User className="h-12 w-12 text-cyan-400" />
                <div>
                  <div className="text-xl font-bold text-white mb-1">{user.name}</div>
                  <div className="text-slate-400">{user.email}</div>
                </div>
              </CardContent>
            </Card>
            {/* Change Password Card */}
            <Card className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="text-xl font-bold text-white mb-6">Change Password</div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-slate-300 mb-1">Current Password</label>
                    <Input
                      type="password"
                      name="current"
                      value={form.current}
                      onChange={handleChange}
                      className="bg-slate-800 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">New Password</label>
                    <Input
                      type="password"
                      name="new"
                      value={form.new}
                      onChange={handleChange}
                      className="bg-slate-800 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Confirm New Password</label>
                    <Input
                      type="password"
                      name="confirm"
                      value={form.confirm}
                      onChange={handleChange}
                      className="bg-slate-800 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold w-full text-base"
                      disabled={loading}
                    >
                      {loading ? 'Saving...' : 'Change Password'}
                    </Button>
                    {success && (
                      <div className="text-green-400 text-sm mt-2 text-center">Password changed!</div>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
} 