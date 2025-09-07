// import React, { useState } from "react";
// import {
//   FaSun,
//   FaMoon,
//   FaCalculator,
//   FaChartLine,
//   FaBullseye,
//   FaListUl,
//   FaInfoCircle,
//   FaPhoneAlt,
//   FaHome,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleScreenMode } from "../redux/modeSlice.js";
// import { useNavigate, useLocation } from "react-router-dom";
// // import SEO from "../utils/SEO.jsx";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.screenMode.mode);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const accentColor = darkMode ? "#10e2ea" : "#0e6371";
//   const hoverBgColor = darkMode ? "#10e2ea" : "#0e6371";
//   const hoverTextColor = darkMode ? "#000" : "#fff";
//   const loginBgColor = darkMode ? "#10e2ea" : "#0e6371";
//   const loginTextColor = darkMode ? "text-black" : "text-white";

//   const navItems = [
//     { name: "Home", icon: <FaHome />, link: "/" },
//     { name: "About", icon: <FaInfoCircle />, link: "/about" },
//     { name: "Services", icon: <FaListUl />, link: "/services" },
//     { name: "Calculators", icon: <FaCalculator />, link: "/calculators" },
//     // { name: "MF Research", icon: <FaChartLine />, link: "/https://mfofa.fiinfra.in/mf" },
//     { name: "Goals", icon: <FaBullseye />, link: "/goals" },
//     { name: "More", icon: <FaListUl />, link: "/more" },
//     { name: "Contact", icon: <FaPhoneAlt />, link: "/contact" },
//   ];

//   // ✅ Improved active logic for nested routes:
//   const isActive = (link) => {
//     return location.pathname === link || location.pathname.startsWith(link + '/');
//   };

//   const handleLinkClick = (link) => {
//     navigate(link);
//     setMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full h-20 z-50 mx-auto max-w-8xl flex justify-between items-center px-6 py-4 backdrop-blur-md transition-all duration-500 shadow-[0_0_30px_6px_rgba(0,0,0,0.15)] ${
//         darkMode
//           ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//           : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]"
//       }`}
//     > 
//       {/* <SEO tittle={"Navbar"} description={"This is the Navbar"} /> */}
//       <img
//         className="h-20 w-auto"
//         src={darkMode ? "/DarkLogo.gif" : "/LightLogo.gif"}
//         alt="Sahaya Logo"
//       />

//       {/* Desktop Nav */}
//       <div className="hidden md:flex gap-6 items-center">
//         {navItems.map((item) => (
//           <a
//             key={item.name}
//             onClick={() => handleLinkClick(item.link)}
//             className={`flex items-center gap-1 px-4 py-2 cursor-pointer rounded-full hover:scale-105 transition-all duration-300 text-sm font-medium shadow-sm ${
//               isActive(item.link) ? "scale-105" : ""
//             }`}
//             style={{
//               backgroundColor: isActive(item.link) ? accentColor : "transparent",
//               color: isActive(item.link)
//                 ? hoverTextColor
//                 : darkMode
//                 ? "#fff"
//                 : "#111",
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = hoverBgColor;
//               e.target.style.color = hoverTextColor;
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = isActive(item.link)
//                 ? accentColor
//                 : "transparent";
//               e.target.style.color = isActive(item.link)
//                 ? hoverTextColor
//                 : darkMode
//                 ? "#fff"
//                 : "#111";
//             }}
//           >
//             {item.icon} {item.name}
//           </a>
//         ))}

//         <motion.button
//           onClick={() => dispatch(toggleScreenMode())}
//           className={`relative w-14 h-7 flex items-center rounded-full px-1 shadow-md transition-colors duration-500 ${
//             darkMode ? "bg-gray-800" : "bg-gray-200"
//           }`}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             className="w-6 h-6 rounded-full flex items-center justify-center text-yellow-500 dark:text-white bg-white dark:bg-gray-700 shadow"
//             animate={{ x: darkMode ? 24 : 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
//           </motion.div>
//         </motion.button>

//         <button
//           style={{ backgroundColor: loginBgColor }}
//           className={`px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300 ${loginTextColor}`}
//         >
//           Login
//         </button>
//       </div>

//       {/* Mobile Nav Toggle */}
//       <div className="md:hidden flex items-center gap-2 z-50">
//         <motion.button
//           onClick={() => dispatch(toggleScreenMode())}
//           className={`relative w-14 h-8 flex items-center rounded-full px-1 shadow-md transition-colors duration-500 ${
//             darkMode ? "bg-gray-800" : "bg-gray-200"
//           }`}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             className="w-6 h-6 rounded-full flex items-center justify-center text-yellow-500 dark:text-white bg-white dark:bg-gray-700 shadow"
//             animate={{ x: darkMode ? 24 : 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
//           </motion.div>
//         </motion.button>

//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? (
//             <FaTimes className={`text-2xl ${darkMode ? "text-white" : "text-black"}`} />
//           ) : (
//             <FaBars className={`text-2xl ${darkMode ? "text-white" : "text-black"}`} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       {menuOpen && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "100%" }}
//           transition={{ type: "tween", duration: 0.3 }}
//           className={`fixed top-22 right-4 w-44 p-4 rounded-lg shadow-xl flex flex-col gap-4 md:hidden ${
//             darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//           }`}
//         >
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               onClick={() => handleLinkClick(item.link)}
//               className="flex items-center gap-2 px-3 py-2 rounded-md transition hover:scale-105"
//               style={{
//                 backgroundColor: isActive(item.link) ? accentColor : "transparent",
//                 color: isActive(item.link)
//                   ? hoverTextColor
//                   : darkMode
//                   ? "#fff"
//                   : "#111",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = hoverBgColor;
//                 e.target.style.color = hoverTextColor;
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = isActive(item.link)
//                   ? accentColor
//                   : "transparent";
//                 e.target.style.color = isActive(item.link)
//                   ? hoverTextColor
//                   : darkMode
//                   ? "#fff"
//                   : "#111";
//               }}
//             >
//               {item.icon} {item.name}
//             </a>
//           ))}

//           <button
//             style={{ backgroundColor: loginBgColor }}
//             className={`px-4 py-2 rounded-full font-semibold hover:scale-105 transition ${loginTextColor}`}
//           >
//             Login
//           </button>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;














// import React, { useState } from "react";
// import {
//   FaSun,
//   FaMoon,
//   FaCalculator,
//   FaChartLine,
//   FaBullseye,
//   FaListUl,
//   FaInfoCircle,
//   FaPhoneAlt,
//   FaHome,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleScreenMode } from "../redux/modeSlice.js";
// import { useNavigate, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.screenMode.mode);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const accentColor = darkMode ? "#10e2ea" : "#0e6371";
//   const hoverBgColor = darkMode ? "#10e2ea" : "#0e6371";
//   const hoverTextColor = darkMode ? "#000" : "#fff";
//   const loginBgColor = darkMode ? "#10e2ea" : "#0e6371";
//   const loginTextColor = darkMode ? "text-black" : "text-white";

//   const navItems = [
//     { name: "Home", icon: <FaHome />, link: "/" },
//     { name: "About", icon: <FaInfoCircle />, link: "/about" },
//     { name: "Services", icon: <FaListUl />, link: "/services" },
//     { name: "Calculators", icon: <FaCalculator />, link: "/calculators" },
//     { name: "Goals", icon: <FaBullseye />, link: "/goals" },
//     { name: "More", icon: <FaListUl />, link: "/more" },
//     { name: "Contact", icon: <FaPhoneAlt />, link: "/contact" },
//   ];

//   const isActive = (link) => {
//     return location.pathname === link || location.pathname.startsWith(link + "/");
//   };

//   const handleLinkClick = (link) => {
//     navigate(link);
//     setMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full h-20 z-50 shadow-md backdrop-blur-md transition-all duration-500 px-4 lg:px-8 py-3 flex items-center justify-between ${
//         darkMode
//           ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//           : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]"
//       }`}
//     >
//       <img
//         className="h-20 sm:h-20 md:h-20 w-auto"
//         src={darkMode ? "/DarkLogo.gif" : "/LightLogo.gif"}
//         alt="Sahaya Logo"
//       />

//       {/* Desktop Nav */}
//       <div className="hidden lg:flex gap-4 xl:gap-6 items-center flex-wrap">
//         {navItems.map((item) => (
//           <a
//             key={item.name}
//             onClick={() => handleLinkClick(item.link)}
//             className={`flex items-center gap-1 px-3 py-2 text-sm rounded-full font-medium transition-all duration-300 cursor-pointer hover:scale-105 whitespace-nowrap ${
//               isActive(item.link) ? "scale-105" : ""
//             }`}
//             style={{
//               backgroundColor: isActive(item.link) ? accentColor : "transparent",
//               color: isActive(item.link)
//                 ? hoverTextColor
//                 : darkMode
//                 ? "#fff"
//                 : "#111",
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = hoverBgColor;
//               e.target.style.color = hoverTextColor;
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = isActive(item.link)
//                 ? accentColor
//                 : "transparent";
//               e.target.style.color = isActive(item.link)
//                 ? hoverTextColor
//                 : darkMode
//                 ? "#fff"
//                 : "#111";
//             }}
//           >
//             {item.icon} {item.name}
//           </a>
//         ))}

//         <motion.button
//           onClick={() => dispatch(toggleScreenMode())}
//           className={`w-14 h-8 flex items-center rounded-full px-1 shadow-md transition-colors duration-500 ${
//             darkMode ? "bg-gray-800" : "bg-gray-200"
//           }`}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             className="w-6 h-6 rounded-full flex items-center justify-center text-yellow-500 dark:text-white bg-white dark:bg-gray-700 shadow"
//             animate={{ x: darkMode ? 24 : 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </motion.div>
//         </motion.button>

//         <button
//           style={{ backgroundColor: loginBgColor }}
//           className={`px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105 ${loginTextColor}`}
//         >
//           Login
//         </button>
//       </div>

//       {/* Mobile Nav Toggle */}
//       <div className="lg:hidden flex items-center gap-2">
//         <motion.button
//           onClick={() => dispatch(toggleScreenMode())}
//           className={`w-12 h-8 flex items-center rounded-full px-1 shadow-md transition-colors duration-500 ${
//             darkMode ? "bg-gray-800" : "bg-gray-200"
//           }`}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             className="w-6 h-6 rounded-full flex items-center justify-center text-yellow-500 dark:text-white bg-white dark:bg-gray-700 shadow"
//             animate={{ x: darkMode ? 20 : 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </motion.div>
//         </motion.button>

//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? (
//             <FaTimes className={`text-2xl ${darkMode ? "text-white" : "text-black"}`} />
//           ) : (
//             <FaBars className={`text-2xl ${darkMode ? "text-white" : "text-black"}`} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       {menuOpen && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "100%" }}
//           transition={{ type: "tween", duration: 0.3 }}
//           className={`fixed top-22 right-4 w-56 p-4 rounded-lg shadow-xl flex flex-col gap-4 lg:hidden z-50 ${
//             darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//           }`}
//         >
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               onClick={() => handleLinkClick(item.link)}
//               className="flex items-center gap-2 px-3 py-2 rounded-md transition hover:scale-105"
//               style={{
//                 backgroundColor: isActive(item.link) ? accentColor : "transparent",
//                 color: isActive(item.link)
//                   ? hoverTextColor
//                   : darkMode
//                   ? "#fff"
//                   : "#111",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = hoverBgColor;
//                 e.target.style.color = hoverTextColor;
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = isActive(item.link)
//                   ? accentColor
//                   : "transparent";
//                 e.target.style.color = isActive(item.link)
//                   ? hoverTextColor
//                   : darkMode
//                   ? "#fff"
//                   : "#111";
//               }}
//             >
//               {item.icon} {item.name}
//             </a>
//           ))}

//           <button
//             style={{ backgroundColor: loginBgColor }}
//             className={`px-4 py-2 rounded-full font-semibold hover:scale-105 transition ${loginTextColor}`}
//           >
//             Login
//           </button>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;














import React, { useState, useEffect, useRef } from "react";
import {
  FaSun,
  FaMoon,
  FaCalculator,
  FaChartLine,
  FaBullseye,
  FaListUl,
  FaInfoCircle,
  FaPhoneAlt,
  FaHome,
  FaBars,
  FaTimes,
  FaCogs,
  FaEllipsisH,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleScreenMode } from "../redux/modeSlice.js";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [clickedTooltip, setClickedTooltip] = useState(null);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.screenMode.mode);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef();

  const accentColor = darkMode ? "#10e2ea" : "#0e6371";
  const hoverBgColor = darkMode ? "#10e2ea" : "#0e6371";
  const hoverTextColor = darkMode ? "#000" : "#fff";
  const loginBgColor = darkMode ? "#10e2ea" : "#0e6371";
  const loginTextColor = darkMode ? "text-black" : "text-white";

  const navItems = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "About", icon: <FaInfoCircle />, link: "/about" },
    { name: "Services", icon: <FaCogs />, link: "/services" },
    { name: "Calculators", icon: <FaCalculator />, link: "/calculators" },
    { name: "Goals", icon: <FaBullseye />, link: "/goals" },
    { name: "More", icon: <FaEllipsisH />, link: "/more" },
    { name: "Contact", icon: <FaPhoneAlt />, link: "/contact" },
  ];

  const isActive = (link) => {
    return location.pathname === link || location.pathname.startsWith(link + "/");
  };

  const handleLinkClick = (link) => {
    navigate(link);
  };

  const handleLoginClick = () => {
    window.open('https://invest.shrinivesh.com', '_blank');
  };

  // Remove the old useEffect for menu handling since we're removing the hamburger menu

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50 shadow-md backdrop-blur-md transition-all duration-500 px-4 lg:px-8 py-3 flex items-center justify-between ${
          darkMode
            ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
            : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]"
        }`}
      >
        <img
          className="h-20 sm:h-20 md:h-20 w-auto cursor-pointer"
          src={darkMode ? "/DarkLogo.gif" : "/LightLogo.gif"}
          alt="Sahaya Logo"
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 xl:gap-6 items-center flex-wrap">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={`flex items-center gap-1 px-3 py-2 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                isActive(item.link) ? "scale-105" : ""
              }`}
              style={{
                backgroundColor: isActive(item.link) ? accentColor : "transparent",
                color: isActive(item.link)
                  ? hoverTextColor
                  : darkMode
                  ? "#fff"
                  : "#111",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = hoverBgColor;
                e.target.style.color = hoverTextColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = isActive(item.link)
                  ? accentColor
                  : "transparent";
                e.target.style.color = isActive(item.link)
                  ? hoverTextColor
                  : darkMode
                  ? "#fff"
                  : "#111";
              }}
              aria-label={item.name}
            >
              {item.icon} {item.name}
            </Link>
          ))}

          <motion.button
            onClick={() => dispatch(toggleScreenMode())}
            className={`w-14 h-8 flex items-center rounded-full px-1 shadow-md transition-colors duration-500 cursor-pointer ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
             className="w-6 h-6 rounded-full flex items-center cursor-pointer justify-center text-yellow-500 dark:text-white bg-white dark:bg-gray-700 shadow"
              animate={{ x: darkMode ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.div>
          </motion.button>

          <button
            onClick={handleLoginClick}
            style={{ backgroundColor: loginBgColor }}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105 cursor-pointer ${loginTextColor}`}
          >
            Login
          </button>
        </div>

        {/* Mobile Top Bar - Only Logo, Dark Mode, and Login */}
        <div className="lg:hidden flex items-center gap-3">
          <motion.button
            onClick={() => dispatch(toggleScreenMode())}
            className={`w-12 h-7 flex items-center rounded-full px-1 shadow-md transition-colors duration-500 cursor-pointer ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full flex items-center justify-center text-yellow-500 dark:text-white bg-white dark:bg-gray-700 shadow cursor-pointer"
              animate={{ x: darkMode ? 18 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
            </motion.div>
          </motion.button>

          <button
            onClick={handleLoginClick}
            style={{ backgroundColor: loginBgColor }}
            className={`px-3 py-1.5 text-sm rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105 cursor-pointer ${loginTextColor}`}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
        <div
          className={`backdrop-blur-md border-t transition-all duration-500 ${
            darkMode
              ? "bg-gradient-to-t from-[#0b0d1a]/95 to-[#081c29]/95 border-gray-700"
              : "bg-gradient-to-t from-[#f0faff]/95 to-[#d9e9ff]/95 border-gray-300"
          }`}
        >
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between items-center px-1 py-3">
              {navItems.map((item) => {
                const active = isActive(item.link);
                return (
                  <div key={item.name} className="relative group flex-1">
                    <Link
                      to={item.link}
                      onClick={(e) => {
                        if (clickedTooltip === item.name) {
                          setClickedTooltip(null);
                        } else {
                          setClickedTooltip(item.name);
                          setTimeout(() => setClickedTooltip(null), 3000); // Auto hide after 3 seconds
                        }
                      }}
                      className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 w-full relative ${
                        active
                          ? "transform scale-110"
                          : "hover:scale-105 active:scale-95"
                      }`}
                      style={{
                        backgroundColor: active ? accentColor : "transparent",
                        color: active
                          ? hoverTextColor
                          : darkMode
                          ? "#fff"
                          : "#111",
                      }}
                      aria-label={item.name}
                    >
                      <div className="text-xl">{item.icon}</div>
                    </Link>
                    
                    {/* Enhanced Tooltip */}
                    <div
                      className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 pointer-events-none z-20 whitespace-nowrap ${
                        clickedTooltip === item.name
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      } ${
                        darkMode
                          ? "bg-gray-900 text-white border border-gray-600 shadow-xl"
                          : "bg-white text-gray-800 border border-gray-200 shadow-xl"
                      }`}
                    >
                      {item.name}
                      {/* Tooltip arrow */}
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent ${
                          darkMode ? "border-t-gray-900" : "border-t-white"
                        }`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

