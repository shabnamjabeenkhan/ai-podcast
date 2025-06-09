'use client';
import { AppSidebar } from 'main-ui/components/app-sidebar';
import { SidebarProvider } from 'main-ui/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'main-ui/components/ui/select';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'billing', label: 'Billing' },
  { value: 'technical', label: 'Technical Issue' },
  { value: 'feedback', label: 'Feedback' },
];

export default function SupportPage() {
  const [category, setCategory] = useState('');

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-800 overflow-hidden">
        {/* Sidebar (md+) */}
        <div className="hidden md:block">
          <AppSidebar hasAccess={true} />
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-start h-screen w-full pt-16 px-4 pb-16 overflow-y-auto">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold text-white mb-1">Support</h1>
            <p className="text-slate-400 mb-8">Get help when you need it</p>
            <Card className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="text-cyan-400 h-5 w-5" />
                  <span className="text-xl font-semibold text-cyan-400">Contact Support</span>
                </div>
                <p className="text-slate-400 mb-6">Need help? Send us an email and we'll get back to you within 24 hours.</p>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-slate-300 mb-1">Name</label>
                      <Input placeholder="" className="bg-slate-800 border-slate-700 text-white" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-slate-300 mb-1">Email</label>
                      <Input type="email" placeholder="" className="bg-slate-800 border-slate-700 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Category</label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 text-white">
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Subject</label>
                    <Input placeholder="" className="bg-slate-800 border-slate-700 text-white" />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Message</label>
                    <Textarea rows={5} className="bg-slate-800 border-slate-700 text-white" />
                  </div>
                  <div className="pt-2">
                    <Button type="submit" className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold w-full flex items-center gap-2 justify-center text-base">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
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