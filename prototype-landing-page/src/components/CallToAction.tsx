
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Podcast Experience?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who save time while staying informed. 
          Start your AI-powered podcast journey today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Get Started - £5.99/month
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-slate-500 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold"
          >
            One-time Purchase - £39.99
          </Button>
        </div>

        <p className="text-slate-400 text-sm mt-6">
          No commitments • Cancel anytime • Personal use only
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
