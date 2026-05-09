"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function BuilderPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to BuildHER Assistant™. Tell me what you are trying to build, or where you feel stuck, and we’ll take it one step at a time.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.reply || "I’m here. Let’s try that again.",
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Something went wrong. Try again in a moment.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#fffef4",
        fontFamily: "Arial, sans-serif",
        color: "#0d1b2a",
        padding: "40px 20px",
      }}
    >
      <SignedOut>
        <div style={box}>
          <h1>BuildHER Assistant™</h1>
          <p>Please sign in to access the app-building assistant.</p>
          <SignInButton mode="modal">
            <button style={button}>Sign In</button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <section style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <p style={label}>SHIFTHer BuildHER Lab</p>
            <h1>BuildHER Assistant™</h1>
            <p style={{ lineHeight: "1.7" }}>
              Ask questions, describe what you see, or tell me where you feel
              stuck. We’ll move one step at a time.
            </p>
          </div>

          <div style={chatBox}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  backgroundColor:
                    msg.role === "user" ? "#642a9d" : "white",
                  color: msg.role === "user" ? "white" : "#0d1b2a",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  marginBottom: "12px",
                  boxShadow: "0 6px 18px rgba(13,27,42,0.06)",
                }}
              >
                <strong>
                  {msg.role === "user" ? "You" : "BuildHER Assistant"}
                </strong>
                <p style={{ marginBottom: 0, lineHeight: "1.6" }}>
                  {msg.content}
                </p>
              </div>
            ))}

            {loading && <p>Thinking...</p>}
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me what you see or where you're stuck..."
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />

            <button onClick={sendMessage} style={button}>
              Send
            </button>
          </div>
        </section>
      </SignedIn>
    </main>
  );
}

const box = {
  maxWidth: "600px",
  margin: "80px auto",
  backgroundColor: "white",
  borderRadius: "24px",
  padding: "40px",
  textAlign: "center",
  boxShadow: "0 12px 30px rgba(13,27,42,0.08)",
};

const chatBox = {
  backgroundColor: "rgba(255,255,255,0.65)",
  borderRadius: "24px",
  padding: "24px",
  minHeight: "420px",
  boxShadow: "0 12px 30px rgba(13,27,42,0.08)",
};

const label = {
  color: "#642a9d",
  fontWeight: "bold",
  letterSpacing: "2px",
  textTransform: "uppercase",
};

const button = {
  backgroundColor: "#ffeb3b",
  color: "#0d1b2a",
  border: "none",
  borderRadius: "10px",
  padding: "14px 20px",
  fontWeight: "bold",
  cursor: "pointer",
};
