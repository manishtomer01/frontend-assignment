"use client";
import Image from "next/image";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is SaaS?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit esse?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus error sit?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FAQ = () => {
  // Set the default open index (e.g., 0 for the first FAQ item)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-200 py-10">
      <div className="flex justify-center mb-6">
        <Image
          height={50}
          width={50}
          src={"./images/question-mark.svg"}
          alt=""
        />
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center w-full text-left"
              >
                {/* Icon Column */}
                <div className="flex items-center justify-center w-8 h-8 text-2xl text-gray-600">
                  {activeIndex === index ? "-" : "+"}
                </div>

                {/* Text Column */}
                <div className="ml-4 flex-grow font-medium text-lg">
                  {faq.question}
                </div>
              </button>
              {activeIndex === index && (
                <div className="mt-2 pl-12 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
