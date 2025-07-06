import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Bubbles } from "../../utils/Bubble";
// import SEO from "../../utils/SEO";

const nriFaqs = [
  {
    question: "Who is an NRI?",
    answer:
      "According to the Foreign Exchange Management Act (FEMA), 1999, an NRI is a person resident outside India who is either a citizen of India or a person of Indian origin (PIO). A person who has been in India for 182 days or more during a financial year and 365 days or more during the preceding four financial years qualifies as an NRI. NRIs can continue to enjoy non-resident status if their stay is less than 182 days in a year. Those deputed abroad for jobs over 6 months are also considered NRIs."
  },
  {
    question: "Who is a person of Indian origin (PIO)?",
    answer:
      "A PIO is an individual who at any time held an Indian passport or whose parents or grandparents were Indian citizens by virtue of the Constitution of India."
  },
  {
    question: "What are the different types of rupee accounts that are permitted and can be maintained by NRIs?",
    answer: "NRIs can maintain NRE, NRO, and FCNR accounts in India."
  },
  {
    question: "What are NRE and NRO accounts?",
    answer: "NRE accounts are for income earned outside India and are fully repatriable. NRO accounts are for income earned in India and have restricted repatriability."
  },
  {
    question: "What is the distinction between NRE and NRO accounts?",
    answer: "NRE accounts are tax-free and fully repatriable, whereas NRO accounts are taxable and have limits on repatriation."
  },
  {
    question: "Which Mutual Fund houses (AMCs) accept investments from NRIs or PIOs?",
    answer: "Most major AMCs accept investments from NRIs, except in certain countries like the USA and Canada due to regulatory restrictions."
  },
  {
    question: "Can NRIs from rest of the world (except from US and Canada) invest in Indian Mutual Funds?",
    answer: "Yes, NRIs from most countries can invest in Indian Mutual Funds. Restrictions apply for US and Canadian NRIs."
  },
  {
    question: "How are the dividends and redemption proceeds paid to NRIs?",
    answer: "Proceeds are usually credited to NRE/NRO accounts as per the investor’s instructions."
  },
  {
    question: "Is the indexation benefit allowed to NRIs?",
    answer: "Yes, indexation benefit is allowed for long-term capital gains in debt mutual funds."
  },
  {
    question: "What is the taxation of mutual funds for NRIs?",
    answer: "NRIs are subject to TDS on capital gains, and tax rates depend on the type and duration of investment."
  },
  {
    question: "What are Growth and Dividend Options in a Mutual Fund Scheme?",
    answer: "Growth option reinvests gains into the fund. Dividend option pays gains to investors periodically."
  },
  {
    question: "Is mutual fund dividends tax free for NRIs?",
    answer: "No, dividends are taxed as per slab or applicable tax rules and are subject to TDS."
  },
  {
    question: "How and when Tax is deducted (TDS) at source in case of NRIs?",
    answer: "TDS is deducted at the time of redemption or dividend payout based on current tax laws."
  },
  {
    question: "When certificate of TDS is issued to NRIs?",
    answer: "TDS certificates (Form 16A) are issued quarterly by the fund house or its registrar."
  },
  {
    question: "What are the KYC and FATCA requirements in case of NRIs?",
    answer: "NRIs need to complete KYC and FATCA declarations before investing, with valid overseas address and ID proofs."
  },
  {
    question: "How to get KYC and FATCA requirements fulfilled in India?",
    answer: "This can be done through mutual fund websites, banks, or intermediaries. Some require physical verification or notarized documents."
  },
  {
    question: "How to get In-person verification (IPV) done if the NRI is not in India?",
    answer: "IPV can be completed via video call with a registered intermediary or through an embassy attestation."
  },
  {
    question: "Can NRIs invest through Power of Attorney?",
    answer: "Yes, NRIs can appoint a Power of Attorney (PoA) holder to invest on their behalf."
  },
  {
    question: "Can a NRI make a nomination in his investments?",
    answer: "Yes, NRIs can nominate individuals just like resident investors."
  },
  {
    question: "Can a NRI invest in Mutual Fund Tax Savings Schemes?",
    answer: "Yes, NRIs can invest in ELSS schemes and claim deductions under Section 80C."
  }
];

const NriFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0e1525] to-[#081824]"
    : "bg-gradient-to-br from-[#f9fcfe] to-[#dff4ff]";

  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const divider =
    "h-[2px] w-full bg-gradient-to-r from-transparent via-[#10e2ea] to-transparent my-6";

  const glow = darkMode
    ? "shadow-[inset_0_0_10px_rgba(16,226,234,0.2),0_0_20px_rgba(16,226,234,0.1)]"
    : "shadow-[inset_0_0_10px_rgba(14,99,113,0.1),0_0_20px_rgba(14,99,113,0.08)]";

  return (
    <section
      className={`relative z-0 min-h-screen px-4 py-20 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500`}
    > 
              {/* <SEO tittle={"NRI FAQ Page"} description={"This is the NRI FAQ page"} /> */}
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl font-bold ${textColor}`}
        >
          NRI Corner <span className={highlight}>FAQs</span>
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {nriFaqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05, type: "spring" }}
            viewport={{ once: true }}
            className={`p-5 rounded-xl backdrop-blur-xl ${cardGlass} border ${glow} ${
              darkMode ? "border-[#10e2ea]/40" : "border-[#0e6371]/30"
            }`}
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg sm:text-xl font-semibold ${textColor}`}>
                {faq.question}
              </h3>
              <span className={highlight}>
                {openIndex === index ? <Minus /> : <Plus />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`overflow-hidden mt-3 text-sm sm:text-base leading-relaxed ${textColor} opacity-90`}
                >
                  <div>{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={divider}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NriFaqs;

