"use client";
import { createClient } from "@supabase/supabase-js";

export default async function DecreesPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: decrees, error } = await supabase
    .from("weekly_decrees")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Weekly Decree</h1>
        <p>Unable to load decree right now.</p>
      </main>
    );
  }

  const decree = decrees?.[0];
async function saveFavorite(decreeId) {
  try {
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
  } catch (err) {
    alert("Something went wrong");
  }
}
  return (
    <main
      style={{
        padding: "30px",
        backgroundColor: "#0d1b2a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ color: "#ffeb3b", fontSize: "32px" }}>Weekly Decree</h1>

      {!decree ? (
        <p>No decree has been posted yet.</p>
      ) : (
        <section
          style={{
            marginTop: "25px",
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: "24px",
            borderRadius: "16px",
            maxWidth: "700px",
          }}
        >
          <h2 style={{ color: "#ffeb3b" }}>{decree.title}</h2>

          <p style={{ fontWeight: "bold" }}>{decree.scripture}</p>

          <p style={{ lineHeight: "1.7", whiteSpace: "pre-wrap" }}>
            {decree.decree_text}
          </p>
<button
  onClick={() => saveFavorite(decree.id)}
  style={{
    marginTop: "15px",
    backgroundColor: "#ffeb3b",
    color: "#0d1b2a",
    border: "none",
    borderRadius: "10px",
    padding: "10px 16px",
    cursor: "pointer",
    fontWeight: "bold"
  }}
>
  ❤️ Save Decree
</button>
          {decree.audio_url && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                borderRadius: "14px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <p
                style={{
                  color: "#ffeb3b",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                🔊 Listen to This Week’s Decree
              </p>

              <audio controls style={{ width: "100%" }}>
                <source src={decree.audio_url} />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
