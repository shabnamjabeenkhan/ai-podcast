
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Podclip preserve the original speaker's voice?",
      answer: "Our advanced AI technology maintains the natural tone, inflection, and characteristics of the original speaker while creating condensed summaries. This ensures you get the authentic listening experience in a fraction of the time."
    },
    {
      question: "What types of podcasts work best with Podclip?",
      answer: "Podclip works excellently with educational podcasts, interviews, business content, and narrative shows. It's particularly effective for book reviews, historical content, tech discussions, and professional development podcasts."
    },
    {
      question: "Can I use Podclip with any podcast?",
      answer: "Yes! Podclip integrates with RSS feeds, so you can process any publicly available podcast. Simply add the RSS feed URL or upload episodes directly to get started."
    },
    {
      question: "How accurate are the AI-generated summaries?",
      answer: "Our AI system is highly accurate at identifying key topics and main points. The summaries capture the essential insights while maintaining context and nuance from the original content."
    },
    {
      question: "Can I export my summaries to other tools?",
      answer: "Absolutely! Podclip includes Notion export functionality, allowing you to seamlessly integrate summaries into your existing knowledge management workflow."
    },
    {
      question: "What's the difference between the monthly and one-time plans?",
      answer: "The monthly plan (£5.99) includes 10 summaries per month, while the one-time purchase (£39.99) gives you 25 summaries plus full transcripts. The one-time plan offers better value for occasional users."
    },
    {
      question: "Is there a limit to podcast length?",
      answer: "Podclip works best with podcasts between 20-40 minutes for optimal summary quality. Longer podcasts can be processed but may require multiple summary segments."
    },
    {
      question: "Can I share my summaries with others?",
      answer: "Podclip summaries are designed for personal use only. This ensures we maintain proper licensing and respect content creators' rights."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Podclip
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-indigo-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
