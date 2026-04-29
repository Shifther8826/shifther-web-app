import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

export default async function SavedDecreesPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Saved Decrees</h1>
        <p>Please sign in to view your saved decrees.</p>
      </main>
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data: favorites, error } = await supabase
    .from("favorite_decrees")
    .select(`
      id,
      created_at,
      weekly_decrees (
        id,
        title,
        scripture,
        decree_text,
        audio_url,
        created_at
      )
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Saved Decrees</h1>
        <p>Unable to load saved decrees right now.</p>
      </main>
    );
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
      <h1 style={{ color: "#ffeb3b" }}>Saved Decrees</h1>

      {!favorites || favorites.length === 0 ? (
        <p>You have not saved any decrees yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "20px", marginTop: "25px" }}>
          {favorites.map((favorite) => {
            const decree = favorite.weekly_decrees;

            return (
              <section
                key={favorite.id}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  padding: "22px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <h2 style={{ color: "#ffeb3b" }}>{decree?.title}</h2>
                <p style={{ fontWeight: "bold" }}>{decree?.scripture}</p>
                <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.7" }}>
                  {decree?.decree_text}
                </p>

                {decree?.audio_url && (
                  <audio controls style={{ width: "100%", marginTop: "15px" }}>
                    <source src={decree.audio_url} />
                    Your browser does not support audio.
                  </audio>
                )}
              </section>
            );
          })}
        </div>
      )}
    </main>
  );
}
