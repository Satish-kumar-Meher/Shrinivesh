import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { MessageCircle, Mic, Send, X, Bot } from 'lucide-react';

const starterSuggestions = [
  'What is SIP and how does it work?',
  'What services does Shri Nivesh offer?',
  'How do you help with retirement planning?',
  'Is SIP better than lump sum?',
  'How can I start with small monthly investments?',
];

function useSpeechRecognizer() {
  const recognitionRef = useRef(null);
  const [isSupported, setIsSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = 'en-IN';
      recog.interimResults = false;
      recognitionRef.current = recog;
      setIsSupported(true);
    }
  }, []);

  const start = ({ onResult, onEnd, language }) => {
    if (!recognitionRef.current) return;
    const recog = recognitionRef.current;
    try {
      if (language) recog.lang = language;
      recog.onresult = (e) => {
        const transcript = Array.from(e.results)
          .map((r) => r[0].transcript)
          .join(' ');
        onResult?.(transcript);
      };
      recog.onend = () => {
        setIsListening(false);
        onEnd?.();
      };
      setIsListening(true);
      recog.start();
    } catch (_) {
      setIsListening(false);
    }
  };

  const stop = () => {
    try { recognitionRef.current?.stop(); } catch (_) {}
    setIsListening(false);
  };

  return { isSupported, isListening, start, stop };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm Shrinivesh AI. I can answer general questions about mutual funds, SIPs, insurance basics, and our services. Ask me anything or pick a suggestion below.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const scrollRef = useRef(null);
  const { isSupported, isListening, start, stop } = useSpeechRecognizer();
  const { mode: darkMode } = useSelector((state) => state.screenMode || { mode: false });
  const [shake, setShake] = useState(false);
  const [recognitionLang, setRecognitionLang] = useState('en-IN');

  // periodic shake animation when closed
  useEffect(() => {
    let intervalId;
    if (!isOpen) {
      intervalId = setInterval(() => {
        setShake(true);
        setTimeout(() => setShake(false), 900);
      }, 4000);
    }
    return () => { if (intervalId) clearInterval(intervalId); };
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  function LoadingDots() {
    const [dots, setDots] = useState('');
    useEffect(() => {
      setDots('');
      const id = setInterval(() => {
        setDots((d) => (d.length >= 3 ? '' : d + '.'));
      }, 400);
      return () => clearInterval(id);
    }, []);
    return <span>Generating{dots}</span>;
  }

  const handleSend = async (text) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed || isSending) return;
    const nextMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setIsSending(true);
    setShowLoader(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        setMessages((cur) => [
          ...cur,
          { role: 'assistant', content: 'Missing VITE_GEMINI_API_KEY in client env. Add it to .env and restart dev server.' },
        ]);
        return;
      }

      const systemPrompt =
        "You are Shrinivesh AI, the virtual assistant for the Shri Nivesh financial advisory website. Represent Shri Nivesh professionally and help users with concise, clear information. About Shri Nivesh: We focus on people-first financial planning, helping individuals and families make smarter decisions with trust, clarity, and personalized guidance. Since 2017, we support three pillars of personal finance: Life (Life Insurance), Health (Medical/Health Insurance), and Wealth (goal-based investing). Our services include: Mutual Fund Investments; SIP advisory; Life Insurance planning; Health Insurance coverage; PMS (Portfolio Management Services); AIF (Alternative Investment Funds); Retirement Planning solutions; Housing Loan assistance; Loan Against Mutual Funds; and Capital Gain Bonds (54EC). When asked about Shri Nivesh or our services, answer confidently using this context. Do not say you are not associated; you represent Shri Nivesh here. Avoid personalized financial advice; keep guidance general and suggest consulting an advisor for specifics.";

      // Prepare payload and candidate models for failover
      const candidateModels = [
        'gemini-2.5-flash',
        'gemini-1.5-flash',
        'gemini-1.5-flash-8b',
        'gemini-1.5-pro',
        'gemini-1.0-pro',
      ];

      const geminiPayload = {
        systemInstruction: { role: 'system', parts: [{ text: systemPrompt }] },
        contents: nextMessages.map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        })),
        generationConfig: { temperature: 0.3 },
      };

      const errorsTried = [];
      let finalAnswer = null;
      for (const model of candidateModels) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(geminiPayload),
          });
          const data = await res.json();
          if (!res.ok) {
            const errMsg = data?.error?.message || `HTTP ${res.status}`;
            errorsTried.push(`${model}: ${errMsg}`);
            const retriable = /overloaded|try again later/i.test(errMsg) || res.status === 429 || res.status === 503;
            if (retriable) continue;
            continue;
          }
          const assistantText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (assistantText) { finalAnswer = assistantText; break; }
          errorsTried.push(`${model}: empty response`);
        } catch (err) {
          errorsTried.push(`${model}: ${err?.message || 'network error'}`);
          continue;
        }
      }

      if (finalAnswer) {
        setMessages((cur) => [...cur, { role: 'assistant', content: finalAnswer }]);
      } else {
        setMessages((cur) => [
          ...cur,
          { role: 'assistant', content: `Sorry, all models are busy. Tried: ${errorsTried.join(' | ')}` },
        ]);
      }
    } catch (e) {
      setMessages((cur) => [
        ...cur,
        { role: 'assistant', content: 'There was an error reaching Gemini. Please try again.' },
      ]);
    } finally {
      setIsSending(false);
      setShowLoader(false);
    }
  };

  const toggleOpen = () => setIsOpen((v) => !v);

  const bubbleClasses = useMemo(() => {
    const base = 'fixed right-4 md:right-6 bottom-24 md:bottom-6 z-50 flex items-center gap-2 md:gap-2.5 px-2 py-1 md:px-3 md:py-2 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition select-none';
    return darkMode ? `${base} bg-[#10e2ea] text-black` : `${base} bg-[#0e6371] text-white`;
  }, [darkMode]);

  const panelClasses = useMemo(() => {
    const base = 'fixed right-4 md:right-6 bottom-[104px] md:bottom-24 z-50 w-[90vw] max-w-[360px] h-[55vh] max-h-[520px] min-h-[360px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border';
    return darkMode ? `${base} bg-[#0b0d1a] border-white/15` : `${base} bg-white border-gray-200`;
  }, [darkMode]);

  return (
    <>
      {isOpen && (
        <div className={panelClasses} role="dialog" aria-label="Chat with Shrinivesh AI">
          <div className={`flex items-center justify-between px-4 py-3 ${darkMode ? 'bg-[#0e6371]/20 text-white' : 'bg-[#0e6371] text-white'}`}>
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="font-semibold text-sm">Shrinivesh AI</span>
            </div>
            <div className="flex items-center gap-2">
              {isSupported && (
                <select
                  value={recognitionLang}
                  onChange={(e) => setRecognitionLang(e.target.value)}
                  className={`text-xs rounded-md px-2 py-1 border ${darkMode ? 'bg-[#0f172a] text-white border-white/10' : 'bg-white text-gray-800 border-gray-300'}`}
                  title="Voice input language"
                >
                  <option value="en-IN">English / Hinglish</option>
                  <option value="hi-IN">Hindi</option>
                  <option value="or-IN">Odia</option>
                  <option value="bn-IN">Bengali</option>
                  <option value="ta-IN">Tamil</option>
                  <option value="te-IN">Telugu</option>
                </select>
              )}
              <button onClick={toggleOpen} className="p-1 rounded hover:bg-white/10" aria-label="Close chat">
                <X size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className={`flex-1 overflow-y-auto overscroll-contain px-3 py-2 ${darkMode ? 'bg-[#0b0d1a]' : 'bg-gray-50'}`}
            onWheelCapture={(e) => { e.stopPropagation(); }}
            onTouchMoveCapture={(e) => { e.stopPropagation(); }}
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`my-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-[#0e6371] text-white rounded-br-sm'
                      : darkMode
                        ? 'bg-[#0f172a] text-gray-100 border border-white/10 rounded-bl-sm'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {showLoader && (
              <div className="my-2 flex justify-start">
                <div className={`${darkMode ? 'bg-[#0f172a] text-gray-100 border border-white/10' : 'bg-white text-gray-800 border border-gray-200'} max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-sm`}>
                  <LoadingDots />
                </div>
              </div>
            )}

            {messages.length <= 2 && (
              <div className="mt-3">
                <div className="text-[11px] text-gray-500 mb-1">Try asking:</div>
                <div className="flex flex-wrap gap-2">
                  {starterSuggestions.map((s) => (
                    <button
                      key={s}
                      className="text-[12px] px-2 py-1 rounded-full border border-gray-300 bg-white hover:bg-gray-100"
                      onClick={() => handleSend(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            className={`p-2 border-t flex items-center gap-2 ${darkMode ? 'bg-[#0b0d1a] border-white/10' : 'bg-white border-gray-200'}`}
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className={`flex-1 text-sm px-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#0e6371] ${darkMode ? 'bg-[#0f172a] text-white placeholder:text-gray-400 border-white/10' : 'bg-white text-black border-gray-300'}`}
            />
            {isSupported && (
              <button
                type="button"
                onClick={() =>
                  isListening
                    ? stop()
                    : start({
                        onResult: (t) => setInput((prev) => (prev ? prev + ' ' + t : t)),
                        language: recognitionLang,
                      })
                }
                className={`p-2 rounded-full border ${
                  isListening
                    ? 'bg-red-50 border-red-300 text-red-600'
                    : darkMode
                      ? 'bg-[#0f172a] border-white/10 text-gray-200'
                      : 'bg-gray-50 border-gray-300 text-gray-700'
                }`}
                aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
                title={isListening ? 'Stop voice input' : 'Start voice input'}
              >
                <Mic size={18} />
              </button>
            )}
            <button type="submit" disabled={isSending} className="p-2 rounded-full bg-[#0e6371] text-white disabled:opacity-60" aria-label="Send">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <motion.button
          onClick={toggleOpen}
          className={bubbleClasses}
          aria-expanded={isOpen}
          aria-controls="chatbot-panel"
          animate={
            shake
              ? { x: [0, -6, 6, -6, 6, 0], rotate: [0, -6, 6, -6, 6, 0], scale: [1, 1.08, 1, 1.08, 1] }
              : { x: 0, rotate: 0, scale: 1 }
          }
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <span className={`flex items-center justify-center rounded-full w-6 h-6 md:w-7 md:h-7 ${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-[#0e6371]'}`}>
            <Bot size={16} />
          </span>
          <span className="text-[11px] md:text-[12px] font-semibold">Ask Shrinivesh AI</span>
        </motion.button>
      )}
    </>
  );
}