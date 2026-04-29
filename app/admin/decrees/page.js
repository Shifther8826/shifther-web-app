"use client";

import { useState } from "react";

export default function DecreePage() {
  const [title, setTitle] = useState("");
  const [scripture, setScripture] = useState("");
  const [decree, setDecree] = useState("");
  const [audio, setAudio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/decrees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        scripture,
        decree_text: decree,
        audio_url: audio,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert("Error saving decree: " + result.error);
      return;
    }

    alert("Decree saved!");
    setTitle("");
    setScripture("");
    setDecree("");
    setAudio("");
  };

  return (
    <main
      style={{
        padding: "30px",
        backgroundColor: "#0d1b2a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <a href="/admin" style={{ color: "#ffeb3b" }}>
        ← Back to Admin
      </a>

      <h1 style={{ color: "#ffeb3b", marginTop: "20px" }}>
        Weekly Decree
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "15px",
          maxWidth: "700px",
          marginTop: "25px",
        }}
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Scripture"
          value={scripture}
          onChange={(e) => setScripture(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Write decree..."
          value={decree}
          onChange={(e) => setDecree(e.target.value)}
          rows="8"
          style={inputStyle}
        />

        <input
          placeholder="Audio URL"
          value={audio}
          onChange={(e) => setAudio(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Save Decree
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#ffeb3b",
  color: "#0d1b2a",
  border: "none",
  padding: "14px",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
};
