import { devotionals } from "../../data/devotionals";

export default function TodayDevotionalPage() {
 const startDate = new Date("2026-05-01"); // adjust year if needed
const today = new Date();

const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const todayIndex =
  diffDays >= 0 ? diffDays % devotionals.length : 0;
  const devotional = devotionals[todayIndex];

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

        <h1
          style={{
            color: "#ffeb3b",
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          {devotional.week}
        </h1>

        <h2
          style={{
            fontSize: "22px",
            marginBottom: "10px",
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
            marginBottom: "10px",
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
