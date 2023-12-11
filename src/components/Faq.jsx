import React from "react";
import { useState } from "react";

import { BsPlus, BsDash } from "react-icons/bs";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the purpose of the ETHETF token?",
      answer:
        "The Ethereum ETF Token (ETHETF) is an ERC-20 token. You can stake it in our verified smart contract to earn passive rewards, and it is launched to celebrate the expected approval of Ethereum ETFs in the U.S. financial markets.",
    },
    {
      question: "Where is the value in staking?",
      answer:
        "Staking is an automated and decentralized method where you lock up tokens for a certain time period in order to reward more reward in those tokens at a specific rate. For ETHETF, how many tokens you stake and the total staked by the community determines the rate of rewards.",
    },
    {
      question: "What are the tokenomics for ETHETF?",
      answer: "dsfsdfsfsdf",
    },
    {
      question: "Is ETHETF an Ethereum ETF?",
      answer:
        "No, Ethereum ETF Token is not directly linked to any Ethereum ETF products that might come into the market. However, the roadmap aligns with real events that are expected to happen in the crypto markets.",
    },
    {
      question: "How can I get in touch with the team?",
      answer:
        "Stay updated with the latest news and updates about Ethereum ETF Token by following our official channels. If you have questions or marketing inquiries, do not hesitate to contact a moderator in our Telegram channel. (Link in Bio)",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section
        id="faqs"
        aria-labelledby="faqs-title"
        class="border-t border-gray-200 py-20 sm:py-32"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto  lg:mx-0 mb-6  sm:mb-10">
            <h2
              id="faqs-title"
              class="text-3xl text-center font-medium tracking-tight text-gray-900"
            >
              Frequently asked questions
            </h2>
            <div className="bg-[#5e17eb] h-1 w-[85px] sm:w-[150px] mt-4 mx-auto"></div>
          </div>
          <div>
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-[#f5f5f7] rounded-2xl p-8 pl-[60px] mb-2"
              >
                <button
                  className="cursor-pointer relative text-left"
                  onClick={() => handleToggle(index)}
                >
                  <span className="absolute top-0.5 right-[calc(100%+.8rem)] w-6 h-6 rounded-full border-2 border-black/40 text-black/60 text-xl flex items-center justify-center">
                    {openIndex === index ? <BsDash /> : <BsPlus />}
                  </span>
                  <span className="text-lg font-medium py-2">
                    {item.question}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="bg-[#f5f5f7] mt-2">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
