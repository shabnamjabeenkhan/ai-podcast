"use client";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SignInButton, useAuth } from '@clerk/nextjs';

const Hero = () => {
  const { isSignedIn } = useAuth();

  const handleCTA = () => {
    if (isSignedIn) {
      window.location.assign('/dashboard');
    } else {
      document.getElementById('clerk-landing-cta')?.click();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Social Proof Badge */}
          <Badge variant="secondary" className="mb-6 bg-slate-700 text-slate-200 px-4 py-2 border border-slate-600">
            🎧 Transform Your Podcast Experience
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Hours of Podcasts into
            <span className="text-cyan-400 block">5-Minute AI Summaries</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered podcast summarization that preserves original voices while extracting key insights. 
            Perfect for busy professionals, students, and podcast enthusiasts.
          </p>

          {/* Feature List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-slate-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              Preserves Original Voices
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              RSS Feed Integration
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              Notion Export
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              AI Key Topics
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold" onClick={handleCTA}>
              Get Started - £5.99/month
            </Button>
            <Button size="lg" variant="outline" className="bg-white border-slate-500 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold" onClick={handleCTA}>
              One-time Purchase - £29.99
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 