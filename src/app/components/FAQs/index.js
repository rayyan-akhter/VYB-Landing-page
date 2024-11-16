"use client";

import React, { useState } from "react";
import { Section } from "../common/Section";

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost to set up a store?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What kind of digital products can I sell?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Do I need technical skills to use the platform?",
      answer:
        "No, not at all! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Is there a limit to the number of products I can list?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How do I receive payments for my sales?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Can I sell internationally on this marketplace?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What support and resources are available for sellers?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Is there a review process for uploaded products?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Section className="flex pb-992 gap-8   lg:flex-row flex-col items-center">
      <div className="flex flex-col gap-4 justify-center">
        <p className="text-primary text-web-h2 font-bold">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="text-web-cta text-white font-bold">
          {`"Quick answers to questions you may have. Can’t find what you're looking for?"`}
          <br />
          Check out our full documentation
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white  w-[619px] rounded-[16px] overflow-hidden shadow-md transition-all duration-300"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center h-[48px] px-6 cursor-pointer"
            >
              <p className="text-web-body2 font-bold">{faq.question}</p>
              <span
                className={`transform transition-transform duration-300 text-web-h4`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`px-6 text-gray-700 transition-all duration-300 ${
                openIndex === index ? "max-h-screen py-4" : "max-h-0"
              }`}
              style={{
                overflow: "hidden",
              }}
            >
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
