import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";
import { FaRobot, FaTimes } from "react-icons/fa";
import { fetchAPOD, fetchMarsPhotos, fetchNEO } from "../api/nasaApi";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! Ask me anything about space. 🌌", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const chatboxRef = useRef(null);

    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);

        let botResponse = { text: "I'm not sure about that. Try asking about NASA data! 🚀", sender: "bot" };

        try {
            if (input.toLowerCase().includes("apod") || input.toLowerCase().includes("picture of the day")) {
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
            } else if (input.toLowerCase().includes("mars")) {
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
            } else if (input.toLowerCase().includes("asteroid") || input.toLowerCase().includes("neo")) {
                const data = await fetchNEO();
                const dateKey = Object.keys(data?.near_earth_objects)?.[0];
                const asteroidName = data?.near_earth_objects?.[dateKey]?.[0]?.name || "No asteroid data found.";
                botResponse = { text: `Nearest asteroid today: ${asteroidName}`, sender: "bot" };
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
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Ask about NASA, APOD, Mars..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
