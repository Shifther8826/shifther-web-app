import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

export default async function SavedDecreesPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Saved Decrees</h1>
        <p>Please sign in to view saved decrees.</p>
      </main>
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data: favorites } = await supabase
    .from("favorite_decrees")
    .select("decree_id");

  const counts = {};

  favorites?.forEach((f) => {
    counts[f.decree_id] = (counts[f.decree_id] || 0) + 1;
  });

  const { data: decrees } = await supabase
    .from("weekly_decrees")
    .select("*");

  const ranked =
    decrees
      ?.map((d) => ({
        ...d,
        saves: counts[d.id] || 0,
      }))
      .sort((a, b) => b.saves - a.saves) || [];

  return (
    <main
      style={{
        padding: "30px",
        backgroundColor: "#0d1b2a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <a href="/decrees" style={{ color: "#ffeb3b" }}>
        ← Back to Weekly Decree
      </a>

      <h1 style={{ color: "#ffeb3b", fontSize: "32px", marginTop: "20px" }}>
        Saved Decrees
      </h1>

      {ranked.length === 0 ? (
        <p>No decree engagement yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "20px", marginTop: "25px" }}>
          {ranked.map((d) => (
            <section
              key={d.id}
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.15)",
                maxWidth: "700px",
              }}
            >
              <h2 style={{ color: "#ffeb3b" }}>{d.title}</h2>
              <p style={{ fontWeight: "bold" }}>{d.scripture}</p>

              <p style={{ lineHeight: "1.7", whiteSpace: "pre-wrap" }}>
                {d.decree_text}
              </p>

              <p style={{ color: "#ffeb3b", fontWeight: "bold" }}>
                💜 {d.saves} saves
              </p>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
