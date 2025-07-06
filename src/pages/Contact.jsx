
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  SendHorizonal,
  FileText,
} from "lucide-react";
import { Bubbles } from "../utils/Bubble";
// import SEO from "../utils/SEO";

const Contact = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const borderColor = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";
  const glow =
    darkMode
      ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]"
      : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]";

  const inputBase =
    "w-full pl-10 pr-4 py-3 rounded-2xl border backdrop-blur-xl outline-none transition-all duration-300";

  const inputBg = darkMode
    ? "bg-gradient-to-br from-white/10 to-white/5 text-white placeholder-white/60"
    : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/40 text-black placeholder-black/50";

  const inputFocusBorder = darkMode
    ? "focus:border-[#10e2ea] focus:ring-2 focus:ring-[#10e2ea]/40"
    : "focus:border-[#0e6371] focus:ring-2 focus:ring-[#0e6371]/30";

  const textareaStyles = `${inputBase} ${inputBg} ${inputFocusBorder}  resize-none`;

  const inputStyles = `${inputBase} ${inputBg} ${inputFocusBorder}`;

  return (
    <section
      className={`relative z-0 py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
    >
      {/* <SEO tittle={"Contact Page"} description={"This is the contact page"} /> */}
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* LEFT: Contact Info */}
        <motion.div
          className="space-y-8 mt-10 md:mt-35"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl sm:text-4xl font-bold ${textColor}`}>
            <span className={highlight}> Contact</span> Us
          </h2>
          <p className={`text-xl font-semibold ${textColor}`}>
            We're Here To Answer Your Questions!
          </p>

          <div className="space-y-5 text-base sm:text-lg">
            <div className="flex items-center gap-4">
              <Phone className={`${highlight}`} />
              <span className={textColor}>+91 9348112495</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className={`${highlight}`} />
              <span className={textColor}>support@shrinivesh.com</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className={`${highlight} mt-1`} />
              <span className={textColor}>
                ShriNivesh, Nuapada, Odisha <br />
                Nuapada - 766108.
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          className={`w-full p-6 mt-12 rounded-2xl border ${borderColor} ${cardGlass} ${glow} space-y-5`}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-xl font-bold ${textColor}`}>Get In Touch</h3>
          <p className={`text-sm ${textColor} opacity-80`}>
            You can reach us anytime
          </p>

          <div className="space-y-4">
            {[{ icon: <User />, placeholder: "Name", type: "text" },
              { icon: <Mail />, placeholder: "Email", type: "email" },
              { icon: <Phone />, placeholder: "Phone", type: "tel" },
              { icon: <FileText />, placeholder: "Subject", type: "text" }
            ].map(({ icon, placeholder, type }, i) => (
              <div key={i} className="relative">
                <div className="absolute left-3 top-3.5 text-xl text-current opacity-60">
                  {icon}
                </div>
                <input
                  type={type}
                  placeholder={placeholder}
                  className={inputStyles}
                />
              </div>
            ))}

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 text-current opacity-60" />
              <textarea
                placeholder="Message"
                rows={4}
                className={textareaStyles}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`mt-4 w-full py-3 rounded-2xl font-semibold transition duration-300 flex items-center justify-center gap-2 ${
              darkMode
                ? "bg-[#10e2ea] text-black hover:bg-[#0bc1d0]"
                : "bg-[#0e6371] text-white hover:bg-[#084c57]"
            }`}
          >
            Submit Request <SendHorizonal size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
