"use client";

import { useEffect, useState } from "react";
import { devotionals } from "../../data/devotionals";

export default function TodayDevotionalPage() {
  const todayIndex = 0; 
  const devotional = devotionals[todayIndex];

  const today = new Date();
  const dateLabel = today.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});
const mayDayNumber = today.getDate();
  
  const journalKey = `journal-day-${todayIndex + 1}`;
  const completeKey = `complete-day-${todayIndex + 1}`;
  const streakKey = "devotional-streak";
  const lastCompletedKey = "last-completed-day";

  const [journalText, setJournalText] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedJournal = localStorage.getItem(journalKey);
    const savedComplete = localStorage.getItem(completeKey);
    const savedStreak = localStorage.getItem(streakKey);

    if (savedJournal) {
      setJournalText(savedJournal);
    }

    if (savedComplete === "true") {
      setIsComplete(true);
    }

    if (savedStreak) {
      setStreak(Number(savedStreak));
    }
  }, [journalKey, completeKey]);

  const handleSaveJournal = () => {
    localStorage.setItem(journalKey, journalText);
    setSavedMessage("Journal saved.");

    setTimeout(() => {
      setSavedMessage("");
    }, 2000);
  };

  const handleMarkComplete = () => {
    if (isComplete) return;

    const lastCompleted = localStorage.getItem(lastCompletedKey);
    const currentDay = todayIndex + 1;

    let newStreak = 1;

    if (lastCompleted) {
      const previousDay = Number(lastCompleted);

      if (previousDay === currentDay - 1) {
        newStreak = streak + 1;
      } else if (previousDay === currentDay) {
        newStreak = streak;
      }
    }

    localStorage.setItem(completeKey, "true");
    localStorage.setItem(lastCompletedKey, String(currentDay));
    localStorage.setItem(streakKey, String(newStreak));

    setIsComplete(true);
    setStreak(newStreak);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "32px",
          color: "white",
          boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p
          style={{
            color: "#ffeb3b",
            fontSize: "13px",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          TODAY’S DEVOTIONAL
        </p>

        <p
          style={{
            color: "#d9d9d9",
            fontSize: "14px",
            marginBottom: "8px",
          }}
        >
          {dateLabel}
        </p>

        <p
          style={{
            color: "#d9d9d9",
            fontSize: "14px",
            marginBottom: "12px",
          }}
        >
          May Day {mayDayNumber} • Day {todayIndex + 1} of {devotionals.length}
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              padding: "10px 14px",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            Streak: {streak} day{streak === 1 ? "" : "s"}
          </div>

          <div
            style={{
              backgroundColor: isComplete
                ? "rgba(255,235,59,0.15)"
                : "rgba(255,255,255,0.06)",
              color: isComplete ? "#ffeb3b" : "white",
              padding: "10px 14px",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            {isComplete ? "Completed Today" : "Not Completed Yet"}
          </div>
        </div>

        <h1
          style={{
            color: "#ffeb3b",
            fontSize: "30px",
            marginBottom: "10px",
            lineHeight: "1.3",
          }}
        >
          {devotional.week}
        </h1>

        <h2
          style={{
            fontSize: "22px",
            marginBottom: "10px",
            lineHeight: "1.4",
          }}
        >
          {devotional.day}
        </h2>

        <p
          style={{
            fontStyle: "italic",
            color: "#d9d9d9",
            marginBottom: "24px",
            lineHeight: "1.7",
          }}
        >
          {devotional.scripture}
        </p>

        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              color: "#ffeb3b",
              fontSize: "13px",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            REFLECTION
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.9",
              margin: 0,
            }}
          >
            {devotional.reflection}
          </p>
        </div>

        <div
          style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "rgba(255,255,255,0.06)",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              color: "#ffeb3b",
              fontSize: "13px",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            HEART WORK
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {devotional.heartWork}
          </p>
        </div>

        <div
          style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "rgba(255,255,255,0.06)",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              color: "#ffeb3b",
              fontSize: "13px",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            PRAYER FOCUS
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {devotional.prayerFocus}
          </p>
        </div>

        <div
          style={{
            marginBottom: "24px",
            padding: "20px",
            backgroundColor: "rgba(255,255,255,0.06)",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              color: "#ffeb3b",
              fontSize: "13px",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            JOURNAL
          </p>

          <textarea
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            placeholder="Write what God is showing you..."
            style={{
              width: "100%",
              minHeight: "140px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "12px",
              fontSize: "14px",
              lineHeight: "1.6",
              backgroundColor: "rgba(255,255,255,0.04)",
              color: "white",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "14px",
            }}
          >
            <button
              onClick={handleSaveJournal}
              style={{
                backgroundColor: "#ffeb3b",
                color: "#0d1b2a",
                padding: "12px 18px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Save Journal
            </button>

            <button
              onClick={handleMarkComplete}
              disabled={isComplete}
              style={{
                backgroundColor: isComplete ? "#6b7280" : "#642a9d",
                color: "white",
                padding: "12px 18px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "700",
                cursor: isComplete ? "default" : "pointer",
              }}
            >
              {isComplete ? "Completed" : "Mark as Complete"}
            </button>
          </div>

          {savedMessage && (
            <p
              style={{
                marginTop: "12px",
                color: "#ffeb3b",
                fontSize: "14px",
              }}
            >
              {savedMessage}
            </p>
          )}
        </div>

        <div style={{ marginTop: "30px" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              color: "white",
              textDecoration: "underline",
              marginRight: "16px",
            }}
          >
            ← Back to Home
          </a>

          <a
            href="/devotionals/today"
            style={{
              display: "inline-block",
              backgroundColor: "#642a9d",
              color: "white",
              padding: "12px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Continue the Journey →
          </a>
        </div>
      </section>
    </main>
  );
}
