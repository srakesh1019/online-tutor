import { Link } from "react-router-dom";
const HeroOne = () => {
  return (
    <div className="relative mx-auto  max-w-7xl bg-white">
      <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Unlock Your Learning Potential With Online 1:1 Tutors
          </h1>
          <p className="mt-4 text-2xl text-gray-700">
            Join our community of learners today and embark on an educational
            journey that empowers you to succeed!
          </p>

          <div className="mt-10 flex  gap-x-2">
            <Link to="/tutors">
              <button
                type="button"
                className="rounded-md bg-black px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Find Your Online Tutor
              </button>
            </Link>
            <Link to="/book-demo">
              <button
                type="button"
                className="rounded-md border border-black px-8 py-3 text-md font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book Demo
              </button>
            </Link>
            <br />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            There&apos;s a <strong>FREE TRIAL SESSION</strong> that you can use
            to find your perfect match.
          </p>
          <div className="isolate -space-x-2 mt-3">
            <img
              className="relative z-30 inline-block h-10 w-10 rounded-full ring-4 ring-white"
              src="https://assets.website-files.com/5fe47ec3e084a85e759e361f/642ff614fb3008502934499a_image%252Fmentor-profile%252FSHRIYA1.jpeg"
              alt="Dan_Abromov"
            />
            <img
              className="relative z-20 inline-block h-10 w-10 rounded-full ring-4 ring-white"
              src="https://assets.website-files.com/5fe47ec3e084a85e759e361f/642ff676a286710010db1513_image%252Fmentor-profile%252Fakash%2520verma0.jpeg"
              alt="Guillermo_Rauch"
            />
            <img
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-4 ring-white"
              src="https://assets.website-files.com/5fe47ec3e084a85e759e361f/643aed3d74421bb5711a5e41_image%252Fmentor-profile%252FArtika%2520Agrawal0.jpeg"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-4 ring-white"
              src="https://assets.website-files.com/5fe47ec3e084a85e759e361f/642ff68845c5c982a6ae2f46_image%252Fmentor-profile%252FShubham%2520Sharma0.jpeg"
              alt="Delba"
            />
            <img
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-4 ring-white"
              src="https://assets.website-files.com/5fe47ec3e084a85e759e361f/642ff66ceb2d327765272e4d_image%252Fmentor-profile%252FGarvit%2520rajput0.jpeg"
              alt="Delba"
            />
          </div>
        </div>
        <div className="relative mt-10 lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://images.unsplash.com/photo-1568658176307-bfbd2873abda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
