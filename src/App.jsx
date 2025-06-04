
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';



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
    ],
  },
])

function App() {

  return <RouterProvider router={router}> </RouterProvider>;
}

export default App
