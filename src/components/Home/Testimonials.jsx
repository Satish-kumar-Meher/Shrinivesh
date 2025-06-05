
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../../utils/Bubble";

const testimonials = [
  {
    id: 1,
    name: "V.C.Sinha",
    role: "Chartered Accountant",
    image: "https://www.moneysmatter.com/images/home/testi/VC-Sinha.png",
    review: "Easy to Understand",
    text: "I am CA Vinod Chander Sinha, age 77 years. My wife aged 76 yrs retired business woman are clients of Money's Matter. They have been managing our portfolio since 2016. Their approach is honest and selfless.Client first is their policy. Selling is not the goal , they plan client's portfolio keeping client's goal, age and client requirements in mind.Our best wishes!",
    rating: "⭐⭐⭐",
  },
  {
    id: 2,
    name: "Prof (Dr) VN Dey",
    role: "",
    image: "https://www.moneysmatter.com/images/home/testi/VN-Dey.png",
    review: "Highly Recommend",
    text: "I would like to take a moment to express my sincere gratitude for your invaluable assistance during my investment journey. Your expertise and guidance have made navigating the complexities of investment much smoother for me. Your dedication to ensuring that I maximize deductions while remaining compliant with regulations is truly commendable. Thank you for your professionalism, patience, and attention to detail.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Meenakshi Mehta",
    role: "Capgemini India Ltd",
    image: "https://www.moneysmatter.com/images/home/testi/Meenakshi-Mehta.png",
    review: "Very Helpful",
    text: "Money's Matter are an expert in their field, with in depth knowledge. Added to the wonderful ability to communicate with clients, understanding their needs. As a result, we get the best advice always on investments.They are prompt in reverting to queries with utmost transparency and never fail to make clients feel secure about trusting with their investments.It has been a wonderful association, which would certainly be long term.",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Alok Dubey",
    role: "CFO, Acer Computers",
    image: "https://www.moneysmatter.com/images/home/testi/Alok-Dubey.png",
    review: "User-Friendly Platform",
    text: "Although I know the Promoter for multiple decades, my wealth related discussions with him have been for about 5 years only. Unlike those bank Wealth Managers' who would approach you frequently to sell what they have a target to sell, Moneys Matter has been patient to understand your requirement, risk appetite, preferences and then advise what's suitable. You clearly get the feeling that there is no personal pre-conceived 'agenda to sell' and the recommendations of the MFs have done quite well for me.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const TestimonialSlider = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const cardBg = darkMode
//     ? "bg-[#0d0f16]/70 border border-[#1de0e6]/10 shadow-[#10e2ea]/20"
//     : "bg-white/60 border border-[#0e6371]/10 shadow-[#0e6371]/10";

const cardBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/50 to-[#0b1925]/30"
    : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/40";

  const textPrimary = darkMode ? "text-white" : "text-[#0e6371]";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";
  const accentColor = darkMode ? "#10e2ea" : "#0e6371";

  return (
    <section
      className={`relative overflow-hidden z-0 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${bgGradient}`}
    >

    <Bubbles darkMode={darkMode} />

      {/* Header */}
      <motion.h2
        className={`relative z-10 text-center text-3xl md:text-4xl font-bold mb-12 ${textPrimary}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What our client says about us?
      </motion.h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="custom-swiper relative z-10 max-w-6xl mx-auto"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`m-4 p-6 rounded-3xl backdrop-blur-xl ${cardBg} ${
                darkMode
                  ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.2)] hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
                  : "shadow-[inset_0_0_20px_rgba(14,99,113,0.15)] hover:shadow-[0_0_25px_rgba(14,99,113,0.3)]"
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
                {t.review}
              </h3>
              <p className={`text-sm mb-4 ${textSecondary}`}>{t.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <p className={`text-sm font-bold ${textPrimary}`}>{t.name}</p>
                  <p className={`text-xs ${textSecondary}`}>{t.role}</p>
                </div>
                <span className={`ml-auto text-sm ${textPrimary}`}>
                  {t.rating}
                </span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper styling */}
      <style jsx>{`
        .custom-swiper .swiper-pagination-bullets {
          bottom: -30px !important;
        }

        .custom-swiper .swiper-pagination-bullet {
          background-color: ${accentColor} !important;
          opacity: 0.5;
        }

        .custom-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: ${accentColor} !important;
          top: 45%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
        }

        .custom-swiper .swiper-button-next {
          right: -35px;
        }

        .custom-swiper .swiper-button-prev {
          left: -35px;
        }

        @media (max-width: 768px) {
          .custom-swiper .swiper-button-next,
          .custom-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;








// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     id: 1,
//     name: "Nabin Agrawal",
//     role: "Student",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     review: "Easy to Understand",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//     rating: "⭐⭐⭐",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     role: "Designer",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//     review: "Highly Recommend",
//     text: "Great service and an amazing experience overall!",
//     rating: "⭐⭐⭐⭐⭐",
//   },
//   {
//     id: 3,
//     name: "John Smith",
//     role: "Developer",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//     review: "Very Helpful",
//     text: "This platform has helped me a lot in learning new things.",
//     rating: "⭐⭐⭐⭐",
//   },
//   {
//     id: 4,
//     name: "Emily Rose",
//     role: "Investor",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//     review: "User-Friendly Platform",
//     text: "It’s intuitive and provides detailed insights. Loved it!",
//     rating: "⭐⭐⭐⭐⭐",
//   },
// ];

// const TestimonialSlider = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const cardBg = darkMode
//     ? "bg-[#0d0f16]/70 border border-[#1de0e6]/10 shadow-[#10e2ea]/20"
//     : "bg-white/60 border border-[#0e6371]/10 shadow-[#0e6371]/10";

//   const textPrimary = darkMode ? "text-white" : "text-[#0e6371]";
//   const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";
//   const accentColor = darkMode ? "#10e2ea" : "#0e6371";

//   return (
//     <section
//       className={`relative overflow-hidden z-0 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${bgGradient}`}
//     >
//       {/* Bubbles */}
//       <motion.div
//         className="absolute inset-0 z-0 pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         {[...Array(15)].map((_, i) => {
//           const size = 5 + i * 8;
//           const top = `${Math.random() * 90}%`;
//           const left = `${Math.random() * 90}%`;
//           const bubbleColor = accentColor;

//           return (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 top,
//                 left,
//                 backgroundColor: bubbleColor,
//                 opacity: 0.1,
//                 boxShadow: `0 0 20px 5px ${bubbleColor}`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 x: [0, 10, 0],
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 duration: 6 + i * 0.3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.2,
//               }}
//             />
//           );
//         })}
//       </motion.div>

//       {/* Header */}
//       <motion.h2
//         className={`relative z-10 text-center text-3xl md:text-4xl font-bold mb-12 ${textPrimary}`}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         What they say about us?
//       </motion.h2>

//       <div className="relative z-10 max-w-6xl mx-auto custom-swiper-wrapper">
//         <Swiper
//           modules={[Pagination, Navigation, Autoplay]}
//           slidesPerView={1}
//           loop
//           autoplay={{ delay: 4000 }}
//           pagination={{ clickable: true }}
//           navigation
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 30 },
//           }}
//           className="custom-swiper"
//         >
//           {testimonials.map((t) => (
//             <SwiperSlide key={t.id}>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className={`m-4 p-6 rounded-3xl backdrop-blur-xl ${cardBg} ${
//                   darkMode
//                     ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.2)] hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
//                     : "shadow-[inset_0_0_20px_rgba(14,99,113,0.15)] hover:shadow-[0_0_25px_rgba(14,99,113,0.3)]"
//                 }`}
//               >
//                 <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
//                   {t.review}
//                 </h3>
//                 <p className={`text-sm mb-4 ${textSecondary}`}>{t.text}</p>
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-12 h-12 rounded-full border-2 border-white"
//                   />
//                   <div>
//                     <p className={`text-sm font-bold ${textPrimary}`}>
//                       {t.name}
//                     </p>
//                     <p className={`text-xs ${textSecondary}`}>{t.role}</p>
//                   </div>
//                   <span className={`ml-auto text-sm ${textPrimary}`}>
//                     {t.rating}
//                   </span>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Custom Swiper styling */}
//       <style jsx>{`
//         .custom-swiper-wrapper {
//           position: relative;
//         }

//         .custom-swiper :global(.swiper-pagination-bullets) {
//           position: absolute;
//           bottom: -40px;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 20;
//         }

//         .custom-swiper :global(.swiper-pagination-bullet) {
//           background-color: ${accentColor} !important;
//           opacity: 0.4;
//         }

//         .custom-swiper :global(.swiper-pagination-bullet-active) {
//           opacity: 1;
//         }

//         .custom-swiper :global(.swiper-button-prev),
//         .custom-swiper :global(.swiper-button-next) {
//           color: ${accentColor} !important;
//           z-index: 30;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 40px;
//           height: 40px;
//         }

//         .custom-swiper :global(.swiper-button-prev) {
//           left: -45px;
//         }

//         .custom-swiper :global(.swiper-button-next) {
//           right: -45px;
//         }

//         @media (max-width: 768px) {
//           .custom-swiper :global(.swiper-button-prev),
//           .custom-swiper :global(.swiper-button-next) {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TestimonialSlider;


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     id: 1,
//     name: "Nabin Agrawal",
//     role: "Student",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     review: "Easy to Understand",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//     rating: "⭐⭐⭐",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     role: "Designer",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//     review: "Highly Recommend",
//     text: "Great service and an amazing experience overall!",
//     rating: "⭐⭐⭐⭐⭐",
//   },
//   {
//     id: 3,
//     name: "John Smith",
//     role: "Developer",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//     review: "Very Helpful",
//     text: "This platform has helped me a lot in learning new things.",
//     rating: "⭐⭐⭐⭐",
//   },
//   {
//     id: 4,
//     name: "Emily Rose",
//     role: "Investor",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//     review: "User-Friendly Platform",
//     text: "It’s intuitive and provides detailed insights. Loved it!",
//     rating: "⭐⭐⭐⭐⭐",
//   },
// ];

// const TestimonialSlider = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const accentColor = darkMode ? "#10e2ea" : "#0e6371";

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const cardBg = darkMode
//     ? "bg-[#0d0f16]/70 border border-[#1de0e6]/10 shadow-[#10e2ea]/20"
//     : "bg-white/60 border border-[#0e6371]/10 shadow-[#0e6371]/10";

//   const textPrimary = darkMode ? "text-white" : "text-[#0e6371]";
//   const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";

//   return (
//     <section
//       className={`relative overflow-hidden z-0 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${bgGradient}`}
//     >
//       {/* Bubbles */}
//       <motion.div
//         className="absolute inset-0 z-0 pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         {[...Array(15)].map((_, i) => {
//           const size = 5 + i * 8;
//           const top = `${Math.random() * 90}%`;
//           const left = `${Math.random() * 90}%`;
//           const bubbleColor = accentColor;

//           return (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 top,
//                 left,
//                 backgroundColor: bubbleColor,
//                 opacity: 0.1,
//                 boxShadow: `0 0 20px 5px ${bubbleColor}`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 x: [0, 10, 0],
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 duration: 6 + i * 0.3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.2,
//               }}
//             />
//           );
//         })}
//       </motion.div>

//       {/* Header */}
//       <motion.h2
//         className={`relative z-10 text-center text-3xl md:text-4xl font-bold mb-12 ${textPrimary}`}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         What they say about us?
//       </motion.h2>

//       {/* Swiper */}
//       <Swiper
//         modules={[Pagination, Navigation, Autoplay]}
//         slidesPerView={1}
//         loop
//         autoplay={{ delay: 4000 }}
//         pagination={{ clickable: true }}
//         navigation
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 3, spaceBetween: 30 },
//         }}
//         className="custom-swiper relative z-10 max-w-6xl mx-auto"
//       >
//         {testimonials.map((t) => (
//           <SwiperSlide key={t.id}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className={`m-4 p-6 rounded-3xl backdrop-blur-xl ${cardBg} ${
//                 darkMode
//                   ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.2)] hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
//                   : "shadow-[inset_0_0_20px_rgba(14,99,113,0.15)] hover:shadow-[0_0_25px_rgba(14,99,113,0.3)]"
//               }`}
//             >
//               <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
//                 {t.review}
//               </h3>
//               <p className={`text-sm mb-4 ${textSecondary}`}>{t.text}</p>
//               <div className="flex items-center gap-4">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full border-2 border-white"
//                 />
//                 <div>
//                   <p className={`text-sm font-bold ${textPrimary}`}>
//                     {t.name}
//                   </p>
//                   <p className={`text-xs ${textSecondary}`}>{t.role}</p>
//                 </div>
//                 <span className={`ml-auto text-sm ${textPrimary}`}>
//                   {t.rating}
//                 </span>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default TestimonialSlider;
