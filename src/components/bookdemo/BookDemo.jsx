import BookDemoForm from "./BookDemoForm"

const BookDemo = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
    <div className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
      <img
          alt="Contact us"
          className="hidden max-h-full w-full rounded-lg object-cover lg:block"
          src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
        />
        <div className="flex items-center justify-center">
          <div className="px-2 md:px-12">
            <p className="text-2xl font-bold text-gray-900 md:text-4xl">Book Demo</p>
            <p className="mt-4 text-lg text-gray-600">
             We will assist in finding a right tutor who meets your specific requirements.
            </p>
            <BookDemoForm/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BookDemo
