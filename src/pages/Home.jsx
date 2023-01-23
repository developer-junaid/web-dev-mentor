import { Nav } from "components"
import { Banner } from "components/Banner"
import { Footer } from "components/Footer"

// Data
import { collections } from "data"

import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <main className="bg-white">
        {/* Hero section */}
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-50"
          />

          {/* Navigation */}
          <Nav />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Learn web development
            </h1>
            <p className="mt-4 text-xl text-white">
              Learn from the mentors and teachers already helping millions of
              people over the internet. I've structured up the series of roadmap
              and links for you guys to learn from. As an Experienced Full-Stack
              Developer, I've learned myself using this roadmap & videos. Watch
              the YouTube videos and practice alongside.
            </p>
            <a
              href="#courses"
              className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Start Learning
            </a>
          </div>
        </div>

        <main>
          {/* Courses section */}
          <section
            id="courses"
            className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Learn by doing
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Watch each video in the series and practice alongside to get the
              most out of it.
            </p>

            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              {collections.map((collection) => (
                <Link
                  key={collection.name}
                  to={collection.href}
                  className="group block"
                >
                  <div
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <img
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {collection.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Banner section */}
          <Banner
            title="Productivity Tip"
            text="Stay Consistent. Work little everyday ( Put in about 2 hours a day )"
            imageSrc="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
          />
        </main>

        <Footer />
      </main>
    </>
  )
}
