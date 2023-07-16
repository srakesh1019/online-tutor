import { Copy, ArrowRight } from "lucide-react";
import { useState } from "react";

function Features() {
  let [features] = useState([
    {
      id: 1,
      catagory: "Software Development",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      description:
        "Unlock your coding potential and excel in the world of software development.",
    },
    {
      id: 2,
      catagory: "Desiging",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frame"><line x1="22" x2="2" y1="6" y2="6"/><line x1="22" x2="2" y1="18" y2="18"/><line x1="6" x2="6" y1="2" y2="22"/><line x1="18" x2="18" y1="2" y2="22"/></svg>,
      description:
        "Unleash your creativity and become a design virtuoso in the digital realm.",
    },
    {
      id: 3,
      catagory: "Academics",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>,
      description:
        "Academic excellence made accessible, empowering students to reach their full potential.",
    },
    {
      id: 4,
      catagory: "Professional Training",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
      description:
        "Unlock your professional potential and advance your career with expert guidance.",
    },
    {
      id: 5,
      catagory: "Competitive Exam",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
      description:
        "Conquer competitive exams with confidence and achieve your goals.",
    },
    {
      id: 6,
      catagory: "Language",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>,
      description:
        "Learn languages effortlessly, expand your horizons and connect with the world.",
    },
  ]);
  return (
    <div className="px-2 py-2 mx-auto max-w-7xl md:px-6 md:py-10">
      <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
        Categories
      </h1>
      <p className="my-2 text-gray-600">
      Your gateway to a world of knowledge! We are proud to offer a diverse range of categories designed 
      to empower individuals and expand their intellectual horizons. 
      Whether you're a student seeking academic assistance, a professional looking for 
      training to enhance your skills or someone eager to acquire essential technology 
      expertise, we have you covered.
      </p>
      <hr />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        {features.map((feature, i) => (
          <div key={i} className="space-y-3">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              {/* <Copy size={20} /> */}
              {feature.icon}
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              {feature.catagory}
            </h1>
            <p className="text-sm text-gray-500">{feature.description}</p>
            <a
              href="#"
              className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
            >
              <span className="mx-1">read more</span>
              <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Features;
