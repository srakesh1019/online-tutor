const SearchTutor = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            <div className="text-center">
              <h1 className="text-3xl text-black font-bold sm:text-5xl lg:text-6xl lg:leading-tight ">
                Search Online Tutors
              </h1>
            </div>
            <form>
              <div className="mx-auto max-w-7xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100   ">
               
              <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                  <label
                    htmlFor="hs-hero-name-1"
                    className="block text-sm font-medium dark:text-white"
                  >
                    <span className="sr-only">Skills</span>
                  </label>
                  <input
                    type="text"
                    id="hs-hero-name-1"
                    className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4  dark:border-transparent dark:text-gray-400"
                    placeholder="Skills"
                  />
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] ">
                  <label
                    htmlFor="hs-hero-email-1"
                    className="block text-sm font-medium dark:text-white"
                  >
                    <span className="sr-only">Experience</span>
                  </label>
                  <input
                    type="text"
                    id="hs-hero-email-1"
                    className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4  dark:border-transparent dark:text-gray-400"
                    placeholder="Experience"
                  />
                </div>
                
                <div className="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
                  <a
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-4 dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    Search
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTutor;
