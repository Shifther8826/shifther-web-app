"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const RESOURCE_SLUG = "discipline-purpose";

export default function DisciplinePurposePage() {
  const { user, isLoaded } = useUser();

  const questions = [
    {
      section: "1",
      title: "What Discipline Is Protecting",
      description:
        "Discipline is not punishment. Discipline is protection. It protects what God has placed in you from distraction, inconsistency, and emotional decision-making.",
      prompts: [
        "What has God placed in my hands that needs protection?",
        "What part of my purpose has been exposed to inconsistency?",
        "What do I keep saying I want, but have not yet built structure around?",
      ],
    },
    {
      section: "2",
      title: "Where I Need Structure",
      description:
        "Structure helps your yes become visible. When there is no structure, desire often stays in the heart but never becomes movement.",
      prompts: [
        "Where do I need more structure in my daily life?",
        "What area feels scattered, delayed, or out of order?",
        "What simple rhythm would help me move forward this week?",
      ],
    },
    {
      section: "3",
      title: "Old Patterns I Must Stop Protecting",
      description:
        "You cannot keep asking for a new life while protecting old patterns. Some patterns must be confronted so transformation can continue.",
      prompts: [
        "What old pattern have I been making excuses for?",
        "What behavior keeps interrupting my progress?",
        "What do I need to stop protecting so I can grow?",
      ],
    },
    {
      section: "4",
      title: "One Discipline I Can Start This Week",
      description:
        "You do not have to change everything at once. Start with one discipline that is clear, realistic, and connected to your growth.",
      prompts: [
        "What is one discipline I can start this week?",
        "When will I do it?",
        "How will I know I followed through?",
      ],
    },
    {
      section: "5",
      title: "My Commitment Statement",
      description:
        "Write a simple commitment statement that gives language to your decision. Speak it aloud and return to it when your emotions shift.",
      prompts: [
        "What am I committing to protect?",
        "What discipline am I choosing to practice?",
        "What will this discipline produce in my life if I stay consistent?",
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadAnswers() {
      if (!isLoaded) return;

      if (!user) {
        setLoadingAnswers(false);
        return;
      }

      const { data, error } = await supabase
        .from("resource_reflections")
        .select("answers")
        .eq("user_id", user.id)
        .eq("resource_slug", RESOURCE_SLUG)
        .maybeSingle();

      if (error) {
        console.error("Error loading worksheet:", error);
        setStatusMessage("There was a problem loading your saved reflection.");
      }

      if (data?.answers) {
        setAnswers(data.answers);
      }

      setLoadingAnswers(false);
    }

    loadAnswers();
  }, [isLoaded, user]);

  function handleChange(prompt, value) {
    setAnswers((prev) => ({
      ...prev,
      [prompt]: value,
    }));
    setStatusMessage("");
  }

  async function saveAnswers() {
    if (!user) {
      setStatusMessage("Please sign in to save your reflection.");
      return;
    }

    setSaving(true);
    setStatusMessage("");

    const { error } = await supabase.from("resource_reflections").upsert(
      {
        user_id: user.id,
        resource_slug: RESOURCE_SLUG,
        answers,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,resource_slug",
      }
    );

    if (error) {
      console.error("Error saving worksheet:", error);
      setStatusMessage("Your reflection could not be saved. Please try again.");
    } else {
      setStatusMessage("Your reflection has been saved.");
    }

    setSaving(false);
  }

  async function clearAnswers() {
    setAnswers({});
    setStatusMessage("");

    if (!user) {
      setStatusMessage("Worksheet cleared on this screen.");
      return;
    }

    const { error } = await supabase
      .from("resource_reflections")
      .upsert(
        {
          user_id: user.id,
          resource_slug: RESOURCE_SLUG,
          answers: {},
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,resource_slug",
        }
      );

    if (error) {
      console.error("Error clearing worksheet:", error);
      setStatusMessage("There was a problem clearing your saved reflection.");
    } else {
      setStatusMessage("Your worksheet has been cleared.");
    }
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
      <section
        style={{
          maxWidth: "950px",
          margin: "0 auto",
        }}
      >
        <div style={mainCard}>
          <p style={label}>Interactive Worksheet</p>

          <h1
            style={{
              fontSize: "38px",
              lineHeight: "1.1",
              marginBottom: "18px",
            }}
          >
            Discipline Protects Purpose Worksheet
          </h1>

          <p style={introText}>
            Discipline protects your purpose, peace, progress, and obedience.
            Desire alone will not produce transformation. Discipline brings
            structure to what you say you want.
          </p>

          <p style={introText}>
            Use this worksheet slowly and honestly. Type your answers in the
            boxes below, then click save when you are finished.
          </p>

          {!user && isLoaded && (
            <div style={warningBox}>
              Please sign in to save your reflection to your SHIFTHer account.
            </div>
          )}
        </div>

        <div style={highlightBox}>
          <h2 style={yellowHeading}>Core Statement</h2>
          <p style={largeText}>
            Discipline is the bridge between what you desire and what you
            actually become.
          </p>
        </div>

        {loadingAnswers ? (
          <p style={introText}>Loading your worksheet...</p>
        ) : (
          questions.map((item) => (
            <WorksheetSection
              key={item.section}
              number={item.section}
              title={item.title}
              description={item.description}
              prompts={item.prompts}
              answers={answers}
              handleChange={handleChange}
            />
          ))
        )}

        <div style={highlightBox}>
          <h2 style={yellowHeading}>Declaration</h2>
          <p style={largeText}>
            I will not let my purpose go uncovered. I choose discipline,
            structure, obedience, and consistency. I will stop protecting old
            patterns and start building the rhythms that support my next level.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "24px",
            alignItems: "center",
          }}
        >
          <button onClick={saveAnswers} style={primaryButton} disabled={saving}>
            {saving ? "Saving..." : "Save My Reflection"}
          </button>

          <button onClick={clearAnswers} style={secondaryButton}>
            Clear Worksheet
          </button>

          <a href="/resources" style={backButton}>
            ← Back to Resource Center
          </a>
        </div>

        {statusMessage && (
          <p
            style={{
              marginTop: "18px",
              color: "#facc15",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {statusMessage}
          </p>
        )}

        <p
          style={{
            marginTop: "18px",
            color: "#d8c7ee",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          Your saved reflection is connected to your signed-in SHIFTHer account.
        </p>
      </section>
    </main>
  );
}

function WorksheetSection({
  number,
  title,
  description,
  prompts,
  answers,
  handleChange,
}) {
  return (
    <div style={worksheetCard}>
      <p style={label}>Section {number}</p>

      <h2
        style={{
          fontSize: "26px",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "17px",
          lineHeight: "1.7",
          color: "#f3e8ff",
          marginBottom: "18px",
        }}
      >
        {description}
      </p>

      {prompts.map((prompt) => (
        <div key={prompt} style={questionBox}>
          <label
            style={{
              display: "block",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#f8f5ff",
              marginBottom: "12px",
              fontWeight: "bold",
            }}
          >
            {prompt}
          </label>

          <textarea
            value={answers[prompt] || ""}
            onChange={(e) => handleChange(prompt, e.target.value)}
            placeholder="Write your reflection here..."
            style={textArea}
          />
        </div>
      ))}
    </div>
  );
}

const mainCard = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  marginBottom: "26px",
};

const worksheetCard = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "22px",
  padding: "28px",
  boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
  marginBottom: "24px",
};

const label = {
  color: "#facc15",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "8px",
};

const introText = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#f3e8ff",
  marginBottom: "18px",
};

const highlightBox = {
  background: "rgba(250, 204, 21, 0.12)",
  border: "1px solid rgba(250, 204, 21, 0.35)",
  borderRadius: "22px",
  padding: "28px",
  marginBottom: "24px",
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

const yellowHeading = {
  fontSize: "26px",
  color: "#facc15",
  marginBottom: "12px",
};

const largeText = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#f8f5ff",
};

const questionBox = {
  background: "rgba(255, 255, 255, 0.06)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "16px",
  padding: "18px",
  marginBottom: "14px",
};

const textArea = {
  width: "100%",
  minHeight: "120px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.25)",
  padding: "14px",
  fontSize: "16px",
  lineHeight: "1.6",
  resize: "vertical",
  backgroundColor: "rgba(255,255,255,0.95)",
  color: "#2d0f45",
  outline: "none",
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
  padding: "12px 22px",
  fontWeight: "bold",
  cursor: "pointer",
};

const backButton = {
  display: "inline-block",
  backgroundColor: "rgba(255,255,255,0.12)",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  borderRadius: "999px",
  padding: "12px 22px",
};
