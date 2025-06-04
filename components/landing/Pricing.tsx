"use client";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';

const Pricing = () => {
  const { isSignedIn } = useAuth();

  const handleCTA = () => {
    if (isSignedIn) {
      window.location.assign('/dashboard');
    } else {
      document.getElementById('clerk-landing-cta')?.click();
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your podcast consumption needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <Card className=" bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Monthly Plan</CardTitle>
              <div className="text-4xl font-bold text-indigo-600 mt-4">£5.99</div>
              <p className="text-gray-600">per month</p>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div className="text-center mb-6">
                <Badge className="bg-indigo-100 text-indigo-700 px-3 py-1">
                  Perfect for regular listeners
                </Badge>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  10 AI-generated episode summaries a month
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Voice-preserved audio clips
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Written summaries with key topics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  RSS feed integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Notion export capability
                </li>
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-6" onClick={handleCTA}>
                Start Monthly Plan
              </Button>
            </CardContent>
          </Card>

          {/* One-time Payment */}
          <Card className="bg-white border-2 border-indigo-300 hover:border-indigo-400 transition-all duration-300 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-indigo-600 text-white px-4 py-1">
                Best Value
              </Badge>
            </div>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">One-time Purchase</CardTitle>
              <div className="text-4xl font-bold text-indigo-600 mt-4">£29.99</div>
              <p className="text-gray-600">one-time payment</p>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div className="text-center mb-6">
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  Includes transcripts
                </Badge>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  25 AI-generated episode summaries a month
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Voice-preserved audio clips
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Written summaries with key topics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <strong>Full transcripts included</strong>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  RSS feed integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Notion export capability
                </li>
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-6" onClick={handleCTA}>
                Get One-time Access
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>Summary Length:</strong> 5-10 minutes
              </div>
              <div>
                <strong>Maximum Length:</strong> 40 minutes
              </div>
              <div>
                <strong>Minimum Length:</strong> 20 minutes
              </div>
              <div>
                <strong>Integration:</strong> RSS feeds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 