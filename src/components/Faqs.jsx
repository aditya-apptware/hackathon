import { useState } from "react";

const faq = [
  {
    question: "Is this online or inhouse event?",
    answer:
      "Lorem ipsum dolor sit amet consectetur  adipiscing elit, sed do eiusmod",
    showAnswer: true,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur  adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur  adipiscing elit, sed do eiusmod",
    showAnswer: false,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur  adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur  adipiscing elit, sed do eiusmod",
    showAnswer: false,
  },
];

export const Faqs = () => {
  const [faqs, setFaqs] = useState(faq);

  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, showAnswer: !faq.showAnswer } : faq
      )
    );
  };

  return (
    <div className="flex flex-col gap-5 w-[1120px] mx-auto">
      <div className="font-extrabold text-[70px] leading-[68px]">
        LOREM
        <br />
        FAQ'S
      </div>
      <div className="font-normal text-[28px] leading-[42px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, <br />
        sed do eiusmod
      </div>
      <div className="w-[1120px] mx-auto">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`py-4 ${
              index < faqs.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <span className="font-normal text-textDark text-[28px] leading-[51px]">
                {item.question}
              </span>
              <span className="text-textDark font-bold w-[28.5px] h-full text-[28.5px] opacity-[50%]">
                {item.showAnswer ? "-" : "+"}
              </span>
            </div>
            {item.showAnswer && (
              <p className="mt-2 text-normal text-faqAnswerText text-[24px] leading-[51px]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
