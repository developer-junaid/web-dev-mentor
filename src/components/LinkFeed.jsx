import React from "react"

// Heroicons
import {
  CheckCircleIcon,
  ChevronRightIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid"

export const LinkFeed = ({
  number,
  href,
  imageUrl,
  name,
  channel,
  stage,
  skills,
}) => {
  return (
    <li>
      <a href={href} target="_blank" className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src={imageUrl} alt="" />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="truncate text-sm font-medium text-indigo-600">
                  {number}
                  {". "}
                  {name}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <PlayCircleIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="truncate">{channel}</span>
                </p>
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">{skills}</p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <CheckCircleIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    />
                    {stage}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </a>
    </li>
  )
}
