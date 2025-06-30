import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";
import { FaRobot, FaTimes } from "react-icons/fa";
import { fetchAPOD, fetchMarsPhotos, fetchNEO } from "../api/nasaApi";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! Ask me anything about APOD, Mars Rover, or Near-Earth Objects. 🌌", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const chatboxRef = useRef(null);

    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (customQuestion = null) => {
        const question = customQuestion || input;
        if (!question.trim()) return;

        const lowerInput = question.toLowerCase();
        const userMessage = { text: question, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);

        const allowedKeywords = ['apod', 'picture of the day', 'mars', 'rover', 'asteroid', 'neo', 'near-earth'];
        const isAllowed = allowedKeywords.some(keyword => lowerInput.includes(keyword));

        if (!isAllowed) {
            const botResponse = { text: "❌ Sorry, I can only help with NASA Explorer topics: APOD, Mars Rover photos, or Near-Earth Objects.", sender: "bot" };
            setMessages((prev) => [...prev, botResponse]);
            setInput("");
            return;
        }

        let botResponse = { text: "I'm not sure about that. Try asking about APOD, Mars Rover, or NEO! 🚀", sender: "bot" };

        try {
            if (lowerInput.includes("apod") || lowerInput.includes("picture of the day")) {
                const data = await fetchAPOD();
                botResponse = {
                    text: (
                        <>
                            <strong>Today's APOD:</strong> {data.title} <br />
                            <img src={data.url} alt="APOD" className="chatbot-image" />
                        </>
                    ),
                    sender: "bot"
                };
            } else if (lowerInput.includes("mars") || lowerInput.includes("rover")) {
                const data = await fetchMarsPhotos();
                const imageUrl = data?.photos?.[0]?.img_src || "No recent Mars photos available.";
                botResponse = {
                    text: (
                        <>
                            <strong>Here's a Mars Rover image:</strong> <br />
                            <img src={imageUrl} alt="Mars Rover" className="chatbot-image" />
                        </>
                    ),
                    sender: "bot"
                };
            } else if (lowerInput.includes("asteroid") || lowerInput.includes("neo") || lowerInput.includes("near-earth")) {
                const data = await fetchNEO();
                const dateKey = Object.keys(data?.near_earth_objects)?.[0];
                const asteroidName = data?.near_earth_objects?.[dateKey]?.[0]?.name || "No asteroid data found.";
                botResponse = { text: `☄️ Nearest asteroid today: ${asteroidName}`, sender: "bot" };
            }
        } catch {
            botResponse = { text: "Oops! I couldn't fetch data right now. Try again later!", sender: "bot" };
        }

        setMessages((prev) => [...prev, botResponse]);
        setInput("");
    };

    return (
        <div className="chatbot-container">
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaRobot />} NASA Chatbot
            </button>

            {isOpen && (
                <div className="chatbox">
                    <div className="chatbox-messages" ref={chatboxRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* ✅ Quick Suggestions */}
                    <div className="quick-suggestions">
                        <button onClick={() => handleSendMessage("Show APOD")}>📸 Show APOD</button>
                        <button onClick={() => handleSendMessage("Show Mars Rover photo")}>🚀 Show Mars Rover</button>
                        <button onClick={() => handleSendMessage("Show NEO data")}>☄️ Show NEO</button>
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Ask about APOD, Mars Rover, or NEO..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        />
                        <button onClick={() => handleSendMessage()}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;