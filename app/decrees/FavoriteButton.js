"use client";

export default function FavoriteButton({ decreeId }) {
  async function saveFavorite() {
    alert("button clicked");
    
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ decree_id: decreeId }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("Error saving favorite: " + data.error);
      return;
    }

    alert("Saved ❤️");
  }

  return (
    <button
      onClick={saveFavorite}
      style={{
        marginTop: "15px",
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
  );
}
