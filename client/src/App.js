import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'

const App = ()=>{
  return(
    <div className="main-container">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[ 
      {path:"/",element:<Body/>},
      {path:"/about-us",element:<About/>}
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
