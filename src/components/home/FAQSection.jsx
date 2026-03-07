import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/faqData.js';

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Häufig gestellte Fragen</h2>
          <p className="text-slate-600">Transparente Antworten zu Ablauf, Kosten und technischen Details Ihrer neuen Praxis-Website.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-sm bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-slate-900 pr-8">{question}</span>
        <ChevronDown
          size={20}
          className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-100">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
