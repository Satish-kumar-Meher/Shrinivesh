
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactPage from './pages/Contact';
import Contact from './pages/Contact';
import AllCalculators from './pages/AllCalculators';



const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    errorElement: <ErrorPage />,
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
    ],
  },
])

function App() {

  return <RouterProvider router={router}> </RouterProvider>;
}

export default App
