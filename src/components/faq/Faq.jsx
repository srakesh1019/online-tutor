import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
const Faq = () => {
  let [index, setIndex] = useState(-1);
  let [faqs] = useState([
    {
      id: 1,
      question: "How does online tutoring work?",
      answer:
        "Online tutoring is conducted through a virtual learning platform. Students and tutors interact in real-time using video conferencing, chat tools, and shared whiteboards. It provides the flexibility to learn from anywhere with an internet connection.",
    },
    {
      id: 2,
      question: "What Categories do you offer tutoring in?",
      answer:
        "We offer tutoring in a wide range of Categories, including Software Development, Desiging, Academics, Professional Training, Competitive Exam, Language and more. Our tutors are experienced in their respective fields and can assist learners at different experience levels.",
    },
    {
      id: 3,
      question: "How do I schedule a tutoring session?",
      answer:
        "To schedule a tutoring session, you can create an account on our website and log in. Then, browse our available tutors and their schedules. Choose a tutor and a time slot that works for you, and book the session accordingly.",
    },
    {
      id: 4,
      question: "Are the tutors qualified and experienced?",
      answer:
        "Yes, all our tutors are highly qualified and experienced in their respective subjects. They go through a rigorous selection process and are selected based on their expertise, teaching skills and ability to effectively communicate with learners.",
    },
    {
      id: 5,
      question:
        "What happens if I need to cancel or reschedule a tutoring session?",
      answer:
        "If you need to cancel or reschedule a tutoring session, please notify your tutor as soon as possible. They will work with you to find an alternative time that suits both of you. However, please note that our cancellation and rescheduling policies may apply.",
    },
  ]);
  const faqHandler = (idx)=>{
      ( index ===idx )? setIndex(-1): setIndex(idx);
  }
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            {""}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqs.map((faq, i) => (
            <div
              onClick={()=>{faqHandler(i)}}
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 shadow-lg  transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  {faq.question}
                </span>
                {index == i ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                {index == i ? (
                  <p className="text-gray-500">{faq.answer}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="#"
            title=""
            className="font-semibold text-black hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};
export default Faq;
