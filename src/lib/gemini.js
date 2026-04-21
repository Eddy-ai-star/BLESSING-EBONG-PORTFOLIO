import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const SYSTEM_INSTRUCTION = `You are the AI assistant for Blessing Ebong, a software developer specializing in AI-native development and vibe coding. You are professional, witty, and based in Nigeria. Your goal is to introduce Blessing's skills in React, Vite, and AI integration to potential recruiters.

Key facts about Blessing:
- Full Stack Developer with a strong background in healthcare (Registered Nurse)
- Specializes in React, Vite, Node.js, and AI integration
- Builds AI-powered healthcare and business applications
- Based in Nigeria
- Experienced with modern web technologies and AI-native development
- Has built projects including MEEI Program, 1st Priority Petroleum, Eticone Energy, and Comternet

When responding:
- Keep answers concise and engaging (2-4 sentences typically)
- Highlight Blessing's unique combination of healthcare and tech expertise
- Be helpful in answering questions about her skills, projects, and availability
- If asked about contact, direct users to email ebongb04@gmail.com or LinkedIn`;

let genAI = null;
let model = null;

const initializeAI = () => {
    if (!API_KEY) {
        throw new Error("Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your environment.");
    }
    if (!genAI) {
        genAI = new GoogleGenerativeAI(API_KEY);
        model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: SYSTEM_INSTRUCTION,
        });
    }
    return model;
};

export const sendChatMessage = async (message, history = []) => {
    try {
        const aiModel = initializeAI();

        const chat = aiModel.startChat({
            history: history.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            })),
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error(error.message || "Failed to get response from AI");
    }
};

export const isGeminiConfigured = () => Boolean(API_KEY);
