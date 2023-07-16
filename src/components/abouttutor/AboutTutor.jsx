import { ArrowUpRight } from "lucide-react";
const AboutTutor = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-3 mb-3">
      <div className="flex max-w-6xl flex-col items-center rounded-md border md:flex-row">
        <div className="h-1/2 w-1/2 ">
          <img
            src="https://userphotos2.teacheron.com/1812149-84809.jpg"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              Seena Christin <ArrowUpRight className="ml-2 h-4 w-4" />
            </h1>
            <br />
            <h1 className="text-gray-400 inline-flex items-center text-sm">
              Software Engineer
            </h1>
            <br />
            <div className="mt-1">
              <p className="mt-3 text-sm text-gray-600">
                I am a UI developer with more than 2 years of experience
                building rich, responsive and intuitive UIs. My tenure at
                Accenture, India gave me a wide exposure to Web 2.0 techniques
                and the latest industry trends. After Motherhood I took a break
                from corporate job and decided to share my industrial knowledge
                to freshers and other job aspirants...
              </p>
              <hr className="mt-1 mb-1" />
              <h1 className="text-black inline-flex items-center text-sm">
                Skills & Expertise:
              </h1>
              <div className="mt-1">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  JavaScript and Typescript
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  HTML CSS and JavaScript
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  HTML
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  CSS
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  JavaScript
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTutor;
