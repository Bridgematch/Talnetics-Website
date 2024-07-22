'use client'

import React, {useState} from 'react'

import styles from './faq.module.css'

const FAQ = () => {


    const [showAll, setShowAll] = useState(false);

  const questions = [
    { question: "What is BridgeMatch?", answer: "BridgeMatch is a platform that connects talented individuals with opportunities." },
    { question: "How can I join BridgeMatch?", answer: "You can join BridgeMatch by signing up on our website." },
    { question: "What are the benefits of joining BridgeMatch?", answer: "Members of BridgeMatch get access to exclusive opportunities, networking events, and more." },
    { question: "Is BridgeMatch free?", answer: "BridgeMatch offers both free and premium membership options." },
    { question: "How do I upgrade my membership?", answer: "You can upgrade your membership from your account settings." },
    { question: "What types of opportunities does BridgeMatch offer?", answer: "BridgeMatch offers job opportunities, project collaborations, and sponsorships." },
    { question: "Can I cancel my membership?", answer: "Yes, you can cancel your membership at any time from your account settings." },
    { question: "How do I contact support?", answer: "You can contact support through the help section on our website." },
    { question: "Can I share my profile on social media?", answer: "Yes, you can share your BridgeMatch profile on social media." },
    { question: "How do I update my profile information?", answer: "You can update your profile information from your account settings." },
    { question: "Are there networking events on BridgeMatch?", answer: "Yes, BridgeMatch regularly hosts networking events for members." },
    { question: "How do I find job opportunities on BridgeMatch?", answer: "You can find job opportunities by browsing the opportunities section on our website." },
  ];

  const renderQuestions = () => {
    return (showAll ? questions : questions.slice(0, 6)).map((item, index) => (
      <div key={index} className="collapse collapse-plus bg-base-200 mb-3 mt-3">
        <input type="radio" name="my-accordion-3" id={`faq-${index}`} />
        <div className="collapse-title text-xl font-medium">
          {item.question}
        </div>
        <div className="collapse-content">
          <p>{item.answer}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className=" mx-auto flex justify-center items-center p-8 w-[85%] md:w-[60%]">

   
    <div className="container mx-auto  ">
    {renderQuestions()}
    {!showAll && (
        <div className="w-full  flex justify-center">
      <button 
        onClick={() => setShowAll(true)} 
        className="btn bg-orange-600 w-[180px]  border-none text-white hover:text-black mt-4 mx-auto "
      >
        Load More
      </button> 
      </div>
    )}
  </div> 
  </section>
  )
}

export default FAQ