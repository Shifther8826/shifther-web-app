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
    textAlign: "center",
  }}
>
  <h2
    style={{
      color: "#ffeb3b",
      fontSize: "24px",
      margin: "0 0 10px 0",
    }}
  >
    Today’s Focus
  </h2>

  <p
    style={{
      color: "#ffeb3b",
      fontSize: "13px",
      marginBottom: "8px",
      letterSpacing: "2px",
      opacity: 0.8,
    }}
  >
    DAILY FOCUS
  </p>

  <p
    style={{
      color: "white",
      fontSize: "16px",
      lineHeight: "1.6",
      margin: 0,
    }}
  >
    {focus[today]}
  </p>
</div>

{/* 👇 ADD NEW SECTION HERE */}

<div
  style={{
    marginTop: "24px",
    padding: "24px",
    borderRadius: "16px",
    backgroundColor: "rgba(255,255,255,0.06)",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  }}
>
  <h2
    style={{
      color: "#ffeb3b",
      fontSize: "24px",
      margin: "0 0 10px 0",
    }}
  >
    SHIFTHer 2026
  </h2>

  <p
    style={{
      color: "#ffeb3b",
      fontSize: "13px",
      marginBottom: "10px",
      letterSpacing: "2px",
      opacity: 0.8,
    }}
  >
    STAY CONNECTED
  </p>

  <p
    style={{
      color: "white",
      fontSize: "16px",
      lineHeight: "1.7",
      margin: "0 auto 20px auto",
      maxWidth: "600px",
    }}
  >
    SHIFTHer 2026 is coming. This is for the woman who wants to stay connected,
    hear what is next, and be the first to know when new details are released.
 </p>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  }}
>
  <img
    src="/shifther-2026-flyer.jpg"
    alt="SHIFTHer 2026 Flyer"
    style={{
      width: "100%",
      maxWidth: "420px",
      borderRadius: "14px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    }}
  />
</div>

<a
  href="https://forms.gle/xWpN5UGEktvpGQx29"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#ffeb3b",
      color: "#0d1b2a",
      borderRadius: "10px",
      padding: "14px 22px",
      fontWeight: "700",
      textDecoration: "none",
    }}
  >
    Get SHIFTHer 2026 Updates
  </a>
</div>

</section>
    </main>
  );
}
