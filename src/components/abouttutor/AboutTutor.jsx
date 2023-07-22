import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const AboutTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchTutors = () => {
    let url = "https://64b4a60f0efb99d8626920cd.mockapi.io/tutors";
    setIsLoading(true)
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setIsLoading(false)
      });
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 mt-3 mb-3">
      
    { isLoading ?
      [0,1,2,3,5].map((idx)=>(
        <div key={idx} role="status" className="mt-2 space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 ">
            <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[800px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
      ))
      :null
    }

      {tutors.map((tutor) => (
        <div
          key={tutor.id}
          className="flex mt-2 max-w-6xl flex-col md:flex-row rounded-md border"
        >
          <div className="w-60  h-56 ">
            <img
              src={tutor.image}
              alt="Laptop"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {tutor?.name} <ArrowUpRight className="ml-2 h-4 w-4" />
              </h1>
              <br />
              <h1 className="text-gray-400 inline-flex items-center text-sm">
                {tutor?.currentCompany?.designation}
              </h1>
              <br />
              <div className="mt-1">
                <p className="mt-3 text-sm text-gray-600">
                  {tutor?.description}
                </p>
                <hr className="mt-1 mb-1" />
                <h1 className="text-black inline-flex items-center text-sm">
                  Skills & Expertise:
                </h1>
                <div className="mt-1">
                  {tutor?.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutTutor;
