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
    <div className="flex flex-col gap-8 w-full px-4 md:px-0 md:w-[1120px] mx-auto">
      <img src="./assets/labels/faqs.svg" alt="FAQS Title SVG" width="241.93px" height="127.03px" />
      <div className="hidden md:block font-normal text-[18px] md:text-[28px] leading-[30px] md:leading-[42px] text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, <br />
        sed do eiusmod
      </div>
      <div className="md:hidden font-normal text-[18px] md:text-[28px] leading-[30px] md:leading-[42px] text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
      </div>
      <div className="w-full mt-8">
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
              <span className="font-normal text-textDark text-[20px] md:text-[28px] leading-[30px] md:leading-[51px]">
                {item.question}
              </span>
              <span className="text-textDark font-bold w-[28.5px] h-full text-[28.5px] opacity-[50%]">
                {item.showAnswer ? "-" : "+"}
              </span>
            </div>
            {item.showAnswer && (
              <p className="mt-2 text-normal text-faqAnswerText text-[20px] md:text-[24px] leading-[30px] md:leading-[51px]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
