import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      title: 'AI Voice Preservation',
      description: "Maintain the original speaker's voice and tone in your summarized audio clips",
      icon: '🎤',
    },
    {
      title: 'Smart Topic Extraction',
      description: 'AI identifies and highlights the most important topics and key points automatically',
      icon: '🧠',
    },
    {
      title: 'RSS Integration',
      description: 'Seamlessly connect with your favorite podcast feeds for automatic processing',
      icon: '📡',
    },
    {
      title: 'Notion Export',
      description: 'Export written summaries directly to your Notion workspace for easy organization',
      icon: '📝',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful AI technology designed to transform your podcast listening experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-indigo-200 transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 