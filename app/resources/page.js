export default function ResourcesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#fffef4",
        fontFamily: "Arial, sans-serif",
        color: "#0d1b2a",
      }}
    >
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
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13, 27, 42, 0.62)",
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
            Access tools, teachings, and guides designed to help you stay focused,
            grow in faith, and move forward with intention.
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
            <p style={label}>Free Download</p>
            <h2>Distraction Detox Worksheet</h2>
            <p>
              Identify what has been pulling your focus and begin resetting your
              attention with intention.
            </p>
            <a href="#" style={button}>Open Resource →</a>
          </div>

          <div style={card}>
            <p style={label}>Teaching</p>
            <h2>Breaking Distractions</h2>
            <p>
              A short teaching to help you understand how distraction works and
              how to overcome it.
            </p>
            <a href="#" style={button}>Watch Teaching →</a>
          </div>

          <div style={card}>
            <p style={label}>Workbook</p>
            <h2>Momentum Shift Guide</h2>
            <p>
              A guided workbook to help you move from pressure into
              transformation.
            </p>
            <a href="#" style={button}>Open Workbook →</a>
          </div>

          <div style={card}>
            <p style={label}>Prayer Guide</p>
            <h2>Focused Prayer Guide</h2>
            <p>
              A simple guide to help you stay intentional in your prayer life
              and eliminate distractions.
            </p>
            <a href="#" style={button}>Open Guide →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const card = {
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "28px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
};

const label = {
  fontSize: "11px",
  fontWeight: "bold",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#642a9d",
};

const button = {
  display: "inline-block",
  marginTop: "10px",
  backgroundColor: "#ffeb3b",
  color: "#0d1b2a",
  borderRadius: "8px",
  padding: "10px 16px",
  fontWeight: "bold",
  textDecoration: "none",
};
