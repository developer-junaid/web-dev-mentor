// Pages
import FrontEnd from "pages/Frontend"
import Fullstack from "pages/Fullstack"
import Home from "./pages/Home"

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course/frontend",
    element: <FrontEnd />,
  },
  {
    path: "/course/fullstack",
    element: <Fullstack />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
