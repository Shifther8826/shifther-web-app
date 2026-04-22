import { devotionals } from "@/app/data/devotionals";

export default function TodayDevotionalPage() {
  const todayIndex = new Date().getDate() % devotionals.length;
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
        <p style={{ color: "#ffeb3b", fontSize: "13px", letterSpacing: "2px" }}>
          TODAY’S DEVOTIONAL
        </p>

        <h1 style={{ color: "#ffeb3b" }}>{devotional.week}</h1>
        <h2 style={{ marginBottom: "10px" }}>{devotional.day}</h2>

        <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
          {devotional.scripture}
        </p>

        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          {devotional.content}
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "rgba(255,255,255,0.06)",
            borderRadius: "14px",
          }}
        >
          <p style={{ color: "#ffeb3b", fontSize: "13px" }}>
            WRITING PROMPT
          </p>
          <p>{devotional.prompt}</p>
        </div>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "30px",
            color: "white",
            textDecoration: "underline",
          }}
        >
          ← Back to Home
        </a>
      </section>
    </main>
  );
}
