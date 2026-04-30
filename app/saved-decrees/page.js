import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

export default async function ImpactPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Community Impact</h1>
        <p>Please sign in to view impact.</p>
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
    .select("*")
    .lte("release_date", new Date().toISOString());

  const ranked =
    decrees
      ?.map((d) => ({
        ...d,
        saves: counts[d.id] || 0,
      }))
      .filter((d) => d.saves > 0)
      .sort((a, b) => b.saves - a.saves) || [];

  const topDecree = ranked[0];
  const totalSaves = ranked.reduce((sum, item) => sum + item.saves, 0);

  return (
    <main
      style={{
        padding: "30px",
        minHeight: "100vh",
        color: "white",
        backgroundImage:
          "linear-gradient(rgba(13, 27, 42, 0.9), rgba(13, 27, 42, 0.95)), url('/decree-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <a href="/decrees" style={{ color: "#ffeb3b" }}>
        ← Back to Weekly Decree
      </a>

      <h1 style={{ color: "#ffeb3b", fontSize: "34px", marginTop: "25px" }}>
        Community Impact
      </h1>

      <p style={{ maxWidth: "720px", lineHeight: "1.7" }}>
        See what the SHIFTHer community is leaning into, saving, and returning
        to for strength, focus, and faith.
      </p>

      <section
        style={{
          marginTop: "25px",
          display: "grid",
          gap: "18px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          maxWidth: "760px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(13, 27, 42, 0.82)",
            border: "1px solid rgba(255, 235, 59, 0.2)",
            borderRadius: "18px",
            padding: "22px",
          }}
        >
          <p style={{ color: "#ffeb3b", fontWeight: "bold" }}>Total Saves</p>
          <h2 style={{ fontSize: "38px", margin: 0 }}>💜 {totalSaves}</h2>
        </div>

        <div
          style={{
            backgroundColor: "rgba(13, 27, 42, 0.82)",
            border: "1px solid rgba(255, 235, 59, 0.2)",
            borderRadius: "18px",
            padding: "22px",
          }}
        >
          <p style={{ color: "#ffeb3b", fontWeight: "bold" }}>
            Decrees Impacting Women
          </p>
          <h2 style={{ fontSize: "38px", margin: 0 }}>{ranked.length}</h2>
        </div>
      </section>

      {!topDecree ? (
        <section
          style={{
            marginTop: "30px",
            backgroundColor: "rgba(13, 27, 42, 0.82)",
            padding: "28px",
            borderRadius: "20px",
            maxWidth: "760px",
          }}
        >
          <h2 style={{ color: "#ffeb3b" }}>No impact data yet</h2>
          <p>
            Once women begin saving decrees, the most impactful decrees will
            appear here.
          </p>
        </section>
      ) : (
        <>
          <section
            style={{
              marginTop: "35px",
              backgroundColor: "rgba(13, 27, 42, 0.86)",
              padding: "30px",
              borderRadius: "22px",
              maxWidth: "760px",
              border: "1px solid rgba(255, 235, 59, 0.3)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <p style={{ color: "#ffeb3b", fontWeight: "bold" }}>
              🔥 Most Impactful Decree
            </p>

            <h2 style={{ color: "#ffeb3b" }}>{topDecree.title}</h2>
            <p style={{ fontWeight: "bold" }}>{topDecree.scripture}</p>

            <p style={{ lineHeight: "1.7", whiteSpace: "pre-wrap" }}>
              {topDecree.decree_text}
            </p>

            <p style={{ color: "#ffeb3b", fontWeight: "bold" }}>
              💜 {topDecree.saves} saves
            </p>
          </section>

          <h2 style={{ color: "#ffeb3b", marginTop: "35px" }}>
            What’s Moving the Community
          </h2>

          <div style={{ display: "grid", gap: "18px", maxWidth: "760px" }}>
            {ranked.map((d) => (
              <section
                key={d.id}
                style={{
                  backgroundColor: "rgba(13, 27, 42, 0.78)",
                  padding: "22px",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <h3 style={{ color: "#ffeb3b", marginBottom: "6px" }}>
                  {d.title}
                </h3>

                <p style={{ marginTop: 0, fontWeight: "bold" }}>
                  {d.scripture}
                </p>

                <p style={{ color: "#ffeb3b", fontWeight: "bold" }}>
                  💜 {d.saves} saves
                </p>
              </section>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
