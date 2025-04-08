// Chatbot.jsx
import React, { useState } from "react";
import "../styles/Chatbot.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your Gemini API key
const API_KEY = "AIzaSyBxGRV21M-dUlZXo-s48RLvzpDGJNuFa3Y";
const genAI = new GoogleGenerativeAI(API_KEY);

const Chatbot = () => {
  const [task, setTask] = useState("");
  const [timeTaken, setTimeTaken] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!task || !timeTaken) return alert("Please enter both task and time taken");

    setLoading(true);
    const prompt = `I completed the task: "${task}" in ${timeTaken} minutes. Give feedback on my productivity and suggest improvements if any.`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const text = await result.response.text();
      setResponse(text);
    } catch (error) {
      console.error("Gemini API error:", error);
      setResponse("Sorry, something went wrong with the AI response.");
    }

    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <h3>AI Productivity Assistant</h3>
      <input
        type="text"
        placeholder="Enter your task (e.g., Writing report)"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="number"
        placeholder="Time taken (in minutes)"
        value={timeTaken}
        onChange={(e) => setTimeTaken(e.target.value)}
      />
      <button onClick={handleSend} disabled={loading}>
        {loading ? "Analyzing..." : "Get Feedback"}
      </button>

      {response && (
        <div className="response-box">
          <h4>Gemini says:</h4>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
