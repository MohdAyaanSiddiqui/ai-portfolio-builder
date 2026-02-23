import React from 'react'

const Testimonial = () => {
  return (
      <div className="bg-black flex flex-col items-center justify-center py-16 px-4">
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
        People love us
      </h1>
      <p className="text-sm text-slate-200 max-w-md mx-auto">
        Real stories from designers, developers, and product teams using
        PrebuiltUI to ship faster and with confidence.
      </p>
    </div>
    <div className="relative w-full max-w-6xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden"
        id="columns-container"
      ></div>
    </div>
  </div>
  )
}

export default Testimonial
