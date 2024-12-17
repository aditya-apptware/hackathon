import { useState } from "react";

const faq = [
  {
    question: "Is this online or inhouse event?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod",
    showAnswer: true,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod",
    showAnswer: false,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod",
    showAnswer: false,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod",
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
    <div className="text-[#abd40f] font-robotoMono py-[105px] px-[279px]">
      <div className="text-[128px] font-medium mb-10">{"{/faq/]"}</div>
      <div className="w-[739px] mx-auto flex flex-col gap-8">
        {faqs.map((each, eachIndex) => {
          let borderClasses = "border-t border-[#abd40f]";
          if (eachIndex === 0) borderClasses = "";
          return (
            <>
              <div
                key={eachIndex}
                onClick={() => toggleAnswer(eachIndex)}
                className={`text-[#abd40f] text-6 leading-8 flex w-full h-8 justify-between ${borderClasses} hover:cursor-pointer`}
              >
                <div className="flex gap-8 justify-between w-full">
                  <div>/{eachIndex + 1}</div>
                  <div className="flex-1">{each.question}</div>
                </div>
                <div className="w-3 h-3 flex items-normal justify-center">
                  {each.showAnswer ? "-" : "+"}
                </div>
              </div>
              {each.showAnswer && (
                <div
                  key={`answer-${eachIndex}`}
                  className="text-[#abd40f] text-6 leading-8 mt-2"
                >
                  {each.answer}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
