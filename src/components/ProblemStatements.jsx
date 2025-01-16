import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { EachProblemStatement } from "./EachProblemStatement";

const statements = [
  {
    statement:
      "Virtual Interviewer - Conversational AI",
    abbr: "PS1",
    title: "Problem Statement 1",
    rotate: 0,
    top: 0,
    description:"Develop a virtual interviewer powered by Conversational AI. This AI agent will interact with candidates in real-time, analyzing their CVs and generating personalized interview questions. The system should assess candidate responses, providing insightful analytics at the end of the session. Participants will focus on creating an engaging, intelligent, and responsive AI interviewer that mimics a real interview experience.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      "Interview Activity Tracker - Real-Time Monitoring Application",
    abbr: "PS2",
    title: "Problem Statement 2",
    rotate: 0,
    top: 0,
    description:"Develop a real-time monitoring application to assist in interviews by tracking user activity during the session. This application should capture and analyze various user behaviors, such as attention levels, engagement, and interaction patterns. The goal is to provide valuable insights into candidate behavior, enhancing the interview process for both interviewers and candidates.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      " Safety Tracking for Specially Abled(deaf and mute) Employees",
    abbr: "PS3",
    title: "Problem Statement 3",
    rotate: 0,
    top: 0,
    description:"Design an application to enhance the safety of specially abled(deaf and mute) employees within the organization for those who have access to a smart phone. The application will provide managers with an overview of employee locations and enable communication through messages and notifications. Employees will have the ability to send emergency alerts to their team and managers. The system will ensure precise location tracking within company premises or while using company transportation, automatically ceasing tracking once the employee reaches home.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      "Customizable Algorithmic Trading Platform with Back-Testing",
    abbr: "PS4",
    title: "Problem Statement 4",
    rotate: 0,
    top: 0,
    description:"Develop an algorithmic trading platform that allows users to create, customize, and execute their own trading algorithms. The platform should include a robust back-testing feature, enabling users to test their strategies on historical data to optimize performance before deploying them in real-time markets.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      " AI-Powered Automatic Website Builder.",
    abbr: "PS5",
    title: "Problem Statement 5",
    rotate: 0,
    top: 0,
    description:"Create an AI-powered automatic website builder that generates personalized websites based on user instructions. The AI will select themes, images, fonts, and other design elements tailored to user preferences. Users can either provide their own content or allow the AI to generate it automatically. The platform should also offer flexibility for users to modify AI-generated components to meet their specific needs and preferences.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      "AI-Driven Crop Disease Prediction and Management System.",
    abbr: "PS6",
    title: "Problem Statement 6",
    rotate: 0,
    top: 0,
    description:"Develop an AI-driven system that analyzes crop images and environmental data to predict potential disease outbreaks. This system will empower farmers by providing actionable insights and treatment recommendations, helping to mitigate risks and prevent significant yield losses. The solution should be accessible via both mobile and web-based applications, utilizing machine learning algorithms for accurate disease identification and management.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      "Multi-OS User Activity Tracker with Real-Time Dashboard",
    abbr: "PS7",
    title: "Problem Statement 7",
    rotate: 0,
    top: 0,
    description:"Develop a multi-operating system (OS) daemon that tracks user activities every 15 seconds. This daemon should run seamlessly across various platforms (Windows, macOS, Linux) and collect data on user interactions. A centralized dashboard will display real-time analytics, offering insights into user behavior and system usage.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      " Real Estate Co-Ownership Platform with Minimum Investment",
    abbr: "PS8",
    title: "Problem Statement 8",
    rotate: 0,
    top: 0,
    description:"Develop a platform that enables users to co-own real estate properties by making minimum investments. This platform will democratize real estate ownership, allowing users to pool resources and invest in properties they couldn't afford individually. The platform will provide features for property listing, investment tracking, and returns management, fostering transparency and ease of access to the real estate market.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      "Self Time Tracking System with Chrome Extension",
    abbr: "PS9",
    title: "Problem Statement 9",
    rotate: 0,
    top: 0,
    description:"Develop a self time tracking system that allows users to track their daily tasks and productivity. The system should offer daily, monthly, and yearly summaries of tasks completed. A Chrome extension will be integrated to enable users to easily add tasks and mark them as complete directly from their browser, without needing to log into the web application. This system will help users monitor their time management, improve productivity, and generate reports for self-reflection. Additionally, the platform will allow users to share their tasks with others on a view-only basis, providing insight into what colleagues or friends are working on, but only if they are connected or granted access by the user.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
  {
    statement:
      "Collaborative Investment and Loan Distribution Platform",
    abbr: "PS10",
    title: "Problem Statement 10",
    rotate: 0,
    top: 0,
    description:"Create a web and mobile application that allows users to make small collaborative investments. The funds collected from these investments will be pooled together and given as loans to individuals or businesses in need. The interest generated from the loans will be distributed among the investors/contributors based on their share in the pool, while the app or a loan collection agent will retain a small share for managing the process.",
    challenges:[
      "Accurate CV parsing and information extraction.",
      "Developing a conversational AI that can adapt dynamically to different candidates.",
      "Ensuring the AI can provide meaningful and actionable feedback."
    ]
  },
];

export const ProblemStatements = () => {
  const { problemStatementsRef } = useAppContext();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedStatement, setSelectedStatement] = useState(null);

  const handlePopup = (statement) => {
    setSelectedStatement(statement);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedStatement(null);
  };

  return (
    <>
      <div
        className="relative flex flex-col gap-5 w-full bg-white font-robotoMono pt-10 md:py-16 px-4 md:px-20 md:text-left text-center"
        ref={problemStatementsRef}
      >
        <div className="font-karmatic text-[38px] md:text-4xl leading-tight md:leading-[77px] text-[#abd40f] mt-8">
          Problem Statements
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 self-center md:self-start items-start">
          {statements.map((item, itemIndex) => {
            const bgColor = itemIndex % 2 === 0 ? "bg-black" : "bg-white";
            const textColor = itemIndex % 2 === 0 ? "text-white" : "text-black";
            const { rotate: rotateValue, top } = item;
            return (
              <div
                key={itemIndex}
                className={`${bgColor} ${textColor} min-w-[233px] md:max-w-[328px] max-h-[192px] cursor-pointer border border-black p-4 md:p-6 flex flex-col justify-between w-full md:w-[calc(50%-24px)]`}
                style={{
                  transform: `rotate(${
                    window.innerWidth >= 768 ? rotateValue : 0
                  }deg)`,
                  marginTop: `${window.innerWidth >= 768 ? top : 0}px`,
                }}
                onClick={() => handlePopup(item)}
              >
                <div className="text-sm md:text-lg font-medium leading-6">
                  {item.statement}
                </div>
                <div className="flex gap-3 mt-2 items-center">
                  <div className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center bg-[#abd40f] text-black text-xs md:text-sm font-bold">
                    {item.abbr}
                  </div>
                  <div className="text-xs md:text-sm uppercase font-bold">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isPopupVisible && selectedStatement && (
        <div className="fixed inset-0 top-10 bg-transparent backdrop-blur-sm flex justify-center items-center z-50 bg-black">
          <div className="rounded shadow-lg relative bg-white p-6 h-[90%] md:h-auto overflow-scroll">
            <button
              className="absolute size-10 top-4 right-2 text-black"
              onClick={closePopup}
            >
              ×
            </button>
            <EachProblemStatement statement={selectedStatement} />
          </div>
        </div>
      )}
    </>
  );
};
