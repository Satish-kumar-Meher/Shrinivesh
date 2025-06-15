
// import './App.css'
// import { createBrowserRouter, RouterProvider } from 'react-router';
// import ErrorPage from './pages/ErrorPage';
// import AppLayout from './components/AppLayout';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import AllCalculators from './pages/AllCalculators';
// import Goals from './pages/Goals';
// import More from './pages/More';
// import MutualFundsFAQ from './components/more/MutualFundsFAQ';
// import NriFaqs from './components/more/NRIFaqs';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<AppLayout />,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>,
//       },
//       {
//         path: "/about",
//         element: <AboutUs/>,
//       },
//       {
//         path: "/services",
//         element: <Services/>,
//       },
//       {
//         path: "/contact",
//         element: <Contact/>,
//       },
//       {
//         path: "/calculators",
//         element: <AllCalculators/>,
//       },
//       {
//         path: "/goals",
//         element: <Goals/>,
//       },
//       {
//         path: "/more",
//         element: <More/>,
            
//       },
//       {
//        path: "/mf_faqs",
//        element: <MutualFundsFAQ/>,
//             },
//             {
//        path: "/nri_faqs",
//        element: <NriFaqs/>,
//             },
      
//     ],
//   },
// ])

// function App() {

//   return <RouterProvider router={router}> </RouterProvider>;
// }

// export default App




// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ErrorPage from './pages/ErrorPage';
// import AppLayout from './components/AppLayout';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import AllCalculators from './pages/AllCalculators';
// import Goals from './pages/Goals';
// import More from './pages/More';
// import MutualFundsFAQ from './components/more/MutualFundsFAQ';
// import NriFaqs from './components/more/NRIFaqs';
// import ChildWeddingForm from './components/Goals/ChildWedding';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <AboutUs /> },
//       { path: "/services", element: <Services /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/calculators", element: <AllCalculators /> },
//       { path: "/goals", element: <Goals />,
//          children: [
//           { path: "child_wedding", element: <ChildWeddingForm/> },
//         ] 
//        },
//       { 
//         path: "/more", 
//         element: <More />, 
//         children: [
//           { path: "mf_faqs", element: <MutualFundsFAQ /> },
//           { path: "nri_faqs", element: <NriFaqs /> },
//         ] 
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;



import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import NriFaqs from './components/more/NRIFaqs';
import ChildWeddingForm from './components/Goals/ChildWedding';
import RetirementForm from './components/Goals/RetirementForm';
import ChildEducationForm from './components/Goals/ChildEducation';
import WealthCreationForm from './components/Goals/WealthCreation';
import EmergencyGoalForm from './components/Goals/EmergencyForm';
import DreamHomeForm from './components/Goals/DreamHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/calculators", element: <AllCalculators /> },

      {
        path: "/goals",
        element: <Goals />,
      },
      { path: "/goals/child_wedding",
         element: <ChildWeddingForm /> 
        },
      { path: "/goals/retirement",
         element: <RetirementForm /> 
        },
       { path: "/goals/child_education",
         element: <ChildEducationForm /> 
        },
      { path: "/goals/wealth_creation",
         element: <WealthCreationForm /> 
        },
      { path: "/goals/emergency",
         element: <EmergencyGoalForm/> 
        },
        { path: "/goals/dream_home",
         element: <DreamHomeForm/> 
        },
      {
        path: "/more",
        element: <More />,
        children: [
          { path: "mf_faqs", element: <MutualFundsFAQ /> },
          { path: "nri_faqs", element: <NriFaqs /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
