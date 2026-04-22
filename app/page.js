export default function HomePage() {

  const focus = [
    "Make room for God today. Slow down and draw near.",
    "Guard your heart today. Be intentional about what you allow in.",
    "Stay consistent today. Small obedience leads to transformation.",
    "Trust God fully today. Release what you cannot control.",
    "Examine your heart today. What is God revealing to you?",
    "Surrender your plans today. Let God lead your steps.",
    "Give God your full attention today. Not just a moment, but your focus.",
  ];

  const today = new Date().getDay();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "900px",
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "50px 24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            color: "#ffeb3b",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "800",
            margin: "0 0 20px 0",
            lineHeight: "1.1",
          }}
        >
          Welcome to SHIFTHer
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "18px",
            lineHeight: "1.7",
            maxWidth: "700px",
            margin: "0 auto 30px auto",
          }}
        >
          Welcome to the SHIFTHer app. This is your space for encouragement,
          devotionals, events, prayer, and practical resources to help you move
          forward with intention.
        </p>
<div
  style={{
    margin: "0 auto 35px auto",
    display: "flex",
    justifyContent: "center",
  }}
>
  <img
    src="/michelle.jpg"
    alt="Michelle"
    style={{
      width: "240px",
      height: "240px",
      objectFit: "cover",
      borderRadius: "50%",
      border: "5px solid #ffeb3b",
      boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
    }}
  />
</div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <a
            href="/devotionals"
            style={{
              display: "inline-block",
              backgroundColor: "#ffeb3b",
              color: "#0d1b2a",
              borderRadius: "10px",
              padding: "14px 20px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Explore Devotionals
          </a>

          <a
            href="https://forms.gle/pNgSug4vDDtzsFXNA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#642a9d",
              color: "white",
              borderRadius: "10px",
              padding: "14px 20px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Submit Prayer Request
          </a>

          <a
            href="/events"
            style={{
              display: "inline-block",
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
              padding: "14px 20px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            View Upcoming Events
          </a>
        </div>

        <div
          style={{
            marginTop: "10px",
            padding: "20px",
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.06)",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            style={{
              color: "#ffeb3b",
              fontSize: "24px",
              margin: "0 0 10px 0",
            }}
          >
    <h2>Today’s Focus</h2>

<p style={{ color: "#ffeb3b", fontSize: "14px", marginBottom: "6px" }}>
  DAILY FOCUS
</p>

<p>
  {focus[today]}
</p>       
        </div>
      </section>
    </main>
  );
}
