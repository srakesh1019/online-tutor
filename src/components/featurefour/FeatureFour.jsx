import { PhoneCall , CalendarCheck , CreditCard } from 'lucide-react'

 function FeatureFour() {
  return (
    <section>
      <div className="mx-auto mt-28 mb-10 max-w-6xl px-2 lg:px-8">
        <div className="mb-4 max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-black">
          Start 1:1 Learning today
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
            Getting started is easy!
          </h2>
        </div>
        <hr />
        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start">
            <PhoneCall  className="h-9 w-9 text-gray-700" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Step 1:  Understanding Your Requirement
</h3>
              <p className="mt-3 text-base text-gray-600">
              Shortlist a tutor for your according to your preferences

              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CalendarCheck  className="h-12 w-12 text-gray-700" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Step 2: Finding The Tutor And Scheduling Demo Class</h3>
              <p className="mt-3 text-base text-gray-600">
              Book a free trial session to see how the tutor can help you
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <CreditCard className="h-12 w-12 text-gray-700" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Step 3: Finalizing The Schedule & Complete Payment</h3>
              <p className="mt-3 text-base text-gray-600">
              Schedule the sessions and start learning 1:1 with your tutor 
              <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FeatureFour;