"use client";

import { useEffect, useState } from "react";

export default function FavoriteButton({ decreeId }) {
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkSaved() {
      const res = await fetch(`/api/favorites?decree_id=${decreeId}`);
      const data = await res.json();

      setSaved(data.saved === true);
    }

    if (decreeId) {
      checkSaved();
    }
  }, [decreeId]);

  async function toggleFavorite() {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ decree_id: decreeId }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Error saving");
      return;
    }

    setSaved(data.saved === true);
    setMessage(data.message || "");
  }

  return (
    <div style={{ marginTop: "15px" }}>
      <button
        onClick={toggleFavorite}
        style={{
          backgroundColor: saved ? "#642a9d" : "#ffeb3b",
          color: saved ? "white" : "#0d1b2a",
          border: "none",
          borderRadius: "10px",
          padding: "10px 16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {saved ? "💜 Saved" : "❤️ Save Decree"}
      </button>

      {message && (
        <p style={{ color: "#ffeb3b", marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
}
