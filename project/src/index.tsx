import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import "./index.css"
import Jiwon from "./routes/Jiwon"
import Miso from "./routes/Miso"
import Nahyeon from "./routes/Nahyeon"
import Seunghui from "./routes/Seunghui"
import Surin from "./routes/Surin"
import Seunghyeon from "./routes/Seunghyeon"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ul>
          <li>
            <Link to={`seunghyeon`}>Seunghyeon</Link>
          </li>
          <li>
            <Link to={`jiwon`}>jiwon</Link>
          </li>
          <li>
            <Link to={`miso`}>miso</Link>
          </li>
          <li>
            <Link to={`nahyeon`}>nahyeon</Link>
          </li>
          <li>
            <Link to={`seunghui`}>seunghui</Link>
          </li>
          <li>
            <Link to={`surin`}>surin</Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    path: "/seunghyeon",
    element: <Seunghyeon></Seunghyeon>,
  },
  {
    path: "/jiwon",
    element: <Jiwon></Jiwon>,
  },
  {
    path: "/miso",
    element: <Miso></Miso>,
  },
  {
    path: "/nahyeon",
    element: <Nahyeon></Nahyeon>,
  },
  {
    path: "/seunghui",
    element: <Seunghui></Seunghui>,
  },
  {
    path: "/surin",
    element: <Surin></Surin>,
  },
])

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
