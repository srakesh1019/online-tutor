
const ShowNumbers = () => {
  return (
    <section className="mx-auto mt-10 bg-white-300 max-w-6xl px-4 border rounded-lg shadow-lg border-50 ">
      <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
          <h5 className="text-3xl font-bold text-black">
            <span className="inline text-black">1300</span>
            <span className="text-black-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-black-100 uppercase">
           Students Enrolled
          </p>
        </div>
        <div>
          <h5 className="text-3xl font-bold text-black">
            <span className="inline text-black">27</span>
            <span className="text-black-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-black-100 uppercase">
           Countries Covered
          </p>
        </div>
        <div>
          <h5 className="text-3xl font-bold text-black">
            <span className="inline text-black">4.7</span>
            <span className="text-black-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-black-100 uppercase">
           Rated Online
          </p>
        </div>
        <div>
          <h5 className="text-3xl font-bold text-black">
            <span className="inline text-black">200</span>
            <span className="text-black-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-black-100 uppercase">
           Quality Tutors
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowNumbers;
