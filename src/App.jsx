
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
import MonthlySIPCalculator from './components/AllCalculators/SIPCalculator';
import EMICalculator from './components/AllCalculators/EMICalculator';
import PPFCalculator from './components/AllCalculators/PPFCalculator';
import StepUpSIPCalculator from './components/AllCalculators/StepUpSIPCalculator';
import SIPGoalCalculator from './components/AllCalculators/SIPGoalCalculator';
import CompoundInterestCalculator from './components/AllCalculators/CompoundingCalculator';
import EPFCalculator from './components/AllCalculators/EPFCalculator';
import BecomeCrorepatiCalculator from './components/AllCalculators/CrorePatiCalculator';
import RetirementCalculator from './components/AllCalculators/RetirementPlanningCalculator';
import AssetAllocationCalculator from './components/AllCalculators/AssetAllocation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DisclaimerAndDisclosures from './pages/DisclaimerAndDisclosures';
import UsefulLinks from './pages/UsefulLinks';
import SIPToolsCards from './components/more/SIPToolsCards';
import SipTopUpTable from './components/more/SIPTopUpReadyReckoner';
import SIPTopUpReadyReckoner from './components/more/SIPTopUpReadyReckoner';
import SIPReadyReckoner from './components/more/SIPReadyReckoner';
import UnderstandingMarkets from './components/more/UnderstandingMarkets';
// import { HelmetProvider } from 'react-helmet-async';

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
      { path: "/privacy_policy", element: <PrivacyPolicy/> },
      { path: "/terms_and_conditions", element: <TermsAndConditions/> },
      { path: "/disclaimer", element: <DisclaimerAndDisclosures/> },
      { path: "/useful_links", element: <UsefulLinks/> },


      { path: "/calculators", element: <AllCalculators /> },
      { path: "/calculators/sip_calculator", element: <MonthlySIPCalculator /> },
      { path: "/calculators/emi_calculator", element: <EMICalculator /> },
      { path: "/calculators/ppf_calculator", element: <PPFCalculator /> },
      { path: "/calculators/sip_stepup_calculator", element: <StepUpSIPCalculator /> },
      { path: "/calculators/sip_goal_calculator", element: <SIPGoalCalculator /> },
      { path: "/calculators/compounding_calculator", element: <CompoundInterestCalculator /> },
      { path: "/calculators/epf_calculator", element: <EPFCalculator/> },
      { path: "/calculators/become_crorepati_calculator", element: <BecomeCrorepatiCalculator/> },
      { path: "/calculators/retirement_planning_calculator", element: <RetirementCalculator/> },
      { path: "/calculators/asset_allocation_calculator", element: <AssetAllocationCalculator/> },




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
          { path: "sip-tools", element: <SIPToolsCards /> },
          { path: "sip-tools/sip_topup_ready_reckoner", element: <SIPTopUpReadyReckoner/> },
          { path: "sip-tools/sip_ready_reckoner", element: <SIPReadyReckoner/> },
          { path: "sip-tools/understanding_markets", element: <UnderstandingMarkets/> },
        ],
      },
    ],
  },
]);

function App() {
  return(

    <>
    {/* <HelmetProvider> */}
    <RouterProvider router={router} />
    {/* </HelmetProvider> */}
    </>
  )
  
}

export default App;
