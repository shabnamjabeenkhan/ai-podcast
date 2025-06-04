
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Connect Your Podcasts",
      description: "Search for your favorite podcasts by name or browse our extensive library to find content",
      icon: "📱"
    },
    {
      step: 2,
      title: "AI Processing",
      description: "Our advanced AI analyzes the content and identifies key topics and insights",
      icon: "⚡"
    },
    {
      step: 3,
      title: "Get Your Summary",
      description: "Receive 5-10 minute audio summaries with written transcripts and key points",
      icon: "✨"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Podcasts in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes it easy to get the most out of your favorite podcasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white border-2 border-gray-100 hover:border-indigo-200 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-6">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-indigo-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-indigo-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call-to-Value (CTV) */}
        <div className="text-center mt-16">
          <div className="bg-indigo-600 text-white py-4 px-8 rounded-lg inline-block">
            <p className="text-lg font-semibold">Save 90% of your listening time while capturing 100% of the value</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
