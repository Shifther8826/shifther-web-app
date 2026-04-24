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
      {/* HEADER */}
      <section
        style={{
          background: "linear-gradient(135deg, #642a9d, #0d1b2a)",
          color: "white",
          padding: "60px 24px",
        }}
      >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
  <img
    src="/resources-header.jpg"
    alt="SHIFTHer Resources"
    style={{
      width: "100%",
      maxHeight: "240px",
      objectFit: "cover",
      borderRadius: "18px",
      marginBottom: "24px",
    }}
  />

  <p
    style={{
      fontSize: "12px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "#ffeb3b",
      marginBottom: "12px",
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
      fontSize: "18px",
      maxWidth: "650px",
      margin: "0 auto",
      lineHeight: "1.6",
    }}
  >
    Access tools, teachings, and guides designed to help you stay focused,
    grow in faith, and move forward with intention.
  </p>
</div>
      </section>

      {/* RESOURCE GRID */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >

          {/* RESOURCE 1 */}
          <div style={card}>
            <p style={label}>Free Download</p>
            <h2>Distraction Detox Worksheet</h2>
            <p>
              Identify what has been pulling your focus and begin resetting your
              attention with intention.
            </p>
            <a href="#" style={button}>Open Resource</a>
          </div>

          {/* RESOURCE 2 */}
          <div style={card}>
            <p style={label}>Teaching</p>
            <h2>Breaking Distractions</h2>
            <p>
              A short teaching to help you understand how distraction works and
              how to overcome it.
            </p>
            <a href="#" style={button}>Watch Teaching</a>
          </div>

          {/* RESOURCE 3 */}
          <div style={card}>
            <p style={label}>Workbook</p>
            <h2>Momentum Shift Guide</h2>
            <p>
              A guided workbook to help you move from pressure into
              transformation.
            </p>
            <a href="#" style={button}>Open Workbook</a>
          </div>

          {/* RESOURCE 4 */}
          <div style={card}>
            <p style={label}>Prayer Guide</p>
            <h2>Focused Prayer Guide</h2>
            <p>
              A simple guide to help you stay intentional in your prayer life
              and eliminate distractions.
            </p>
            <a href="#" style={button}>Open Guide</a>
          </div>

        </div>
      </section>
    </main>
  );
}

const card = {
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
};

const label = {
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#642a9d",
};

const button = {
  display: "inline-block",
  marginTop: "12px",
  backgroundColor: "#ffeb3b",
  color: "#0d1b2a",
  borderRadius: "10px",
  padding: "12px 16px",
  fontWeight: "bold",
  textDecoration: "none",
};
