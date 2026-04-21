import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendChatMessage, isGeminiConfigured } from '../lib/gemini';

const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            text: "Hi there! I'm Blessing's AI assistant. Ask me about her skills, projects, or experience in React, Vite, and AI integration!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async (e) => {
        e?.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        if (!isGeminiConfigured()) {
            setError("AI chat is not configured. Please set the API key.");
            return;
        }

        const userMessage = { role: 'user', text: trimmed };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const history = messages.slice(1);
            const response = await sendChatMessage(trimmed, history);
            setMessages([...newMessages, { role: 'assistant', text: response }]);
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
            setMessages([...newMessages, {
                role: 'assistant',
                text: "Sorry, I'm having trouble connecting right now. Please try again in a moment."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const suggestions = [
        "Tell me about Blessing's skills",
        "What projects has she built?",
        "How can I contact her?"
    ];

    return (
        <>
            {/* Floating Chat Bubble Button */}
            <button
                className={`chat-bubble-btn ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close chat" : "Open AI chat"}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <div className="chat-avatar">
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <div className="chat-title">AI Assistant</div>
                                <div className="chat-subtitle">Ask me about Blessing</div>
                            </div>
                        </div>
                        <button
                            className="chat-close-btn"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chat-message ${msg.role}`}>
                                <div className="chat-bubble-text">{msg.text}</div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="chat-message assistant">
                                <div className="chat-bubble-text chat-loading">
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                </div>
                            </div>
                        )}

                        {error && !isLoading && (
                            <div className="chat-error">{error}</div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {messages.length === 1 && !isLoading && (
                        <div className="chat-suggestions">
                            {suggestions.map((s, idx) => (
                                <button
                                    key={idx}
                                    className="chat-suggestion-btn"
                                    onClick={() => {
                                        setInput(s);
                                    }}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    <form className="chat-input-form" onSubmit={handleSend}>
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="chat-send-btn"
                            disabled={isLoading || !input.trim()}
                            aria-label="Send message"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatBubble;
