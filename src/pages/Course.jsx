import React, { useContext, useState, useEffect } from "react"

// Components
import { Footer, Banner, Nav, LinkFeed } from "components"

// Router
import { useParams } from "react-router-dom"

// Context
import { DataContext } from "context/DataContext"

const Course = () => {
  const [data, setData] = useState({})
  const params = useParams()
  const { collections } = useContext(DataContext)

  useEffect(() => {
    if (params?.slug) {
      if (collections?.length > 0) {
        let filtered = collections?.filter(
          (item) => item?.slug?.current === params?.slug
        )
        if (filtered?.length > 0) {
          setData(filtered[0])
        } else {
          window.location.replace("/")
        }
      }
    }
  }, [params, collections])

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

          <div className="relative mx-auto flex max-w-3xl flex-col items-center py-20 px-6 text-center sm:py-30 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              {data?.name}
            </h1>
            <p className="mt-4 text-xl text-white">{data?.description}</p>
            <a
              href="#learn"
              className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Start Watching
            </a>
          </div>
        </div>

        <main>
          {/* Collection section */}
          <section
            aria-labelledby="collection-heading"
            id="learn"
            className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
          >
            <h2
              id="collection-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Learn by doing
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Watch each video in the series and practice alongside to get the
              most out of it.
            </p>
            <div className="overflow-hidden bg-white shadow sm:rounded-md mt-8">
              <ul className="divide-y divide-gray-200">
                {data?.videos?.map((video) => (
                  <LinkFeed
                    key={video?._id}
                    number={video?.number}
                    href={video?.url}
                    skills={video?.skills}
                    name={video?.name}
                    languages={video?.languages}
                    imageUrl={video?.channel?.image?.asset?.url}
                    channel={video?.channel?.name}
                  />
                ))}
              </ul>
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

export default Course
