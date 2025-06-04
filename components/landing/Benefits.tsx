import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      title: 'Time Efficiency',
      description: 'Turn 2-hour podcasts into 5-minute summaries while retaining all key insights',
      icon: '⏰',
      highlight: 'Save 90% of listening time',
    },
    {
      title: 'Better Retention',
      description: 'AI-identified key points and written summaries help you remember important concepts',
      icon: '🧠',
      highlight: 'Improve information retention',
    },
    {
      title: 'Seamless Integration',
      description: 'Export to Notion, connect RSS feeds, and fit into your existing workflow',
      icon: '🔗',
      highlight: 'Works with your tools',
    },
    {
      title: 'Professional Quality',
      description: 'Perfect for researchers, journalists, students, and knowledge workers',
      icon: '💼',
      highlight: 'Enterprise-grade AI',
    },
  ];

  const useCases = [
    {
      title: 'Academia & Research',
      description: 'Extract key findings from research podcasts, academic interviews, and educational content. Perfect for literature reviews and staying current with your field.',
      icon: '🎓',
      examples: ['Research findings', 'Expert interviews', 'Academic discussions', 'Educational content'],
    },
    {
      title: 'Mental Health & Wellness',
      description: 'Quickly access therapeutic insights, mindfulness techniques, and expert advice from mental health professionals and wellness podcasts.',
      icon: '🧘',
      examples: ['Therapeutic techniques', 'Wellness strategies', 'Expert advice', 'Self-care tips'],
    },
    {
      title: 'Technology & Innovation',
      description: 'Stay updated with the latest tech trends, startup insights, and industry developments without spending hours listening to full episodes.',
      icon: '💻',
      examples: ['Tech trends', 'Startup insights', 'Industry news', 'Innovation stories'],
    },
    {
      title: 'True Crime Analysis',
      description: 'Follow complex cases and investigations with clear summaries that highlight key evidence, timelines, and investigative insights.',
      icon: '🔍',
      examples: ['Case timelines', 'Key evidence', 'Investigation updates', 'Expert analysis'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Podclip?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform how you consume podcast content with AI-powered efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                      {benefit.highlight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialized Use Cases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Perfect for Every Podcast Genre
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Podclip excels across diverse podcast categories, delivering tailored value for your specific interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border-2 border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-3xl">{useCase.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Clear Benefit Section */}
        <div className="bg-gradient-to-r from-cyan-50 to-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Perfect for Busy Professionals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-gray-700">
            <div className="text-center">
              <div className="text-2xl mb-2">📚</div>
              <p>Students</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💼</div>
              <p>Professionals</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📰</div>
              <p>Journalists</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔬</div>
              <p>Researchers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <p>Analysts</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✨</div>
              <p>Creators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 