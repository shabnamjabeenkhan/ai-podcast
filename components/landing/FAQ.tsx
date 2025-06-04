import * as Accordion from '@radix-ui/react-accordion';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: 'How does Podclip summarize podcasts?',
    answer:
      'Podclip uses advanced AI models to analyze podcast audio, extract key points, and generate concise summaries. It preserves speaker voices for audio snippets and provides written summaries with key topics.'
  },
  {
    question: 'Will the summaries sound like the original speakers?',
    answer:
      'Yes. Podclip uses voice cloning to ensure audio snippets retain the original speakers\' voices, making summaries more engaging and authentic.'
  },
  {
    question: "What's included in a summary?",
    answer:
      'Each summary includes a 5-10 minute audio snippet, a written summary, and a list of key topics. The one-time plan also includes full transcripts.'
  },
  {
    question: 'Can I use Podclip with any podcast?',
    answer:
      'You can summarize any publicly available podcast episode by providing a link or RSS feed. Private or paywalled podcasts are not supported.'
  },
  {
    question: 'How do I access my summaries?',
    answer:
      'All summaries are available in your dashboard. You can also export written summaries to Notion or subscribe to your personal RSS feed.'
  },
  {
    question: 'What happens if I run out of summaries?',
    answer:
      'You can upgrade your plan, purchase a one-time pack, or wait for your monthly quota to renew.'
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about Podclip's features, pricing, and usage
        </p>
      </div>
      <Accordion.Root type="multiple" className="space-y-4">
        {faqs.map((faq, i) => (
          <Accordion.Item key={i} value={`faq-${i}`} className="focus:outline-none">
            <Card className="bg-white border-2 border-gray-100 hover:border-cyan-200 transition-all duration-300">
              <Accordion.Header asChild>
                <Accordion.Trigger className="w-full text-left px-6 py-4 text-lg font-medium text-gray-900 flex justify-between items-center cursor-pointer group">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-cyan-600 group-data-[state=open]:rotate-180 transition-transform duration-200">
                    ▼
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content asChild>
                <CardContent className="px-6 pb-6 pt-0 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </CardContent>
              </Accordion.Content>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  </section>
);

export default FAQ; 