import { useRef, useState } from "react";
import SingleQuestion from "./singleQuestion";

const questions = [
  {
    question: "How many participants can join a ClearLink video conference?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "Can I use ClearLink on multiple devices?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question:
      "Is ClearLink compatible with other video conferencing platforms?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "How does ClearLink ensure the security of my video conferences?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "Do I need to download any software to use ClearLink?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "What kind of customer support does ClearLink provide?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
];

const Faq = () => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const ref = useRef(null);

  return (
    <section className="px-20 py-14  flex gap-x-11 items-start justify-between">
      <div>
        <h6 className="font-semibold text-[#175CD3] text-[1.125rem]">
          Support
        </h6>
        <h1 className="font-semibold text-[3rem] text-[#1D2939] tracking-[-0.08rem] leading-[4.5rem]">
          FAQs
        </h1>
        <p className="font-[1.5rem]   w-[25rem]  leading-[2rem] text-[#667085]">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span className="underline">chat to our friendly team.</span>
        </p>
      </div>

      <div className="w-[48rem]">
        {questions.map((data, i) => {
          return (
            <SingleQuestion
              itemRef={ref}
              key={i}
              index={i}
              onclick={() => togglePanel(i)}
              data={data}
              activePanel={activePanel}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Faq;
