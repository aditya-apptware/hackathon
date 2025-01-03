import { useState } from "react";

const faq = [
  {
    question: "Is this an online or in-house event?",
    answer: "This will be an in-house event held at Apptware HQ.",
    showAnswer: true,
  },
  {
    question: "Who can participate?",
    answer: "Freshers graduating in 2023, 2024, or 2025.",
    showAnswer: false,
  },
  {
    question: "What is the theme of the hackathon?",
    answer: "Build a full-fledged app with end-to-end delivery.",
    showAnswer: false,
  },
];

export const Questions = () => {
  const [faqs, setFaqs] = useState(faq);

  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, showAnswer: !faq.showAnswer } : faq
      )
    );
  };

  return (
    <div className="text-[#abd40f] font-robotoMono py-[80px] px-[32px] md:px-[100px] bg-black max-w-[1200px] mx-auto">
      <div className="text-[48px] md:text-[128px] font-medium mb-10 text-center md:text-left">
        {"{/faq/]"}
      </div>
      <div className="max-w-[739px] mx-auto flex flex-col gap-8">
        {faqs.map((each, eachIndex) => {
          let borderClasses = "border-t border-[#292B21]";
          if (eachIndex === 0) borderClasses = "";
          return (
            <div key={eachIndex}>
              <div
                onClick={() => toggleAnswer(eachIndex)}
                className={`text-[#abd40f] text-base md:text-6 leading-6 md:leading-8 flex w-full justify-between items-center ${borderClasses} hover:cursor-pointer`}
              >
                <div className="flex gap-4 md:gap-8 justify-between w-full">
                  <div>/{(eachIndex + 1).toString().padStart(2, "0")}</div>
                  <div className="flex-1">{each.question}</div>
                </div>
                <div className="w-3 h-3 flex items-center justify-center">
                  {each.showAnswer ? "-" : "+"}
                </div>
              </div>
              {each.showAnswer && (
                <div
                  key={`answer-${eachIndex}`}
                  className="text-[#abd40f] text-base md:text-6 leading-6 md:leading-8 mt-2"
                >
                  {each.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
