"use client";

import { useEffect, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const curatedScriptures = [
  {
    topic: "Focus",
    reference: "Hebrews 12:2",
    text:
      "Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
    prompt:
      "What has been pulling your eyes away from Jesus, and what would it look like to return your focus today?",
  },
  {
    topic: "Focus",
    reference: "Isaiah 26:3",
    text:
      "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.",
    prompt:
      "Where does your mind need to be stayed on God instead of circumstances?",
  },
  {
    topic: "Discipline",
    reference: "1 Corinthians 9:27",
    text:
      "But I keep under my body, and bring it into subjection: lest that by any means, when I have preached to others, I myself should be a castaway.",
    prompt:
      "What area of your life needs discipline so your purpose can remain protected?",
  },
  {
    topic: "Identity",
    reference: "2 Corinthians 5:17",
    text:
      "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    prompt:
      "What old label do you need to stop carrying because you are now in Christ?",
  },
  {
    topic: "Peace",
    reference: "Philippians 4:7",
    text:
      "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
    prompt:
      "Where do you need the peace of God to guard your heart and mind?",
  },
  {
    topic: "Purpose",
    reference: "Proverbs 3:5-6",
    text:
      "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
    prompt:
      "What decision or direction do you need to acknowledge God in right now?",
  },
  {
    topic: "Obedience",
    reference: "John 14:15",
    text: "If ye love me, keep my commandments.",
    prompt: "What instruction from God do you need to obey without delay?",
  },
  {
    topic: "Strength",
    reference: "Philippians 4:13",
    text: "I can do all things through Christ which strengtheneth me.",
    prompt:
      "Where do you need to stop relying on your own strength and receive strength from Christ?",
  },
];

export default function BiblePage() {
  const { user, isLoaded } = useUser();

  const [search, setSearch] = useState("");
  const [lookupReference, setLookupReference] = useState("");
  const [selectedVerse, setSelectedVerse] = useState(curatedScriptures[0]);
  const [savedVerses, setSavedVerses] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [lookupMessage, setLookupMessage] = useState("");
  const [loadingLookup, setLoadingLookup] = useState(false);

  const filteredScriptures = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return curatedScriptures;

    return curatedScriptures.filter((item) => {
      return (
        item.topic.toLowerCase().includes(query) ||
        item.reference.toLowerCase().includes(query) ||
        item.text.toLowerCase().includes(query)
      );
    });
  }, [search]);

  useEffect(() => {
    async function loadSavedVerses() {
      if (!isLoaded || !user) return;

      const { data, error } = await supabase
        .from("saved_scriptures")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading saved scriptures:", error);
        return;
      }

      setSavedVerses(data || []);
    }

    loadSavedVerses();
  }, [isLoaded, user]);

  async function lookupBibleReference() {
    const reference = lookupReference.trim();

    if (!reference) {
      setLookupMessage("Type a scripture reference first.");
      return;
    }

    setLoadingLookup(true);
    setLookupMessage("");
    setStatusMessage("");

    try {
      const response = await fetch(
        `https://bible-api.com/${encodeURIComponent(
          reference
        )}?translation=kjv`
      );

      const data = await response.json();

      if (!response.ok || data.error) {
        setLookupMessage(
          "I could not find that scripture. Try a format like John 3:16 or Psalm 23."
        );
        setLoadingLookup(false);
        return;
      }

      const lookedUpVerse = {
        topic: "Bible Lookup",
        reference: data.reference,
        text: data.text.trim(),
        prompt:
          "What is God highlighting to you through this scripture, and how can you apply it today?",
      };

      setSelectedVerse(lookedUpVerse);
      setLookupMessage("Scripture loaded.");
    } catch (error) {
      console.error("Bible lookup error:", error);
      setLookupMessage("There was a problem looking up that scripture.");
    }

    setLoadingLookup(false);
  }

  async function saveVerse() {
    if (!user) {
      setStatusMessage("Please sign in to save this scripture.");
      return;
    }

    const { error } = await supabase.from("saved_scriptures").upsert(
      {
        user_id: user.id,
        verse_reference: selectedVerse.reference,
        verse_text: selectedVerse.text,
        topic: selectedVerse.topic,
        reflection_prompt: selectedVerse.prompt,
      },
      {
        onConflict: "user_id,verse_reference",
      }
    );

    if (error) {
      console.error("Error saving scripture:", error);
      setStatusMessage("This scripture could not be saved. Please try again.");
      return;
    }

    setStatusMessage("Scripture saved.");

    const { data } = await supabase
      .from("saved_scriptures")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    setSavedVerses(data || []);
  }

  async function removeSavedVerse(id) {
    if (!user) return;

    const { error } = await supabase
      .from("saved_scriptures")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      console.error("Error removing scripture:", error);
      setStatusMessage("This scripture could not be removed.");
      return;
    }

    setSavedVerses((prev) => prev.filter((item) => item.id !== id));
    setStatusMessage("Scripture removed.");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #2d0f45 0%, #14051f 100%)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={heroCard}>
          <p style={label}>Bible Study</p>

          <h1 style={title}>Bible Lookup & Reflection</h1>

          <p style={introText}>
            Look up a scripture, save verses to your SHIFTHer account, and use
            the reflection prompt to help you apply the Word with intention.
          </p>

          {!user && isLoaded && (
            <div style={warningBox}>
              Please sign in to save scriptures to your account.
            </div>
          )}
        </div>

        <div style={lookupCard}>
          <h2 style={yellowHeading}>Look Up Any Scripture</h2>

          <p style={introText}>
            Type a reference like John 3:16, Psalm 23, Romans 8:1, or Genesis
            1:1.
          </p>

          <div style={lookupRow}>
            <input
              type="text"
              value={lookupReference}
              onChange={(e) => setLookupReference(e.target.value)}
              placeholder="Example: John 3:16"
              style={searchInput}
            />

            <button
              onClick={lookupBibleReference}
              style={primaryButton}
              disabled={loadingLookup}
            >
              {loadingLookup ? "Looking..." : "Look Up"}
            </button>
          </div>

          {lookupMessage && <p style={statusStyle}>{lookupMessage}</p>}
        </div>

        <div style={grid}>
          <div style={card}>
            <h2 style={yellowHeading}>SHIFTHer Scripture Library</h2>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search focus, identity, peace, discipline..."
              style={searchInput}
            />

            <div style={{ marginTop: "18px" }}>
              {filteredScriptures.map((item) => (
                <button
                  key={item.reference}
                  onClick={() => {
                    setSelectedVerse(item);
                    setStatusMessage("");
                    setLookupMessage("");
                  }}
                  style={{
                    ...verseButton,
                    border:
                      selectedVerse.reference === item.reference
                        ? "1px solid #facc15"
                        : "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <span style={{ color: "#facc15", fontWeight: "bold" }}>
                    {item.reference}
                  </span>
                  <br />
                  <span>{item.topic}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={card}>
            <p style={label}>{selectedVerse.topic}</p>

            <h2 style={yellowHeading}>{selectedVerse.reference}</h2>

            <p style={scriptureText}>“{selectedVerse.text}”</p>

            <div style={reflectionBox}>
              <h3 style={{ color: "#facc15", marginBottom: "10px" }}>
                Reflection Prompt
              </h3>
              <p style={reflectionText}>{selectedVerse.prompt}</p>
            </div>

            <button onClick={saveVerse} style={primaryButton}>
              Save Scripture
            </button>

            {statusMessage && <p style={statusStyle}>{statusMessage}</p>}
          </div>
        </div>

        <div style={savedCard}>
          <h2 style={yellowHeading}>My Saved Scriptures</h2>

          {!user ? (
            <p style={introText}>Sign in to see scriptures you have saved.</p>
          ) : savedVerses.length === 0 ? (
            <p style={introText}>You have not saved any scriptures yet.</p>
          ) : (
            <div style={{ display: "grid", gap: "16px" }}>
              {savedVerses.map((item) => (
                <div key={item.id} style={savedVerseBox}>
                  <p style={label}>{item.topic}</p>
                  <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                    {item.verse_reference}
                  </h3>
                  <p style={scriptureText}>“{item.verse_text}”</p>
                  <p style={reflectionText}>
                    <strong>Reflection:</strong> {item.reflection_prompt}
                  </p>

                  <button
                    onClick={() => removeSavedVerse(item.id)}
                    style={secondaryButton}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <a href="/" style={backButton}>
          ← Back Home
        </a>
      </section>
    </main>
  );
}

const heroCard = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  marginBottom: "26px",
  textAlign: "center",
};

const lookupCard = {
  background: "rgba(250, 204, 21, 0.12)",
  border: "1px solid rgba(250, 204, 21, 0.35)",
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  marginBottom: "26px",
};

const card = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
};

const savedCard = {
  ...card,
  marginTop: "26px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px",
};

const lookupRow = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  marginTop: "18px",
  alignItems: "center",
};

const label = {
  color: "#facc15",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "10px",
};

const title = {
  fontSize: "42px",
  lineHeight: "1.1",
  marginBottom: "16px",
};

const introText = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#f3e8ff",
};

const yellowHeading = {
  fontSize: "26px",
  color: "#facc15",
  marginBottom: "16px",
};

const searchInput = {
  flex: "1",
  minWidth: "240px",
  width: "100%",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.25)",
  padding: "14px",
  fontSize: "16px",
  backgroundColor: "rgba(255,255,255,0.95)",
  color: "#2d0f45",
  outline: "none",
};

const verseButton = {
  width: "100%",
  textAlign: "left",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  borderRadius: "16px",
  padding: "14px",
  marginBottom: "12px",
  cursor: "pointer",
};

const scriptureText = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#f8f5ff",
  marginBottom: "18px",
  fontStyle: "italic",
  whiteSpace: "pre-line",
};

const reflectionBox = {
  background: "rgba(250, 204, 21, 0.12)",
  border: "1px solid rgba(250, 204, 21, 0.35)",
  borderRadius: "18px",
  padding: "20px",
  marginBottom: "20px",
};

const reflectionText = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#f8f5ff",
};

const primaryButton = {
  backgroundColor: "#facc15",
  color: "#2d0f45",
  border: "none",
  borderRadius: "999px",
  padding: "12px 22px",
  fontWeight: "bold",
  cursor: "pointer",
};

const secondaryButton = {
  backgroundColor: "transparent",
  color: "#facc15",
  border: "1px solid #facc15",
  borderRadius: "999px",
  padding: "10px 18px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "14px",
};

const warningBox = {
  background: "rgba(250, 204, 21, 0.12)",
  border: "1px solid rgba(250, 204, 21, 0.35)",
  borderRadius: "16px",
  padding: "16px",
  marginTop: "18px",
  color: "#facc15",
  fontWeight: "bold",
};

const savedVerseBox = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "18px",
  padding: "20px",
};

const statusStyle = {
  marginTop: "16px",
  color: "#facc15",
  fontWeight: "bold",
};

const backButton = {
  display: "inline-block",
  marginTop: "28px",
  backgroundColor: "rgba(255,255,255,0.12)",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  borderRadius: "999px",
  padding: "12px 22px",
};
