"use client";

import Link from "next/link";
import { devotionals } from "../data/devotionals";

export default function DevotionalArchivePage() {
  const today = new Date();

  const unlockedDevotionals = devotionals.filter((devotional, index) => {
  const devotionalMonth = devotional.month || 5;
  const devotionalYear = devotional.year || 2026;

  const devotionalDay =
    typeof devotional.day === "number" ? devotional.day : index + 1;

  const devotionalDate = new Date(
    devotionalYear,
    devotionalMonth - 1,
    devotionalDay
  );

  return devotionalDate <= today;
});

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#142133",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#ffeb3b",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Devotional Archive
        </p>

        <h1
          style={{
            fontSize: "38px",
            color: "#ffeb3b",
            marginBottom: "10px",
          }}
        >
          Revisit the Journey
        </h1>

        <p
          style={{
            color: "#d1d5db",
            lineHeight: "1.7",
            marginBottom: "30px",
          }}
        >
          Go back and reflect on the devotionals that have already unlocked.
          Every day carries something worth revisiting, praying through, and
          applying again.
        </p>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {unlockedDevotionals.map((devotional, index) => (
            <article
              key={`${devotional.year || 2026}-${devotional.month || 5}-${
                devotional.day
              }-${index}`}
              style={{
                backgroundColor: "#243247",
                borderRadius: "14px",
                padding: "22px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
              }}
            >
              <p
                style={{
                  color: "#ffeb3b",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                {devotional.week}
              </p>

              <h2
                style={{
                  fontSize: "22px",
                  marginBottom: "8px",
                }}
              >
                {typeof devotional.day === "number"
  ? `Day ${devotional.day} — ${devotional.scripture}`
  : devotional.day}
              </h2>

              <p
                style={{
                  fontStyle: "italic",
                  color: "#e5e7eb",
                  marginBottom: "16px",
                }}
              >
                {devotional.verse}
              </p>

              <h3
                style={{
                  color: "#ffeb3b",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Reflection
              </h3>

              <p
                style={{
                  color: "#f3f4f6",
                  lineHeight: "1.7",
                  marginBottom: "18px",
                }}
              >
                {devotional.reflection}
              </p>

              <div
                style={{
                  backgroundColor: "#334155",
                  borderRadius: "12px",
                  padding: "16px",
                  marginBottom: "14px",
                }}
              >
                <h3
                  style={{
                    color: "#ffeb3b",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Heart Work
                </h3>
                <p style={{ margin: 0, color: "#f9fafb" }}>
                  {devotional.heartWork}
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#334155",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <h3
                  style={{
                    color: "#ffeb3b",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Prayer Focus
                </h3>
                <p style={{ margin: 0, color: "#f9fafb" }}>
                  {devotional.prayerFocus}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/devotionals/today"
            style={{
              backgroundColor: "#6b21a8",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              padding: "12px 18px",
              fontWeight: "700",
              display: "inline-block",
            }}
          >
            Back to Today’s Devotional
          </Link>

          <Link
            href="/"
            style={{
              backgroundColor: "#374151",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              padding: "12px 18px",
              fontWeight: "700",
              display: "inline-block",
            }}
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
