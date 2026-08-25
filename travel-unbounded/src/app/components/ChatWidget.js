"use client";
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false); // read AI replies aloud
  const scrollRef = useRef(null);
  const recognitionRef = useRef(null);
  const loadingRef = useRef(false); // mirrors `loading` for use inside stable callbacks

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  // Keep loadingRef in sync so sendMessage (called from the recognition
  // handler, which is set up once) always sees the current loading state.
  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  const sendMessage = async (text) => {
    const messageText = (text ?? input).trim();
    if (!messageText) return;
    // Guard against double-submit (e.g. Enter + click, or voice input
    // firing while a request is already in flight).
    if (loadingRef.current) return;

    const userMsg = { role: "user", content: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    loadingRef.current = true;

    try {
            const res = await fetch('https://travel-unbounded-backend.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
        });
      const data = await res.json();

      if (!res.ok) {
        const errText = "Sorry, something went wrong on my end. Please try again.";
        setMessages(prev => [...prev, { role: "ai", content: errText }]);
        return;
      }

      setMessages(prev => [...prev, { role: "ai", content: data.text, fromCache: data.fromCache }]);
      if (speechEnabled) speak(data.text);
    } catch (err) {
      const errText = "Sorry, I'm having trouble connecting.";
      setMessages(prev => [...prev, { role: "ai", content: errText }]);
      if (speechEnabled) speak(errText);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  // Set up speech recognition (Chrome/Edge only — feature-detected)
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceSupported(false);
      return;
    }
    setVoiceSupported(true);

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      // Auto-send once speech is captured. Pass the transcript directly
      // rather than relying on `input` state, which may not have
      // committed yet inside this closure.
      sendMessage(transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setInput("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    
    const plain = text
      .replace(/[*_#`~>|]/g, "")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1");
    const utterance = new SpeechSynthesisUtterance(plain);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel(); // stop any prior speech before starting new
    window.speechSynthesis.speak(utterance);
  };

  const handleChat = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
     
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#A65E1A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2"
        >
          <MessageCircle size={24} /> <span className="font-bold text-sm">AI Planner</span>
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="p-5 bg-[#A65E1A] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">Travel Expert AI</span>
            </div>
            <div className="flex items-center gap-2">
              {loading && <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full animate-pulse">Typing...</span>}
              <button
                onClick={() => {
                  const next = !speechEnabled;
                  setSpeechEnabled(next);
                  if (!next) window.speechSynthesis?.cancel();
                }}
                aria-label={speechEnabled ? "Mute voice replies" : "Enable voice replies"}
                title={speechEnabled ? "Mute voice replies" : "Read replies aloud"}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                {speechEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FCFBF7]">
            {messages.length === 0 && (
              <p className="text-center text-gray-400 text-xs mt-10">Ask me for a 3-day itinerary for any destination!</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user'
                    ? 'bg-orange-600 text-white rounded-br-none'
                    : 'bg-white border text-gray-700 rounded-bl-none prose prose-sm prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-ol:my-1 prose-table:my-2 max-w-none'
                }`}>
                  {m.role === 'ai' ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                  ) : (
                    m.content
                  )}
                  {m.fromCache && <div className="text-[8px] mt-1 opacity-50 italic">Served instantly from cache</div>}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border text-gray-400 rounded-2xl rounded-bl-none px-4 py-3 text-sm shadow-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleChat} className="p-4 border-t bg-white flex gap-2 items-center">
            {voiceSupported && (
              <button
                type="button"
                onClick={toggleListening}
                aria-label={isListening ? "Stop listening" : "Speak your question"}
                title={isListening ? "Stop listening" : "Speak your question"}
                className={`p-2 rounded-xl transition-colors flex-shrink-0 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white'
                }`}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
            )}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? "Listening..." : "Where to next?"}
              className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-orange-200"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-100 p-2 rounded-xl text-orange-600 hover:bg-orange-600 hover:text-white transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}