import React from "react"

export const Banner = ({ title, text, imageSrc }) => {
  return (
    <section className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              id="comfort-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-xl text-white">{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
