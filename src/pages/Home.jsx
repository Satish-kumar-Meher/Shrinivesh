
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutComp from '../components/Home/AboutComp';
import CounterSection from '../components/Home/CounterSection';
import SecureSection from '../components/Home/SecureSection';
import TopMutualFunds from '../components/Home/TopMutualFunds';
import InvestmentReturns from '../components/Home/InvestmentCalc';
import TestimonialSlider from '../components/Home/Testimonials';
import LatestBlog from '../components/Home/BlogLatest';
import LatestNews from '../components/Home/LatestNews';
import AMCMarquee from '../components/Home/AMCMarquee';
import AssetAllocation from '../components/Home/AssetAllocation';
import { Bubbles } from '../utils/Bubble';
import { useNavigate } from 'react-router';

const slides = [
  {
    title: "The Best Is Yet To Come",
    highlight: "If You Plan For It Now.",
    description:
      "The best time to plan for your retirement is as early as you can. Plan early to build up a corpus large enough to pay for inflation adjusted expenses in your retirement.",
    buttonText: "Plan Retirement",
    image: "https://www.moneysmatter.com/images/banners/home-banner-1.png",
     links:"/goals/retirement",
  },
  {
    title: "Plan now to give wings",
    highlight: "to their aspirations.",
    description:
      "Higher education prices are rising in India. Mutual fund investments can help you build a corpus large enough to match your child's aspirations.Start early to take full advantage of compounding.",
    buttonText: "Plan Child's Education",
    image: "https://www.moneysmatter.com/images/banners/home-banner.png",
     links:"/goals/child_education",
  },
  {
    title: "The best gift you can give",
    highlight: "them is their dream.",
    description:
      "A wedding is special. When we are speaking of your child's wedding, you would not want to let lack of funds be a reason for their special day.being less than enchanting. Let us help you with investment suggestions that can help you achieve their dreams.",
    buttonText: "Plan Child's Wedding",
    image: "https://www.moneysmatter.com/images/banners/home-banner-3.png",
     links:"/goals/child_wedding",
  },
  {
    title: "Invest regularly and grow",
    highlight: "steadily with SIP for a secure future.",
    description:
      "SIP (Systematic Investment Plan) encourages consistent, small investments over time, helping build wealth steadily. It offers a disciplined approach to achieve long-term financial security and growth.",
    buttonText: "Plan SIP",
    image: "https://www.moneysmatter.com/images/banners/home-banner-4.png",
     links:"/goals/plan_sip",
  },
  {
    title: "Create wealth steadily through smart investments",
    highlight: "and long-term financial planning.",
    description:
      "Wealth creation involves making smart, consistent investments over time. By focusing on long-term goals and strategic planning, individuals can build financial security and prosperity.",
    buttonText: "Plan Wealth Creation",
    image: "https://www.moneysmatter.com/images/banners/home-banner-5.png",
     links:"/goals/wealth_creation",
  },
  {
    title: "Protect your loved ones'",
    highlight: "future with life insurance today.",
    description:
      "Life insurance ensures financial security for your loved ones in case of unforeseen events. It provides peace of mind, protecting their future and helping maintain stability.",
    buttonText: "Plan Life Insurance",
    image: "https://www.moneysmatter.com/images/banners/home-banner-6.png",
     links:"/goals/life_insurance",
  },
  {
    title: "Secure your health and future with reliable",
    highlight: "health insurance coverage.",
    description:
      "Health insurance provides essential coverage for medical expenses, ensuring you and your family are protected during illness or emergencies. It offers financial security and peace of mind.",
    buttonText: "Plan Health Insurance",
    image: "https://www.moneysmatter.com/images/banners/home-banner-7.png",
     links:"/goals/health_insurance",
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
      ease: 'easeOut'
    },
  }),
};

const Home = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);


  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <>
    <div
      className={`relative overflow-hidden transition-all duration-500 pt-[100px] min-h-screen flex items-center justify-center flex-col ${
        darkMode
          ? 'bg-gradient-to-br from-[#0b0d1a] to-[#081c29]'
          : 'bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]'
      }`}
    >
      <Bubbles darkMode={darkMode} />

      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-16 gap-10 max-w-7xl w-full z-10">
        <motion.div
          key={current}
          initial="hidden"
          animate="visible"
          className="max-w-xl w-full"
        >
          <motion.h1
            className={`text-4xl  md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 
              mt-[-35px] sm:mt-0 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
            variants={textVariant}
            custom={1}
          >
            <span className={`${
              darkMode ? 'text-green-600' : 'text-green-600'
            }`}>{slides[current].title} </span>
            <motion.span
              className={`${
                darkMode ? 'text-[#10e2ea]' : 'text-[#0e6371]'
              }`}
              variants={textVariant}
              custom={2}
            >
              {slides[current].highlight}
            </motion.span>
          </motion.h1>

          <motion.p
            className={`mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={textVariant}
            custom={3}
          >
            {slides[current].description}
          </motion.p>

          <div className="w-full flex justify-center md:justify-start mt-4">
  <motion.button
    className={`px-6 py-2 rounded-2xl shadow-md transition ${
      darkMode
        ? 'bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/20'
        : 'bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/20'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate(slides[current].links)}
  >
    {slides[current].buttonText}
  </motion.button>
</div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src={slides[current].image}
              alt="slide"
              className="w-full object-cover h-auto"
            />
          </div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-black/10 blur-xl"></div>
        </motion.div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
      >
        <ChevronRight />
      </button>

      <div className="flex justify-center mt-6 mb-6">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              i === current ? 'bg-cyan-500' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
    <AboutComp/>
    <CounterSection/>
    <SecureSection/>
    <TopMutualFunds/>
    <InvestmentReturns/>
    <AssetAllocation/>
    <TestimonialSlider/>
    <LatestBlog/>
    <LatestNews/>
    <AMCMarquee/>
   
    </>
  );
};


export default Home;
