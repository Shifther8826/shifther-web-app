"use client";

import { useState } from "react";

export default function FavoriteButton({ decreeId }) {
  const [message, setMessage] = useState("");

  async function saveFavorite() {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ decree_id: decreeId }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Error saving favorite");
      return;
    }

    setMessage(data.message || "Saved ❤️");
  }

  return (
    <div style={{ marginTop: "15px" }}>
      <button
        onClick={saveFavorite}
        style={{
          backgroundColor: "#ffeb3b",
          color: "#0d1b2a",
          border: "none",
          borderRadius: "10px",
          padding: "10px 16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ❤️ Save Decree
      </button>

      {message && (
        <p style={{ color: "#ffeb3b", marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
}
