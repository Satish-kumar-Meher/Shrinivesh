
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { Bubbles } from "../utils/Bubble";

const Footer = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-b from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-b from-[#f0faff] to-[#d9e9ff]";

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const headingColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const linkHover = darkMode ? "hover:text-[#10e2ea]" : "hover:text-[#0e6371]";
  const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.2)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.15)]";

  const sectionBorder = darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10";

  const linkSections = [
    {
      title: "About Us",
      items: ["About Us", "Contact Us", "Services", "Privacy Policy"],
    },
    {
      title: "Useful Links",
      items: ["Mutual Fund Research", "Tools and Calculators", "Blog", "News"],
    },
    {
      title: "Planners",
      items: [
        "Dream Home",
        "Wealth Creation",
        "Retirement",
        "Child's Education",
        "Child's Wedding",
        "Emergency",
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/shri_nivesh/" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@Shri_Nivesh?sub_confirmation=1" },
    { icon: <FaTwitter />, link: "https://x.com/intent/follow?screen_name=Shri_Nivesh" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaDiscord />, link: "https://discord.com" },
    { icon: <FaWhatsapp />, link: "https://wa.me/919348112495?text=Hi%2C%0AI%E2%80%99m%20looking%20to%20start%20my%20Mutual%20Fund%20investment%20journey%20and%20would%20love%20to%20do%20it%20under%20your%20expert%20guidance" },
  ];

  return (
    <footer className={`relative z-0 ${bgGradient} py-14 md:py-16 lg:py-20 overflow-hidden`}>
     
      <Bubbles darkMode={darkMode} />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 flex-wrap justify-between">
        {/* Logo + Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`w-full md:w-[300px] p-5 rounded-2xl backdrop-blur-md bg-white/5 border ${sectionBorder} ${innerGlow}`}
        >
          <img
            src={darkMode ? "./DarkLogo.gif" : "./LightLogo.gif"}
            alt="Shrinivesh Logo"
            className="w-44 mb-4"
          />
          <p className={`text-sm leading-relaxed ${textColor}`}>
            Shri Nivesh came into existence in the year 2016 when the promoter realized
            personal finance had a human side.
            <span className="text-[#ffaa00] ml-1 cursor-pointer hover:underline transition-all">
              Read More...
            </span>
          </p>
        </motion.div>

        {/* Combined Link Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex-1 min-w-[250px] p-5 rounded-2xl backdrop-blur-md bg-white/5 border ${sectionBorder} ${innerGlow}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h4 className={`font-semibold text-lg mb-3 ${headingColor}`}>
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className={`transition-all duration-300 ${textColor} ${linkHover} hover:translate-x-1 cursor-pointer`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`w-full md:w-[300px] p-5 rounded-2xl backdrop-blur-md bg-white/5 border ${sectionBorder} ${innerGlow}`}
        >
          <h4 className={`font-semibold text-lg mb-4 ${headingColor}`}>Drop Us a Line</h4>
          <div className={`flex items-center mb-3 ${textColor}`}>
            <FaEnvelope className="mr-2 text-xl" />
            <span>support@shrinivesh.com</span>
          </div>
          <div className={`flex items-center mb-6 ${textColor}`}>
            <FaPhoneAlt className="mr-2 text-xl" />
            <span>Toll Free: +91 9348112495</span>
          </div>

          <h4 className={`font-semibold text-lg mb-3 ${headingColor}`}>Follow Us</h4>
          <div className="flex flex-wrap gap-3">
            {socialIcons.map(({ icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl p-2 rounded-full bg-white/10"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: `0 0 12px ${darkMode ? "#10e2ea" : "#0e6371"}`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ color: darkMode ? "#10e2ea" : "#0e6371" }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-5 border-t border-gray-400/20 text-center text-xs text-gray-500">
        <p>
          © 2025 copyright all rights reserved by{" "}
          <span className="text-orange-500 font-medium">Shri Nivesh</span>
        </p>
        <p className="mt-1">
          Design & Developed by{" "}
          <a
            href="https://satish-portfolio-zeta.vercel.app/"
            className="text-blue-500 hover:underline hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Satish.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

