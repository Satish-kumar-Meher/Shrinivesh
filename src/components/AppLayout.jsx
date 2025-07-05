
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from './ScrollToTop';
import SEO from '../utils/SEO';


function AppLayout() {

  useEffect(() => {
  const cursor = document.getElementById("cursor");
  const moveCursor = (e) => {
    // cursor.style.top = `${e.clientY}px`;
    // cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
cursor.style.left = `${e.clientX}px`;

  };
  window.addEventListener("mousemove", moveCursor);
  

window.addEventListener("mousedown", () => {
  cursor.style.transform = "scale(2)";
});
window.addEventListener("mouseup", () => {
  cursor.style.transform = "scale(1)";
});


  return () => window.removeEventListener("mousemove", moveCursor);
}, []);

  return (
    <>
  <Navbar/>
  <SEO tittle={"Main App Layout"} description={"This is the Main App Layout"} />
    {/* Glowing Cursor */}
<motion.div
  className="cursor-glow"
  animate={{ x: 0, y: 0 }}
  transition={{ type: "spring", stiffness: 100 }}
  id="cursor"
/>
<ScrollToTop/>
<Outlet/>
<Footer/>
</>
  )
}

export default AppLayout