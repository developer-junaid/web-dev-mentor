import React from "react"

export const Nav = () => {
  return (
    <header className="relative z-10">
      <nav aria-label="Top">
        {/* Secondary navigation */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="flex flex-1 items-center">
                  <a href="/">
                    <span className="sr-only">Developer Junaid</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt=""
                    />
                  </a>{" "}
                  <span className="ml-4 text-white font-semibold tracking-wide text-xl">
                    Web Dev Mentor
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center ml-8">
                    <a
                      href="https://github.com/developer-junaid"
                      className=" text-sm font-medium text-white block"
                    >
                      Who Am I ?
                    </a>
                  </div>
                </div>
                {/* <div className="flex flex-1 items-center justify-end">
        <a
          href="#"
          className="text-sm font-medium text-white block"
        >
          Login
        </a>

        <div className="flex items-center ml-8">
          <a
            href="#"
            className=" text-sm font-medium text-white block"
          >
            Create Account
          </a>
        </div>
      </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
