import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiX, FiMessageSquare } from "react-icons/fi";
import { Loader2 } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [hasFirstOptionBeenSelected, setHasFirstOptionBeenSelected] =
    useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant for Shivdan Singh Institute of Technology & Management.",
      sender: "bot",
      time: getCurrentTime(),
      options: null,
    },
    {
      id: 2,
      text: "How can I help you today?",
      sender: "bot",
      time: getCurrentTime(),
      options: [
        "Academic programs information",
        "Admission process",
        "Campus facilities",
        "Placement details",
        "Contact administration",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showContactForm]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowContactForm(false);
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      time: getCurrentTime(),
      options: null,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      generateBotResponse(inputValue);
    }, 800);
  };

  const handleOptionSelect = (option) => {
    const newMessage = {
      id: messages.length + 1,
      text: option,
      sender: "user",
      time: getCurrentTime(),
      options: null,
    };

    setMessages([...messages, newMessage]);

    if (!hasFirstOptionBeenSelected) {
      setHasFirstOptionBeenSelected(true);
      setShowContactForm(true);
      return;
    }

    if (option === "Contact administration") {
      setShowContactForm(true);
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Please fill out this form to contact our administration team. We'll get back to you shortly.",
          sender: "bot",
          time: getCurrentTime(),
          options: null,
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 500);
    } else {
      setTimeout(() => {
        generateBotResponse(option);
      }, 500);
    }
  };

  const generateBotResponse = (userInput) => {
    let response;
    let options = null;

    if (userInput.toLowerCase().includes("program")) {
      response =
        "We offer the following pharmacy courses:\n\n• D.Pharm\n• B.Pharm\n• M.Pharm";
     options = [
    "B.Tech",
    "D.Pharm details",
    "B.Pharm details",
    "M.Pharm details",
    "BCA details",
    "BBA details",
    "MCA details",
    "MBA details",
    "Contact administration",
];
    } else if (userInput.toLowerCase().includes("admission")) {
      response = `Admission Process:\n1. Register Yourself: siu.in8.nopaperforms.com/\n2. Verify Email\n3. Fill Application Form Online\n4. Pay Application Fee\n5. Submit Application`;
    } else if (userInput.toLowerCase().includes("facility")) {
      response =
        "Our campus includes modern labs, a library, hostels, sports facilities, and more.";
      options = [
        "Lab details",
        "Library info",
        "Hostel info",
        "Sports facilities",
        "Contact administration",
      ];
    } else if (userInput.toLowerCase().includes("placement")) {
      response = `Recent Placement Highlights:
- Shaloni Devi → Max Health Care → 18 LPA
- Harsh Dixit → Eclat Health → 4 LPA
- Mansi Sahu → Eclat Health → 3 LPA
- Surendra Pratap → Eclat Health → 4 LPA
- Pranjali Singh → Eclat Health → 4 LPA
- Ajay Pratap Yadav → Max Health Care → 3 LPA
- Piyush Pandey → Max Health Care → 3 LPA
- Pratit Srivastava → Max Health Care → 4 LPA`;
      options = ["Contact administration"];
    } else {
      response = "I'm here to assist you with any queries about our institute.";
      options = [
        "Academic programs information",
        "Admission process",
        "Campus facilities",
        "Placement details",
        "Contact administration",
      ];
    }

    const botResponse = {
      id: messages.length + 2,
      text: response,
      sender: "bot",
      time: getCurrentTime(),
      options: options,
    };

    setMessages((prev) => [...prev, botResponse]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("Sending...");

    try {
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormStatus("Thank you for contacting us! We'll respond soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "bot-subject",
        message: "bot-message",
      });

      const newMessage = {
        id: messages.length + 1,
        text: "I've submitted the contact form to the administration team.",
        sender: "user",
        time: getCurrentTime(),
        options: null,
      };

      setMessages((prev) => [...prev, newMessage]);

      setTimeout(() => {
        setShowContactForm(false);
        const fallbackBotResponse = {
          id: messages.length + 2,
          text: "Thanks for submitting the form! Is there anything else I can assist you with?",
          sender: "bot",
          time: getCurrentTime(),
          options: [
            "Academic programs information",
            "Admission process",
            "Campus facilities",
            "Placement details",
            "Contact administration",
          ],
        };
        setMessages((prev) => [...prev, fallbackBotResponse]);
      }, 1000);
    } catch (error) {
      console.error("Error!", error.message);
      setFormStatus("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 lg:text-xl">
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FiMessageSquare className="text-white text-xl" />
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-[32rem] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <FiMessageSquare className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">SITM Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-tr-none"
                      : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-200"
                  }`}
                >
                  {message.text.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
                {message.options && !showContactForm && (
                  <div className="mt-2 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className="block w-full text-left p-2 text-sm bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {showContactForm && (
              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Contact Form
                </h4>
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Full Name"
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="Email Address"
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Phone Number"
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 text-sm rounded font-medium transition ${
                      loading
                        ? "bg-blue-300 cursor-not-allowed text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin w-4 h-4" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="w-4 h-4" />
                          <span>Submit</span>
                        </>
                      )}
                    </div>
                  </button>
                  {formStatus && (
                    <p className="text-xs text-center mt-2 text-blue-600">
                      {formStatus}
                    </p>
                  )}
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {!showContactForm && (
            <div className="p-3 bg-white border-t border-gray-200 flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  inputValue.trim()
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <FiSend />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;