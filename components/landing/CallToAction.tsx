"use client";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';

const CallToAction = () => {
  const { isSignedIn } = useAuth();

  const handleCTA = () => {
    if (isSignedIn) {
      window.location.assign('/dashboard');
    } else {
      document.getElementById('clerk-landing-cta')?.click();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-slate-100">
      <div className="max-w-3xl mx-auto px-4">
        <Card className="shadow-xl border-2 border-cyan-200 bg-white/90">
          <CardContent className="p-10 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to transform your podcast experience?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
              Get instant, AI-powered summaries and audio snippets for your favorite podcasts. Save time, boost retention, and never miss a key insight again.
            </p>
            <Button
              className="text-lg px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-md transition-all duration-200"
              size="lg"
              onClick={handleCTA}
            >
              Get Started Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction; 