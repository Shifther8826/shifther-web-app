import { createClient } from "@supabase/supabase-js";
import FavoriteButton from "./FavoriteButton";

export default async function DecreesPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: decrees } = await supabase
    .from("weekly_decrees")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  const decree = decrees?.[0];

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

          <FavoriteButton decreeId={decree.id} />

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
