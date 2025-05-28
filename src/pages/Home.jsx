
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutComp from '../components/AboutComp';
import CounterSection from '../components/CounterSection';
import SecureSection from '../components/SecureSection';

const slides = [
  {
    title: "The Best Is Yet To Come",
    highlight: "If You Plan For It Now.",
    description:
      "The best time to plan for your retirement is as early as you can. Plan early to build up a corpus large enough to pay for inflation adjusted expenses in your retirement.",
    buttonText: "Plan Retirement",
    image: "https://www.moneysmatter.com/images/banners/home-banner-1.png",
  },
  {
    title: "Plan now to give wings",
    highlight: "to their aspirations.",
    description:
      "Higher education prices are rising in India. Mutual fund investments can help you build a corpus large enough to match your child's aspirations.Start early to take full advantage of compounding.",
    buttonText: "Plan Child's Education",
    image: "https://www.moneysmatter.com/images/banners/home-banner.png",
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
            className={`text-4xl md:text-5xl font-extrabold leading-tight mb-6 ${
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

          {/* <motion.button
            className={`px-6 py-2 rounded-2xl shadow-md transition ${
              darkMode
                ? 'bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/20'
                : 'bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {slides[current].buttonText}
          </motion.button> */}

          <div className="w-full flex justify-center md:justify-start mt-4">
  <motion.button
    className={`px-6 py-2 rounded-2xl shadow-md transition ${
      darkMode
        ? 'bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/20'
        : 'bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/20'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
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
    </>
  );
};

const Bubbles = ({ darkMode }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      aria-hidden
    >
      {[...Array(15)].map((_, i) => {
        const size = 1 + Math.random() * 100;
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const bubbleColor = darkMode ? '#10e2ea' : '#0e6371';

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
              backgroundColor: bubbleColor,
              boxShadow: `0 0 25px 10px ${bubbleColor}`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.1, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default Home;
