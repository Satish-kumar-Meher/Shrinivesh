
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AllCalculators from './pages/AllCalculators';
import Goals from './pages/Goals';
import More from './pages/More';
import MutualFundsFAQ from './components/more/MutualFundsFAQ';



const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/calculators",
        element: <AllCalculators/>,
      },
      {
        path: "/goals",
        element: <Goals/>,
      },
      {
        path: "/more",
        element: <More/>,
            
      },
      {
       path: "/mf_faqs",
       element: <MutualFundsFAQ/>,
            },
      
    ],
  },
])

function App() {

  return <RouterProvider router={router}> </RouterProvider>;
}

export default App
