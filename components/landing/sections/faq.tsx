import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is MyFinance secure?",
    answer: "Yes, MyFinance uses state-of-the-art encryption to ensure your data remains private and secure.",
    value: "item-1",
  },
  {
    question: "Can I track multiple accounts?",
    answer:
      "Absolutely! MyFinance allows you to monitor all your accounts in one place, providing a comprehensive view of your finances.",
    value: "item-2",
  },
  {
    question: "How do I set financial goals?",
    answer:
      "Setting financial goals is easy with MyFinance. Simply navigate to the goals section, input your target, and track your progress.",
    value: "item-3",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, MyFinance is mobile-friendly and accessible from any device.",
    value: "item-4",
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, MyFinance allows you to export your data for easy sharing and analysis.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
