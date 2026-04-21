export default function Page() {
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
          background: "linear-gradient(135deg, #642a9d, #0d1b2a)",
          color: "white",
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#ffeb3b",
              marginBottom: "16px",
            }}
          >
            SHIFTHer
          </p>
          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.15",
              margin: "0 0 16px 0",
              maxWidth: "700px",
            }}
          >
            A place for women to grow in faith, healing, and purpose
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "700px",
              marginBottom: "28px",
            }}
          >
            Welcome to the SHIFTHer app. This is your space for encouragement,
            devotionals, events, prayer, and practical resources to help you move
            forward with intention.
          </p>
       <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
  <a
    href="/devotionals"
    style={{
      display: "inline-block",
      backgroundColor: "#ffeb3b",
      color: "#0d1b2a",
      borderRadius: "10px",
      padding: "14px 20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  ><div style={{ textAlign: "center", marginBottom: "20px" }}>
  <img
    src="/michelle.jpg"
    alt="Michelle"
    style={{
      width: "200px",
      borderRadius: "50%",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    }}
  />
</div>
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
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    Submit Prayer Request
  </a>

  <button
    style={{
      backgroundColor: "transparent",
      color: "white",
      border: "1px solid white",
      borderRadius: "10px",
      padding: "14px 20px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    View Upcoming Events
  </button>
</div>
        </div>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#642a9d", fontWeight: "bold", marginBottom: "8px" }}>
              Devotionals
            </p>
            <h3 style={{ marginTop: 0 }}>Grow consistently</h3>
            <p style={{ lineHeight: "1.6" }}>
              Read simple, powerful teachings that strengthen your walk and keep
              your heart focused.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#642a9d", fontWeight: "bold", marginBottom: "8px" }}>
              Events
            </p>
            <h3 style={{ marginTop: 0 }}>Stay connected</h3>
            <p style={{ lineHeight: "1.6" }}>
              Keep up with mentorship gatherings, SHIFTHer experiences, and
              important community updates.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#642a9d", fontWeight: "bold", marginBottom: "8px" }}>
              Prayer
            </p>
            <h3 style={{ marginTop: 0 }}>Seek covering</h3>
            <p style={{ lineHeight: "1.6" }}>
              Submit prayer requests and stay anchored in a community that knows
              the value of agreement and intercession.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#642a9d", fontWeight: "bold", marginBottom: "8px" }}>
              Resources
            </p>
            <h3 style={{ marginTop: 0 }}>Access support</h3>
            <p style={{ lineHeight: "1.6" }}>
              Find teachings, worksheets, and tools designed to help you move
              from pressure into transformation.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#642a9d",
              }}
            >
              Today’s Focus
            </p>
            <h2 style={{ marginTop: "10px" }}>James 4:8</h2>
            <p style={{ lineHeight: "1.7" }}>
              Draw near to God, and he will draw near to you.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              This week, let your focus be consistency over perfection. Every
              small step toward God matters.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#642a9d",
              }}
            >
              Coming Up
            </p>
            <h2 style={{ marginTop: "10px" }}>SHIFTHer Prayer Circle</h2>
            <p style={{ lineHeight: "1.7" }}>
              Wednesday at 5:00 AM
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Join us for prayer, encouragement, and strengthening as women who
              are committed to healing, identity, and purpose.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
