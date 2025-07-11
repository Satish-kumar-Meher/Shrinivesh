// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import AboutComp from '../components/Home/AboutComp';
// import CounterSection from '../components/Home/CounterSection';
// import SecureSection from '../components/Home/SecureSection';
// // import TopMutualFunds from '../components/Home/TopMutualFunds';
// import InvestmentReturns from '../components/Home/InvestmentCalc';
// // import TestimonialSlider from '../components/Home/Testimonials';
// // import LatestBlog from '../components/Home/BlogLatest';
// // import LatestNews from '../components/Home/LatestNews';
// import AMCMarquee from '../components/Home/AMCMarquee';
// import AssetAllocation from '../components/Home/AssetAllocation';
// import { Bubbles } from '../utils/Bubble';
// import { useNavigate } from 'react-router';
// // import SEO from '../utils/SEO';

// const slides = [
//   {
//     title: "Secure Your Future.",
//     highlight: "Live Your Dreams.",
//     description:
//       "The best time to plan your retirement was yesterday. The next best time is now.At Shri Nivesh, we help you create a custom retirement plan that ensures you don’t just retire — you retire rich, stress-free, and independent.",
//     buttonText: "Plan Retirement",
//     // image: "https://www.moneysmatter.com/images/banners/home-banner-1.png",
//     image: "/Home/1.jpg",
//      links:"/goals/retirement",
//   },
//   {
//     title: "Start early to fuel their",
//     highlight: "dreams with confidence.",
//     description:
//       "Education costs are rising fast. Smart mutual fund investments can help you build a solid education fund for your child. Start now and let compounding do the heavy lifting.",
//     buttonText: "Plan Child's Education",
//     image: "/Home/3.jpg",
//      links:"/goals/child_education",
//   },
//   {
//     title: "The most precious gift?",
//     highlight: "Their dream wedding.",
//     description:
//       "Your child’s wedding is a milestone moment. Don’t let lack of funds limit their big day. With smart financial planning, you can turn their dreams into reality.",
//     buttonText: "Plan Child's Wedding",
//     image: "/Home/6.jpg",
//      links:"/goals/child_wedding",
//   },
//   {
//     title: "Start Small. Grow Big.",
//     highlight: "Secure Your Future with SIP.",
//     description:
//       "A SIP (Systematic Investment Plan) lets you invest small amounts regularly — making wealth creation simple, steady, and stress-free.✨ Build long-term wealth✨ Easy to start, easy to manage✨ Perfect for financial freedom",
//     buttonText: "Dream Home",
//     image: "/Home/7.jpg",
//      links:"/goals/dream_home",
//   },
//   {
//     title: "Build lasting wealth through smart investing",
//     highlight: "and consistent planning.",
//     description:
//       "Wealth doesn't happen by chance—it’s built with patience, purpose, and the power of compounding. Start investing regularly in mutual funds and watch your financial goals come closer, one SIP at a time.",
//     buttonText: "Plan Wealth Creation",
//     image: "/Home/5.jpg",
//      links:"/goals/wealth_creation",
//   },
//   {
//     title: "Secure your family's future",
//     highlight: " with trusted life insurance.",
//     description:
//       "Life is unpredictable—but your family's financial future shouldn't be. A smart life insurance plan offers peace of mind, long-term stability, and protection when it matters the most. Shield your loved ones today from life’s uncertainties with future-ready coverage.",
//     buttonText: "Plan Life Insurance",
//     image: "/Home/8.jpg",
//      links:"/goals/life_insurance",
//   },
//   {
//     title: "Protect your health and savings",
//     highlight: "with a trusted health insurance plan.",
//     description:
//       "Rising medical costs shouldn’t be a burden. With the right health insurance, you get reliable coverage, cashless treatment, and peace of mind for you and your family. Stay protected against unexpected health emergencies—secure your future today.",
//       buttonText: "Plan Health Insurance",
//     image: "/Home/4.jpg",
//      links:"/goals/health_insurance",
//   },
// ];
// const textVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.6,
//       ease: 'easeOut'
//     },
//   }),
// };

// const Home = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => setCurrent((current + 1) % slides.length);
//   const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

//   const btnGradient = darkMode
//     ? "bg-gradient-to-r from-[#10e2ea] to-[#045b68] text-white"
//     : "bg-gradient-to-r from-[#0e6371] to-[#84e9f0] text-white";

//   return (
//     <>
//       <div
//         className={`relative overflow-hidden transition-all duration-500 pt-[100px] min-h-screen flex items-center justify-center flex-col ${
//           darkMode
//             ? 'bg-gradient-to-br from-[#0b0d1a] to-[#081c29]'
//             : 'bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]'
//         }`}
//       >
//         {/* <SEO tittle={"Home Page"} description={"This is the home page"} /> */}
//         <Bubbles darkMode={darkMode} />

//         <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-16 gap-10 max-w-7xl w-full z-10">
//           <motion.div
//             key={current}
//             initial="hidden"
//             animate="visible"
//             className="max-w-xl w-full"
//           >
//             <motion.h1
//               className={`text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 mt-[-35px] sm:mt-0 ${
//                 darkMode ? 'text-white' : 'text-gray-800'
//               }`}
//               variants={textVariant}
//               custom={1}
//             >
//               <span className="text-green-600">{slides[current].title} </span>
//               <motion.span
//                 className={darkMode ? 'text-[#10e2ea]' : 'text-[#0e6371]'}
//                 variants={textVariant}
//                 custom={2}
//               >
//                 {slides[current].highlight}
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
//               variants={textVariant}
//               custom={3}
//             >
//               {slides[current].description}
//             </motion.p>

//             <div className="w-full flex justify-center md:justify-start mt-4">
//               <motion.button
//                 className={`px-6 py-2 rounded-2xl shadow-md transition ${btnGradient}`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate(slides[current].links)}
//               >
//                 {slides[current].buttonText}
//               </motion.button>
//             </div>
//           </motion.div>

//           <div className="w-full lg:w-1/2 relative">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ x: 150, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -150, opacity: 0 }}
//                 transition={{ duration: 0.3,  }}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 onDragEnd={(e, { offset, velocity }) => {
//                   if (offset.x < -100 || velocity.x < -500) nextSlide();
//                   else if (offset.x > 100 || velocity.x > 500) prevSlide();
//                 }}
//                 className="rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
//               >
//                 <img
//                   src={slides[current].image}
//                   alt="slide"
//                   className="w-full object-cover h-auto"
//                 />
//               </motion.div>
//             </AnimatePresence>

//             {/* Mobile Arrows */}
//             <div className="md:hidden absolute inset-y-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
//               <button
//                 onClick={prevSlide}
//                 className="bg-white text-black p-2 rounded-full shadow-lg hover:scale-110 transition"
//               >
//                 <ChevronLeft />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="bg-white text-black p-2 rounded-full shadow-lg hover:scale-110 transition"
//               >
//                 <ChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Desktop Arrows */}
//         <button
//           onClick={prevSlide}
//           className="hidden md:block absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
//         >
//           <ChevronRight />
//         </button>

//         {/* <div className="flex justify-center mt-6 mb-6">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
//                 i === current ? 'bg-cyan-500' : 'bg-gray-400'
//               }`}
//             ></div>
//           ))}
//         </div> */}
//         <div className="flex justify-center mt-6 mb-6">
//   {slides.map((_, i) => (
//     <button
//       key={i}
//       onClick={() => setCurrent(i)}
//       className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
//         i === current ? 'bg-cyan-500 scale-125' : 'bg-gray-400'
//       }`}
//       aria-label={`Go to slide ${i + 1}`}
//     ></button>
//   ))}
// </div>

//       </div>

//       {/* Below Sections */}
//       <AboutComp />
//       <CounterSection />
//       <SecureSection />
//       {/* <TopMutualFunds /> */}
//       <InvestmentReturns />
//       <AssetAllocation />
//       {/* <TestimonialSlider /> */}
//       {/* <LatestBlog /> */}
//       {/* <LatestNews /> */}
//       <AMCMarquee />
//     </>
//   );
// };

// export default Home;










import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutComp from '../components/Home/AboutComp';
import CounterSection from '../components/Home/CounterSection';
import SecureSection from '../components/Home/SecureSection';
import InvestmentReturns from '../components/Home/InvestmentCalc';
import AMCMarquee from '../components/Home/AMCMarquee';
import AssetAllocation from '../components/Home/AssetAllocation';
import { Bubbles } from '../utils/Bubble';
import { useNavigate } from 'react-router';
import TopMutualFunds from '../components/Home/TopMutualFunds';

const slides = [
  {
    title: "Secure Your Future.",
    highlight: "Live Your Dreams.",
    description:
      "The best time to plan your retirement was yesterday. The next best time is now.At Shri Nivesh, we help you create a custom retirement plan that ensures you don’t just retire — you retire rich, stress-free, and independent.",
    buttonText: "Plan Retirement",
    image: "/Home/1.jpg",
    links: "/goals/retirement",
  },
  {
    title: "Start early to fuel their",
    highlight: "dreams with confidence.",
    description:
      "Education costs are rising fast. Smart mutual fund investments can help you build a solid education fund for your child. Start now and let compounding do the heavy lifting.",
    buttonText: "Plan Child's Education",
    image: "/Home/3.jpg",
    links: "/goals/child_education",
  },
  {
    title: "The most precious gift?",
    highlight: "Their dream wedding.",
    description:
      "Your child’s wedding is a milestone moment. Don’t let lack of funds limit their big day. With smart financial planning, you can turn their dreams into reality.",
    buttonText: "Plan Child's Wedding",
    image: "/Home/6.jpg",
    links: "/goals/child_wedding",
  },
  {
    title: "Start Small. Grow Big.",
    highlight: "Secure Your Future with SIP.",
    description:
      "A SIP (Systematic Investment Plan) lets you invest small amounts regularly — making wealth creation simple, steady, and stress-free.✨ Build long-term wealth✨ Easy to start, easy to manage✨ Perfect for financial freedom",
    buttonText: "Dream Home",
    image: "/Home/7.jpg",
    links: "/goals/dream_home",
  },
  {
    title: "Build lasting wealth through smart investing",
    highlight: "and consistent planning.",
    description:
      "Wealth doesn't happen by chance—it’s built with patience, purpose, and the power of compounding. Start investing regularly in mutual funds and watch your financial goals come closer, one SIP at a time.",
    buttonText: "Plan Wealth Creation",
    image: "/Home/5.jpg",
    links: "/goals/wealth_creation",
  },
  {
    title: "Secure your family's future",
    highlight: " with trusted life insurance.",
    description:
      "Life is unpredictable—but your family's financial future shouldn't be. A smart life insurance plan offers peace of mind, long-term stability, and protection when it matters the most. Shield your loved ones today from life’s uncertainties with future-ready coverage.",
    buttonText: "Plan Life Insurance",
    image: "/Home/8.jpg",
    links: "/goals/life_insurance",
  },
  {
    title: "Protect your health and savings",
    highlight: "with a trusted health insurance plan.",
    description:
      "Rising medical costs shouldn’t be a burden. With the right health insurance, you get reliable coverage, cashless treatment, and peace of mind for you and your family. Stay protected against unexpected health emergencies—secure your future today.",
    buttonText: "Plan Health Insurance",
    image: "/Home/4.jpg",
    links: "/goals/health_insurance",
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Home = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  const btnGradient = darkMode
    ? "bg-gradient-to-r from-[#10e2ea] to-[#045b68] text-white"
    : "bg-gradient-to-r from-[#0e6371] to-[#84e9f0] text-white";

  return (
    <>
      <div
        className={`relative overflow-hidden transition-all duration-500 pt-[100px] min-h-screen flex flex-col items-center justify-center ${
          darkMode
            ? 'bg-gradient-to-br from-[#0b0d1a] to-[#081c29]'
            : 'bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]'
        }`}
      >
        <Bubbles darkMode={darkMode} />

        <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 py-8 sm:py-16 gap-10 max-w-7xl w-full z-10">
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2"
          >
            <motion.h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              variants={textVariant}
              custom={1}
            >
              <span className="text-green-600">{slides[current].title} </span>
              <motion.span
                className={darkMode ? 'text-[#10e2ea]' : 'text-[#0e6371]'}
                variants={textVariant}
                custom={2}
              >
                {slides[current].highlight}
              </motion.span>
            </motion.h1>

            <motion.p
              className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              variants={textVariant}
              custom={3}
            >
              {slides[current].description}
            </motion.p>

            <div className="w-full flex justify-center sm:justify-start mt-4">
              <motion.button
                className={`px-6 py-2 rounded-2xl cursor-pointer shadow-md transition ${btnGradient}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(slides[current].links)}
              >
                {slides[current].buttonText}
              </motion.button>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -150, opacity: 0 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -100 || velocity.x < -500) nextSlide();
                  else if (offset.x > 100 || velocity.x > 500) prevSlide();
                }}
                className="rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
              >
                <img
                  src={slides[current].image}
                  alt="slide"
                  className="w-full object-cover h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[550px] lg:max-h-[600px]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrows on all screen sizes */}
            <div className="absolute inset-y-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="bg-white text-black p-2 cursor-pointer rounded-full shadow-lg hover:scale-110 transition"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white text-black p-2 cursor-pointer rounded-full shadow-lg hover:scale-110 transition"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 mb-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
                i === current ? 'bg-cyan-500 scale-125' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <AboutComp />
      <CounterSection />
      <SecureSection />
      <InvestmentReturns />
      <TopMutualFunds/>
      <AssetAllocation />
      <AMCMarquee />
    </>
  );
};

export default Home;












// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import AboutComp from '../components/Home/AboutComp';
// import CounterSection from '../components/Home/CounterSection';
// import SecureSection from '../components/Home/SecureSection';
// import TopMutualFunds from '../components/Home/TopMutualFunds';
// import InvestmentReturns from '../components/Home/InvestmentCalc';
// import TestimonialSlider from '../components/Home/Testimonials';
// import LatestBlog from '../components/Home/BlogLatest';
// import LatestNews from '../components/Home/LatestNews';
// import AMCMarquee from '../components/Home/AMCMarquee';
// import AssetAllocation from '../components/Home/AssetAllocation';
// import { Bubbles } from '../utils/Bubble';
// import { useNavigate } from 'react-router';

// const slides = [
//   {
//     title: "Secure Your Future.",
//     highlight: "Live Your Dreams.",
//     description:
//       "The best time to plan your retirement was yesterday. The next best time is now.At Shri Nivesh, we help you create a custom retirement plan that ensures you don’t just retire — you retire rich, stress-free, and independent.",
//     buttonText: "Plan Retirement",
//     // image: "https://www.moneysmatter.com/images/banners/home-banner-1.png",
//     image: "/Home/1.jpg",
//      links:"/goals/retirement",
//   },
//   {
//     title: "Start early to fuel their",
//     highlight: "dreams with confidence.",
//     description:
//       "Education costs are rising fast. Smart mutual fund investments can help you build a solid education fund for your child. Start now and let compounding do the heavy lifting.",
//     buttonText: "Plan Child's Education",
//     image: "/Home/3.jpg",
//      links:"/goals/child_education",
//   },
//   {
//     title: "The most precious gift?",
//     highlight: "Their dream wedding.",
//     description:
//       "Your child’s wedding is a milestone moment. Don’t let lack of funds limit their big day. With smart financial planning, you can turn their dreams into reality.",
//     buttonText: "Plan Child's Wedding",
//     image: "/Home/6.jpg",
//      links:"/goals/child_wedding",
//   },
//   {
//     title: "Start Small. Grow Big.",
//     highlight: "Secure Your Future with SIP.",
//     description:
//       "A SIP (Systematic Investment Plan) lets you invest small amounts regularly — making wealth creation simple, steady, and stress-free.✨ Build long-term wealth✨ Easy to start, easy to manage✨ Perfect for financial freedom",
//     buttonText: "Dream Home",
//     image: "/Home/7.jpg",
//      links:"/goals/dream_home",
//   },
//   {
//     title: "Build lasting wealth through smart investing",
//     highlight: "and consistent planning.",
//     description:
//       "Wealth doesn't happen by chance—it’s built with patience, purpose, and the power of compounding. Start investing regularly in mutual funds and watch your financial goals come closer, one SIP at a time.",
//     buttonText: "Plan Wealth Creation",
//     image: "/Home/5.jpg",
//      links:"/goals/wealth_creation",
//   },
//   {
//     title: "Secure your family's future",
//     highlight: " with trusted life insurance.",
//     description:
//       "Life is unpredictable—but your family's financial future shouldn't be. A smart life insurance plan offers peace of mind, long-term stability, and protection when it matters the most. Shield your loved ones today from life’s uncertainties with future-ready coverage.",
//     buttonText: "Plan Life Insurance",
//     image: "/Home/8.jpg",
//      links:"/goals/life_insurance",
//   },
//   {
//     title: "Protect your health and savings",
//     highlight: "with a trusted health insurance plan.",
//     description:
//       "Rising medical costs shouldn’t be a burden. With the right health insurance, you get reliable coverage, cashless treatment, and peace of mind for you and your family. Stay protected against unexpected health emergencies—secure your future today.",
//       buttonText: "Plan Health Insurance",
//     image: "/Home/4.jpg",
//      links:"/goals/health_insurance",
//   },
// ];

// const textVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.6,
//       ease: 'easeOut'
//     },
//   }),
// };

// const Home = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate()

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   const btnGradient = darkMode
//     ? "bg-gradient-to-r from-[#10e2ea] to-[#045b68] text-white"
//     : "bg-gradient-to-r from-[#0e6371] to-[#84e9f0] text-white";

   
//   //  const btnGradient =   darkMode
//   //       ? 'bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/20'
//   //       : 'bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/20'
  

//   const nextSlide = () => setCurrent((current + 1) % slides.length);
//   const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

//   return (
//     <>
//     <div
//       className={`relative overflow-hidden transition-all duration-500 pt-[100px] min-h-screen flex items-center justify-center flex-col ${
//         darkMode
//           ? 'bg-gradient-to-br from-[#0b0d1a] to-[#081c29]'
//           : 'bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]'
//       }`}
//     >
//       <Bubbles darkMode={darkMode} />

//       <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-16 gap-10 max-w-7xl w-full z-10">
//         <motion.div
//           key={current}
//           initial="hidden"
//           animate="visible"
//           className="max-w-xl w-full"
//         >
//           <motion.h1
//             className={`text-4xl  md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 
//               mt-[-35px] sm:mt-0 ${
//               darkMode ? 'text-white' : 'text-gray-800'
//             }`}
//             variants={textVariant}
//             custom={1}
//           >
//             <span className={`${
//               darkMode ? 'text-green-600' : 'text-green-600'
//             }`}>{slides[current].title} </span>
//             <motion.span
//               className={`${
//                 darkMode ? 'text-[#10e2ea]' : 'text-[#0e6371]'
//               }`}
//               variants={textVariant}
//               custom={2}
//             >
//               {slides[current].highlight}
//             </motion.span>
//           </motion.h1>

//           <motion.p
//             className={`mb-6 ${
//               darkMode ? 'text-gray-300' : 'text-gray-700'
//             }`}
//             variants={textVariant}
//             custom={3}
//           >
//             {slides[current].description}
//           </motion.p>

//           <div className="w-full flex justify-center md:justify-start mt-4">
//   <motion.button
//     className={`px-6 py-2 rounded-2xl shadow-md transition ${btnGradient}`}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     onClick={() => navigate(slides[current].links)}
//   >
//     {slides[current].buttonText}
//   </motion.button>
// </div>

//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-full lg:w-1/2 relative"
//         >
//           <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
//             <img
//               src={slides[current].image}
//               alt="slide"
//               className="w-full object-cover h-auto"
//               // className="w-full object-right-bottom h-[400px]"
//             />
//           </div>
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-black/10 blur-xl"></div>
//           {/* Arrows - only visible on mobile */}
//             <div className="md:hidden absolute pl-1 pr-1 inset-y-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
//               <button
//                 onClick={prevSlide}
//                 className="bg-white text-black p-2  rounded-full shadow-lg hover:scale-110 transition"
//               >
//                 <ChevronLeft />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="bg-white text-black p-2 rounded-full shadow-lg hover:scale-110 transition"
//               >
//                 <ChevronRight />
//               </button>
//             </div>

//         </motion.div>
//       </div>

//       {/* <button
//         onClick={prevSlide}
//         className="absolute  left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
//       >
//         <ChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
//       >
//         <ChevronRight />
//       </button> */}

//     <button
//   onClick={prevSlide}
//   className="hidden md:block absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
// >
//   <ChevronLeft />
// </button>

// <button
//   onClick={nextSlide}
//   className="hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
// >
//   <ChevronRight />
// </button>


//       <div className="flex justify-center mt-6 mb-6">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
//               i === current ? 'bg-cyan-500' : 'bg-gray-400'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>

    


//     <AboutComp/>
//     <CounterSection/>
//     <SecureSection/>
//     <TopMutualFunds/>
//     <InvestmentReturns/>
//     <AssetAllocation/>
//     <TestimonialSlider/>
//     <LatestBlog/>
//     <LatestNews/>
//     <AMCMarquee/>
   
//     </>
//   );
// };


// export default Home;







