// Pages
import Home from "./pages/Home"
import Course from "pages/Course"

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Context
import { DataContextProvider } from "context/DataContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course/:slug",
    element: <Course />,
  },
])
//test
function App() {
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  )
}

export default App
