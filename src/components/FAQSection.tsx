import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does PrayerLock know my prayer times?",
    a: "PrayerLock uses your location to calculate accurate prayer times based on established Islamic calculation methods. It supports all major calculation methods worldwide.",
  },
  {
    q: "Can I still receive emergency calls while locked?",
    a: "Yes! PrayerLock is designed to keep you safe. Emergency calls and critical notifications will always come through, even during lock sessions.",
  },
  
  {
    q: "Does the app work offline?",
    a: "Yes — once your prayer times are calculated, PrayerLock works completely offline. Your Quran reading is also available without internet.",
  },
  {
    q: "Is it free?",
    a: "PrayerLock offers a free tier with essential features. Premium features to further enhance your experience may be available in the future, with a portion of proceeds going to charity.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card px-6 border border-border/50 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
