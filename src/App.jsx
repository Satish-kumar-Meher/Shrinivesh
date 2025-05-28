
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';


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
    ],
  },
])

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App
