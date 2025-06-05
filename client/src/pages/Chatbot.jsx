import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiX, FiMessageSquare, FiRefreshCw } from "react-icons/fi";
import { Loader2 } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [hasFirstOptionBeenSelected, setHasFirstOptionBeenSelected] =
    useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your virtual assistant for Shivdan Singh Institute of Technology & Management.",
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
        "Administration Details",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    college: "SSITM-ChatBot",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // --- Program Data (added here) ---
  const academicPrograms = {
    "Diploma": [
      { "Course": "Civil Engineering", "Duration": "3 Years", "Seats": 60 },
      { "Course": "Mechanical Engineering", "Duration": "3 Years", "Seats": 60 },
      { "Course": "Electrical Engineering", "Duration": "3 Years", "Seats": 60 },
      { "Course": "Agricultural Engineering", "Duration": "3 Years", "Seats": 60 },
      { "Course": "D. Pharma", "Duration": "2 Years", "Seats": 60 }
    ],
    "Undergraduate": [
      { "Course": "Computer Science and Engineering", "Duration": "4 Years", "Seats": 90 },
      { "Course": "Information Technology", "Duration": "4 Years", "Seats": 60 },
      { "Course": "Electronics and Communication Engineering", "Duration": "4 Years", "Seats": 90 },
      { "Course": "Electrical Engineering", "Duration": "4 Years", "Seats": 180 },
      { "Course": "Mechanical Engineering", "Duration": "4 Years", "Seats": 60 },
      { "Course": "Biotechnology", "Duration": "4 Years", "Seats": 60 },
      { "Course": "Agricultural Engineering", "Duration": "4 Years", "Seats": 180 },
      { "Course": "Civil Engineering", "Duration": "4 Years", "Seats": 180 },
      { "Course": "B.Pharma", "Duration": "4 Years", "Seats": 100 },
      { "Course": "BBA", "Duration": "3 Years", "Seats": 60 },
      { "Course": "BCA", "Duration": "3 Years", "Seats": 60 },
      { "Course": "B.Ed", "Duration": "2 Years", "Seats": 100 }
    ],
    "Postgraduate": [
      { "Course": "Production Engineering", "Duration": "2 Years", "Seats": 18 },
      { "Course": "Computer Aided Design & Manufacturing", "Duration": "2 Years", "Seats": 18 },
      { "Course": "VLSI Design", "Duration": "2 Years", "Seats": 18 },
      { "Course": "Electronics Communication Engineering", "Duration": "2 Years", "Seats": 18 },
      { "Course": "Computer Science", "Duration": "2 Years", "Seats": 18 },
      { "Course": "MBA", "Duration": "2 Years", "Seats": 120 },
      { "Course": "MCA", "Duration": "3 Years", "Seats": 60 },
      { "Course": "M.Pharma - Pharmaceutical Chemistry", "Duration": "2 Years", "Seats": 8 },
      { "Course": "M.Pharma - Pharmaceutics", "Duration": "2 Years", "Seats": 12 }
    ]
  };
  // --- End Program Data ---


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

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm your virtual assistant for Shivdan Singh Institute of Technology & Management.",
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
          "Administration details",
        ],
      },
    ]);
    setShowContactForm(false);
    setHasFirstOptionBeenSelected(false);
    setInputValue("");
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

    // The logic below determines when the contact form should be shown.
    // Based on the previous conversation, it seems you want the form to appear
    // if "Administration Details" is selected, or if this is the first option
    // being selected and the user has gone through the initial options.
    // If you want to show the form for any first option selection, keep the `setHasFirstOptionBeenSelected` part.
    // If you only want it for "Administration Details", simplify this block.

    if (option === "Administration Details") {
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

    if (userInput.toLowerCase().includes("academic programs information") || userInput.toLowerCase().includes("program")) {
      response = "Here are the academic programs offered at SSITM:\n\n";

      // Format Diploma programs
      response += "--- Diploma Programs ---\n";
      academicPrograms.Diploma.forEach(program => {
        response += `• ${program.Course} (${program.Duration}) - ${program.Seats} Seats\n`;
      });
      response += "\n";

      // Format Undergraduate programs
      response += "--- Undergraduate Programs (B.Tech, B.Pharma, BBA, BCA, B.Ed) ---\n";
      academicPrograms.Undergraduate.forEach(program => {
        response += `• ${program.Course} (${program.Duration}) - ${program.Seats} Seats\n`;
      });
      response += "\n";

      // Format Postgraduate programs
      response += "--- Postgraduate Programs (M.Tech, MBA, MCA, M.Pharma) ---\n";
      academicPrograms.Postgraduate.forEach(program => {
        response += `• ${program.Course} (${program.Duration}) - ${program.Seats} Seats\n`;
      });

      options = [
        "B.Tech details",
        "D.Pharm details",
        "B.Pharm details",
        "M.Pharm details",
        "BCA details",
        "BBA details",
        "MCA details",
        "MBA details",
        "Administration Details",
      ];
    } else if (userInput.toLowerCase().includes("admission")) {
      response = `Admission Process:\n1. Register Yourself: siu.in8.nopaperforms.com/\n2. Verify Email\n3. Fill Application Form Online\n4. Pay Application Fee\n5. Submit Application\n\nFor B.Tech programs, JEE Main scores are considered.`;
    } else if (userInput.toLowerCase().includes("facility")) {
      response =
        "Our campus includes:\n- Modern labs and workshops\n- Computer centers\n- Library with digital resources\n- Hostel facilities\n- Sports complex\n- Transportation services";
      options = [
        "Lab details",
        "Library info",
        "Hostel info",
        "Sports facilities",
        "Transportation",
        "Administration Details",
      ];
    } else if (userInput.toLowerCase().includes("placement")) {
      response = `Our Placement Highlights:
- Strong industry connections with leading companies
- Regular campus recruitment drives
- Dedicated placement cell for training and opportunities
- Alumni network in top firms
      
Recent recruiters include top companies in various sectors.`;
      options = ["Administration Details"];
    } else if (userInput.toLowerCase().includes("b.tech")) {
      response = `B.Tech Programs (4 years):\n`;
        academicPrograms.Undergraduate.filter(p => p.Course.includes("Engineering") && p.Duration === "4 Years").forEach(p => {
            response += `• ${p.Course}\n`;
        });
        response += `\nEligibility: 10+2 with Physics, Chemistry, and Mathematics`;
    } else if (userInput.toLowerCase().includes("d.pharm")) {
      const dPharm = academicPrograms.Diploma.find(p => p.Course === "D. Pharma");
      response = `D.Pharm Program (${dPharm.Duration}):\n- Diploma in Pharmacy\n\nEligibility: 10+2 with Science (Physics, Chemistry, Biology/Mathematics)`;
    } else if (userInput.toLowerCase().includes("b.pharm")) {
      const bPharm = academicPrograms.Undergraduate.find(p => p.Course === "B.Pharma");
      response = `B.Pharm Program (${bPharm.Duration}):\n- Bachelor of Pharmacy\n\nEligibility: 10+2 with Physics, Chemistry, and Biology/Mathematics`;
    } else if (userInput.toLowerCase().includes("m.pharm")) {
        response = `M.Pharm Programs (2 years):\n`;
        academicPrograms.Postgraduate.filter(p => p.Course.includes("M.Pharma")).forEach(p => {
            response += `• ${p.Course}\n`;
        });
        response += `\nEligibility: B.Pharm degree from a recognized university`;
    } else if (userInput.toLowerCase().includes("bca")) {
        const bca = academicPrograms.Undergraduate.find(p => p.Course === "BCA");
        response = `BCA Program (${bca.Duration}):\n- Bachelor of Computer Applications\n\nEligibility: 10+2 in any stream`;
    } else if (userInput.toLowerCase().includes("bba")) {
        const bba = academicPrograms.Undergraduate.find(p => p.Course === "BBA");
        response = `BBA Program (${bba.Duration}):\n- Bachelor of Business Administration\n\nEligibility: 10+2 in any stream`;
    } else if (userInput.toLowerCase().includes("mca")) {
        const mca = academicPrograms.Postgraduate.find(p => p.Course === "MCA");
        response = `MCA Program (${mca.Duration}):\n- Master of Computer Applications\n\nEligibility: Bachelor's degree with Mathematics at 10+2 or graduation level`;
    } else if (userInput.toLowerCase().includes("mba")) {
        const mba = academicPrograms.Postgraduate.find(p => p.Course === "MBA");
        response = `MBA Program (${mba.Duration}):\n- Master of Business Administration\n\nEligibility: Bachelor's degree in any discipline`;
    } else {
      response = "I'm here to assist you with any queries about Shivdan Singh Institute of Technology & Management's programs or facilities.";
      options = [
        "Academic programs information",
        "Admission process",
        "Campus facilities",
        "Placement details",
        "Administration Details",
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
        college: "SSITM-ChatBot",
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
            "Administration Details",
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
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FiMessageSquare className="text-white text-2xl" />
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
                <h3 className="font-bold">SSITM Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={resetChat}
                className="text-white hover:text-blue-200 transition-colors p-1"
                title="Reset chat"
              >
                <FiRefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChatbot}
                className="text-white hover:text-blue-200 transition-colors p-1"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
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
                  Fill the Form
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