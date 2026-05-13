export default function ResourcesPage() {
  const launchDate = new Date(2026, 4, 1); // May 1
  const today = new Date();
  const isLive = today >= launchDate;

  if (!isLive) {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#fffef4",
        fontFamily: "Arial, sans-serif",
        color: "#0d1b2a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          backgroundColor: "white",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 12px 30px rgba(13,27,42,0.08)",
        }}
      >
        <p
          style={{
            color: "#642a9d",
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Coming May 1
        </p>

        <h1>Resources are almost ready.</h1>

        <p style={{ lineHeight: "1.7" }}>
          Your tools, worksheets, and guides will unlock on May 1.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            backgroundColor: "#ffeb3b",
            color: "#0d1b2a",
            borderRadius: "10px",
            padding: "12px 20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Back to Home
        </a>
      </div>
  </main>
);
}

return (
  <main>
    <section
        style={{
          position: "relative",
          height: "320px",
          overflow: "hidden",
        }}
      >
        <img
          src="/resources-header.jpg"
          alt="SHIFTHer Resources"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 75%",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(13,27,42,0.65) 0%, rgba(13,27,42,0.3) 100%)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            padding: "0 24px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#ffeb3b",
              marginBottom: "12px",
              fontWeight: "bold",
            }}
          >
            SHIFTHER
          </p>

          <h1
            style={{
              fontSize: "42px",
              margin: "0 0 12px 0",
              lineHeight: "1.2",
            }}
          >
            Resource Center
          </h1>

          <p
            style={{
              fontSize: "17px",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Access tools, teachings, and guides designed to help you reflect,
            refocus, and move forward with intention.
          </p>
        </div>
      </section>

    <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
      >
          <div style={card}>
  <div>
    <p style={label}>Start Here</p>
    <h2>How to Use the SHIFTHer App</h2>
    <p>
      A simple guide to help you understand the app, where to begin, and
      how to use each section with intention.
    </p>
  </div>
  <a href="/resources/how-to-use" style={button}>Open Guide →</a>
</div>
          <div style={card}>
  <div>
    <p style={label}>Focus Reset</p>
    <h2>7-Day Focus Reset</h2>
    <p>
      A 7-day reset to help you refocus your mind, quiet distractions,
      and return to intentional growth.
    </p>
  </div>
 <a href="/resources/focus-reset" style={button}>Start Reset →</a>
</div>

         <div style={card}>
  <div>
    <p style={label}>Worksheet</p>
    <h2>Discipline Protects Purpose Worksheet</h2>
    <p>
      A guided worksheet to help you build structure around your purpose,
      peace, progress, and obedience.
    </p>
  </div>
  <a href="/resources/discipline-purpose" style={button}>Open Worksheet →</a>
</div>

          <div style={card}>
  <div>
    <p style={label}>Prayer Guide</p>
    <h2>Prayer for Alignment</h2>
    <p>
      A focused prayer to help you realign your heart, thoughts, decisions,
      and steps with God’s will.
    </p>
  </div>
<a href="/resources/prayer-alignment" style={button}>Open Prayer →</a>
</div>
      <div style={card}>
  <div>
    <p style={label}>Scripture Guide</p>
    <h2>Identity in Christ Scripture Guide</h2>
    <p>
      A scripture guide to help you stand firm in who you are in Christ and
      reject every false identity.
    </p>
  </div>
 <a href="/resources/identity-in-christ" style={button}>Open Scriptures →</a>
</div>
        <div style={card}>
  <div>
        <div style={card}>
  <div>
    <p style={label}>Worksheet</p>

    <h2>BuildHER App Vision Worksheet™</h2>

    <p style={label}>Reflection Sheet</p>
    <h2>Mid-Year Reset Reflection Sheet</h2>
    <p>
      A guided reflection sheet to help you pause, evaluate, realign, and
      prepare for the next part of the year.
    </p>
  </div>
        
<a href="/resources/mid-year-reset" style={button}>Open Reflection →</a>
    <p>
      Clarify your app vision, audience, content, and experience before you begin building.
    </p>
  </div>

  <a
    href="https://drive.google.com/file/d/1Hnenl6_6ZiHS9rEDYZkXw2U0SuLCdvw7/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    style={button}
  >
    Download Worksheet →
  </a>
</div>
        </div>
        </div>
      </section>
    </main>
  );
}

const card = {
  backgroundColor: "white",
  borderRadius: "24px",
  padding: "30px",
  boxShadow: "0 14px 34px rgba(13,27,42,0.08)",
  border: "1px solid rgba(100,42,157,0.08)",
  minHeight: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const label = {
  fontSize: "11px",
  fontWeight: "bold",
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "#642a9d",
  marginBottom: "12px",
};

const button = {
  display: "inline-block",
  marginTop: "18px",
  backgroundColor: "#ffeb3b",
  color: "#0d1b2a",
  borderRadius: "10px",
  padding: "12px 18px",
  fontWeight: "bold",
  textDecoration: "none",
  width: "fit-content",
};
